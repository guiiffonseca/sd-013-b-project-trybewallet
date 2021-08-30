import { combineReducers } from 'redux';
import User from './user';
import Wallet from './wallet';

// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global

const rootReducers = combineReducers(User, Wallet);

export default rootReducers;
