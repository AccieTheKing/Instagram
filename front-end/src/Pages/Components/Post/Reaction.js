import React from 'react';


/**
 * This is a class that will be representing a comment
 * added to posts
 * 
 * @param {*} props 
 */
const Reaction = (props) => {
    let username = props.username;//username
    let userPicture = props.picture;//user's profile picture
    let caption = props.caption;//content of the comment

    return (
        <div>
            <span className="profile-pic-container">
                <img src={userPicture} alt=""
                    className="profile-pic" />
            </span>
            <p>
            <span className="username-badge">{username}</span>
                {caption}
            </p>

        </div>
    )
}

export default Reaction;