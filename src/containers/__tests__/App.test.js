import { screen } from '@testing-library/react';
import App from '../App';
import { renderWithRedux } from '../../shared/testUtil';
import * as ListSelectors from '../MoviesList/selector';
import { createStore } from 'redux';
import rootReducer from '../../rootReducer';

let store;

describe('App', () => {
  beforeEach(() => {
    jest.spyOn(ListSelectors, 'selectMoviesLoading').mockReturnValue(false);

    store = createStore(rootReducer);
  });

  test('renders sort by button', () => {
    renderWithRedux(App, store);
    const sortByButton = screen.getByRole('button', /sort by.../i);
    expect(sortByButton).toBeInTheDocument();
  });

  test('renders search bar with placeholder', () => {
    renderWithRedux(App, store);
    const searchBar = screen.getByPlaceholderText(/type to search.../i);
    expect(searchBar).toBeInTheDocument();
  });
});
