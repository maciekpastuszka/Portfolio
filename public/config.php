<?php
ob_start();
session_start();

define('DBHOST', 'localhost');
define('DBUSER', 'root');
define('DBPASS', '');
define('DBNAME', 'portfolio');

function db_connect() {
	mysql_connect(DBHOST, DBUSER, DBPASS) or die('<h2>ERROR</h2> MySQL Server is not responding');
	mysql_select_db(DBNAME) or die('<h2>ERROR</h2> Cannot connect to specified database');
    @mysql_query("SET NAMES 'utf8'");   
}


function db_close() {
	mysql_close();
}

function clear($text) {
	if(get_magic_quotes_gpc()) {
		$text = stripslashes($text);
	}
	$text = trim($text); 
	$text = mysql_real_escape_string($text); 
	$text = htmlspecialchars($text); 
	return $text;
}


?>
