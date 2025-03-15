import { useState, useEffect } from "react";

const getDeviceType = () => {
  if (typeof window === "undefined")
    return { isMobile: false, isTablet: false, isDesktop: false };
  const width = window.innerWidth;
  return {
    isMobile: width < 768,
    isTablet: width >= 768 && width < 1024,
    isDesktop: width >= 1024,
  };
};

export const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  });
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    setDeviceType(getDeviceType());

    const handleResize = () => setDeviceType(getDeviceType());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return hasMounted
    ? deviceType
    : { isMobile: false, isTablet: false, isDesktop: false };
};
