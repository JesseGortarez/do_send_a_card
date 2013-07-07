<?php
/* Set e-mail recipient */
$myemail = "cards@dosendacard.org";

/* Check all form inputs using check_input function */
$subject = "Do Send A Card";
$choice = $_POST['choice'];
$message = $_POST['messageText'];
$sentEmail = $_POST['email'];
$name = $_POST['name'];





/* If e-mail is not valid show error message */
if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/", $email))
{

/* Let's prepare the message for the e-mail */
$message = "
From: $name, 
$sentEmail

Design Choice: $choice

Message:
$message

";

/* Send the message using mail() function */
mail($myemail, $subject, $message);

/* Redirect visitor to the thank you page */
exit();

}
?>