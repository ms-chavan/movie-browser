import { createStore } from 'redux';
import rootReducer from '../../../../rootReducer';
import { renderWithRedux } from '../../../../shared/testUtil';
import { MovieRow } from '..';
import * as MoviesListSelectors from '../../selector';
import { fireEvent, screen } from '@testing-library/react';

let store, mockMovies;

describe('MovieRow', () => {
  beforeEach(() => {
    mockMovies = getMockMovies();
    jest.spyOn(MoviesListSelectors, 'selectMovieInFocus').mockReturnValue(mockMovies[0]);

    store = createStore(rootReducer);
  });

  test('should render movie row', () => {
    renderWithRedux(MovieRow, store);
    const row = screen.getByTestId(/movie-row/i);
    expect(row).toBeInTheDocument();
  });

  test('should display data in movie row', () => {
    renderWithRedux(MovieRow, store, { ...mockMovies[0] });
    const title = screen.getByText(/Episode IV - A New Hope/i);
    const episode = screen.getByText(/episode 4/i);

    expect(title).toBeInTheDocument();
    expect(episode).toBeInTheDocument();
  });

  test('should highlight movie row when clicked', () => {
    renderWithRedux(MovieRow, store, { ...mockMovies[0] });
    const movieRow = screen.getByTestId(/movie-row/i);

    fireEvent.click(movieRow);
    expect(movieRow).toHaveClass('selectedMovie');
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
