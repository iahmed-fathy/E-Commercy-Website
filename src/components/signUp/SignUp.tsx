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
import { useLocale, useTranslations } from "next-intl";

export default function SignUp() {
  const locale = useLocale();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const t = useTranslations("SignUp");
  const router = useRouter();

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      if (auth.currentUser) {
        await updateProfile(auth.currentUser, { displayName: name });
      }
      router.push(`/${locale}`);
    } catch (err: unknown) {
      console.error(err);
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
      router.push(`/${locale}`);
    } catch (err: unknown) {
      console.error(err);
    }
  };

  return (
    <section className="flex gap-30 px-10 max-lg:px-5 max-sm:flex-col">
      <Image
        src={"/logIn.png"}
        alt="signup image"
        width={500}
        height={300}
        className="w-full"
      />
      <div className="p-4 flex flex-col gap-4 w-full">
        <h1 className="font-medium text-[36px]">{t("Create an account")}</h1>
        <p className="text-[16px] mb-2">{t("Enter your details below")}</p>
        <input
          className="border-b-2 focus:outline-0  py-2 w-full mb-2"
          type="text"
          placeholder={t("Name")}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className="border-b-2 focus:outline-0  py-2 w-full mb-2"
          type="email"
          placeholder={t("Email or Phone Number")}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="border-b-2 focus:outline-0  py-2 w-full mb-2"
          type="password"
          placeholder={t("Password")}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          className="cursor-pointer bg-[#DB4444] text-white p-2 rounded-[4] h-[56px]"
          onClick={handleSignUp}
          type="button"
        >
          {t("Create Account")}
        </button>

        <button
          className="cursor-pointer flex items-center gap-2 justify-center border-2 p-2 rounded-[4] h-[56px]"
          onClick={signUpWithGoolge}
          type="button"
        >
          <Image
            src={"/icons/googleIcon.png"}
            alt="google icon"
            width={24}
            height={24}
          />
          <span>{t("Sign up with Google")}</span>
        </button>

        <p className="text-[16px] flex items-center justify-center gap-2 text-black/40">
          <span>{t("Already have account")}</span>
          <Link href={"/sign-in"} className="underline font-medium">
            {t("Log in")}
          </Link>
        </p>
      </div>
    </section>
  );
}
