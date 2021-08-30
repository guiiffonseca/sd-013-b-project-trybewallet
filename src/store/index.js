import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducerCombinado from '../reducers/index';

const store = createStore(
  reducerCombinado,
  composeWithDevTools(
    applyMiddleware(thunk),
  ),
);

export default store;
