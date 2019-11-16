<?php

use PHPMailer\PHPMailer\Exception;

use PHPMailer\PHPMailer\PHPMailer;



require 'lib/src/Exception.php';

require 'lib/src/PHPMailer.php';

require 'lib/src/SMTP.php';



require '../../feedback_include.conf';

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

	$conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password, array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));


	if ($_SERVER['REQUEST_METHOD'] === 'POST') {
		$result = saveSubmission($conn, $tb_srwc_feedback);

		sendEmail($emailhost, $emailport, $emailuser, prepareEmailContent($result));

		echo 'Successfully saved submission.';
	} else if($_SERVER['REQUEST_METHOD'] === 'PUT') {
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
        saveStaffFeedback($conn, $tb_feedback_notes_status, $params);
        
        echo json_response(200, 'Successfully saved.');
        return;
	} else {
		$filter = htmlspecialchars($_GET["filter"]);
		$result = getSubmissions($conn, $tb_srwc_feedback, $tb_feedback_notes_status, $filter);
		echo json_encode($result, JSON_NUMERIC_CHECK);
	}
} catch (PDOException $e) {
	http_response_code(400);
	echo "Error: " . $e->getMessage();

} finally {
	$conn = null;
}

function saveStaffFeedback($conn, $tb_feedback_notes_status, $params) {
    $stmt = $conn->prepare(
        "INSERT INTO $tb_feedback_notes_status
        (id, source, notes, status)
        values(:id, :source, :notes, :status)
        ON DUPLICATE KEY 
        UPDATE source=:source, notes=:notes, status=:status"
	);
	$stmt->bindParam(':id', $params["id"]);
	$stmt->bindParam(':source', $params["source"]);
	$stmt->bindParam(':notes', $params["notes"]);
	$stmt->bindParam(':status', $params["status"]);
	$stmt->execute();
}

function saveSubmission($conn, $tbname) {

	// Required fields

	$commentType = $_POST['commentType'];

	$firstName = $_POST['fname'];

	$comment = $_POST['comment'];

	// Optional fields - PHP 7 Dependency: Null Coalesce Operator

	$lastName = $_POST['lname'] ?? "";

	$email = $_POST['email'] ?? "";

	$membershipType = $_POST['membershipType'] ?? "";

	$about = $_POST['feedbackAbout'] ?? "";

	$department = $_POST['department'] ?? "";

	$followUp = $_POST['followUp'];

	$phoneNumber = $_POST['phone'] ?? "";



    $stmt = $conn->prepare(

    	"INSERT INTO $tbname (commentType, firstName, lastName, email, membershipType, about, department, followUp, phoneNumber, comment) 

        VALUES (:commentType, :firstName, :lastName, :email, :membershipType, :about, :department, :followUp, :phoneNumber, :comment)"

    );

    $stmt->bindParam(':commentType', $commentType);

    $stmt->bindParam(':firstName', $firstName);

    $stmt->bindParam(':lastName', $lastName);

    $stmt->bindParam(':email', $email);

    $stmt->bindParam(':membershipType', $membershipType);

    $stmt->bindParam(':about', $about);

    $stmt->bindParam(':department', $department);

    $stmt->bindParam(':followUp', $followUp);

    $stmt->bindParam(':phoneNumber', $phoneNumber);

    $stmt->bindParam(':comment', $comment);

    $stmt->execute();



    // Fetch newly saved submission from database

    $resultStmt = $conn->query("SELECT * from $tbname WHERE id={$conn->lastInsertId()}");

    $resultStmt->execute();



    return $resultStmt->fetchAll(PDO::FETCH_ASSOC);

}



function getSubmissions($conn, $tb_usu_feedback, $tb_feedback_notes_status, $filter) {
	if ($filter === "all") {
		$stmt = $conn->prepare(
			"SELECT usu.*, fns.notes, fns.status 
            FROM $tb_usu_feedback as usu
            LEFT JOIN $tb_feedback_notes_status as fns
            ON fns.source = 'rec'
            AND fns.id = usu.id
            ORDER BY usu.submittedOn DESC;"
		);

	} else {

		$stmt = $conn->prepare(
			"SELECT usu.*, fns.notes, fns.status 
			FROM $tb_usu_feedback as usu
			LEFT JOIN $tb_feedback_notes_status as fns
			ON fns.source = 'rec'
			AND fns.id = usu.id
			WHERE usu.submittedOn >= :filter
			ORDER BY usu.submittedOn DESC;"
		);

	    $stmt->bindParam(':filter', $filter);
	}

    $stmt->execute();
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}



