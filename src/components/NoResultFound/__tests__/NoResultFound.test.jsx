import { render, screen } from '@testing-library/react';
import { NoResultFound } from '..';

describe('NoResultFound', () => {
  let testMessage;
  beforeEach(() => {
    testMessage = 'Result not found!';
  });

  afterAll(() => {
    testMessage = null;
  });

  test('should display message provided', () => {
    render(<NoResultFound message={testMessage} />);

    const noResultFoundComponent = screen.getByText(/Result not found!/i);

    expect(noResultFoundComponent).toBeInTheDocument();
    expect(noResultFoundComponent).toHaveClass('noResultFound');
  });

  test('should display default message when message is not provided', () => {
    render(<NoResultFound />);

    const noResultFoundComponent = screen.getByText(/no result found!/i);

    expect(noResultFoundComponent).toBeInTheDocument();
    expect(noResultFoundComponent).toHaveClass('noResultFound');
  });
});
