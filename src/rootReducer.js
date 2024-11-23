import { combineReducers } from 'redux';
import movieListReducer from './containers/MoviesList/reducer';
import { sortByReducer } from './components/SortBy/reducer';
import { searchReducer } from './components/SearchBar/reducer';

const rootReducer = combineReducers({
  movies: movieListReducer,
  sortBy: sortByReducer,
  search: searchReducer,
});

export default rootReducer;
