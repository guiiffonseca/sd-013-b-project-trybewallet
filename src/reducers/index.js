import { combineReducers } from 'redux';
import userReduce from './user';
import walletReduce from './wallet';

const reducer = combineReducers({
  user: userReduce,
  wallet: walletReduce,
});

export default reducer;

// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global
