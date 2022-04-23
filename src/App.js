import React from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'

import Login from './page/login/Login';


import './App.css';

const App = (props) => {

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/login' component={Login}></Route>
          <Redirect from="/" to="/login" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;