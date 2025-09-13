"use client";
import Link from "next/link";
import { useRef } from "react";
import categories from "@/features/categories/categories";
import { useLocale, useTranslations } from "next-intl";
import { scrollLeft, scrollRight } from "../../../utils/scroll/scroll";

export default function BrowseByCategory() {
  const isRtl = typeof document !== "undefined" && document.dir === "rtl";
  const scrollRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("headers");
  const locale = useLocale();

  return (
    <section className="flex flex-col gap-6">
      <div className="flex gap-4 items-center">
        <div className="w-5 h-10 bg-[#DB4444] rounded-[4px]"></div>
        <h6 className="font-semibold text-[#DB4444] text-[16px]">
          {t("Categories")}
        </h6>
      </div>
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-[36px]">{t("Browse By Category")}</h2>
        <div className="flex gap-4">
          <button
            className="cursor-pointer"
            onClick={() => scrollLeft(scrollRef, isRtl)}
          >
            <svg
              width="46"
              height="46"
              viewBox="0 0 46 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="rtl:rotate-180"
            >
              <circle cx="23" cy="23" r="23" fill="#F5F5F5" />
              <path
                d="M22 16L15 23L22 30M15 23H31"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            className="cursor-pointer"
            onClick={() => scrollRight(scrollRef, isRtl)}
          >
            <svg
              width="46"
              height="46"
              viewBox="0 0 46 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="rtl:rotate-180"
            >
              <circle cx="23" cy="23" r="23" fill="#F5F5F5" />
              <path
                d="M14.5 23H31M31 23L24 16M31 23L24 30"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        className="flex gap-4 items-center mt-5 overflow-x-scroll hide-scrollbar"
        ref={scrollRef}
      >
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/${locale}/category/${category.id}`}
            className="flex flex-col flex-shrink-0 group gap-2 border border-black/40 rounded-[4px] w-[170px] h-[145px] items-center justify-center hover:bg-[#DB4444] hover:text-white hover:border-[#DB4444]"
          >
            {category.svg}
            <h6>{t(category.label)}</h6>
          </Link>
        ))}
      </div>
    </section>
  );
}
