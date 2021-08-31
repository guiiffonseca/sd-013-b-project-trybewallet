import { EDIT_EXPENSE, SAVE_EDITED_EXPENSE } from '../actions';

const INITIAL_STATE = {
  id: null,
  isEditing: false,
};

const edit = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case EDIT_EXPENSE:
    return {
      ...state,
      id: action.payload,
      isEditing: true,
    };
  case SAVE_EDITED_EXPENSE:
    return {
      ...state,
      id: null,
      isEditing: false,
    };
  default:
    return state;
  }
};

export default edit;
