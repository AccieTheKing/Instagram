<?php
/**
 * This file will return the data in json format to use
 * 
 * @author Acdaling Edusei - https://instagram.acdaling.nl/api/?username=<USERNAME>
 */
include "./models/InstaGram.php";

$instagram = new InstaGram($_GET['username']);

/**
 * Returns all the data of the user
 */
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
$instagram->getMedia();
