import React, { Fragment } from 'react';
import Article from './Article';

/**
 * This is the post of the user
 * 
 * @param {*} props array with media details 
 */
const ContentCard = (props) => {
    let post = props.img.node;//the post
    let comments = props.img.comments;//comments
    let user = props.user;//user details

    return (
        <Fragment>
            <div className="col-4 mb-15">
                <button type="button" data-toggle="modal" data-target={`#${post.id}`}>
                    <img className="post-banner" src={post.thumbnail_src} alt="post" />
                </button>
            </div>
            <Article post={post} comments={comments} userData={user} />
        </Fragment>
    )
}

export default ContentCard;