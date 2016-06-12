import * as React from 'react';

import { headerComponentStyles } from './Header.css';

interface HeaderProps {}

export class Header extends React.Component<HeaderProps, {}> {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <ul className="nav navbar-nav" style={headerComponentStyles}>
            <li><a className="navbar-brand" href="/">Brand</a></li>
            <li><a href="/#home">Home</a></li>
            <li><a href="/#authors">Authors</a></li>
            <li><a href="/#about">About</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}
