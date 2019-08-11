
<?php
/**
 * The routes used for my instagram API
 * 
 * @author Acdaling Edusei https://instagram.acdaling.nl/api/info
 */

class Routes
{

    public static function getRoutes()
    {
        return [
            "details" => [
                "method" => "getUserdata"
            ],
            "posts" => [
                "method" => "getPosts"
            ],
            "comments" => [
                "method" => "getComments"
            ],
            "video" => [
                "method" => "getVideo"
            ],
            "info" => [
                "title" => "Giving information about the active API routes",
                "active_routes" => [
                    "get_user_details" => "https://instagram.acdaling.nl/api/details/?username=<username>",
                    "get_user_posts" => "https://instagram.acdaling.nl/api/posts/?username=<username>",
                    "get_post_comments" => "https://instagram.acdaling.nl/api/comments/<shortcode>/?username=<username>",
                    "post_video_url" => "https://instagram.acdaling.nl/api/video/<shortcode>/?username=<username>"
                ]
            ],
            "error" => [
                "error" => "this request is not valid! Check https://instagram.acdaling.nl/api/info for more information"
            ]
        ];
    }
}
