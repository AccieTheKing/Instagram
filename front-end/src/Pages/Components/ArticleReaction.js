import React from 'react';

export const ArticleReaction = (props) => {
    let userPicture = props.picture;//user's profile picture
    let caption = props.userCaption;

    // console.log(props.id)

    return (
        <div>
            <span className="profile-pic-container">
                <img src={userPicture} alt=""
                    className="profile-pic" />
            </span>
            <p>
                <span className="username-badge">{}</span>
                {caption}
            </p>

        </div>
    )
}