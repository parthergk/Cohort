import axios from "axios";
import SignIn from "./(auth)/signin/page";
import SignUp from "./(auth)/signup/page";

export default async function Home() {
  const response = await axios.get('http://localhost:3000/api/auth/signup');  

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      Wellcome Home
      <div className=" space-y-5">
        <SignIn/>
        <SignUp/>
      </div>
      <div>data: {response?.data?.message}</div>
    </div>
  );
}
