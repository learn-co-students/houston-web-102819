import React, { Component } from 'react';
import { DragonArena } from './DragonArena';
import { HogArena } from './HogArena';

class App extends Component {
  render() {
    return (
      <div>
        <DragonArena />
        <div style={{ fontSize: '30px', position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -80%)' }}>
          VS
        </div>
        <HogArena />
      </div>
    );
  }
}

export default App;
