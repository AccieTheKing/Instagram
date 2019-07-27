<?php

/**
 * This class is meant as Router for handling the client's requests
 * 
 * @author Acdaling Edusei - https://instagram.acdaling.nl/api/?username=<USERNAME>
 */

/**
 * imports
 */
include "./models/InstaGram.php";


class Router
{

    /**
     * Handles routing
     */
    public static function Routing($url)
    {

        $route = explode('/', $url);

        switch ($route[1]) {
            case 'api':
                $instagram = new InstaGram($_GET['username']);
                $instagram->getMedia();
                break;

            default:
                $error = ["error" => "route not found"];
                die(json_encode($error));
                break;
        }

    }
}
