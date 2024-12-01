import { useEffect } from 'react';

export const useDotsAnimation = (updateDots, prevDots, isLoading) => {
  useEffect(() => {
    function animate() {
      if (isLoading) {
        console.info('rendser');
        updateDots(prevDots.length < 3 ? prevDots.concat('.') : '.');
      }
    }

    const animationInterval = setInterval(animate, 300);

    return () => {
      clearInterval(animationInterval);
    };
  }, [updateDots]);
};
