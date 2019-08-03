import React from 'react';
import { default as Reaction } from './ArticleReaction';

/**
 * This component is responsible for showing a larger version of the picture 
 * after being clicked on it. The reactions of the picture will also show
 * 
 * @param {*} props 
 */
function Article(props) {
    let post = props.post;
    let user = props.userData;
    let postCaption = props.postCaption;//caption of the user giving by the post
    let postComments = props.comments;//comments for the picture
    let videoURL = props.videoURL;//url for video's
    let timePost = new Date(post.taken_at_timestamp * 1000).toLocaleDateString();// Date that the post was added to Instagram
    let comment = "no further comment found";//placeholder when there is no comment

    /**
     * Load the comments into a component
     */
    if (postComments && postComments.length > 0) {
        comment = postComments.map((el) => {
            let element = el.node;//shortner

            /**
             * Return comments 
             */
            return <Reaction picture={element.owner.profile_pic_url} username={element.owner.username} caption={element.text} key={element.id} />
        });
    }

    return (
        <div className="modal fade" id={post.id} tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div className="modal-content">
                    <article className="card">
                        <div className="post-container">
                            {videoURL ? (
                                <video controls className="card-img" alt="post">
                                    <source src={videoURL} />
                                </video>
                            ) : (
                                    <img src={post.display_url}
                                        className="card-img" alt="post" />
                                )
                            }
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
                                {postCaption.map((caption) => {
                                    return <Reaction picture={user.profilePicture} username={user.username} caption={caption.node.text} key={Math.random(1)} />
                                })
                                }
                                {comment}
                            </div>
                            <div className="img-details-container">
                                <p className="likes"><i className="fa fa-heart"></i> {post.edge_media_preview_like.count} likes</p>
                                <p className="date-time">
                                    {timePost}
                                </p>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    )
}

export default Article;