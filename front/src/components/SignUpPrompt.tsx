import Link from "next/link";

export default function SignUpPrompt() {
  return (
    <div className="flex justify-center text-xs sm:text-sm gap-x-1 sm:gap-x-[10px] mb-6">
      <p>Coreal이 처음이신가요?</p>
      <Link href="/signup" className="text-purple-5 underline">
        회원가입
      </Link>
    </div>
  );
}
