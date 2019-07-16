import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Homepage extends Component {

    componentDidMount() {

        setTimeout(() => {
            let page = document.querySelector('#home_page');
            page.classList.add('animation-container');
        }, 1000);

    }

    handleClick = (e) => {
        // e.preventDefault();
    }

    render() {
        return (
            <div id="home_page">
                <header className="container">
                    <section className="row">
                        <div className="col-12 col-lg-8 offset-lg-2">
                            <div className="text-center">
                                <h1>Instagram Clone</h1>
                                <h2 className="lead h5">By Acdaling Edusei</h2>
                                <Link to="/search" className="btn btn-default" onClick={this.handleClick.bind(this)}>Begin the search</Link>
                            </div>
                        </div>
                    </section>
                </header>
            </div>
        )
    }
}

export default Homepage;