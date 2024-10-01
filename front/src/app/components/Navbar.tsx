"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <nav className="container max-w-[1920px] py-[18px] bg-[#EA580C] text-white">
      <div className="flex justify-around items-center">
        <section className="flex gap-5 items-center">
          <div>
            <Link href="/" aria-label="Go to homepage">
              <Image
                width={73}
                height={35}
                alt="Site Logo Text"
                src="/images/logo-text.svg"
              />
            </Link>
          </div>

          <div className="flex mt-[2px] gap-6">
            <div>
              <Link href="/">모임 찾기</Link>
            </div>
            <div>
              <Link href="/#">찜한 모임</Link>
            </div>
            <div>
              <Link href="/#">모든 리뷰</Link>
            </div>
          </div>
        </section>

        <section>
          {!isLoggedIn ? (
            <>
              <Link href="/#" onClick={toggleLogin}>
                로그인
              </Link>
            </>
          ) : (
            <div className="relative">
              <Link href="/#" aria-label="Go to profile">
                <Image
                  width={40}
                  height={40}
                  alt="user profile"
                  src="/images/profile.svg"
                />
              </Link>
            </div>
          )}
        </section>
      </div>
    </nav>
  );
}
