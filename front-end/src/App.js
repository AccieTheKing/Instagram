import React, { Fragment } from 'react';
import Header from './Pages/Components/Header';
import Footer from './Pages/Components/Footer';
import HomePage from './Pages/HomePage';

/**
 * The Main entry of the application
 */
function App() {
    return (
        <Fragment>
            <Header />
            <HomePage />
            <Footer />
        </Fragment>
    )
}

export default App;