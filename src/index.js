import React from 'react';
import { AppContainer, } from './containers';
import { createStore, applyMiddleware, combineReducers, compose, } from 'redux';
import { Provider, } from 'react-redux';
import thunk from 'redux-thunk';
import * as reducers from './reducers';

const appReducer = combineReducers(reducers);

const store = createStore(
  appReducer,
  compose(
    applyMiddleware(thunk)
  )
);

const App = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};

export default App;
