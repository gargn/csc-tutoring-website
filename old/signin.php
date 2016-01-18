<?php include('header.php'); ?>

<!-- Which type of login -->
<p>We ask that all students attending tutoring sign in.
<b>We use this to determine if we need to provide additional 
support for particular courses.</b></p><br />
<input type='radio' name='signin_radio' id='radio_username' 
       value='username' checked='yes' onclick='enableUsername();' />Username
<input type='radio' name='signin_radio' id='radio_fullname' 
       value='name' onclick='enableFullName();' />Full Name<br />

<br />

<!-- Text boxes -->
<div id='username_div' style='display:block'>
  Username: <input type='text' id='input_username' />
</div>

<div id='fullname_div' style='display:none;'>
  First Name: <input type='text' id='input_firstname' />
  Last Name:  <input type='text' id='input_lastname' />
</div>

Class: <input type='text' id='input_class' />

<br />

<!-- Sign in button -->
<input type='button' id='signin_button' value='Sign In' onclick='signIn();' />

<?php include('footer.php'); ?>
