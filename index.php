<?php

/**
 * This file will return the data in json format to use
 * 
 * @author Acdaling Edusei - https://instagram.acdaling.nl/api/?username=<USERNAME>
 */
include "./routing/Router.php";

/**
 * Returns all the data of the user
 */
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');


/**
 * Get request and pass through router
 */
Router::Routing($_SERVER['REQUEST_URI']);
