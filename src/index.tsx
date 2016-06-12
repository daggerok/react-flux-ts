/**
 * Created by mak on 6/8/16.
 */
import './index.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { ReactFluxTsApp } from './index/ReactFluxTsApp';

const app: HTMLElement = document.getElementById('app');
let keywords = [
  'TypeScript',
  'React',
  'React Router',
  'Flux'
];

ReactDOM.render(<ReactFluxTsApp keywords={keywords}/>, app);
