"use client";

import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { auth } from "@/lib/firebase";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  const handleError = (error: unknown) => {
    if (error instanceof Error) {
      return error.message;
    }
    return String(error);
  };

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      if (auth.currentUser) {
        await updateProfile(auth.currentUser, { displayName: name });
      }
      alert("تم إنشاء الحساب بنجاح");
      router.push("/");
    } catch (err: unknown) {
      setError(handleError(err));
    }
  };

  const signUpWithGoolge = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const userName = user.displayName;
      if (auth.currentUser) {
        await updateProfile(auth.currentUser, { displayName: userName });
      }
      alert(`تم تسجيل الدخول بنجاح: ${user.displayName}`);
      router.push("/");
    } catch (err: unknown) {
      setError(handleError(err));
    }
  };

  return (
    <section className="flex gap-30">
      <Image
        src={"/logIn.png"}
        alt="signup image"
        width={500}
        height={300}
        className="w-[700px]"
      />
      <div className="p-4 flex flex-col gap-4">
        <h1 className="font-medium text-[36px]">Create an account</h1>
        <p className="text-[16px]">Enter your details below</p>
        <input
          className="border-b-2 focus:outline-0  p-2 w-full mb-2"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className="border-b-2 focus:outline-0  p-2 w-full mb-2"
          type="email"
          placeholder="Email or Phone Number"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="border-b-2 focus:outline-0  p-2 w-full mb-2"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          className="cursor-pointer bg-[#DB4444] text-white p-2 rounded-[4] h-[56px]"
          onClick={handleSignUp}
        >
          Create Account
        </button>

        <button
          className="cursor-pointer flex items-center gap-2 justify-center border-2 p-2 rounded-[4] h-[56px]"
          onClick={signUpWithGoolge}
        >
          <Image
            src={"/icons/googleIcon.png"}
            alt="google icon"
            width={24}
            height={24}
          />
          <span>Sign up with Google</span>
        </button>

        <p className="text-[16px] flex items-center justify-center gap-2 text-black/40">
          <span>Already have account?</span>
          <Link href={"/sign-in"} className="underline font-medium">
            Log in
          </Link>
        </p>

        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>
    </section>
  );
}
