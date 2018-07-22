import React, { Component } from 'react';
import RouterGuide from './router/RouterGuide'

import {BrowserRouter as Router } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <RouterGuide />
        </div>
      </Router>
    );
  }
}

export default App;
