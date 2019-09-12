import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from 'features/reducer';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__();
const initialState = {
  notes: [],
  noteToEdit: {},
  isLoading: false,
  error: null,
};

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(thunkMiddleware),
    devTools,
  ),
);

export default store;
