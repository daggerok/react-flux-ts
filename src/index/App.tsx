import * as React from 'react';
import { Link } from 'react-router';

import { headerStyles, childStyles } from './App.css';

/**
 * Created by mak on 6/12/16.
 */
interface AppProps {}

export class App extends React.Component<AppProps, {}> {
  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">

            {/* change the <a>s to <Link>s */}
            <ul className="nav navbar-nav" style={headerStyles}>
              <li><a className="navbar-brand" href="/">Brand</a></li>
              <li><Link to="home">Home</Link></li>
              <li><Link to="authors">Authors</Link></li>
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
