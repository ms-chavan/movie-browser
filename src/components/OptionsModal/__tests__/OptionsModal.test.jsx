import { fireEvent, render, screen } from '@testing-library/react';
import { OptionsModal } from '..';

describe('OptionsModal', () => {
  let mockTitle, mockOptions, mockOnClose, mockOnChange;

  beforeEach(() => {
    mockTitle = 'Test Modal';
    mockOptions = [
      { name: 'Option1', type: 'ascending' },
      { name: 'Option2', type: 'descending' },
    ];
    mockOnClose = jest.fn();
    mockOnChange = jest.fn();
  });

  afterAll(() => {
    mockTitle = null;
    mockOptions = null;
    mockOnChange = null;
    mockOnClose = null;
  });

  test('should render options modal', () => {
    render(
      <OptionsModal
        title={mockTitle}
        options={mockOptions}
        selectedOption={mockOptions[0]}
        onClose={mockOnClose}
        onOptionChange={mockOnChange}
      />
    );

    const modal = screen.getByTestId(/optionsmodal/i);

    expect(modal).toBeInTheDocument();
  });

  test('should display title and close icon in options modal header', () => {
    render(
      <OptionsModal
        title={mockTitle}
        options={mockOptions}
        selectedOption={mockOptions[0]}
        onClose={mockOnClose}
        onOptionChange={mockOnChange}
      />
    );

    const modal = screen.getByTestId(/optionsmodal/i);
    const title = screen.getByTestId(/modaltitle/i);
    const closeIcon = modal.getElementsByClassName('iconClose');

    expect(title).toHaveTextContent(mockTitle);
    expect(closeIcon.length).toEqual(1);
    expect(closeIcon[0]).toBeInTheDocument();
  });

  test('should handle onClose and onChange events of modal', () => {
    render(
      <OptionsModal
        title={mockTitle}
        options={mockOptions}
        selectedOption={mockOptions[0]}
        onClose={mockOnClose}
        onOptionChange={mockOnChange}
      />
    );

    const modal = screen.getByTestId(/optionsmodal/i);
    const closeIcon = modal.getElementsByClassName('iconClose');

    const firstOption = screen.getByText(/Option1 ↑/i);

    fireEvent.click(closeIcon[0]);
    expect(mockOnClose).toHaveBeenCalled();

    fireEvent.click(firstOption);
    expect(mockOnChange).toHaveBeenCalled();
  });
});
