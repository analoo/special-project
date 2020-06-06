import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./Pages/home";
import NoMatch from "./Pages/noMatch";
import Profile from "./Pages/profile";
import Search from "./Pages/search";

import NavBar from "./Components/navBar"


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/profile" component={Profile} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>

    </div>
  );
}

export default App;
