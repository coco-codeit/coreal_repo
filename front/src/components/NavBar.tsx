"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();

  // ToDo: 로그인 연결
  useEffect(() => {
    localStorage.setItem("token", "123");
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    token && setIsLoggedIn(true);
  }, []);

  const isCurrentRoute = (route: string) => pathname === route;

  const logoutHandler = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  const scaleInCenter = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <nav className="container max-w-[1200px] my-5 px-6 mx-auto font-sans">
      <div className="flex justify-between h-20">
        <section className="flex items-center">
          <div className="flex mr-2 sm:mr-6">
            <Link
              href="/gatherings"
              aria-label="Go to homepage"
              className="flex items-center"
            >
              <Image
                width={38}
                height={38}
                alt="Site Logo"
                src="/images/logo.svg"
              />
              <Image
                className="sm:flex hidden items-center ml-3"
                width={125}
                height={32}
                alt="Site Logo Text"
                src="/images/logo-text.svg"
              />
            </Link>
          </div>

          <div className="flex text-subhead-3 font-bold relative">
            <div className="flex flex-col items-center w-[98px]">
              <Link className="my-1" href="/gatherings">
                모임찾기
              </Link>
              {isCurrentRoute("/gatherings") && (
                <motion.div
                  className="w-[78px] h-1 bg-purple-4 rounded-full"
                  initial="hidden"
                  animate="visible"
                  variants={scaleInCenter}
                />
              )}
            </div>
            <div className="flex flex-col items-center w-[98px]">
              <Link className="my-1" href="/likes">
                찜한모임
              </Link>
              {isCurrentRoute("/likes") && (
                <motion.div
                  className="w-[78px] h-1 bg-purple-4 rounded-full"
                  initial="hidden"
                  animate="visible"
                  variants={scaleInCenter}
                />
              )}
            </div>
          </div>
        </section>

        <section className="flex items-center text-body-2 font-normal">
          {!isLoggedIn ? (
            <>
              <Link href="/login">로그인</Link>
              <div className="w-0.5 h-4 bg-gray-4 rounded-0.5 sm:mx-5 mx-1"></div>
              <Link href="/signup">회원가입</Link>
            </>
          ) : (
            <div className="relative">
              <button
                className="flex items-center"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <Image
                  className="sm:flex hidden items-center ml-3"
                  width={32}
                  height={32}
                  alt="user profile"
                  src="/images/profile.png"
                />
                <div className="ml-3">유저 님</div>
              </button>
              {isDropdownOpen && (
                <div
                  onMouseLeave={() => setIsDropdownOpen(false)}
                  className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg"
                >
                  <ul>
                    <li>
                      <Link
                        href="/profile/1"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        프로필
                      </Link>
                    </li>
                    <li>
                      <div
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                        onClick={() => logoutHandler()}
                      >
                        로그아웃
                      </div>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          )}
        </section>
      </div>
    </nav>
  );
}
