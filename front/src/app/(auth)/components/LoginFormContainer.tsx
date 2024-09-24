import LoginForm from "./LoginForm";
import OpenAuthorization from "./OpenAuthorization";
import SignupPrompt from "./SignupPrompt";

export default function LoginFormContainer() {
  return (
    <section aria-labelledby="login-heading">
      <div className="w-full mx-auto max-w-[343px] sm:max-w-[510px] bg-white rounded-2xl sm:rounded-3xl px-8 py-6 sm:px-14 sm:py-8 md:mx-[102px]">
        <h2
          id="login-heading"
          className="text-base sm:text-display-3 md:text-display-1 font-bold pb-8 text-center"
        >
          로그인
        </h2>
        <LoginForm />
        <SignupPrompt />
        <OpenAuthorization />
      </div>
    </section>
  );
}
