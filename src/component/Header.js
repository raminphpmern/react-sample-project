import React from  'react'
import {Route, Link, BrowserRouter, Switch } from 'react-router-dom';
import Home from "./Home";
import Login from "./Login";
import Signup from "./Singup";


function Header() {
    return (
        <div>
            <div>Header</div>
            <div>                    
                <BrowserRouter>
                    <Link to="/"> Home | </Link>
                    <Link to="/login">Login | </Link>
                    <Link to="signup">Signup</Link>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/signup" component={Signup} />
                    </Switch>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default Header;