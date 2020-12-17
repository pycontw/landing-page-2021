import React, { Component } from 'react';
import { HashRouter, Route, Link } from "react-router-dom";

import Home from './Home';
import Proposal from './Proposal';

class App extends Component {
  render() {
    return (
      <HashRouter basename='/'>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/proposal" component={Proposal} />
        </div>
      </HashRouter>
     );
  }
}

export default App;
