<?php

/**
 * This class is meant as Router for handling the client's requests
 * 
 * @author Acdaling Edusei - https://projects.acdaling.nl/instagram/api/?username=<USERNAME>
 */

/**
 * imports
 */
include "./models/InstaGram.php";
include "./routing/routes.php";

class Router
{

    /**
     * Handles routing
     */
    public static function Routing($url)
    {
        $route = explode('/', $url); // split url

        // foreach (Routes::getRoutes() as $path) {
        if ($route[2] === 'api') {
            $instagram = new InstaGram($_GET['username']);
            if (array_key_exists($route[3], Routes::getRoutes())) {
                die($instagram->{Routes::getRoutes()[$route[3]]["method"]}($route[4]));
            } else {
                die(json_encode(Routes::getRoutes()["error"]));
            }
        } else {
            die(json_encode(Routes::getRoutes()["error"]));
        }
    }
    // }
}
