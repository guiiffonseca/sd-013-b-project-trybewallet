import { combineReducers } from 'redux';
import userLoginReducer from './user';
import userWalletReducer from './wallet';

// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global
const rootReducers = combineReducers({
  user: userLoginReducer,
  wallet: userWalletReducer,
});

export default rootReducers;
