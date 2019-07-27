<?php

/**
 * This class will contain the received data from the scraper
 * 
 * @author Acdaling Edusei - https://instagram.acdaling.nl/api/?username=<USERNAME>
 */

/**
 * imports
 */
include 'User.php';

class AppContainer
{
    private $user; //user wich data will be scraped
    private $url; //url of the website that is being scraped


    /**
     * Constuctor
     * 
     * creates new user and sets the username
     */
    public function __construct($username)
    {
        $this->url = 'https://www.instagram.com/';
        $this->user = new User($username);
    }


    /**
     * Starts the proces of scraping the data of the specific user
     */
    public function fetchContent()
    {

        $dataFromUser = $this->url . $this->user->getUsername(); //Create the url based on the username given
        $getStoredData = file_get_contents($dataFromUser); //Scrapes data from the url

        /**
         * Search in the fetched data for the content that we need
         * and saves it in an array
         */
        if (preg_match('/window._sharedData = (.*?)script>/s', $getStoredData, $matches)) {
            //Check if the scraped data is not empty
            if (count($matches) > 0) {

                $match = substr($matches[1], 0, -3); //remove some karakters that made the string invalid
                $decode = json_decode($match, false); //change the data is valid json

                $userProfilePage = $decode->entry_data->ProfilePage[0]->graphql->user; //short variable for accessing the user data

                $this->user->setId($userProfilePage->id);
                $this->user->setProfilePicture($userProfilePage->profile_pic_url); //saves the profile picture
                $this->user->setBiograpy($userProfilePage->biography); //saves the biograpy of the user
                $this->user->setFullName($userProfilePage->full_name); //sets the full name of the user

                $this->user->setWebsiteInBio($userProfilePage->external_url); // sets website that is in the user's bio
                $this->user->setFollowing($userProfilePage->edge_follow->count); // sets counter of people who're following
                $this->user->setFollowers($userProfilePage->edge_followed_by->count); // sets counter of people that user is following

                $userPostsTimeLine = $userProfilePage->edge_owner_to_timeline_media; //short variable for accessing the
                $this->user->setMediaCount($userPostsTimeLine->count); //sets the number of total pictures

                $postUrl = 'https://instagram.com/graphql/query/?query_id=17888483320059182&id=' . $this->user->getId() . '&first=1500&after=' . $userPostsTimeLine->page_info->end_cursor; // new url for fetching more media
                $media = file_get_contents($postUrl); // get all media content from $postUrl
                $content = json_decode($media); // decode json 

                $this->user->setPosts($content->data->user->edge_owner_to_timeline_media->edges); //stores new scraped data for later use
            }
        }
    }

    /**
     * Getting the comments of the posted media
     */
    private function getComments($shortcode)
    {
        $data = file_get_contents($this->url . 'p/' . $shortcode);

        if (preg_match('/window._sharedData = (.*?)script>/s', $data, $dataArray)) {
            $validJson =  substr($dataArray[1], 0, -3);
            $dataComments = json_decode($validJson);

            $comments = $dataComments->entry_data->PostPage[0]->graphql->shortcode_media->edge_media_to_parent_comment->edges;

            if (isset($comments) && count($comments) > 0) {
                return $comments; // returns comments form the given code
            }
        }
    }

    /**
     * get media
     */
    public function getMedia()
    {
        $posts = $this->user->getPosts(); //'All' the posts
        $postArray = []; // will store the posts and their comments

        foreach ($posts as $post) {
            $shortcode = $post->node->shortcode;
            $comment = $this->getComments($shortcode);
            $assembledPost = [];

            $assembledPost[] = [
                "node" => $post->node,
                "comments" => $comment
            ];

            $postArray[] = $assembledPost;
        }


        $userdata = [

            "userData" => [

                "profilePicture" => $this->user->getProfilePicture(),
                "username" => $this->user->getUsername(),
                "fullName" => $this->user->getFullName(),
                "followers" =>  $this->user->getFollowers(),
                "following" => $this->user->getFollowing(),
                "biograpy" => $this->user->getBiograpy(),
                "mediaCount" => $this->user->getMediaCount(),
                "website" => $this->user->getWebsiteInBio(),

            ],
            "media" => $postArray

        ];

        return json_encode($userdata);
    }
}
