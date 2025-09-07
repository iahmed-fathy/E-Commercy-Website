"use client";

import {
  selectCartIds,
  selectFavoriteIds,
} from "@/features/products/productsSlice";
import { useSelector } from "react-redux";
import type { Product } from "@/features/products/ProductsData";
import Image from "next/image";
import Link from "next/link";
import Stars from "../reactStarts/ReactStars";
import useProductActions from "../../../hooks/useProductActions";

type ProductCardProps = {
  product: Product;
  source: string;
  starsIcon?: boolean;
  inWishlistPage?: boolean;
};

const sevenDaysAgoDate = new Date();
sevenDaysAgoDate.setDate(sevenDaysAgoDate.getDate() - 7);
const sevenDaysAgoString = sevenDaysAgoDate.toISOString().split("T")[0];

export default function ProductCard({
  product,
  source,
  inWishlistPage,
}: ProductCardProps) {
  const favoriteProducts = useSelector(selectFavoriteIds);
  const cartProducts = useSelector(selectCartIds);

  const {
    handleAddToFavorites,
    handleRemoveFromFavorites,
    handleAddToCart,
    handleRemoveFromCart,
  } = useProductActions(product.id);

  return (
    <Link
      href={`/${source}/product/${product.id}`}
      className="items-center justify-center w-[270px]"
    >
      <div className="flex flex-col gap-1 w-full group">
        <div className="relative rounded-[4px] flex flex-col bg-[#F5F5F5] w-full p-4 h-[250px] overflow-hidden item">
          <div className="flex gap-2">
            {product.createdAt > sevenDaysAgoString && (
              <p className="text-white bg-[#00FF66] py-1 w-[55px] text-center rounded-[4px] text-[12px] z-1">
                New
              </p>
            )}
            {product.discount > 0 && (
              <p className="text-white bg-[#DB4444] py-1 w-[55px] text-center rounded-[4px] text-[12px] z-1">
                {Math.ceil((product.discount / product.price) * 100)} %
              </p>
            )}
          </div>
          <Image
            src={product.gallery[0]}
            alt={product.title}
            width={200}
            height={200}
            className="max-w-[190px] max-h-[180px] m-auto hover:animate-pulse animate-infinite animate-delay-500 animate-ease-in-out transition-transform group-hover:scale-150"
          />
          {inWishlistPage && (
            <button
              className={`favoritesButton cursor-pointer`}
              onClick={
                favoriteProducts.includes(product.id)
                  ? handleRemoveFromFavorites
                  : handleAddToFavorites
              }
            >
              <svg
                className={`absolute top-4 right-2 hover:fill-[#DB4444]`}
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="17" cy="17" r="17" fill="white" />
                <path
                  d="M25 10.5714H10.3333L11.6667 26H22.3333L23.6667 10.5714H9M17 14.4286V22.1429M20.3333 14.4286L19.6667 22.1429M13.6667 14.4286L14.3333 22.1429M14.3333 10.5714L15 8H19L19.6667 10.5714"
                  stroke="black"
                  strokeWidth="1.56"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}
          {!inWishlistPage && (
            <button
              className={`favoritesButton cursor-pointer`}
              onClick={
                favoriteProducts.includes(product.id)
                  ? handleRemoveFromFavorites
                  : handleAddToFavorites
              }
            >
              <svg
                className={`absolute top-4 right-2  ${
                  favoriteProducts.includes(product.id) && "fill-[#DB4444]"
                }`}
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="white"
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
          )}
          {!inWishlistPage && (
            <button className="seenIcon cursor-pointer">
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
          )}
          <button
            className={`addToCart cursor-pointer flex items-center justify-center gap-2 text-white bg-black absolute bottom-0 left-0 w-full py-2 max-lg:visible ${
              !inWishlistPage && "invisible group-hover:visible"
            }`}
            onClick={
              cartProducts.includes(product.id)
                ? handleRemoveFromCart
                : handleAddToCart
            }
          >
            <Image
              src={"/icons/cartIcon2.png"}
              alt="add cart icon"
              width={24}
              height={24}
            />
            <span className="text-[12px]">
              {cartProducts.includes(product.id) ? (
                <span>Remove From</span>
              ) : (
                <span>Add To</span>
              )}{" "}
              Cart
            </span>
          </button>
        </div>
        <p className="font-medium text-[16px] h-6 overflow-hidden">
          {product.title}
        </p>
        <p className="font-medium text-[16px] flex gap-2">
          <span className="text-[#DB4444]">{product.finalPrice}$</span>
          <span className="line-through text-black/40">{product.price}$</span>
        </p>
        {!inWishlistPage && (
          <div className="flex gap-4 items-center">
            <Stars value={product.rating} size={20} />
            <span className="text-black/40 font-semibold text-[14px]">
              ({product?.reviewsCount})
            </span>
          </div>
        )}
      </div>
    </Link>
  );
}
