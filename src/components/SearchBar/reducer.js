import { SET_SEARCH_TERM } from './action';

const initialState = {
  term: '',
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return {
        ...state,
        term: action.payload,
      };

    default:
      return state;
  }
};
