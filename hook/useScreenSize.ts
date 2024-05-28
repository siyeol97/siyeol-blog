import { RefObject, useEffect, useState } from 'react';

const useScreenSize = (ref: RefObject<HTMLElement>) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const setScreenSize = () => {
      if (ref.current) {
        setWidth(ref.current.clientWidth);
        setHeight(ref.current.clientHeight);
        setIsSmallScreen(window.matchMedia('(max-width: 767px)').matches);
      }
    };
    setScreenSize();

    window.addEventListener('resize', setScreenSize);

    return () => {
      window.removeEventListener('resize', setScreenSize);
    };
  }, []);

  const screenSize = { width, height, isSmallScreen };

  return screenSize;
};

export default useScreenSize;
