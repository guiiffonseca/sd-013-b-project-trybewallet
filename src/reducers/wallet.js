import {
  REQUEST_CURRENCIES,
  GET_CURRENCIES,
  FAILED_CURRENCIES,
  REQUEST_EXCHANGE,
  SET_EXPENSES,
  FAILED_EXCHANGE,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  error: null,
  expenses: [],
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_CURRENCIES:
    return { ...state };
  case GET_CURRENCIES:
    return { ...state, currencies: action.payload };
  case FAILED_CURRENCIES:
    return { ...state, error: action.payload };

  case REQUEST_EXCHANGE:
    return { ...state };
  // Elaborado com a ajuda de Rodrigo Agusto (Tribo 13B)
  case SET_EXPENSES:
    return { ...state,
      expenses: [...state.expenses, {
        ...action.payload,
        id: state.expenses.length,
      }],
    };
  case FAILED_EXCHANGE:
    return { ...state, error: action.payload };

  default:
    return state;
  }
};

// const walletReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//   case REQUEST_FETCH:
//     return { ...state, isFetching: true };
//   case ERROR_FETCH:
//     return { ...state, error: action.payload, isFetching: false };
//   case SET_CURRENCIES:
//     return { ...state, currencies: action.payload, isFetching: false };
//   // Case elaborado com a ajuda do Rodrigo Agusto (Tribo 13B)
//   case SET_EXPENSES:
//     return { ...state,
//       expenses: [...state.expenses, {
//         ...action.payload,
//         id: state.expenses.length,
//       }],
//       isFetching: false,
//     };
//   default:
//     return state;
//   }
// };

// case GET_EXCHANGE:
//   console.log(action.payload);
//   return { ...state, exchangeRates: action.payload, isFetching: false };
//   // return { ...state, expenses: { ...state.expenses, teste: action.payload }, isFetching: false };
export default walletReducer;
