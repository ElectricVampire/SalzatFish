<?php
$mysqli = new mysqli("localhost", "root", "", "db_salzatfish");
extract($_POST);
$sql = "INSERT into customerdata(name,age,gender,phnNumber,company,email,address, comments) VALUES('Ashu',10,'m','8108284692','fish','abc@xyz.com','mumbai','asdjasdjladkl')";
$success = $mysqli->query($sql);
if (!$success) {
    die("Couldn't enter data: ".$mysqli->error);
}
echo "Thank You For Contacting Us ";
$conn->close();
?>