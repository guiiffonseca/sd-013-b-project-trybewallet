import { userAction, USER } from './userAction';
import { walletAction, WALLET } from './walletAction';
import { userExpenses, EXPENSES } from './userExpenses';
import { updateExpenses, UPDATE_EXPENSES } from './updateExpenses';

const allActions = {
  user: userAction,
  wallet: walletAction,
  expenses: userExpenses,
  updateAction: updateExpenses,
  USER,
  WALLET,
  EXPENSES,
  UPDATE_EXPENSES,
};

export default allActions;
