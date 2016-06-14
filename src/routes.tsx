import * as React from 'react';
// import { Router, Route, IndexRoute, browserHistory, Redirect } from 'react-router';
import { Router, Route, IndexRoute, hashHistory, Redirect } from 'react-router';

import { About } from './index/About';
import { Home } from './index/Home';
import { AuthorList } from './index/Author';
import { App } from './index/App';
import { NotFound } from './index/404';
import { Transition } from './index/Transition';

/**
 * Created by mak on 6/8/16.
 */
export const routes = (
  // <Router history={browserHistory}>
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/authors" component={AuthorList} />
      <Route path="/transitions" component={Transition} onEnter={Transition.onEnter} onLeave={Transition.onLeave}/>
      <Route path="/about" component={About} />
      <Redirect path="/redirect-me" to="/about" />
      <Route path="*" component={NotFound} />
      {/*<Redirect from="about/*" to="about" /> dont work with hash*/}
    </Route>
  </Router>
);

/*
Lifecycle
  - willTransitionFrom // after
  - willTransitionTo // handle before
*/
// read more here: https://github.com/reactjs/react-router/tree/v2.0.0/docs
