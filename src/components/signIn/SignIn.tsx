"use client";

import { useState } from "react";
import {
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { auth } from "@/lib/firebase";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const resetPassword = async (email: string) => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert("تم إرسال رابط إعادة تعيين كلمة المرور إلى بريدك الإلكتروني");
    } catch {
      setError("برجاء ادخل بريد الكتروني صحيح");
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const userName = user.displayName;
      if (auth.currentUser) {
        await updateProfile(auth.currentUser, { displayName: userName });
      }
      router.push("/");
    } catch {
      setError("يوجد خطأ فى اسم المستخدم او كلمة السر");
    }
  };

  const signInWithGoolge = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const userName = user.displayName;
      if (auth.currentUser) {
        await updateProfile(auth.currentUser, { displayName: userName });
      }
      router.push("/");
    } catch (err: unknown) {
      console.error(err);
    }
  };

  return (
    <section className="flex gap-30 max-sm:flex-col">
      <Image
        src={"/logIn.png"}
        alt="signup image"
        width={500}
        height={300}
        className="w-[700px]"
      />
      <div className="p-4 flex flex-col gap-4">
        <h1 className="font-medium text-[36px]">Sign in to Exclusive</h1>
        <p className="text-[16px] mb-2">Enter your details below</p>
        <input
          className="border-b-2 focus:outline-0  py-2 w-full mb-2"
          type="email"
          placeholder="Email or Phone Number"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="border-b-2 focus:outline-0  py-2 w-full mb-2"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div className="flex justify-between">
          <button
            className="cursor-pointer bg-[#DB4444] text-white p-2 rounded-[4] h-[56px] w-[143px]"
            onClick={() => signIn(email, password)}
            type="button"
          >
            Log In
          </button>

          <button
            className="text-[#DB4444] text-[16px] cursor-pointer"
            onClick={() => resetPassword(email)}
          >
            Forget Password?
          </button>
        </div>
        <button
          className="cursor-pointer flex items-center gap-2 justify-center border-2 p-2 rounded-[4] h-[56px]"
          onClick={signInWithGoolge}
          type="button"
        >
          <Image
            src={"/icons/googleIcon.png"}
            alt="google icon"
            width={24}
            height={24}
          />
          <span>Sign in with Google</span>
        </button>
        {error.length > 0 && (
          <p className="text-red-500 text-center">{error}</p>
        )}
      </div>
    </section>
  );
}
