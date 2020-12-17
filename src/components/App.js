import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import Home from './Home';
import Proposal from './Proposal';

const App = () => {
  const history = createHistory({
    basename: process.env.PUBLIC_URL,
  });

	return (
    <div>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/proposal" component={Proposal} />
          <Route path="/test" component={Proposal} />
          <Route component={() => (<div>404 Not found 1</div>)} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
