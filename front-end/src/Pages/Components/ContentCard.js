import React, { Fragment } from 'react';
import Article from './Article';
/**
 * This is where the media of a user will be displayed in
 * 
 * @param {*} props array with media details 
 */
const ContentCard = (props) => {
    let data = props.img.node;
    let user = props.user;
    console.log("ContentCard data", data,
        "ContentCard user ", user);

    return (
        <Fragment>
            <div className="col-4 mb-15">
                <button type="button" data-toggle="modal" data-target={`#${data.id}`}>
                    <img className="post-banner" src={data.thumbnail_src} alt="post" />
                </button>
            </div>
            <Article data={data} userData={user} />
        </Fragment>
    )
}

export default ContentCard;