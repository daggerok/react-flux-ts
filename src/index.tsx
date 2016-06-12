import './index.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Header } from './index/common/Header';
import { Home } from './index/Home';
import { AuthorList } from './index/author/AuthorList';
import { About } from './index/About';

/**
 * Created by mak on 6/8/16.
 */
interface AppProps {
  route: string;
}

const keywords = [
  'TypeScript',
  'React',
  'React Router',
  'Flux'
];

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
        <div className="container-fluid">{DOM}</div>
      </div>
    );
  }
}

const app: HTMLElement = document.getElementById('app');

window.addEventListener('hashchange', renderApp);

function renderApp() {
  // ReactDOM.render(<Home/>, app);
  // ReactDOM.render(<About keywords={keywords}/>, app);

  let route = window.location.hash.substr(1);
  // console.log('navigate to:', route, 'page.');
  ReactDOM.render(<App route={route}/>, app);
}

renderApp();
