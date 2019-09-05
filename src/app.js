import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

const App = ({ history, store }) => (
  <Provider store={store}>
    <Router history={history}>
      <h3>App</h3>
    </Router>
  </Provider>
);

App.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default App;
