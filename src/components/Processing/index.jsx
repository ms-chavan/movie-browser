import { memo, useCallback, useState } from 'react';
import { useDotsAnimation } from './hooks';
import './style.css';

export const Processing = memo(({ children, isLoading }) => {
  const [dots, setDots] = useState('.');
  const updateDots = useCallback((newDots) => setDots(newDots), []);

  useDotsAnimation(updateDots, dots);

  return <>{isLoading ? <div className="processingScreen">{dots}</div> : children}</>;
});
