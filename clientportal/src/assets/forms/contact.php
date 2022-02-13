<?php
header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
//header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: POST');
header("Access-Control-Allow-Headers: *");
$entityBody = json_decode(file_get_contents("php://input"));
error_log($entityBody);
//print $entityBody;
$name = $entityBody->name;

//$name = $_POST['name'];
$email = $entityBody->email;//$_POST['email'];
$message = $entityBody->message;//$_POST['message'];
$subject = $entityBody->subject;//$_POST['subject'];
$phone = $entityBody->phone;//$_POST['phone'];
$from = $email;
$to = 'vinay.sakpal@gmail.com'; //Replace with email id

$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
$headers .= "From: $from\n";
$headers .= "Reply-To: $from";

$body = "From: $entityBody->name\n E-Mail: $entityBody->email\n ContactNumber: $entityBody->phone\n Message:\n $entityBody->message";

// Check if name has been entered
if (!$name) {
  $errName = 'Please enter your name';
}
$errEmail;
// Check if email has been entered and is valid
if (!$email || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
  $errEmail = 'Please enter a valid email address';
}
$errMessage;
//Check if message has been entered
if (!$message) {
  $errMessage = 'Please enter your message';
}


// If there are no errors, send the email
 //if (!$errName && !$errEmail && !$errMessage) {
  if (mail($to, $subject, $body, $headers)) {
    //$result = '<div class="alert alert-success">Thank You! I will be in touch</div>';
    $result = true;
  } else {
    //$result = '<div class="alert alert-danger">Sorry there was an error sending your message. Please try again later</div>';
    $result = false;
  }
  echo $result;
//}
?>