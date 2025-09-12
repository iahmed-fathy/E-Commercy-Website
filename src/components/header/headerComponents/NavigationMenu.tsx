"use client";

import Link from "next/link";
import type { Dispatch, SetStateAction } from "react";
import { useTranslations } from "next-intl";

type NavigationMenuType = {
  isDialogOpen?: boolean;
  setDialogOpen?: Dispatch<SetStateAction<boolean>>;
  className?: string;
};

export default function NavigationMenu({
  className,
  isDialogOpen,
  setDialogOpen,
}: NavigationMenuType) {
  const t = useTranslations("nav");

  const closeDialog = () => {
    if (isDialogOpen && setDialogOpen && isDialogOpen === true) {
      setDialogOpen(false);
    }
  };

  const navData = [
    {
      href: "/",
      label: t("Home"),
    },
    {
      href: "/contact",
      label: t("Contact"),
    },
    {
      href: "/about",
      label: t("About"),
    },
    {
      href: "/sign-up",
      label: t("Sign Up"),
    },
  ];

  return (
    <nav>
      <ul className={className}>
        {navData.map((page) => (
          <li key={page.href} className="w-full text-[20px]">
            <Link
              href={page.href}
              onClick={closeDialog}
              className=" max-xl:flex max-xl:w-full text-center"
            >
              <span className="group relative max-xl:w-full">
                {page.label}
                <span
                  className={`absolute -bottom-1 right-0 h-[2px] w-0 bg-black/40 group-hover:w-full transition-[width] duration-300 ease-in-out`}
                />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
