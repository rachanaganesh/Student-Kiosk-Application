<?php

class DBHandler
{
    private $databaseObject;

    private $opt = [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES => false,
    ];

    function __construct($host, $dbname, $username, $password)
    {
        $this->databaseObject = new PDO("mysql:host=$host;dbname=$dbname;charset=UTF8", $username, $password, array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
    }

    function executeAndFetch($query, $values = [])
    {
        $stmt = $this->execute($query, $values);
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    function execute($query, $values = []) {
        if (!empty($values)) {
            $stmt = $this->databaseObject->prepare($query);
            $stmt->execute($values);
            return $stmt;
        } 

        return $this->databaseObject->query($query);
    }

    function closeConnection() {
        $this->databaseObject = null;
    }

    function getEntryForLastId() {
        return $this->databaseObject->lastInsertId();
    }
}

?>