<?php

$signinDir='signins';

$file = $signinDir . '/' . date('y-m-d');
$fh = fopen($file, 'a') or die("Can't open log file.");

//echo $_GET['login_name'];

fwrite($fh, $_GET['login_name'] . "\n");
?>
