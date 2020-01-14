import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    firstMessage: "Hello"
  }

  render(){
    window.app = this
    return (
      <div>
        <div style={{ height: '50vh'}}>
          <Message content={this.state.firstMessage} />
        </div>
        <div style={{ height: '50vh'}}>
          <Message content="World" />
        </div>
      </div>
    )
  }

}


class Message extends Component {

  state = {
    backgroundColor: 'red'
  }

  handleClick = () => this.setState({ backgroundColor: 'black' })
  
  render(){
    return (
      <div 
        onClick={this.handleClick}
        style={{
          color: 'white',
          backgroundColor: this.state.backgroundColor,
          width: '100%',
          height: '100%'
        }}
      >
        {this.props.content}
        </div>
    );
  }
}

export default App;
