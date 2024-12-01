import { createStore } from 'redux';
import { MovieList, MovieRow } from '..';
import * as MoviesListSelectors from '../selector';
import { screen } from '@testing-library/react';
import rootReducer from '../../../rootReducer';
import { renderWithRedux } from '../../../shared/testUtil';
import * as ToolbarSelectors from '../../Toolbar/selector';
import { sortByOptions } from '../../Toolbar/constant';

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

  test('should render movie list in descending order of episodes', () => {
    jest.spyOn(ToolbarSelectors, 'selectCurrentSortingOption').mockReturnValue(sortByOptions[1]);
    renderWithRedux(MovieList, store);
    const movieRows = screen.getAllByTestId(/movie-row/i);
    const firstRowEpisode = movieRows[0].getElementsByClassName('episodeCell');
    expect(firstRowEpisode[0]).toHaveTextContent('EPISODE 5');
  });

  test('should render movie list in ascending order of episodes', () => {
    jest.spyOn(ToolbarSelectors, 'selectCurrentSortingOption').mockReturnValue(sortByOptions[0]);
    renderWithRedux(MovieList, store);
    const movieRows = screen.getAllByTestId(/movie-row/i);
    const firstRowEpisode = movieRows[0].getElementsByClassName('episodeCell');
    expect(firstRowEpisode[0]).toHaveTextContent('EPISODE 4');
  });

  test('should render movie list in descending order of release date', () => {
    jest.spyOn(ToolbarSelectors, 'selectCurrentSortingOption').mockReturnValue(sortByOptions[3]);
    renderWithRedux(MovieList, store);
    const movieRows = screen.getAllByTestId(/movie-row/i);
    const firstRowEpisode = movieRows[0].getElementsByClassName('releaseDateCell');
    expect(firstRowEpisode[0]).toHaveTextContent('1980-05-25');
  });

  test('should render movie list in ascending order of release date', () => {
    jest.spyOn(ToolbarSelectors, 'selectCurrentSortingOption').mockReturnValue(sortByOptions[2]);
    renderWithRedux(MovieList, store);
    const movieRows = screen.getAllByTestId(/movie-row/i);
    const firstRowEpisode = movieRows[0].getElementsByClassName('releaseDateCell');
    expect(firstRowEpisode[0]).toHaveTextContent('1977-05-25');
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
