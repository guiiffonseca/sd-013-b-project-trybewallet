import { userAction, USER } from './userAction';
import { walletAction, WALLET } from './walletAction';
import { userExpenses, EXPENSES } from './userExpenses';
// import { getWallet, GETWALLET } from './getWallet';

const allActions = {
  user: userAction,
  wallet: walletAction,
  expenses: userExpenses,
  // getWallet,
  USER,
  WALLET,
  EXPENSES,
  // GETWALLET,
};

export default allActions;
