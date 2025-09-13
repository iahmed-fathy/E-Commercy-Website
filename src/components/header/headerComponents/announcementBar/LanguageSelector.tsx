"use client";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const DropdownMenu = DropdownMenuPrimitive.Root;
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
const DropdownMenuContent = DropdownMenuPrimitive.Content;
const DropdownMenuItem = DropdownMenuPrimitive.Item;

export default function LanguageSelector() {
  const pathName = usePathname();
  const language = pathName.split("/")[1];
  const [currentLanguage, setCurrentLanguage] = useState(
    (language === "ar" && "العربية") ||
      (language === "en" && "English") ||
      (language === "es" && "Spanish") ||
      "English"
  );

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="flex items-center gap-2 text-white cursor-pointer focus:outline-0">
            <span className="font-normal ">{currentLanguage}</span>
            <svg
              width="13"
              height="8"
              viewBox="0 0 13 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.36403 4.95L11.314 0L12.728 1.414L6.36403 7.778L2.67029e-05 1.414L1.41403 0L6.36403 4.95Z"
                fill="white"
              />
            </svg>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="cursor-pointer z-20 shadow-md bg-black text-white p-2 text-center rounded-[6px] mt-2 mr-2 flex flex-col gap-2">
          <DropdownMenuItem
            onClick={() => setCurrentLanguage("العربية")}
            className="focus:outline-0"
          >
            <Link href={"/ar"}>العربية</Link>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => setCurrentLanguage("English")}
            className="focus:outline-0"
          >
            <Link href={"/en"}>English</Link>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => setCurrentLanguage("العربية")}
            className="focus:outline-0"
          >
            <Link href={"/es"}>Spanish</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
