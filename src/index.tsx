/**
 * Created by mak on 6/8/16.
 */
import './index.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Header } from './index/common/Header';
import { Home } from './index/Home';
import { AuthorList } from './index/author/AuthorList';
import { About } from './index/About';

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
    let DOM = <Home />;

    if ('about' === this.props.route.toLowerCase()) {
      DOM = <About keywords={keywords}/>;
    } else if ('authors' === this.props.route.toLowerCase()) {
      DOM = <AuthorList />;
    }

    return (
      <div>
        <Header />
        {DOM}
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
