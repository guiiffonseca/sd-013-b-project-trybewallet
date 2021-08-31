// import user from './user';
// import wallet from './wallet';

import { combineReducers } from 'redux';
import reducerLogin from './login';

// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global

const rootReducer = combineReducers({
  login: reducerLogin,
});

export default rootReducer;
