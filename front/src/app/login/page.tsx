import AuthenticationForm from "@/components/AuthenticationForm";
import WelcomeMessage from "@/components/WelcomeMessage";

export default function LoginPage() {
  return (
    <section className="flex flex-col md:flex-row justify-center bg-gray-2 text-gray-15 pt-8 mb-8 md:pt-52">
      <WelcomeMessage />
      <AuthenticationForm />
    </section>
  );
}
