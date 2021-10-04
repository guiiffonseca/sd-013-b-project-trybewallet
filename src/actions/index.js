import { userAction, USER } from './userAction';
import { walletAction, WALLET } from './walletAction';
import { userExpenses, EXPENSES } from './userExpenses';

const allActions = {
  user: userAction,
  wallet: walletAction,
  expenses: userExpenses,
  USER,
  WALLET,
  EXPENSES,
};

export default allActions;
