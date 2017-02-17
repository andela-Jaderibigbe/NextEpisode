// Actions for NextEpisode
import { LOAD_RESOURCE_SUCCESS } from '../constants';

// import NextEpisode API calls
import { fetchList } from '../api';

export function loadResourceSuccess(data) {
  return {
    type: LOAD_RESOURCE_SUCCESS,
    data
  };
}

// Define thunks for API calls
export function loadResource(resourceType) {
  return (dispatch) => {
    return fetchList(resourceType)
    .then(res => {
      dispatch(loadResourceSuccess(res));
    })
    .catch(error => {
      throw error;
    });
  };
}
