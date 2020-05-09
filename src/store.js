import { createStore, compose } from 'redux';
import rootReducer from './reducers';

const initialState = {};
const enhancers = [];

if (process.env.NODE_ENV === 'development') {
  const { devToolsExtension } = window;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(...enhancers);

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers,
);

export default store;
