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

        /**
         * Handle requests
         */
        if ($route[1] === 'api') {

            /**
             * Check session
             */
            $instagram = new InstaGram($_GET['username']);

            switch ($route[2]) {

                case 'details':
                    die($instagram->getUserdata());
                    break;

                case 'posts':
                    die($instagram->getPosts());
                    break;

                case 'comments':
                    die($instagram->getComments($route[3]));
                    break;

                case 'video':
                    die($instagram->getVideo($route[3]));
                    break;

                case 'info':
                    die(json_encode([
                        "title" => "Giving information about the active API routes",
                        "active_routes" => [
                            "get_user_details" => "/api/details/?username=<username>",
                            "get_user_posts" => "/api/posts/?username=<username>",
                            "get_post_comments" => "/api/comments/<shortcode>/?username=<username>",
                            "post_video_url" => "/api/video/<shortcode>/?username=<username>"
                        ]
                    ]));
                    break;

                default:
                    die(json_encode(["error" => "this request is not valid! Check /info for more information"]));
                    break;
            }
        } else {

            die(json_encode(["error" => "this request is not valid! Check /info for more information"]));
        }
    }
}
