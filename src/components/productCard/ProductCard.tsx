"use client";

import Image from "next/image";
import type { Product } from "../../features/products/ProductsData";
import Link from "next/link";
import Stars from "../reactStarts/ReactStars";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/product-details/${product.id}`}
      className="items-center justify-center w-[270px]"
    >
      <div className="flex flex-col gap-1 w-full">
        <div className="relative rounded-[4px] flex flex-col bg-[#F5F5F5] w-full p-4 h-[250px] overflow-hidden item">
          {product.discount > 0 && (
            <p className="text-white bg-[#DB4444] py-1 w-[55px] text-center rounded-[4px] text-[12px] z-1">
              {Math.ceil((product.discount / product.price) * 100)} %
            </p>
          )}
          <Image
            src={product.gallery[0]}
            alt={product.title}
            width={200}
            height={200}
            className="max-w-[190px] max-h-[180px] m-auto hover:animate-pulse animate-infinite animate-delay-500 animate-ease-in-out transition-transform hover:scale-150"
          />
          <button className="cursor-pointer">
            <svg
              className="absolute top-4 right-2"
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="17" cy="17" r="17" fill="white" />
              <path
                d="M13 10C10.7912 10 9 11.7396 9 13.8859C9 15.6185 9.7 19.7305 16.5904 23.8873C16.7138 23.961 16.8555 24 17 24C17.1445 24 17.2862 23.961 17.4096 23.8873C24.3 19.7305 25 15.6185 25 13.8859C25 11.7396 23.2088 10 21 10C18.7912 10 17 12.3551 17 12.3551C17 12.3551 15.2088 10 13 10Z"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button className="cursor-pointer">
            <svg
              className="absolute top-16 right-2"
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="17" cy="17" r="17" fill="white" />
              <path
                d="M26.257 15.962C26.731 16.582 26.731 17.419 26.257 18.038C24.764 19.987 21.182 24 17 24C12.818 24 9.23601 19.987 7.74301 18.038C7.51239 17.7411 7.38721 17.3759 7.38721 17C7.38721 16.6241 7.51239 16.2589 7.74301 15.962C9.23601 14.013 12.818 10 17 10C21.182 10 24.764 14.013 26.257 15.962V15.962Z"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17 20C18.6569 20 20 18.6569 20 17C20 15.3431 18.6569 14 17 14C15.3431 14 14 15.3431 14 17C14 18.6569 15.3431 20 17 20Z"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <p className="font-medium text-[16px] h-6 overflow-hidden">
          {product.title}
        </p>
        <p className="font-medium text-[16px] flex gap-2">
          <span className="text-[#DB4444]">{product.finalPrice}$</span>
          <span className="line-through text-black/40">{product.price}$</span>
        </p>
        <div className="flex gap-4 items-center">
          <Stars value={product.rating} size={20} />
          <span className="text-black/40 font-semibold text-[14px]">
            ({product?.reviewsCount})
          </span>
        </div>
      </div>
    </Link>
  );
}
