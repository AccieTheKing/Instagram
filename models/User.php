<?php

/**
 * 
 * This class will be represented as users Instagram
 * 
 * @author Acdaling Edusei - https://projects.acdaling.nl/instagram/api/?username=<USERNAME>
 */

class User
{
    private $id;
    private $username;
    private $full_name;
    private $profilePicture;

    private $mediaCount;
    private $followers;
    private $following;
    private $biograpy;
    private $websiteInBio;

    private $posts;

    public function __construct($username)
    {
        $this->username = $username;
    }

    /**
     * SETTERS
     */
    public function setId($id)
    {
        $this->id = $id;
    }
    public function setProfilePicture($profilePicture)
    {
        $this->profilePicture = $profilePicture;
    }

    public function setFullName($full_name)
    {
        $this->full_name = $full_name;
    }

    public function setMediaCount($count)
    {
        $this->mediaCount = $count;
    }

    public function setFollowers($followers)
    {
        $this->followers = $followers;
    }

    public function setFollowing($following)
    {
        $this->following = $following;
    }

    public function setBiograpy($biograpy)
    {
        $this->biograpy = $biograpy;
    }

    public function setWebsiteInBio($website)
    {
        $this->websiteInBio = $website;
    }

    public function setPosts($posts)
    {
        $this->posts = $posts;
    }

    /**
     * GETTERS
     */
    public function getId()
    {
        return $this->id;
    }

    public function getProfilePicture()
    {
        return $this->profilePicture;
    }

    public function getFullName()
    {
        return $this->full_name;
    }

    public function getMediaCount()
    {
        return $this->mediaCount;
    }

    public function getUsername()
    {
        return $this->username;
    }

    public function getFollowers()
    {
        return $this->followers;
    }

    public function getFollowing()
    {
        return $this->following;
    }

    public function getBiograpy()
    {
        return $this->biograpy;
    }

    public function getWebsiteInBio()
    {
        return $this->websiteInBio;
    }

    public function getPosts()
    {
        return $this->posts;
    }
}
