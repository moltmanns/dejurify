import { SignUp } from "@clerk/nextjs";

export default function SignupPage() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat px-4"
      style={{ backgroundImage: "url('/assets/bg-hero.jpg')" }} // replace with your actual path
    >
      <div className="bg-white bg-opacity-90 p-6 rounded-xl shadow-xl w-full max-w-md">
        <SignUp />
      </div>
    </div>
  );
}
