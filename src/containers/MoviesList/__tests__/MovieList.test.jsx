import { createStore } from 'redux';
import { MovieList, MovieRow } from '..';
import * as MoviesListSelectors from '../selector';
import { screen } from '@testing-library/react';
import rootReducer from '../../../rootReducer';
import { renderWithRedux } from '../../../shared/testUtil';

let store, mockMovies;

describe('MovieList', () => {
  beforeEach(() => {
    mockMovies = getMockMovies();
    jest.spyOn(MoviesListSelectors, 'selectMovies').mockReturnValue(mockMovies);
    jest.spyOn(MoviesListSelectors, 'selectMoviesLoading').mockReturnValue(false);
    jest.spyOn(MoviesListSelectors, 'selectMovieInFocus').mockReturnValue(mockMovies[0]);
    store = createStore(rootReducer);
  });

  test('should render movie list', () => {
    renderWithRedux(MovieList, store);
    const movieListComponent = screen.getByTestId(/left-panel/i);
    expect(movieListComponent).toBeInTheDocument();
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
  ];
}
