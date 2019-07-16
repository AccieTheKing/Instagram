import React from 'react';
import Article from './Components/Article';

function Homepage() {
    return (
        <div id="home_page">
            <main className="container">
                <section className="row">
                    <div className="col-12 col-lg-8 offset-lg-2">
                        <Article />
                        <Article />
                    </div>
                </section>
            </main>

        </div>
    )
}

export default Homepage;