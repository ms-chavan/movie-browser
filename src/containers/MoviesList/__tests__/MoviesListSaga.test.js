import { call, put } from 'redux-saga/effects';
import { fetchMovies, fetchMoviesSaga } from '../saga';
import { fetchMoviesSuccess } from '../actions';

describe('MoviesListSaga', () => {
  let movies = {};
  beforeEach(() => {
    movies.results = getMockMovies();
  });

  afterAll(() => {
    movies = null;
  });
  test('should fetch movies list', () => {
    const generator = fetchMoviesSaga();

    expect(generator.next().value).toEqual(call(fetchMovies));

    generator.next(movies);

    expect(generator.next().done).toEqual(true);
  });
});

function getMockMovies() {
  return [
    {
      episode_id: 4,
      title: 'A New Hope',
      titleWithEpisode: 'Episode IV - A New Hope',
      release_date: '1977-05-25',
      opening_crawl: 'short opening crawl',
      director: 'George Lucas',
    },
    {
      episode_id: 5,
      title: 'A New Light',
      titleWithEpisode: 'Episode V - A New Light',
      release_date: '1980-05-25',
      opening_crawl: 'an opening crawl',
      director: 'George Lucas',
    },
  ];
}
