import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import Homepage from './Pages/HomePage';
import ProfilePage from './Pages/ProfilePage';

/**
 * The Main entry of the application
 */
function App() {
    return (
        <Fragment>
            <Router>
                <AnimatedSwitch
                    atEnter={{ opacity: 0 }}
                    atLeave={{ opacity: 0 }}
                    atActive={{ opacity: 1 }}
                    className="switch-wrapper">
                    
                    <Route path="/" exact component={Homepage} />
                    <Route path="/search" component={ProfilePage} />
                    {/* <Route path={} component={}/> * should be the error component */}

                </AnimatedSwitch>
            </Router>
        </Fragment>
    )
}

export default App;