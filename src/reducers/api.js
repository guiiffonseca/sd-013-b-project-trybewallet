const initialState = { infoApi: '', error: '' };

function api(state = initialState, action) {
  switch (action.type) {
  case 'GET_INFO_API':
    return { ...state, infoApi: action.value };
  case 'GET_INFO_API_ERROR':
    return { ...state, error: action.value };
  default:
    return state;
  }
}

export default api;
