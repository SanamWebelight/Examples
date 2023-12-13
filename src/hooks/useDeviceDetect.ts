import { useEffect, useMemo, useState } from "react";

export const useDeviceDetect = () => {
  const [width, setWidth] = useState<number>();

  const handleWindowSizeChange = () => {
    if (typeof window !== "undefined") {
      setWidth(window?.innerWidth);
    }
  };
  const getDevice = useMemo(() => {
    if (width) {
      if (width <= 767) {
        return {
          isMobile: true,
          isTablet: true,
          isDesktop: false,
          isTabletOnly: false,
          isMobileLandscape: false,
          deviceWidth: width,
        };
      }

      if (
        window?.matchMedia("(orientation: landscape)").matches &&
        width < 1024
      ) {
        return {
          isMobileLandscape: true,
          isMobile: false,
          isTablet: false,
          isDesktop: false,
          isTabletOnly: false,
          deviceWidth: width,
        };
      }

      if (width >= 768 && width < 1024) {
        return {
          isMobile: false,
          isTablet: true,
          isDesktop: false,
          isTabletOnly: true,
          isMobileLandscape: false,
          deviceWidth: width,
        };
      }
    }

    return {
      isMobile: false,
      isTablet: false,
      isDesktop: true,
      isTabletOnly: false,
      isMobileLandscape: false,
      deviceWidth: width,
    };
  }, [width]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWidth(window?.innerWidth);
      window?.addEventListener("resize", handleWindowSizeChange);
    }

    return () => {
      if (typeof window !== "undefined") {
        window?.removeEventListener("resize", handleWindowSizeChange);
      }
    };
  }, []);

  return getDevice;
};
