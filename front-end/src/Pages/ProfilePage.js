import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ProfileHeader from './Components/ProfileHeader';
import ContentCard from './Components/ContentCard';
import ProfilepagePlaceholder from './Components/ProfilepagePlaceholder';

class ProfilePage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            userData: '',
            userMedia: '',
            searched: false
        }

    }

    /**
     * make API call after inputfield is submited
     */
    submit = (event) => {
        event.preventDefault();
        let searchField = document.querySelector('input');

        axios(`https://instagram.acdaling.nl/api/?username=${searchField.value}`)
            .then((response) => {
                this.setState({
                    userData: response.data.userData,
                    userMedia: response.data.media,
                    searched: true
                });
            });
    }


    render() {
        let userData = this.state.userData;
        let userMedia = this.state.userMedia;
        let posts;
        
        /**
         * This needs to be patched
         * 
         * crashed if account doesn't exist
         */
        if (userMedia.length > 0) {

            posts = userMedia.map((media) => {
                return <ContentCard img={media} user={userData} key={media.node.id} />
            });

        } else {

            posts = (
                <div className="col-12">
                    <h4 className="text-center">Private account</h4>
                </div>
            )

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
                                    <span className="fa fa-search icon icon-left"></span>
                                    <span className="fa fa-times  icon icon-right"></span>
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
                        <div>
                            <ProfileHeader userdata={userData} />
                            <div className="container">
                                <div className="row">
                                    {posts}
                                </div>
                            </div>
                        </div>
                    ) : (<ProfilepagePlaceholder />)
                    }
                </div>
                {/* END OF THE PROFILE PAGE */}
            </Fragment>
        )
    }

}

export default ProfilePage;