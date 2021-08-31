import utils from '../services';

export const GET_ISS_LOCATION_SUCCESS = 'GET_ISS_LOCATION_SUCCESS';
export const GET_ISS_LOCATION_ERROR = 'GET_ISS_LOCATION_ERROR';

// action creator 1
export const getISSLocationSuccess = (payload) => ({
  type: GET_ISS_LOCATION_SUCCESS,
  payload,
});

// action creator 2
export const getISSLocationError = (payload) => ({
  type: GET_ISS_LOCATION_ERROR,
  payload,
});

export const getISSLocationThunk = () => async (dispatch) => {
  // action loading
  try {
    const response = await utils.getCurrentISSLocation();
    const payload = response;
    dispatch(getISSLocationSuccess(payload));
  } catch (error) {
    dispatch(getISSLocationError(error));
  }
};
