import { memo, useCallback, useState } from 'react';
import { useDotsAnimation } from './hooks';
import './style.css';

export const Processing = memo(({ children, isLoading }) => {
  const [dots, setDots] = useState('.');
  const updateDots = useCallback((newDots) => setDots(newDots), [isLoading, dots]);

  useDotsAnimation(updateDots, dots, isLoading);

  return (
    <>
      {isLoading ? (
        <div data-testid="processingAnimation" className="processingScreen">
          {dots}
        </div>
      ) : (
        children
      )}
    </>
  );
});
