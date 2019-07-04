import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './views/Login'
import Consult from './views/Consult'

function Routes() {
    return(
        <Router>
           <Route exact path="/" component={Login} />
           <Route path="/consult" component={Consult} />
        </Router>
    )
}


export default Routes