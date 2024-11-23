import { useEffect } from 'react';

export const useDotsAnimation = (setDots) => {
  useEffect(() => {
    function animate() {
      setDots((prevDots) => {
        if (prevDots.length < 3) {
          return prevDots.concat('.');
        } else {
          return '.';
        }
      });
    }

    const animationInterval = setInterval(animate, 300);

    return () => clearInterval(animationInterval);
  }, []);
};
