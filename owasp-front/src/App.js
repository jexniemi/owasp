import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from './components/LoginPage'
import UsersPage from './components/UsersPage'
import FormPage from './components/FormPage'
import SecretCodePage from './components/SecretCodePage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path='/login' component={LoginPage} />
            <Route exact path='/form' component={FormPage} />
            <Route exact path='/secretcode' component={SecretCodePage} />
            <Route exact path='/submits' component={UsersPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
