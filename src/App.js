import React, { Component } from "react";
import { Route, Switch, Link, Redirect } from "react-router-dom";
import AOS from "aos";
import "./App.css";

import Navigation from "./components/navigation.js";
import Home from "./pages/home.js";
import Report from "./pages/report.js";
import Dashboard from "./pages/dashboard.js";
import Before from "./pages/before.js";
import SignUp from "./pages/signup.js";
import SignUpMessage from "./pages/signupmessage.js";
import Chirps from "./pages/chirps.js";
import LogIn from "./pages/login.js"
import Companies from "./pages/companies.js"

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div>
        <header>
          <Navigation></Navigation>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/report" component={Report} />
            <Route exact path='/before' component={Before} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/chirps" component={Chirps} />
            <Route exact path="/companies" component={Companies} />
            <Route exact path="/signupmessage" component={SignUpMessage} />
            <Route exact path="/login" component={LogIn} />
          </Switch>
        </header>
        <main></main>
      </div>
    );
  }
}

export default App;
