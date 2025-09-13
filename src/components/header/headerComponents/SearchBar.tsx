"use client";

import {
  selectSearchValue,
  setSearchValue,
} from "@/features/products/productsSlice";
import { useRouter } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

export default function SearchBar() {
  const t = useTranslations("headers");
  const locale = useLocale();
  const pathName = usePathname();

  const dispatch = useDispatch();
  const route = useRouter();

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchValue(e.target.value));
  };

  const onSearchSubmit = () => {
    console.log(pathName);
    if (pathName !== `/${locale}/searched-products`) {
      route.push(`/${locale}/searched-products`);
    }
  };

  const searchValue = useSelector(selectSearchValue);

  return (
    <div className="flex bg-[#F5F5F5] px-4 py-2 rounded-[4px] max-w-[280px] max-sm:w-[220px] items-center">
      <input
        type="text"
        placeholder={t("search bar")}
        className="focus:outline-0 w-full max-sm:placeholder:text-[10px]"
        value={searchValue}
        onChange={onSearchChange}
        onKeyDown={(e) => e.key === "Enter" && onSearchSubmit()}
      />
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="cursor-pointer"
        onClick={onSearchSubmit}
      >
        <path
          d="M20 20L16.2223 16.2156M18.3158 11.1579C18.3158 13.0563 17.5617 14.8769 16.2193 16.2193C14.8769 17.5617 13.0563 18.3158 11.1579 18.3158C9.2595 18.3158 7.43886 17.5617 6.0965 16.2193C4.75413 14.8769 4 13.0563 4 11.1579C4 9.2595 4.75413 7.43886 6.0965 6.0965C7.43886 4.75413 9.2595 4 11.1579 4C13.0563 4 14.8769 4.75413 16.2193 6.0965C17.5617 7.43886 18.3158 9.2595 18.3158 11.1579V11.1579Z"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
