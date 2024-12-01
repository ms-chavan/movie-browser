import { render, screen } from '@testing-library/react';
import { Processing } from '..';

describe('Processing', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('should display processing animation when isLoading is true', () => {
    render(
      <Processing isLoading={true}>
        <div>content</div>
      </Processing>
    );

    jest.advanceTimersByTime(1000);

    const processingComponent = screen.getByTestId(/processingAnimation/i);
    const content = screen.queryByText(/content/i);

    expect(processingComponent).toBeInTheDocument();
    expect(content).not.toBeInTheDocument();
  });

  test('should display content when isLoading is false', () => {
    render(
      <Processing isLoading={false}>
        <div>content</div>
      </Processing>
    );

    const processingComponent = screen.queryByTestId(/processingAnimation/i);
    const content = screen.getByText(/content/i);

    expect(content).toBeInTheDocument();
    expect(processingComponent).not.toBeInTheDocument();
  });
});
