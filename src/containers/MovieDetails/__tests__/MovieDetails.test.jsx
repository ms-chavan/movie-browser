import { screen } from '@testing-library/react';
import { createStore } from 'redux';
import { MovieDetails } from '..';
import { renderWithRedux } from '../../../shared/testUtil';
import rootReducer from '../../../rootReducer';
import * as MoviesListSelectors from '../../MoviesList/selector';

let store, mockMovies;

describe('MovieDetails', () => {
  beforeEach(() => {
    mockMovies = getMockMovies();
    jest.spyOn(MoviesListSelectors, 'selectMovieInFocus').mockReturnValue(mockMovies[0]);
    store = createStore(rootReducer);
  });

  test('should render Movie Details component', () => {
    renderWithRedux(MovieDetails, store);
    const movieDetailsComponent = screen.getByTestId(/right-panel/i);
    expect(movieDetailsComponent).toBeInTheDocument();
  });

  test('should display movie title', () => {
    renderWithRedux(MovieDetails, store);
    const movieTitle = screen.getByText(/Episode IV - A New Hope/i);
    expect(movieTitle).toBeInTheDocument();
  });

  test('should display crawl messge', () => {
    renderWithRedux(MovieDetails, store);
    const crawl = screen.getByText(/short opening crawl/i);
    expect(crawl).toBeInTheDocument();
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
