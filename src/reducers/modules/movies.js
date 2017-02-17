import { LOAD_RESOURCE_SUCCESS } from '../../constants';

const initialState = {};

export default MovieResource = (state = initialState, action) => {
  switch (action.type) {
  case LOAD_RESOURCE_SUCCESS:
    const { data } = action;
    return { ...state, ...data };
  default:
    return state;
  }
};
