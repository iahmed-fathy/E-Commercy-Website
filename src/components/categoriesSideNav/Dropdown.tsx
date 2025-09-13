"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

type category = {
  categoryName: string;
  categoryPageUrl: string;
};

type DropdownType = {
  Trigger: string;
  Content?: string;
  categories?: category[];
  triggerLink?: string;
};

export default function Dropdown({
  Trigger,
  Content,
  categories,
  triggerLink,
}: DropdownType) {
  const t = useTranslations("headers");
  const locale = useLocale();

  return triggerLink ? (
    <Link
      href={`/${locale}${triggerLink}`}
      className="w-[300px] max-sm:justify-center max-sm:w-[170px] text-center hover:scale-105 px-4 py-2 text-black rounded cursor-pointer focus:outline-0 flex justify-between items-center gap-6"
    >
      {t(Trigger)}
    </Link>
  ) : (
    <div className="w-[300px] max-sm:w-[170px]">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button className="px-4 py-2 text-black rounded cursor-pointer focus:outline-0 w-fit max-sm:w-fit hover:scale-105">
            <div className="flex justify-between items-center gap-4">
              <div>{t(Trigger)}</div>
              <div>
                <svg
                  width="8"
                  height="13"
                  viewBox="0 0 8 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="rtl:rotate-180"
                >
                  <path
                    d="M4.95 6.63597L0 1.68597L1.414 0.271973L7.778 6.63597L1.414 13L0 11.586L4.95 6.63597Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Content
          className="w-[200px] bg-white shadow-md rounded p-2 z-50 sm:mt-[-10px]"
          sideOffset={5}
        >
          {Content}

          {categories?.map((category) => (
            <DropdownMenu.Item
              className="px-3 py-2 rounded hover:bg-gray-100 w-full focus:outline-0"
              key={category.categoryPageUrl}
            >
              <Link
                href={`/${locale}${category.categoryPageUrl}`}
                className="flex items-center"
              >
                {t(category.categoryName)}
              </Link>
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  );
}
