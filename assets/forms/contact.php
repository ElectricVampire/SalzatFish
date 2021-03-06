<?php

require('config.php');
extract($_POST);
$sql = "INSERT into customerdata(name,age,gender,phnNumber,company,email,address, comments) VALUES('Ashu',10,'m','8108284692','fish','abc@xyz.com','mumbai','asdjasdjladkl')";
$success = $mysqli->query($sql);
if (!$success) {
    die("Couldn't enter data: ".$mysqli->error);
}
echo "Thank You For Contacting Us ";
$conn->close();


header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$subject = $_POST['subject'];
$phone = $_POST['phone'];
$from = $email;
$to = 'abc@xyz.com'; //Replace with email id

$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
$headers .= "From: $from\n";
$headers .= "Reply-To: $from";

$body = "From: $name\n E-Mail: $email\n ContactNumber: $phone\n Message:\n $message";

// Check if name has been entered
if (!$_POST['name']) {
  $errName = 'Please enter your name';
}

// Check if email has been entered and is valid
if (!$_POST['email'] || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
  $errEmail = 'Please enter a valid email address';
}

//Check if message has been entered
if (!$_POST['message']) {
  $errMessage = 'Please enter your message';
}


// If there are no errors, send the email
if (!$errName && !$errEmail && !$errMessage) {
  if (mail($to, $subject, $body, $headers)) {
    $result = '<div class="alert alert-success">Thank You! I will be in touch</div>';
  } else {
    $result = '<div class="alert alert-danger">Sorry there was an error sending your message. Please try again later</div>';
  }
}
?>