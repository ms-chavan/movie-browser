import { fireEvent, render, screen } from '@testing-library/react';
import { SortBy } from '..';

describe('SortBy', () => {
  let mockSelectedOption, mockOnSortingOptionChange;

  beforeEach(() => {
    mockSelectedOption = { name: 'Episode', type: 'ascending' };
    mockOnSortingOptionChange = jest.fn();
  });

  afterAll(() => {
    mockSelectedOption = null;
    mockOnSortingOptionChange = null;
  });

  test('should render Sort By Button', () => {
    render(
      <SortBy
        selectedOption={mockSelectedOption}
        onSortingOptionChange={mockOnSortingOptionChange}
      />
    );

    const sortByButton = screen.getByRole('button', {
      name: /sort by\.\.\./i,
    });

    expect(sortByButton).toBeInTheDocument();
  });

  test('should open options modal when sort by button is clicked', () => {
    render(
      <SortBy
        selectedOption={mockSelectedOption}
        onSortingOptionChange={mockOnSortingOptionChange}
      />
    );

    const sortByButton = screen.getByRole('button', {
      name: /sort by\.\.\./i,
    });

    fireEvent.click(sortByButton);

    const sortByOptionsModal = screen.getByTestId(/optionsModal/i);

    expect(sortByOptionsModal).toBeInTheDocument();
  });

  test('should close options modal when an option is selected', () => {
    render(
      <SortBy
        selectedOption={mockSelectedOption}
        onSortingOptionChange={mockOnSortingOptionChange}
      />
    );

    const sortByButton = screen.getByRole('button', {
      name: /sort by\.\.\./i,
    });

    fireEvent.click(sortByButton);

    const firstOption = screen.getByText(/Episode ↑/i);
    fireEvent.click(firstOption);

    const sortByOptionsModal = screen.queryByTestId(/optionsModal/i);

    expect(sortByOptionsModal).not.toBeInTheDocument();
  });
});
