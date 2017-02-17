import { SELECT_SEGMENT } from '../../constants';

const initialState = {
  currentSegmentIndex: 0
};

export default HeaderSegment = (state = {}, action) => {
  switch (action.type) {
  case SELECT_SEGMENT:
    const { currentSegment } = action;
    return { ...state, currentSegment };
  default:
    return state;
  }
};
