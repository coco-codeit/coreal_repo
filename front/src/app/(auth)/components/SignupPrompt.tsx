import Link from "next/link";

export default function SignupPrompt() {
  return (
    <div className="flex justify-center text-xs sm:text-sm gap-x-1 sm:gap-x-[10px] mb-6">
      <p>CoReal이 처음이신가요?</p>
      <Link href="/signup" className="text-purple-5 underline">
        <p>회원가입</p>
      </Link>
    </div>
  );
}
