"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();

  // ToDo: 로그인 연결
  useEffect(() => {
    const checkLoginStatus = () => {
      setIsLoggedIn(false);
    };
    checkLoginStatus();
  }, []);

  const isCurrentRoute = (route: string) => pathname === route;

  return (
    <nav className="container max-w-[1200px] my-5 px-6 mx-auto font-sans">
      <div className="flex justify-between h-20">
        <section className="flex items-center">
          <div className="flex mr-2 sm:mr-6">
            <Link href="/" aria-label="Go to homepage">
              <Image
                width={38}
                height={38}
                alt="Site Logo"
                src="/image/logo.svg"
              />
            </Link>
            <Image
              className="sm:flex hidden items-center ml-3"
              width={125}
              height={32}
              alt="Site Logo Text"
              src="/image/logo-text.svg"
            />
          </div>

          <div className="flex text-subhead-3 font-bold">
            <Link
              href="/"
              className={`ml-1 sm:ml-5 ${isCurrentRoute("/") ? "underline" : ""}`}
            >
              모임찾기
            </Link>
            <Link
              href="/favorites"
              className={`ml-1 sm:ml-5 ${isCurrentRoute("/favorites") ? "underline" : ""}`}
            >
              찜한모임
            </Link>
          </div>
        </section>

        <section className="flex items-center text-body-2 font-normal">
          {!isLoggedIn ? (
            <>
              <Link
                className={`sm:mr-5 ${isCurrentRoute("/login") ? "underline" : ""}`}
                href="/login"
              >
                로그인
              </Link>
              <Link
                className={`ml-2 ${isCurrentRoute("/signup") ? "underline" : ""}`}
                href="/signup"
              >
                회원가입
              </Link>
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
                  src="/image/profile.png"
                />
                <div className="ml-3">유저 님</div>
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg">
                  <ul>
                    <li>
                      <Link href="/profile/1">
                        <a className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                          Profile
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/logout">
                        <a className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                          Logout
                        </a>
                      </Link>
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
