import { SET_SELECTED_SORTING_OPTION } from './action';
import { sortByOptions } from './constants';

const initialState = {
  selectedOption: { name: sortByOptions[0].name, type: sortByOptions[0].type },
};
export const sortByReducer = (state = initialState, action) => {
  const { name, type } = action.payload || {};
  switch (action.type) {
    case SET_SELECTED_SORTING_OPTION:
      return {
        ...state,
        selectedOption: {
          ...state.selectedOption,
          name: name,
          type: type,
        },
      };

    default:
      return state;
  }
};