function prepareEmailContent($result) {

	$submittedData = [

    	"Submitted on" => date_format(date_create($result[0]["submittedOn"]), "F j, Y, g:i a"),

    	"Follow up?" => ($result[0]["followUp"] === 0) ? "No" : "Yes"

    ];



    foreach ($result[0] as $k => $v) {

    	if (!empty($v)) { // If empty, do not include in email

    		switch ($k) {

    			case "commentType":

    				$submittedData["Comment type"] = $v . ' (POS = Positive, NEG = Negative, NEU = Neutral)';

    				break;

    			case "firstName":

    				$submittedData["First name"] = $v;

    				break;

    			case "lastName":

    				$submittedData["Last name"] = $v;

    				break;

    			case "email":

    				$submittedData["Email"] = $v;

    				break;

    			case "membershipType":

    				$submittedData["Membership type"] = $v;

    				break;

    			case "about":

    				$submittedData["Feedback about?"] = $v;

    				break;

    			case "department":

    				$submittedData["Which department?"] = $v;

    				break;

    			case "phoneNumber":

    				$submittedData["Phone number"] = $v;

    				break;

    			case "comment":

    				$submittedData["Comment"] = $v;

    		}

    	}

    }



    return $submittedData;

}



function sendEmail($emailhost, $emailport, $emailuser, $submittedData) {

    $mail = new PHPMailer;  



    try {

        // NOTE: Since we are sending to a local SMTP, we don't need authentication or encryption

        $mail->isSMTP();

        $mail->Host = $emailhost . ':' . $emailport;

        $mail->SMTPAutoTLS = false;

        $mail->SMTPKeepAlive = true;

        

        // Send to recipient

        if ($mail->addAddress($submittedData['Email'])) {

        	$mail->setFrom($emailuser, 'Team SRWC');

	        $mail->isHTML(true);

	        $mail->Subject = "Thank You For Your Feedback";

	        $mail->Body = getHTMLEMailContent();

	        $mail->AltBody = getTextEmailContent();

            $mail->send();

	    }



        $mail->clearAddresses();



        // Send to admin

        if ($mail->addAddress('asi-srwc@csulb.edu')) {

            $mail->setFrom($emailuser, 'SRWC Feedback Kiosk');

            $mail->isHTML(true);

            $mail->Subject = "New SRWC Feedback Received";

            $mail->Body = '<p>You have just received the following submission from the SRWC Feedback Kiosk:</p>';

            $mail->Body .= '<p>';

            foreach ($submittedData as $label => $value) {

                $mail->Body .= $label . ': ' . $value . '<br />';

            }

            $mail->Body .= '</p>';

            $mail->send();            

        }

    } catch (Exception $e) {

    	http_response_code(500);

        echo 'E-mail could not be sent. Mail Error: ', $mail->ErrorInfo;

    }

}



function getHTMLEMailContent() {

	// Using Nowdocs

	return <<<'HTML'

	<p>Dear  Member,</p>

	<p>Thank you for your feedback. We will be sure to follow up with you as you requested on the form. We appreciate your input and will continue to do our best to exceed your expectations.</p>

	<p>If you have any questions, please always feel free to also email <a href='mailto:asi-srwc@csulb.edu'>asi-srwc@csulb.edu</a> or visit our front desk.</p>

	<p>Sincerely,<br />Team SRWC<br />

HTML;

}



function getTextEmailContent() {

	// Using Heredoc

	return <<<TEXT

	Dear Member,



	Thank you for your feedback. We will be sure to follow up with you as you requested on the form. We appreciate your input and will continue to do our best to exceed your expectations.



	Sincerely,

	Team SRWC


TEXT;

}

?>
