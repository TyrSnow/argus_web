import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LoginPage from './login';
import RegistPage from './regist';
import Frame from './frame';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/regist" component={RegistPage} />
          <Route path="/" component={Frame} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
