import { takeEvery, call, put } from 'redux-saga/effects';
import { fetchMoviesSuccess, fetchMoviesFailure, FETCH_MOVIES_REQUEST } from './actions';
import { ROMAN } from '../../shared/constant';

const fetchMovies = async () => {
  const response = await fetch('https://swapi.dev/api/films/?format=json');
  return response.json();
};

function* fetchMoviesSaga() {
  try {
    let movies = yield call(fetchMovies);
    if (movies) {
      movies = processMovies(movies.results);
    }
    yield put(fetchMoviesSuccess(movies));
  } catch (error) {
    yield put(fetchMoviesFailure());
  }
}

function processMovies(movies) {
  const extractedDetails = [];
  movies.forEach((movie) => {
    const { episode_id, title, release_date, opening_crawl, director } = movie;
    const titleWithEpisode = getMovieTitleWithRomanEpisode(episode_id, title);
    extractedDetails.push({
      episode_id,
      title,
      titleWithEpisode,
      release_date,
      opening_crawl,
      director,
    });
  });
  return extractedDetails;
}

function getMovieTitleWithRomanEpisode(episode_id, title) {
  return `Episode ${ROMAN[episode_id]} - ${title}`;
}

export default function* defaultSaga() {
  yield takeEvery(FETCH_MOVIES_REQUEST, fetchMoviesSaga);
}
