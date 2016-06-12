/**
 * Created by mak on 6/8/16.
 */
import './index.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Header } from './index/common/Header';
import { About } from './index/About';
import { Home } from './index/Home';

const keywords = [
  'TypeScript',
  'React',
  'React Router',
  'Flux'
];

interface AppProps {
  route: string;
}

class App extends React.Component<AppProps, {}> {
  render() {
    let component = <Home />;

    if (null != this.props.route
      && this.props.route.toLowerCase() === 'about') {

      component = <About keywords={keywords}/>;
    }

    return (
      <div>
        <Header />
        {component}
      </div>
    );
  }
}
const app: HTMLElement = document.getElementById('app');

window.addEventListener('hashchange', renderApp);

function renderApp() {
  let route = window.location.hash.substr(1);
  // ReactDOM.render(<Home/>, app);
  // ReactDOM.render(<About keywords={keywords}/>, app);
  console.log('navigate to:', route, 'page.');
  ReactDOM.render(<App route={route}/>, app);
}

renderApp();
