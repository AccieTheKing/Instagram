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
     * contains media
     */
    public function getMedia()
    {

        header('Access-Control-Allow-Origin: *');
        header('Content-Type: application/json');
        die($this->container->getMedia());
    }
}
