<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$companyname = $_POST['companyname'];
$phone = $_POST['phone'];
$address = $_POST['address'];
$comment = $_POST['comment'];

// Db save
$mysqli = new mysqli("localhost", "root", "", "db_salzatfish");
$sql = "INSERT into customerdata(name,phnNumber,company,email,address, comments) VALUES('$name','$phone','$companyname','$email','$address','$comment')";
$success = $mysqli->query($sql);
if (!$success) {
    die("Couldn't enter data: ".$mysqli->error);
}
$mysqli->close();

// Email
$from = "some email id";
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
$headers .= "From: $from\n";
$headers .= "Reply-To: $from";

$subject = "Greetings from SalzatFish";
$body = "Thanks $name for contacting us. We will get in touch with you soon.";
// If there are no errors, send the email
  if (mail($email, $subject, $body, $headers)) {
    $result = '<div class="alert alert-success">Thank You! I will be in touch</div>';
  } else {
    $result = '<div class="alert alert-danger">Sorry there was an error sending your message. Please try again later</div>';
  }
// Sms
$username="pareeka2";
$password="Ashu@1995";
$message="hello";
$sender="********"; //ex:INVITE
$number=$phone;
$template_id='123';

$url="http://api.bulksmsgateway.in/sendmessage.php?user=".urlencode($username)."&password=".urlencode($password)."&mobile=".urlencode($number)."&sender=".urlencode($sender)."&message=".urlencode($message)."&type=".urlencode('3')."&template_id=".urlencode($template_id);
$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
echo $curl_scraped_page = curl_exec($ch);
curl_close($ch); 
?>