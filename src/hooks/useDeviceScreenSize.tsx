import { useState, useEffect } from 'react';

interface IUseDeviceScreenSizeProps {
  width?: number | undefined;
  height?: number | undefined;
}

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<IUseDeviceScreenSizeProps>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleSize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleSize);
    handleSize();
    return () => window.removeEventListener('resize', handleSize);
  }, []);
  return windowSize;
};

