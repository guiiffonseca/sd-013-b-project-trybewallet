import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducerLogin from '../reducers/user';

const store = createStore(reducerLogin, composeWithDevTools(applyMiddleware()));

export default store;
