import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from './components/LoginPage'
import FormPage from './components/FormPage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path='/login' component={LoginPage} />
            <Route exact path='/form' component={FormPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
