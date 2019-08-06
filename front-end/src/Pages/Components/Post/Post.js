import React, { Fragment, Component } from 'react';
import { DetailCard } from '../Post';
import axios from 'axios';

/**
 * This is the post of the user that can be clicked on
 * 
 * @param {*} props array with media details 
 */
export default class Post extends Component {
    constructor(props) {
        super(props);

        this.state = {
            post: props.img.node,//the post
            user: props.user,//user details
            postCaption: props.postCaption,
            comments: "",
            videoURL: "",
            loading: true
        }
    }

    componentWillMount() {
        let post = this.state.post;

        /**
         * check if there are any comments
         */
        if (post.edge_media_to_comment.count > 0) {
            axios(`https://instagram.acdaling.nl/api/comments/${post.shortcode}/?username=nikisoedito.art`).then((response) => {
                this.setState({ comments: response.data });
            });
        }

        /**
         * Check if the content is a video, then fetch the display url
         */
        if (post.__typename === "GraphVideo") {
            axios(`https://instagram.acdaling.nl/api/video/${post.shortcode}/?username=nikisoedito.art`).then((response) => {
                this.setState({ videoURL: response.data });
            });
        }
    }

    render() {
        let user = this.state.user;
        let post = this.state.post;
        let postCaption = this.state.postCaption;
        let comments = this.state.comments;
        let videoURL = this.state.videoURL;

        return (
            <Fragment>
                <div className="col-4 mb-15">
                    <button type="button" data-toggle="modal" data-target={`#${post.id}`}>
                        <img className="post-banner" src={post.thumbnail_src} alt="post" />
                    </button>
                </div>
                <DetailCard post={post} comments={comments} postCaption={postCaption} videoURL={videoURL} userData={user} />
            </Fragment>
        )
    }
}