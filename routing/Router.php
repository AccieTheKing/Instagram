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
include "./routing/routes.php";

class Router
{

    /**
     * Handles routing
     */
    public static function Routing($url)
    {
        $route = explode('/', $url);

        foreach (Routes::getRoutes() as $path) {
            if ($route[1] === 'api') {
                $instagram = new InstaGram($_GET['username']);

                if(array_key_exists($route[2], Routes::getRoutes())){
                    die($instagram->{Routes::getRoutes()[$route[2]]["method"]}($route[3]));
                }else{
                    die(json_encode(Routes::getRoutes()["error"]));
                }

            } else {

                die(json_encode(Routes::getRoutes()["error"]));
            }
        }
    }
}
