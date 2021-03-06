import React, { Component } from 'react';
import { HashRouter, Route } from "react-router-dom";

import Home from './Home';
import Proposal from './Proposal';
import Conduct from './Conduct';
import ScrollToTop from './ScrollToTop';

class App extends Component {
  state = { locale: "" };

  onSetLocale = locale => {
    this.setState({ locale: locale });
    this.props.setLocale(locale);
  }

  render() {
    return (
      <HashRouter basename='/'>
        <ScrollToTop>
          <div>
            <Route exact path="/"><Home setLocale={this.onSetLocale} /></Route>
            <Route path="/proposal"><Proposal setLocale={this.onSetLocale} /></Route>
            <Route path="/code-of-conduct"><Conduct setLocale={this.onSetLocale} /></Route>
          </div>
        </ScrollToTop>
      </HashRouter>
    );
  }
}

export default App;
