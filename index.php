<?php

include "./models/InstaGram.php";
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$instagram = new InstaGram($_GET['username']);

/**
 * Returns all the data of the user
 */
$instagram->getMedia();
