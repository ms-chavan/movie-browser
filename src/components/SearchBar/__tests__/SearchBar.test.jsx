import { render, screen } from '@testing-library/react';
import { SearchBar } from '..';
import userEvent from '@testing-library/user-event';

describe('SearchBar', () => {
  let mockSearchTerm, mockOnSearchTermChange;

  beforeEach(() => {
    mockSearchTerm = 'tex';
    mockOnSearchTermChange = jest.fn();
  });

  afterAll(() => {
    mockSearchTerm = null;
    mockOnSearchTermChange = null;
  });

  test('should render Search Bar', () => {
    render(<SearchBar searchText={mockSearchTerm} onSearchTermChange={mockOnSearchTermChange} />);

    const searchBar = screen.getByRole('searchbox');

    expect(searchBar).toBeInTheDocument();
  });

  test('should triger on change event when input has changed', () => {
    render(<SearchBar searchText={mockSearchTerm} onSearchTermChange={mockOnSearchTermChange} />);

    const searchBar = screen.getByRole('searchbox');

    userEvent.type(searchBar, 't');

    expect(mockOnSearchTermChange).toHaveBeenCalled();
  });
});
