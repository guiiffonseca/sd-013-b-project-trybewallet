import { combineReducers } from 'redux';
import user from './reducers/user';
import wallet from './reducers/wallet';

const reducers = combineReducers({ user, wallet });

export default reducers;
