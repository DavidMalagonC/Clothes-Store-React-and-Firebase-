import React, { Component } from 'react';
import dates from './dates.json';
import './App.css';
import Nav from './components/Nav';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/Home';
import Category from './components/Category';
import Load from './components/Load';

class App extends Component {
  constructor(){
    super();
    this.state={
      dates
    }
  }
  gender(){
    console.log(":v");
  }
  render(){
  return (
    <div className="App">
    <BrowserRouter>
    <Nav/>
              <Switch>
              <Route
              path="/home"
              state={this.state}
              component={Home} />
              <Route
              path="/category"
              component={Category} />
              <Route
              path="/load"
              component={Load} />
              <Redirect to="/" />
              </Switch>
               <Redirect to='/home'/>
            </BrowserRouter>
    </div>

  );
}
}
export default App;
