import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LoginPage from './login';
import RegistPage from './regist';
import IndexPage from './index';
import AdminPage from './admin';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/regist" component={RegistPage} />
          <Route path="/admin" component={AdminPage} />
          <Route path="/" component={IndexPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
