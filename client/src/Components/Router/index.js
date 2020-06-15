import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import '../../App.css';

import Home from "../../Pages/home";
import NoMatch from "../../Pages/noMatch";
import Profile from "../../Pages/profile";
import Activities from "../../Pages/activities";
import Login from "../../Pages/login";
import Signup from "../../Pages/signup";

import NavBar from "../NavBar";
import Footer from "../Footer";

function Router() {

    return (
        <BrowserRouter>
            <div>
                <NavBar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/activities" component={Activities} />
                    <Route exact path="/profile" component={Profile} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/signup" component={Signup} />

                    <Route component={NoMatch} />
                </Switch>
                <Footer/>
            </div>
      </BrowserRouter>
    )
}

export default Router;