//This file merely configures the store for hot reloading.
//This boilerplate file is likely to be the same for each project that uses Redux.
//With Redux, the actual stores are in /reducers.

import { createStore, combineReducers } from 'redux';
import { syncReduxAndRouter, routeReducer } from 'redux-simple-router';
import { createHistory } from 'history';
import reducers from '../reducers';

export default function configureStore() {
    const rootReducer = combineReducers(Object.assign({}, reducers, {
        routing: routeReducer
    }));

  const store = createStore(rootReducer);
  const history = createHistory();
  syncReduxAndRouter(history, store);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return {store, history};
}
