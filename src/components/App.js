import React, { Component } from 'react';
import { HashRouter, Route } from "react-router-dom";

import Home from './Home';
import Proposal from './Proposal';
import Conduct from './Conduct';

class App extends Component {
  state = { locale: "" }

  onSetLocale = locale => {
    this.setState({ locale: locale });
    this.props.setLocale(locale);
  }

  render() {
    return (
      <HashRouter basename='/'>
        <div>
          <Route exact path="/"><Home setLocale={this.onSetLocale}/></Route>
          <Route path="/proposal" component={Proposal} />
          <Route path="/code-of-conduct" component={Conduct} />
        </div>
      </HashRouter>
     );
  }
}

export default App;
