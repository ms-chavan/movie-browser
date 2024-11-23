import {
  FETCH_MOVIES_FAILURE,
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  SET_SELECTED_MOVIE,
} from './actions';

const initialState = {
  loading: false,
  data: [],
  selectedMovie: null,
  error: null,
};

const movieListReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES_REQUEST:
      return { ...state, loading: true };

    case FETCH_MOVIES_SUCCESS:
      return { ...state, loading: false, data: action.payload };

    case FETCH_MOVIES_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case SET_SELECTED_MOVIE:
      return { ...state, selectedMovie: action.payload };

    default:
      return state;
  }
};

export default movieListReducer;
