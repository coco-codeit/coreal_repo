import LoginPrompt from "./LoginPrompt";
import OpenAuthorization from "./OpenAuthorization";
import SignupForm from "./SignupForm";

export default function SignupFormContainer() {
  return (
    <section aria-labelledby="signup-heading">
      <div className="container mx-auto max-w-[343px] sm:max-w-[510px] bg-white rounded-2xl sm:rounded-3xl px-8 py-6 sm:px-14 sm:py-8 md:mx-[102px]">
        <h2
          id="signup-heading"
          className="text-base sm:text-display-3 md:text-display-1 font-bold pb-8 text-center"
        >
          회원가입
        </h2>
        <SignupForm />
        <LoginPrompt />
        <OpenAuthorization />
      </div>
    </section>
  );
}
