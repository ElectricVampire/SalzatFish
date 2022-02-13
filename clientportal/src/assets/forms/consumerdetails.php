<?php
$mysqli = new mysqli("localhost", "root", "", "db_salzatfish");
$sql = "SELECT * FROM customerdata";
$result = $mysqli->query($sql);
if (!$success) {
    die("Couldn't get data: ".$mysqli->error);
}
$mysqli->close();
echo $result;
?>