import { useState, useEffect } from 'react';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const isMobileDevice = /Mobi/i.test(navigator.userAgent);
    setIsMobile(isMobileDevice);
  }, []);

  return isMobile;
};

export default useIsMobile;
