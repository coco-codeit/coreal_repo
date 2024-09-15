import LoginForm from "./LoginForm";
import SignUpPrompt from "./SignUpPrompt";
import SocialLogin from "./SocialLogin";

export default function AuthenticationForm() {
  return (
    <section aria-labelledby="login-heading">
      <div className="w-full mx-auto max-w-[343px] sm:max-w-[510px] bg-white rounded-3xl px-8 py-6 sm:px-14 sm:py-8 md:mx-[102px]">
        <h2
          id="login-heading"
          className="text-base sm:text-display-3 md:text-display-1 font-bold pb-8 text-center"
        >
          로그인
        </h2>
        <LoginForm />
        <SignUpPrompt />
        <SocialLogin />
      </div>
    </section>
  );
}
