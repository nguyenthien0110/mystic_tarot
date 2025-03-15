"use client";

import { useEffect, useState } from "react";
import Header from "./components/Header";
import { useDeviceType } from "./hook/useDeviceType";

export default function Home() {
  const { isMobile, isTablet, isDesktop } = useDeviceType();
  const [hasMounted, setHasMounted] = useState(false);
  const dotURL = process.env.NODE_ENV === "production" ? "." : "";

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return (
    <div
      style={{ backgroundImage: `url(${dotURL}/img/banner.png)` }}
      className={`w-full h-screen bg-black bg-[position:center_top] bg-no-repeat ${
        isMobile ? "bg-contain" : ""
      } ${isTablet ? "bg-contain" : ""} ${isDesktop ? "bg-cover" : ""}`}
    >
      <div
        className={`h-auto w-full py-8 ${isMobile ? "px-4" : ""} ${
          isTablet ? "px-8" : ""
        } ${isDesktop ? "px-16" : ""}`}
      >
        <Header />
      </div>
    </div>
  );
}
