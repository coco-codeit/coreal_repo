import Link from "next/link";
export default function LoginPrompt() {
  return (
    <div className="flex justify-center text-xs sm:text-sm gap-x-1 sm:gap-x-[10px] mb-6">
      <p>이미 회원이신가요?</p>
      <Link href="/login" className="text-purple-5 underline">
        <p>로그인</p>
      </Link>
    </div>
  );
}
