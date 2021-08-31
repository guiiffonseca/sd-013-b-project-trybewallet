import { combineReducers } from 'redux';

import loading from './Loading';
import user from './user';
import wallet from './wallet';

const rootReducer = combineReducers({ user, wallet, loading });

export default rootReducer;
