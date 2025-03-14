"use client";

import Header from "./components/Header";
import { useDeviceType } from "./hook/useDeviceType";

export default function Home() {
  const { isMobile, isTablet, isDesktop } = useDeviceType();
  return (
    <>
      <div
        className={`w-full h-screen bg-black bg-[url('/img/banner.png')] bg-[position:center_top] bg-no-repeat ${
          isMobile ? "bg-contain" : ""
        }  ${isTablet ? "bg-contain" : ""}  ${isDesktop ? "bg-cover" : ""}`}
      >
        <div className="h-auto w-full px-4 py-8">
          <Header />
        </div>
      </div>
    </>
  );
}
