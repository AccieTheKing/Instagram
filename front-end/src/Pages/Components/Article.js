import React from 'react';
import { default as Reaction } from './ArticleReaction';

function Article(props) {
    let data = props.data;
    let user = props.userData;


    let timePost = new Date(data.taken_at_timestamp * 1000).toLocaleDateString();

    console.log("Article: ", props);
    return (
        <div className="modal fade" id={data.id} tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div className="modal-content">
                    <article className="card">
                        <div className="post-container">
                            <img src={data.display_url}
                                className="card-img" alt="post" />
                        </div>
                        <div className="card-body content-container">
                            <header className="card-header">
                                <a href="/">
                                    <span className="profile-pic-container">
                                        <img src={user.profilePicture} alt=""
                                            className="profile-pic" />
                                    </span>
                                    <span className="username-badge">{user.username}</span>
                                </a>
                            </header>
                            <div className="reactions-container">
                                <Reaction />
                            </div>
                            <div className="img-details-container">
                                <p className="likes"><i class="fa fa-heart"></i> {data.edge_media_preview_like.count} likes</p>
                                <p className="date-time">{timePost}</p>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    )
}

export default Article;