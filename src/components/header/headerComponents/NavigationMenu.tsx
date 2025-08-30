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
      console.log("hello");
      setDialogOpen(false);
    }
  };

  return (
    <nav className="w-full">
      <ul className={className}>
        <li>
          <Link
            href="/"
            className={`hover:border-b-[.5px] border-black transform transition-transform ${
              pathname === "/" ? "scale-150 block" : ""
            }`}
            onClick={closeDialog}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className={`hover:border-b-[.5px] border-black transform transition-transform ${
              pathname === "/contact" ? "scale-150 block" : ""
            }`}
            onClick={closeDialog}
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={`hover:border-b-[.5px] border-black transform transition-transform ${
              pathname === "/about" ? "scale-150 block" : ""
            }`}
            onClick={closeDialog}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/signup"
            className={`hover:border-b-[.5px] border-black transform transition-transform ${
              pathname === "/signup" ? "scale-150 block" : ""
            }`}
            onClick={closeDialog}
          >
            Sign Up
          </Link>
        </li>
      </ul>
    </nav>
  );
}
