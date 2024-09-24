import SignupFormContainer from "../components/SignupFormContainer";

export default function SignupPage() {
  return (
    <section className="flex flex-col md:flex-row justify-center bg-gray-2 text-gray-15 pt-8 mb-8 md:pt-52">
      {/* </section><section className="flex flex-col items-center"> */}
      <SignupFormContainer />
    </section>
  );
}
