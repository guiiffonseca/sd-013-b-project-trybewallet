import { userAction, USER } from './userAction';
import { walletAction, WALLET } from './walletAction';
import { getWallet, GETWALLET } from './getWallet';

const allActions = {
  user: userAction,
  wallet: walletAction,
  getWallet,
  USER,
  WALLET,
  GETWALLET,
};

export default allActions;
