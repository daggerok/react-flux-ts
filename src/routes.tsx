import * as React from 'react';
import { Router, Route, IndexRoute, browserHistory, Redirect, IndexRedirect } from 'react-router';
// import { Router, Route, IndexRoute, hashHistory, Redirect, IndexRedirect } from 'react-router';

import { About } from './index/About';
import { Home } from './index/Home';
import { AuthorList } from './index/Author/AuthorList';
import { App } from './index/App';
import { NotFound } from './index/404';
import { Transition } from './index/Transition';

/**
 * Created by mak on 6/8/16.
 */
export const routes = (
  /*
  <Router history={hashHistory}>
   */
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      {/* specify component for root '/' */}
      <IndexRoute component={Home} />
      {/* redirect to '/about' component if root '/' */}
      <IndexRedirect to='about'/>
      <Route path="home" component={Home} />
      <Route path="authors" component={AuthorList} />
      <Route path="transitions" component={Transition}
             onEnter={Transition.willTransitionTo}
             onLeave={Transition.willTransitionFrom}/>
      <Route path="about" component={About} />
      {/* redirect from '/redirect-me' to  must be before not found (any other) handler */}
      <Redirect path="redirect-me" to="about" />
      {/* not found route must latest */}
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

/*
Lifecycle
  - willTransitionFrom // after
  - willTransitionTo // handle before
*/
// read more here: https://github.com/reactjs/react-router/tree/v2.0.0/docs
