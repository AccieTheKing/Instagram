
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
                    "get_user_details" => "https://projects.acdaling.nl/instagram/api/details/?username=<username>",
                    "get_user_posts" => "https://projects.acdaling.nl/instagram/api/posts/?username=<username>",
                    "get_post_comments" => "https://projects.acdaling.nl/instagram/api/comments/<shortcode>/?username=<username>",
                    "post_video_url" => "https://projects.acdaling.nl/instagram/api/video/<shortcode>/?username=<username>"
                ]
            ],
            "error" => [
                "error" => "this request is not valid! Check https://projects.acdaling.nl/instagram/api/info for more information"
            ]
        ];
    }
}
