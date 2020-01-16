import React from 'react';
import { Login } from './Login/Login';
import { PassengerShow } from './PassengerShow/PassengerShow';
import { BrowserRouter, Route } from 'react-router-dom' 
import something from './malicious-package'

class App extends React.Component {


  render() {
    return (
      <div>
        <BrowserRouter>
          <Route exact path="/" component={Login } />
          <Route exact path="/passengers/:id" component={PassengerShow} />
        </BrowserRouter>
      </div>
    );
  }

}

export default App;
