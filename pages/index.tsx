import type { NextPage } from "next";
import Image from "next/image";
import FormGroup from "../components/FormGroup";

const Home: NextPage = () => {
  return (
    <div className="h-full w-full flex flex-col gap-6">
      <div className="mx-auto mt-24">
        <Image src="/apple-icon-180x180.png" width={160} height={160} layout="fixed" alt="Ronin Wallet Logo" />
      </div>
      <div className="mx-auto">
        <h1 className="font-bold text-center text-2xl">Ronin Wallet</h1>
        <h2 className="mt-2 text-center text-sm text-slate-500">Your Digital Passport</h2>
      </div>
      <div className="w-full bg-white grow flex flex-col items-center gap-6">
        <FormGroup className="w-full">
          <label htmlFor="password">Enter password</label>
          <input id="password" type="password" />
        </FormGroup>
        <button type="button">Unlock</button>
      </div>
    </div>
  );
};

export default Home;
