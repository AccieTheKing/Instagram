import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Post } from './Components/Post';
import { PlaceHolder, Header } from './Components/Profile/';


export default class ProfilePage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            userData: '',
            userMedia: '',
            postCaption: '',
            searched: false
        }

    }

    /**
     * make API call after inputfield is submited
     */
    submit = (event) => {
        event.preventDefault();
        this.setState({ userdata: "" });
        let searchField = document.querySelector('input');

        axios(`https://projects.acdaling.nl/instagram/api/details/?username=${searchField.value}`)
            .then((response) => {
                this.setState({
                    userData: response.data.userData,
                    searched: true
                });
                // console.log(response.data);
            });

        axios(`https://projects.acdaling.nl/instagram/api/posts/?username=${searchField.value}`)
            .then((response) => {
                this.setState({
                    content: response.data
                })
                console.log(response.data);
            });
    }

    render() {
        let userData = this.state.userData;
        let posts = (this.state.content) ? this.state.content : "";

        if (userData && posts.length === 0) {
            posts = (
                <div className="col-12">
                    <h4 className="text-center">Private account</h4>
                </div>
            )
        } else if (userData && posts.length > 0) {
            posts = this.state.content.map(media => {
                return <Post img={media} user={userData} postCaption={media.node.edge_media_to_caption.edges} key={media.node.id} />
            })
        }

        return (
            <Fragment>
                {/* THE HEADER */}
                <nav id="header" className="navbar navbar-light bg-light">
                    <form onSubmit={this.submit.bind(this)} className="container">
                        <div className="row">
                            <div className="col-12 col-md-4">
                                <Link to="/">
                                    <div className="brand-name-container">
                                        <div className="brand-logo"></div>
                                        <div className="seperator"></div>
                                        <div className="brand-text-logo"></div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-12 col-md-4">
                                <div className="search-container">
                                    <input type="text" name="username" autoComplete="off" className="form-control" placeholder="search here" />
                                    <div className="search-placeholder" role="button">
                                        <span><i className="fa fa-search"></i> Search</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </nav >
                {/* END OF THE HEADER */}
                {/* PROFILE PAGE */}
                <div id="profile_page">
                    {this.state.searched ? (
                        <Fragment>
                            <Header userdata={userData} />
                            <div className="container">
                                <div className="row">
                                    {posts}
                                </div>
                            </div>
                        </Fragment>
                    ) : (<PlaceHolder />)
                    }
                </div>
                {/* END OF THE PROFILE PAGE */}
            </Fragment>
        )

    }

}