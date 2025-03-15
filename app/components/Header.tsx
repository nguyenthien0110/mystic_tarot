"use client";

import Image from "next/image";

function Header() {
  return (
    <>
      <div className="h-full w-full almendra">
        <div className="h-8 flex flex-nowrap">
          <div className="h-8 w-full">
            <a
              href="#"
              className="text-[#fff] flex items-center px-4 h-full gap-2 text-xl hover:opacity-50"
            >
              <Image src="/img/logo.svg" alt="icon" width="24" height="24" />
              <span className="uppercase">Tiem Tarot</span>
            </a>
          </div>

          <div className="h-8 w-full text-[16px] text-[#fff] flex items-center justify-center gap-8">
            <a href="#" className="hover:opacity-50 uppercase">
              Tarot shop
            </a>
            <a href="#" className="hover:opacity-50 uppercase">
              Blog
            </a>
            <a href="#" className="hover:opacity-50 uppercase">
              Đăng ký
            </a>
            <a href="#" className="hover:opacity-50 uppercase">
              Đăng nhập
            </a>
          </div>
        </div>
        <div className="text-white h-72 flex items-end justify-center">
          <span className="text-7xl">
            <span className="westminster text-9xl">T</span>arot
          </span>
        </div>
      </div>
    </>
  );
}

export default Header;
