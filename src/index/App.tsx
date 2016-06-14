import * as React from 'react';
import { Link, IndexLink } from 'react-router';

import { headerStyles, childStyles } from './App.css';

/**
 * Created by mak on 6/12/16.
 */
interface Props {}
interface State {}

export class App extends React.Component<Props, State> {
  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            {/*
             change the <a>s to <Link>s
             */}
            <ul className="nav navbar-nav" style={headerStyles}>
              <li><IndexLink to="/" className="navbar-brand">Brand</IndexLink></li>
              <li><Link to="home">Home</Link></li>
              <li><Link to="authors">Authors</Link></li>
              <li><Link to="transitions">Transitions</Link></li>
              <li><Link to="about">About</Link></li>
            </ul>
          </div>
        </nav>
        <div className="container-fluid" style={childStyles}>
          {/*
           next we replace `<Child>` with `this.props.children`
           the router will figure out the children for us
           */}
          {this.props.children}
        </div>
      </div>
    );
  }
}
