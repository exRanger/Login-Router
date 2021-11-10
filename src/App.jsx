import React, {Fragment} from 'react'
import { LoginPage, Profile } from './pages/'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

export default  function App() {
    return (
        <Fragment>
            <Router>
                <Switch>
                    <Route exact path = '/' >
                        <LoginPage/>
                    </Route>
                    <Route path='/Profile'>
                        <Profile/>                    
                    </Route>
                </Switch>
            </Router>
        </Fragment>
    )
}
