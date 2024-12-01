export const SET_SELECTED_SORTING_OPTION = 'SET_SELECTED_SORTING_OPTION';
export const SET_SEARCH_TERM = 'SET_SEARCH_TERM';

export const setSelectedSortingOption = (data) => ({
  type: SET_SELECTED_SORTING_OPTION,
  payload: data,
});

export const setSearchTerm = (data) => ({
  type: SET_SEARCH_TERM,
  payload: data,
});
