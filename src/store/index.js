import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import amarelo from '../reducers/user';
// import reducer from '../reducers';

const store = createStore(
  amarelo,
  composeWithDevTools(
    applyMiddleware(thunk),
  ),
);

export default store;
