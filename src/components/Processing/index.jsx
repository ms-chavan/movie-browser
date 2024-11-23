import { memo, useState } from 'react';
import { useDotsAnimation } from './hooks';
import './style.css';
import { arePropsSameBy } from '../../shared/util';

export const Processing = memo(({ children, isLoading }) => {
  const [dots, setDots] = useState('.');

  useDotsAnimation(setDots);

  return <>{isLoading ? <div className="processingScreen">{dots}</div> : children}</>;
}, arePropsSameBy('isLoading'));
