"use client";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged, User } from "firebase/auth";
import { useEffect, useState } from "react";

export default function Welcome() {
  const [user, setUser] = useState<User | null>(null);

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
          <span>Welcome! </span>{" "}
          <span className="text-[#DB4444]">{user?.displayName}</span>
        </p>
      )}
    </>
  );
}
