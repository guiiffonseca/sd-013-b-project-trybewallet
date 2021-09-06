import { combineReducers } from 'redux';
import editExpense from './EditExpense';

import loading from './Loading';
import user from './user';
import wallet from './wallet';

const rootReducer = combineReducers({ user, wallet, loading, editExpense });

export default rootReducer;
