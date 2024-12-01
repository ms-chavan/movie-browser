import { useEffect } from 'react';

export const useDotsAnimation = (updateDots, prevDots) => {
  useEffect(() => {
    function animate() {
      updateDots(prevDots.length < 3 ? prevDots.concat('.') : '.');
    }

    const animationInterval = setInterval(animate, 300);

    return () => {
      clearInterval(animationInterval);
    };
  }, [updateDots]);
};
