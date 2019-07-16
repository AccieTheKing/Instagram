import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './Pages/HomePage';
import ProfilePage from './Pages/ProfilePage';

/**
 * The Main entry of the application
 */
function App() {
    return (
        <Fragment>
            <Router>
                <Switch>
                    <Route path="/" exact component={Homepage} />
                    <Route path="/search" component={ProfilePage} />
                    {/* <Route path={} component={}/> */}
                </Switch>
            </Router>
        </Fragment>
    )
}

export default App;