"use client";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged, User } from "firebase/auth";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

export default function Welcome() {
  const [user, setUser] = useState<User | null>(null);
  const t = useTranslations("headers");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      {user?.displayName && (
        <p className="text-[14px]">
          <span>{t("Welcome")}</span>{" "}
          <span className="text-[#DB4444]">{user?.displayName}</span>
        </p>
      )}
    </>
  );
}
