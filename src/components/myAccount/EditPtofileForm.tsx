"use client";

import { auth } from "@/lib/firebase";
import { useEffect, useState } from "react";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import Link from "next/link";
import { updateEmail, updatePassword, updateProfile } from "firebase/auth";
import { EmailAuthProvider, reauthenticateWithCredential } from "firebase/auth";

export default function EditPtofileForm() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const getAddress = async (userId: string) => {
    const docRef = doc(db, "users", userId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data().address || "";
    }
    return "";
  };

  const reauthenticate = async (currentPassword: string) => {
    if (!auth.currentUser || !auth.currentUser.email)
      throw new Error("لا يوجد مستخدم");
    const credential = EmailAuthProvider.credential(
      auth.currentUser.email,
      currentPassword
    );
    await reauthenticateWithCredential(auth.currentUser, credential);
  };

  const handleSaveChanges = async () => {
    if (!auth.currentUser) return;

    try {
      await updateProfile(auth.currentUser, {
        displayName: fname + " " + lname,
      });

      if (auth.currentUser.email !== email) {
        await updateEmail(auth.currentUser, email);
      }

      if (address.length > 0) {
        await setDoc(
          doc(db, "users", auth.currentUser.uid),
          { address },
          { merge: true }
        );
      }

      if (newPassword.length > 0 || confirmPassword.length > 0) {
        if (newPassword !== confirmPassword) {
          alert("كلمة المرور الجديدة غير متطابقة مع التأكيد");
          return;
        }

        if (!currentPassword) {
          alert("الرجاء إدخال كلمة المرور الحالية لتغيير كلمة المرور");
          return;
        }

        await reauthenticate(currentPassword);
        await updatePassword(auth.currentUser, newPassword);
      }

      alert("تم تحديث البيانات بنجاح");
    } catch (error: any) {
      alert("حدث خطأ: " + error.message);
    }
  };

  useEffect(() => {
    const user = auth.currentUser;
    if (!user || user === undefined) {
      return;
    } else {
      const userName = user.displayName?.split(" ");
      if (!userName) return;
      setFname(userName[0]);
      setLname(userName[1]);
      setEmail(user?.email || "");
      getAddress(user.uid).then(setAddress);
    }
  }, []);

  return (
    <form className="p-15 max-sm:p-5 shadow w-full flex flex-col gap-6 items-center justify-between">
      <h1 className="text-[20px] text-[#DB4444] font-semibold">
        Edit Your Profile
      </h1>
      <div className="grid grid-cols-2 gap-x-15 gap-y-5 max-lg:grid-cols-1">
        <div className="flex flex-col gap-2">
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            name="fname"
            id="fname"
            className="bg-[#F5F5F5] p-3 rounded-[4px] focus:outline-0"
            placeholder="Ahmed"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            name="lname"
            id="lname"
            className="bg-[#F5F5F5] p-3 rounded-[4px] focus:outline-0"
            placeholder="Fathy"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="bg-[#F5F5F5] p-3 rounded-[4px] focus:outline-0"
            placeholder="iahmed.fathy@hotmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            id="address"
            className="bg-[#F5F5F5] p-3 rounded-[4px] focus:outline-0"
            placeholder="Kingston, 5236, United State"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2 col-span-2 max-lg:col-span-1">
          <label htmlFor="passwordChanges">Password Changes</label>
          <input
            type="password"
            name="currentPassword"
            id="currentPassword"
            className="bg-[#F5F5F5] p-3 rounded-[4px] focus:outline-0"
            placeholder="Current Password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
          <input
            type="password"
            name="newPassword"
            id="newPassword"
            className="bg-[#F5F5F5] p-3 rounded-[4px] focus:outline-0"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            className="bg-[#F5F5F5] p-3 rounded-[4px] focus:outline-0"
            placeholder="Confirm New Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
      </div>
      <div className="self-end max-sm:self-center flex gap-10">
        <Link
          href={"/"}
          className="text-[16px] cursor-pointer flex items-center justify-center"
        >
          Cancel
        </Link>
        <button
          type="button"
          className="bg-[#DB4444] cursor-pointer rounded-[4px] text-white w-[214px] max-sm:w-[100px] h-[56px] flex items-center justify-center text-[16px] font-medium"
          onClick={handleSaveChanges}
        >
          Save Changes
        </button>
      </div>
    </form>
  );
}
