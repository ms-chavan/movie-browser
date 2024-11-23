import { screen } from '@testing-library/react';
import { MovieBrowserLayout } from '..';
import { renderWithRedux } from '../../../shared/testUtil';
import * as MoviesListSelectors from '../../MoviesList/selector';
import { createStore } from 'redux';
import rootReducer from '../../../rootReducer';

let store, mockMovies;

describe('MovieBrowserLayout', () => {
  beforeEach(() => {
    mockMovies = getMockMovies();
    jest.spyOn(MoviesListSelectors, 'selectMovies').mockReturnValue(mockMovies);
    jest.spyOn(MoviesListSelectors, 'selectMoviesLoading').mockReturnValue(false);
    jest.spyOn(MoviesListSelectors, 'selectMovieInFocus').mockReturnValue(mockMovies[0]);

    store = createStore(rootReducer);
  });

  afterAll(() => {
    mockMovies = null;
  });

  it('should render Layout of the application', () => {
    renderWithRedux(MovieBrowserLayout, store, {
      Toolbar: MockToolbar,
      LeftPanel: MockLeftPanel,
      RightPanel: MockRightPanel,
    });

    const toolbar = screen.getByTestId(/sort-and-search-toolbar/i);
    const leftPanel = screen.getByTestId(/left-panel/i);
    const rightPanel = screen.getByTestId(/right-panel/i);

    expect(toolbar).toBeInTheDocument();
    expect(leftPanel).toBeInTheDocument();
    expect(rightPanel).toBeInTheDocument();
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

function MockToolbar() {
  return <div data-testid="sort-and-search-toolbar">Toolbar</div>;
}

function MockLeftPanel() {
  return <div data-testid="left-panel">Toolbar</div>;
}

function MockRightPanel() {
  return <div data-testid="right-panel">Toolbar</div>;
}
