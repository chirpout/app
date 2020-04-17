import React, { Component } from 'react';
import { Route, Switch, Link, Redirect } from 'react-router-dom';

import './App.css';

import Navigation from './components/navigation.js';
import Home from './pages/home.js';
import Report from './pages/report.js';
import Browse from './pages/browse.js';

class App extends Component {
  constructor(props) {
    super(props);

  }

  componentWillMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div>
        <header>
          <Navigation></Navigation>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/report" component={Report} />
            <Route exact path="/browse" component={Browse} />
          </Switch>
        </header>
        <main>
        </main>
      </div>
    );
  }

}

export default App;
