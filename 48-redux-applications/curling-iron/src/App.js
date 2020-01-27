import React from 'react';
import { Router } from 'react-router-dom'
import { Route } from 'react-router'
import ResponseForm from './ResponseForm'
import { Home } from './Home'
import history from './history'

const App = () => {
  return (
    <Router history={history}>
      <Route exact path = "/" component = {Home}></Route>
      <Route path = "/response" component = {ResponseForm}></Route> 
    </Router>
  );
}

export default App;
