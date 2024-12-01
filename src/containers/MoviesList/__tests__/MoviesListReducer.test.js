import {
  FETCH_MOVIES_FAILURE,
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  SET_SELECTED_MOVIE,
} from '../actions';
import movieListReducer from '../reducer';

describe('MoviesListReducer', () => {
  test('should update state with loading flag in FETCH_MOVIES_REQUEST case', () => {
    const result = movieListReducer({}, { type: FETCH_MOVIES_REQUEST });
    expect(result).toEqual({ loading: true });
  });

  test('should update state with success payload in FETCH_MOVIES_REQUEST case', () => {
    const result = movieListReducer({}, { type: FETCH_MOVIES_SUCCESS, payload: 'data' });
    expect(result).toEqual({ loading: false, data: 'data' });
  });

  test('should update state with error payload in FETCH_MOVIES_FAILURE case', () => {
    const result = movieListReducer({}, { type: FETCH_MOVIES_FAILURE, payload: 'error' });
    expect(result).toEqual({ loading: false, error: 'error' });
  });

  test('should update state with selected movie in SET_SELECTED_MOVIE case', () => {
    const result = movieListReducer({}, { type: SET_SELECTED_MOVIE, payload: 'selected-movie' });
    expect(result).toEqual({ selectedMovie: 'selected-movie' });
  });

  test('should return initial state in case of invalid action', () => {
    const result = movieListReducer({}, { type: 'IN_VALID_ACTION', payload: 'payload' });
    expect(result).toEqual({});
  });
});
