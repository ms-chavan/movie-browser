import { SET_SEARCH_TERM, SET_SELECTED_SORTING_OPTION } from './action';
import { sortByOptions } from './constant';

const initialState = {
  searchTerm: '',
  sortingOption: { name: sortByOptions[0].name, type: sortByOptions[0].type },
};

export const toolbarReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload,
      };

    case SET_SELECTED_SORTING_OPTION:
      const { name, type } = action.payload || {};
      return {
        ...state,
        sortingOption: {
          ...state.sortingOption,
          name: name,
          type: type,
        },
      };

    default:
      return state;
  }
};
