"use client";

import { selectAllProducts } from "@/features/products/productsSlice";
import { useRef } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../productCard/ProductCard";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { scrollLeft, scrollRight } from "../../../utils/scroll/scroll";

export default function OurProducts() {
  const t = useTranslations("headers");
  const isRtl = typeof document !== "undefined" && document.dir === "rtl";
  const products = useSelector(selectAllProducts);

  const scrollRef = useRef<HTMLDivElement>(null);

  const now = new Date();
  now.setDate(now.getDate() + 1);

  return (
    <section className="flex flex-col gap-6 ">
      <div className="flex gap-4 items-center">
        <div className="w-5 h-10 bg-[#DB4444] rounded-[4px]"></div>
        <h6 className="font-semibold text-[#DB4444] text-[16px]">
          {t("Our Products")}
        </h6>
      </div>
      <div className="flex items-center max-sm:flex-col justify-between max-sm:gap-6">
        <h2 className="font-semibold text-[36px]">
          {t("Explore Our Products")}
        </h2>
        <div className="flex gap-4 max-sm:self-start">
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
        className="grid grid-rows-2 grid-flow-col gap-x-5 gap-y-10 overflow-x-scroll hide-scrollbar"
        ref={scrollRef}
      >
        {products.map((product) => {
          if (product.discount > 0) {
            return (
              <ProductCard
                product={product}
                key={product.id}
                source="our-products"
              />
            );
          }
        })}
      </div>
      <Link
        href={"/our-products"}
        className="bg-[#DB4444] text-white text-[16px] font-semibold flex justify-center items-center h-[56px] w-[234px] rounded-[4px] cursor-pointer hover:animate-pulse animate-infinite animate-delay-500 animate-ease-in-out self-center mt-10"
      >
        {t("View All Products")}
      </Link>
    </section>
  );
}
