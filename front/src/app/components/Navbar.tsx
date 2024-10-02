"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const pathname = usePathname();

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const isActive = (path: string) =>
    pathname === path || (path === "/" && pathname === "/gatherings")
      ? "text-[#111827]"
      : "text-[#FFF7ED]";

  return (
    <nav className="container max-w-[1920px] h-14 md:max-h-[60px] bg-[rgb(234,88,12)] text-white border-b-2 border-[#111827]">
      <div className="flex h-full lg:justify-around items-center md:px-6 justify-between px-4">
        <section className="flex md:gap-5 gap-3 items-center">
          <div className="hidden md:block">
            <Link href="/" aria-label="Go to homepage">
              <Image
                width={73}
                height={35}
                alt="Site Logo Text"
                src="/images/logo-text.svg"
              />
            </Link>
          </div>
          <div className="md:hidden">
            <Link href="/" aria-label="Go to homepage">
              <Image
                width={56}
                height={27}
                alt="Site Logo Text"
                src="/images/logo-text-small.svg"
              />
            </Link>
          </div>

          <div className="flex pt-[2px] md:gap-6 gap-3">
            <div>
              <Link href="/" className={isActive("/")}>
                모임 찾기
              </Link>
            </div>
            <div>
              <Link href="/#" className={isActive("/#")}>
                찜한 모임
              </Link>
            </div>
            <div>
              <Link href="/reviews" className={isActive("/reviews")}>
                모든 리뷰
              </Link>
            </div>
          </div>
        </section>

        <section>
          {!isLoggedIn ? (
            <>
              <Link href="/#" onClick={toggleLogin} className={isActive("/#")}>
                로그인
              </Link>
            </>
          ) : (
            <div className="relative">
                <Image
                  width={40}
                  height={40}
                  alt="profile"
                  src="/images/profile.svg"
                />
            </div>
          )}
        </section>
      </div>
    </nav>
  );
}
