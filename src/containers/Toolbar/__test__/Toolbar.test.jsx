import { createStore } from 'redux';
import * as ToolbarSelectors from '../selector';
import { fireEvent, screen } from '@testing-library/react';
import rootReducer from '../../../rootReducer';
import { renderWithRedux } from '../../../shared/testUtil';
import { Toolbar } from '..';
import userEvent from '@testing-library/user-event';

let store;

describe('Toolbar', () => {
  beforeEach(() => {
    // jest.spyOn(ToolbarSelectors, 'selectCurrentSortingOption').mockReturnValue(mockMovies);
    store = createStore(rootReducer);
  });

  test('should render toolbar', () => {
    renderWithRedux(Toolbar, store);
    const toolbarComponent = screen.getByTestId(/sort-and-search-toolbar/i);
    expect(toolbarComponent).toBeInTheDocument();
  });

  test('should render sortBy and Searchbar components', () => {
    renderWithRedux(Toolbar, store);
    const toolbarComponent = screen.getByTestId(/sort-and-search-toolbar/i);

    const sortByComponent = toolbarComponent.getElementsByClassName('sortByButton');
    const searchBarComponent = screen.getByRole('searchbox');

    expect(sortByComponent[0]).toBeInTheDocument();
    expect(searchBarComponent).toBeInTheDocument();
  });

  test('should open sortBy modal on click of sortBy button', () => {
    renderWithRedux(Toolbar, store);
    const toolbarComponent = screen.getByTestId(/sort-and-search-toolbar/i);

    const sortByComponent = toolbarComponent.getElementsByClassName('sortByButton');

    fireEvent.click(sortByComponent[0]);

    const sortByOptionsModal = screen.getByTestId(/optionsModal/i);

    expect(sortByOptionsModal).toBeInTheDocument();
  });

  test('should close sortBy modal upon selecting an option', () => {
    renderWithRedux(Toolbar, store);
    const toolbarComponent = screen.getByTestId(/sort-and-search-toolbar/i);

    const sortByComponent = toolbarComponent.getElementsByClassName('sortByButton');

    fireEvent.click(sortByComponent[0]);

    const firstOption = screen.getByText(/Episode ↑/i);
    fireEvent.click(firstOption);

    const sortByOptionsModal = screen.queryByTestId(/optionsModal/i);

    expect(sortByOptionsModal).not.toBeInTheDocument();
  });

  test('should update search box with typed text', () => {
    renderWithRedux(Toolbar, store);

    const searchBar = screen.getByRole('searchbox');
    userEvent.type(searchBar, 'term');

    expect(searchBar).toHaveValue('term');
  });
});
