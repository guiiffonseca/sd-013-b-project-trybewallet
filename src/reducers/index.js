import { combineReducers } from 'redux';
import user from './user';
import wallet from './wallet';
import totalValue from './totalValue';

const rootReducer = combineReducers({ user, wallet, totalValue });

export default rootReducer;
