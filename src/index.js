import React from 'react';
import { render } from 'react-dom';
import { createBrowserHistory } from 'history';

import store from './store';
import App from './app';

const history = createBrowserHistory();
const root = document.querySelector('#root');

render(<App history={history} store={store} />, root);
