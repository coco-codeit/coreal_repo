import Link from "next/link";
import github from "../../public/images/github.svg";
import kakao from "../../public/images/kakao.svg";
import naver from "../../public/images/naver.svg";
import Image from "next/image";

// TODO: OAuth 추가 작업
const SOCIAL_LOGIN_OPTIONS = [
  { url: "/", icon: github, alt: "깃허브" },
  { url: "/", icon: kakao, alt: "카카오" },
  { url: "/", icon: naver, alt: "네이버" },
];

export default function SocialLogin() {
  return (
    <nav aria-label="소셜 미디어 로그인 옵션">
      <ul className="flex justify-center gap-x-4">
        {SOCIAL_LOGIN_OPTIONS.map(({ url, icon, alt }) => (
          <li key={icon}>
            <Link href={url} aria-label={alt}>
              <div className="relative w-[36px] sm:w-[54px] h-[36px] sm:h-[54px] cursor-pointer">
                <Image src={icon} alt={alt} fill />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
