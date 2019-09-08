import 'core-js';
import 'regenerator-runtime/runtime';

import React from 'react';
import { render } from 'react-dom';
import { createBrowserHistory } from 'history';

import App from './app';
import store from './core/store';
import configureAxios from './core/axios';

const history = createBrowserHistory();
const root = document.querySelector('#root');

configureAxios();

render(<App history={history} store={store} />, root);
