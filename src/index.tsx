/**
 * Created by mak on 6/8/16.
 */
import './index.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { About } from './index/About';
import { Home } from './index/Home';

const app: HTMLElement = document.getElementById('app');
const keywords = [
  'TypeScript',
  'React',
  'React Router',
  'Flux'
];
const toggleComponent = (route: string) =>
  (null != route && route.toLowerCase() === 'about')
    ? <About keywords={keywords}/>
    : <Home />;

interface AppProps {
  route: string;
}

class App extends React.Component<AppProps, {}> {
  render() {
    return toggleComponent(this.props.route);
  }
}

const getRoute = () => window.location.hash.substr(1);
const renderApp = () => {
  // ReactDOM.render(<Home/>, app);
  // ReactDOM.render(<About keywords={keywords}/>, app);
  console.log('navigate to:', getRoute());
  ReactDOM.render(<App route={getRoute()}/>, app);
};

window.addEventListener('hashChanged', renderApp);
renderApp();
