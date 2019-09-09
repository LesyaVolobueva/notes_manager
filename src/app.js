import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom';

import NotesList from 'features/notes-list';
import AddNote from 'features/add-note';

const App = ({ history, store }) => (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={NotesList} />
        <Route path="/notes/new" component={AddNote} />
        <Route path="/notes/:id" component={() => {}} />
      </Switch>
    </Router>
  </Provider>
);

App.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default App;
