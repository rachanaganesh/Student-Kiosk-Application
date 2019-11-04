<?php

require '../../feedback_include.conf';
require 'lib/src/DBHandler.php';

function json_response($code = 200, $message = null)
{
    header_remove();
    http_response_code($code);
    header("Cache-Control: no-transform,public,max-age=300,s-maxage=900");
    header('Content-Type: application/json');
    $status = array(
        200 => '200 OK',
        400 => '400 Bad Request',
        422 => 'Unprocessable Entity',
        500 => '500 Internal Server Error'
        );
    header('Status: '.$status[$code]);
    return json_encode(array(
        'status' => $code < 300, // success or not?
        'message' => $message
    ));
}

try {
    $connection = new DBHandler($host, $dbname, $username, $password);

    if ($_SERVER['REQUEST_METHOD'] === 'PUT') {
        parse_str(file_get_contents("php://input"),$params);

        if(empty($params)) {
            echo json_response(400, 'No params found.');
            return;
        }

        if(!isset($params['id']) || !isset($params['notes']) || !isset($params['status'])) {
            echo json_response(200, 'A parameter is missing.');
            return;
        }

        // save notes and status to id
        saveStaffFeedback($connection, $tb_feedback_notes_status, $params);
        
        echo json_response(200, 'Successfully saved.');
        return;
    }

    if ($_SERVER['REQUEST_METHOD'] === 'GET') {
        $allEntries = array();
        $filter = htmlspecialchars($_GET["filter"]);
        
        $rsSubmissions = getRsSubmissions($connection, $tb_rsform_submissions, $tb_feedback_notes_status, $filter);
        $rsSubmissionValues = getRsSubmissionValues($connection, $tb_rsform_submission_values);
        $allEntries = buildEntries($rsSubmissions, $rsSubmissionValues);
    
        $usuSubmissions = getUsuSubmissions($connection, $tb_usu_feedback, $tb_feedback_notes_status, $filter);
        $allEntries = addUsuEntries($allEntries, $usuSubmissions);
    
        echo json_encode (array_values($allEntries));
    }
}
 catch (PDOException $e) {
    http_response_code(400);
    echo "Error: " . $e->getMessage();
} finally {
    $connection->closeConnection();
}

function saveStaffFeedback($connection, $tb_feedback_notes_status, $params) {
    $connection->execute(
        "INSERT INTO asicsu5_misc.$tb_feedback_notes_status
        (id, source, notes, status)
        values(:id, :source, :notes, :status)
        ON DUPLICATE KEY 
        UPDATE source=:source, notes=:notes, status=:status",
        $params
    );
}

function addUsuEntries($allEntries, $usuSubmissions) {
    $counter = 0;
    while($counter< count($usuSubmissions)) {
        array_push($allEntries, $usuSubmissions[$counter]);
        $counter++;
    }

    return $allEntries;
}

function buildEntries($rsSubmissions, $rsSubmissionValues) {
    $allEntries = array();
    foreach($rsSubmissions as $submission) {
        $entry = array();
        $id = $submission["SubmissionId"];
       
        $submissionValues = array_filter($rsSubmissionValues, function($element) use($id) {
            if (isset($element["SubmissionId"]) && $element["SubmissionId"] == $id) {
                return TRUE;
            }
        
            return FALSE;
        });
        
        foreach($submissionValues as $submissionValue) {
            $entry[$submissionValue["FieldName"]] = $submissionValue["FieldValue"];
        }

        $entry["id"] = $id;
        $entry["submissionId"] = $id;
        $entry["submittedOn"] = $submission["DateSubmitted"];
        $entry["status"] = $submission["status"];
        $entry["notes"] = $submission["notes"];

        array_push($allEntries, $entry);
    }

    return $allEntries;
}

function getRsSubmissionValues($connection, $tb_rsform_submission_values) {
    return $connection->executeAndFetch(
        "SELECT si1.*
        FROM asicsu5_corporate.$tb_rsform_submission_values as si1
        WHERE si1.formId = '11'
        ORDER BY si1.SubmissionId;"
    );
}

function getRsSubmissions($connection, $tb_rsform_submissions, $tb_feedback_notes_status, $filter) {
    if ($filter === "all") {
        return $connection->executeAndFetch(
            "SELECT si1.SubmissionId, si1.DateSubmitted, fns.status, fns.notes
            FROM asicsu5_corporate.$tb_rsform_submissions as si1
            LEFT JOIN asicsu5_misc.$tb_feedback_notes_status as fns
            ON fns.source = 'rs'
            AND fns.id = si1.SubmissionId
            WHERE si1.formId = '11'
            ORDER BY si1.DateSubmitted DESC;"
        );
    }

    return $connection->executeAndFetch(
        "SELECT si1.SubmissionId, si1.DateSubmitted, fns.status, fns.notes
        FROM asicsu5_corporate.$tb_rsform_submissions as si1
        LEFT JOIN asicsu5_misc.$tb_feedback_notes_status as fns
        ON fns.source = 'rs'
        AND fns.id = si1.SubmissionId
        WHERE si1.formId = '11' and DateSubmitted >= :filter
        ORDER BY si1.DateSubmitted DESC;",
        toPDOParameterArray($filter)
    );
}

function getUsuSubmissions($connection, $tb_usu_feedback, $tb_feedback_notes_status, $filter) {
    if ($filter === "all") {
        return $connection->executeAndFetch(
            "SELECT usu.*, fns.notes, fns.status 
            FROM $tb_usu_feedback as usu
            LEFT JOIN $tb_feedback_notes_status as fns
            ON fns.source = 'usu'
            AND fns.id = usu.id
            ORDER BY usu.submittedOn DESC;"
        );
    }

    return $connection->executeAndFetch(
        "SELECT usu.*, fns.notes, fns.status 
        FROM $tb_usu_feedback as usu
        LEFT JOIN $tb_feedback_notes_status as fns
        ON fns.source = 'usu'
        AND fns.id = usu.id
        WHERE usu.submittedOn >= :filter
        ORDER BY usu.submittedOn DESC;",
        toPDOParameterArray($filter)
    );
}

function toPDOParameterArray($param) {
    return array(":filter" => $param);
}
?>