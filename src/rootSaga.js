import { all } from 'redux-saga/effects';
import watchMovieListSaga from './containers/MoviesList/saga';

export default function* rootSaga() {
  yield all([watchMovieListSaga()]);
}
