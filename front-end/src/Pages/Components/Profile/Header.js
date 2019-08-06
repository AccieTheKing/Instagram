import React from 'react';

const ProfileHeader = (props) => {
    let data = props.userdata;

    return (
        <div id="profilePage-header">
            <div className="container">
                <div className="row">
                    <div className="col-12 offset-md-1 col-md-2">
                        <img src={data.profilePicture} className="profilePicture" alt="profile" />
                    </div>
                    <div className="col-12 offset-md-1 col-md-8">
                        <h1 className="username-placeholder">{data.username}</h1>
                        <ul className="list-inline">
                            <li className="list-inline-item"><span className="text-bold">{data.mediaCount}</span> posts</li>
                            <li className="list-inline-item"><span className="text-bold">{data.followers}</span> followers</li>
                            <li className="list-inline-item"><span className="text-bold">{data.following}</span> following</li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 offset-md-4 col-md-8">
                        <div className="profile-detail">
                            <p>{data.fullName}</p>
                            <span>{data.biograpy}</span>
                            <p><a href={data.website} target="_blank" rel="noopener noreferrer">{data.website}</a></p>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
        </div>
    )
}

export default ProfileHeader;