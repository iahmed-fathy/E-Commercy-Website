"use client";

import Link from "next/link";
import type { Dispatch, SetStateAction } from "react";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();

  const closeDialog = () => {
    if (isDialogOpen && setDialogOpen && isDialogOpen === true) {
      setDialogOpen(false);
    }
  };

  const navData = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/contact",
      label: "Contact",
    },
    {
      href: "/about",
      label: "About",
    },
    {
      href: "/sign-up",
      label: "Sign Up",
    },
  ];

  return (
    <nav className="w-full">
      <ul className={className}>
        {navData.map((page) => (
          <li key={page.href} className="group relative w-fit">
            <Link href={page.href} onClick={closeDialog}>
              {page.label}
            </Link>
            <span
              className={`absolute -bottom-1 right-0 h-[2px] w-0 bg-black/40 group-hover:w-full transition-[width] duration-300 ease-in-out ${
                pathname === page.href && "w-full"
              }`}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}
