import React from 'react';
import logo from '../../../Img/accietheking_nametag.png';

/**
 * When first visiting the profile page, this will be shown
 * 
 * Container that will show 
 */
const PlaceHolder = () => {
    return (
        <div className="start-searching-container">
            <a href="https://www.instagram.com/accietheking/" target="_blank" rel="noopener noreferrer">
                <img src={logo} alt="logo" />
            </a>
        </div>
    )
}

export default PlaceHolder;