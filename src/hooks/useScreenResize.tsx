import React, { useEffect, useState } from 'react';

type viewProps = {
  width: number;
  height: number;
  isMobile: boolean;
};

const useScreenResize = (): Array<viewProps> => {
  const [viewPort, setviewPort] = useState<viewProps>({
    width: 0,
    height: 0,
    isMobile: false,
  });

  useEffect(() => {
    setviewPort({
      width: window.innerWidth,
      height: window.innerHeight,
      isMobile: window.innerWidth < 740,
    });
    window.addEventListener('resize', () => {
      setviewPort({
        width: window.innerWidth,
        height: window.innerHeight,
        isMobile: window.innerWidth < 740,
      });
    });
    return () => {
      window.removeEventListener('resize', () => {});
    };
  }, []);

  return [viewPort];
};

export default useScreenResize;
