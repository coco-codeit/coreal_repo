import Link from "next/link";

export default function SignUpPrompt({ title }: { title: string }) {
  console.log(title);
  const isLoginPage = title === "로그인";

  return (
    <div className="flex justify-center text-xs sm:text-sm gap-x-1 sm:gap-x-[10px] mb-6">
      <p>{isLoginPage ? "CoReal이 처음이신가요?" : "이미 회원이신가요?"}</p>
      <Link
        href={isLoginPage ? "/signup" : "/login"}
        className="text-purple-5 underline"
      >
        <p>{isLoginPage ? "회원가입" : "로그인"}</p>
      </Link>
    </div>
  );
}
