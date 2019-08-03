<?php

/** 
 * This class will initialize all the needing classes for scraping the data 
 *
 * @author Acdaling Edusei - https://instagram.acdaling.nl/api/?username=<USERNAME>
 */


/**
 * Imports
 */
include 'AppContainer.php';

class InstaGram
{
    private $user;
    private $container;

    public function __construct($username)
    {
        $this->user = $username; //username given
        $this->container = new AppContainer($username); //makes container wich will hold the data of the user
        $this->container->fetchContent(); //fetch data of the user
    }

    /**
     * contains userdata
     */
    public function getUserdata()
    {

        return ($this->container->getUserdata());
    }

    /**
     * Containts the pictures
     */
    public function getPosts()
    {

        return ($this->container->getPosts());
    }

    /**
     * contains videos
     */
    public function getVideo($shortcode)
    {

        return ($this->container->getVideo($shortcode));
    }

    /**
     * Contains the comments
     */
    public function getComments($shortcode)
    {

        return ($this->container->getComments($shortcode));
    }
}
