import AuthenticationForm from "@/components/AuthenticationForm";
import WelcomeMessage from "@/components/WelcomeMessage";

export default function LoginPage() {
  // TODO: 로그인, 회원가입 contant.ts 파일에 정리하기
  const title = "로그인";

  return (
    <section className="flex flex-col md:flex-row justify-center bg-gray-2 text-gray-15 pt-8 mb-8 md:pt-52">
      <WelcomeMessage />
      <AuthenticationForm title={title} />
    </section>
  );
}
