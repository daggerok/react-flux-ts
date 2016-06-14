import * as React from 'react';
// import { Router, Route, IndexRoute, browserHistory, Redirect } from 'react-router';
import { Router, Route, IndexRoute, hashHistory, Redirect } from 'react-router';

import { About } from './index/About';
import { Home } from './index/Home';
import { AuthorList } from './index/Author';
import { App } from './index/App';
import { NotFound } from './index/404';

/**
 * Created by mak on 6/8/16.
 */
export const routes = (
  // <Router history={browserHistory}>
  <Router history={hashHistory} >
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="home" component={Home} />
      <Route path="authors" component={AuthorList} />
      <Route path="about" component={About} />
      <Redirect from="redirect-me-to-about" to="about" />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

// read more here: https://github.com/reactjs/react-router/tree/v2.0.0/docs
