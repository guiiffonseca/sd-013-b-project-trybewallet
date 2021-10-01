// import user from './user';
// import wallet from './wallet';

// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global
import { combineReducers } from 'redux';
import userReducer from './user';
import walletReducer from './wallet';

const rootReducer = combineReducers({
  endPoint: 'https://economia.awesomeapi.com.br/json/all',
  user: userReducer,
  wallet: walletReducer,
});

export default rootReducer;
