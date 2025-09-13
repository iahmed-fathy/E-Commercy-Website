"use client";
import Breadcrumb from "@/components/breadCrumbs/Breadcrumbs";
import AccountSideNave from "@/components/myAccount/accountSideNave";
import EditPtofileForm from "@/components/myAccount/EditPtofileForm";
import Welcome from "@/components/myAccount/Welcome";
import { auth } from "@/lib/firebase";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AccountPage() {
  const router = useRouter();
  const locale = useLocale();

  useEffect(() => {
    if (!auth.currentUser) {
      router.push(`/${locale}/sign-in`);
    }
  }, [router, locale]);

  return (
    <section className="flex flex-col gap-15 pt-10">
      <div className="flex justify-between max-sm:flex-col gap-5">
        <Breadcrumb />
        <Welcome />
      </div>
      <div className="flex gap-20 max-sm:flex-col px-10 max-lg:px-5">
        <AccountSideNave />
        <EditPtofileForm />
      </div>
    </section>
  );
}
