import { combineReducers } from 'redux';
import movieListReducer from './containers/MoviesList/reducer';
import { toolbarReducer } from './containers/Toolbar/reducer';

const rootReducer = combineReducers({
  movies: movieListReducer,
  toolbar: toolbarReducer,
});

export default rootReducer;
