import { combineReducers } from 'redux';
import user from './user';
import wallet from './wallet';
// import getWallet from './getWallet';

const rootReducer = combineReducers({
  user,
  wallet,
  // getWallet,
});

export default rootReducer;
