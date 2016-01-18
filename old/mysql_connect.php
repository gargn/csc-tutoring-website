<?php
// define database parameters

$username="root";
$password="";
$database="tutoring";

// connect to database

$dblink = mysql_connect('localhost',$username,$password) or die("unable to connect to database");;
@mysql_select_db($database) or die( "Unable to select database");


// create a table
$strSQL = "CREATE TABLE nupur (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
firstname VARCHAR(30) NOT NULL,
lastname VARCHAR(30) NOT NULL,
email VARCHAR(50),
reg_date TIMESTAMP
)";

$result= mysql_query( $strSQL );
$err   = mysql_error();
if( $err != "" ) {
	echo "error=$err  ";
	exit;
}

print_r($result);

//insert into table
$strSQL = "INSERT INTO nupur(firstname, lastname,email) VALUES('Nupur', 'Garg', 'test@test.com')";

$result= mysql_query( $strSQL );
$err   = mysql_error();
if( $err != "" ) {
	echo "error=$err  ";
	exit;
}

// select from table
$strSQL = "SELECT * FROM nupur";
$result= mysql_query( $strSQL );
if (!$result) {
    echo 'Could not run query: ' . mysql_error();
    exit;
}
$row = mysql_fetch_array($result);
foreach($row as $curRow) {
	print_r($curRow);
}


// delete the table
$strSQL = "DROP TABLE nupur";
$err   = mysql_error();
if( $err != "" ) {
        echo "error=$err  ";
        exit;
}

print_r($result);

?>
