"use client";

import { useState } from "react";
import Stars from "../reactStarts/ReactStars";
import type { Product } from "@/features/products/ProductsData";
import { useSelector } from "react-redux";
import {
  addToFavorites,
  removeFromFavorites,
  selectFavoriteIds,
} from "@/features/products/productsSlice";
import { useDispatch } from "react-redux";

type ProductInfType = {
  product?: Product;
};
export default function ProductInf({ product }: ProductInfType) {
  if (!product?.id) return;

  const favoriteProducts = useSelector(selectFavoriteIds);
  const [quantity, setQuantity] = useState(1);

  const changeQuantity = (method: string) => {
    if (method === "increase") {
      setQuantity((prev) => (prev += 1));
    } else if (method === "decrease" && quantity > 1) {
      setQuantity((prev) => (prev -= 1));
    }
  };

  const dispatch = useDispatch();

  const handleAddToFavorites = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addToFavorites(product.id));
  };

  const handleRemoveFromFavorites = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(removeFromFavorites(product.id));
  };

  return (
    <section className="flex flex-col justify-between w-[400px] max-sm:w-[300]">
      <h2 className="font-semibold text-[24px]">{product?.title}</h2>
      <div className="flex gap-4 items-center">
        <Stars value={product?.rating} size={20} />
        <span className="text-black/40 font-semibold text-[14px]">
          ({product?.reviewsCount} Reviews)
        </span>
        <span className="text-black/40">|</span>
        <p>
          {product?.stockQuantity && product?.stockQuantity > 10 ? (
            <span className="text-[#00FF66] font-normal text-[14px]">
              In Stock
            </span>
          ) : product?.stockQuantity === 0 ? (
            <span className="text-[#DB4444] font-normal text-[14px]">
              Out Of Stock
            </span>
          ) : (
            <span className="text-black/40 font-normal text-[14px]">
              {product?.stockQuantity} Piece Available
            </span>
          )}
        </p>
      </div>
      <span className="text-[24px]">${product?.finalPrice.toFixed(2)}</span>
      <p className="text-[14px] leading-5">{product?.description}</p>
      <hr className="border-t-2 border-black/40 my-4" />
      <form className="flex flex-col gap-4">
        {product?.colors && product?.colors.length > 0 && (
          <fieldset className="flex items-center gap-3">
            <label className="text-[20px]">Colours:</label>
            {product.colors.map((color, index) => (
              <input
                key={color.hexCode}
                type="radio"
                name="color"
                value={color.color}
                className={`
                  w-5 h-5 rounded-full cursor-pointer border-2 
                  appearance-none checked:scale-150 
                `}
                style={{ background: `${color.hexCode}` }}
                defaultChecked={index === 0}
              />
            ))}
          </fieldset>
        )}

        {product?.sizes && product?.sizes.length > 0 && (
          <fieldset className="flex gap-2">
            <label className="mb-2 font-medium text-[20px]">Size:</label>
            {product.sizes.map((size, index) => (
              <label key={size} className="cursor-pointer">
                <input
                  type="radio"
                  name="size"
                  value={size}
                  className="peer hidden"
                  defaultChecked={index === 0}
                />
                <span
                  className="w-full p-1 flex items-center justify-center rounded-md 
                     border-2 border-black/40 text-black font-medium 
                     peer-checked:bg-[#DB4444] peer-checked:text-white 
                     peer-checked:border-[#DB4444] transition text-[14px]"
                >
                  {size}
                </span>
              </label>
            ))}
          </fieldset>
        )}
        <div className="flex justify-between max-sm:flex-col max-sm:gap-4 max-sm:items-center mb-2">
          <div className="h-[44px] flex items-center border-2 border-black/40 w-[159px] rounded-[4px] overflow-hidden ">
            <button
              className="text-black text-[30px]  hover:bg-[#DB4444] hover:text-white w-[41px] cursor-pointer"
              type="button"
              onClick={() => changeQuantity("decrease")}
            >
              -
            </button>
            <input
              className="text-center w-[80px] h-full border-x-2 border-black/40 input--no-spin"
              type="number"
              name="quantity"
              defaultValue={quantity}
              min="1"
            />
            <button
              className="text-black text-[30px] hover:bg-[#DB4444] hover:text-white w-[41px]  cursor-pointer"
              type="button"
              onClick={() => changeQuantity("increase")}
            >
              +
            </button>
          </div>
          <button
            type="submit"
            className="font-medium w-[159px] h-[44px] text-[16px] bg-[#DB4444] rounded-[4px] text-white cursor-pointer hover:animate-pulse animate-infinite animate-delay-500 animate-ease-in-out"
          >
            Buy Now
          </button>
          <button
            className="rounded-[4px] border-1 border/black/40 flex items-center justify-center w-[40px] h-[40px] cursor-pointer"
            type="button"
            onClick={
              favoriteProducts.includes(product?.id)
                ? handleRemoveFromFavorites
                : handleAddToFavorites
            }
          >
            <svg
              className={`${
                favoriteProducts.includes(product?.id) && "fill-[#DB4444]"
              }`}
              width="22"
              height="20"
              viewBox="0 0 22 20"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 1C3.239 1 1 3.216 1 5.95C1 8.157 1.875 13.395 10.488 18.69C10.6423 18.7839 10.8194 18.8335 11 18.8335C11.1806 18.8335 11.3577 18.7839 11.512 18.69C20.125 13.395 21 8.157 21 5.95C21 3.216 18.761 1 16 1C13.239 1 11 4 11 4C11 4 8.761 1 6 1Z"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </form>
      <div className="border-1 border-black/40 rounded-[4px]">
        <div className="flex items-center gap-4 p-4">
          <div>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_261_4843)">
                <path
                  d="M11.6673 31.6667C13.5083 31.6667 15.0007 30.1743 15.0007 28.3333C15.0007 26.4924 13.5083 25 11.6673 25C9.82637 25 8.33398 26.4924 8.33398 28.3333C8.33398 30.1743 9.82637 31.6667 11.6673 31.6667Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M28.3333 31.6667C30.1743 31.6667 31.6667 30.1743 31.6667 28.3333C31.6667 26.4924 30.1743 25 28.3333 25C26.4924 25 25 26.4924 25 28.3333C25 30.1743 26.4924 31.6667 28.3333 31.6667Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.33398 28.3335H7.00065C5.89608 28.3335 5.00065 27.4381 5.00065 26.3335V21.6668M3.33398 8.3335H19.6673C20.7719 8.3335 21.6673 9.22893 21.6673 10.3335V28.3335M15.0007 28.3335H25.0007M31.6673 28.3335H33.0007C34.1052 28.3335 35.0007 27.4381 35.0007 26.3335V18.3335M35.0007 18.3335H21.6673M35.0007 18.3335L30.5833 10.9712C30.2218 10.3688 29.5708 10.0002 28.8683 10.0002H21.6673"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 28H6.66667C5.5621 28 4.66667 27.1046 4.66667 26V21.3333M3 8H19.3333C20.4379 8 21.3333 8.89543 21.3333 10V28M15 28H24.6667M32 28H32.6667C33.7712 28 34.6667 27.1046 34.6667 26V18M34.6667 18H21.3333M34.6667 18L30.2493 10.6377C29.8878 10.0353 29.2368 9.66667 28.5343 9.66667H21.3333"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5 11.8182H11.6667"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1.81836 15.4545H8.48503"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5 19.0909H11.6667"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_261_4843">
                  <rect width="40" height="40" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div>
            <p className="font-medium text-[16px]">{product?.shippingInfo}</p>
            <a href="#" className="font-medium text-[12px] underline">
              Enter your postal code for Delivery Availability
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4 p-4 border-t-1 border-black/40">
          <div>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_261_4865)">
                <path
                  d="M33.3327 18.3334C32.9251 15.4004 31.5645 12.6828 29.4604 10.5992C27.3564 8.51557 24.6256 7.18155 21.6888 6.80261C18.752 6.42366 15.7721 7.02082 13.208 8.5021C10.644 9.98337 8.6381 12.2666 7.49935 15M6.66602 8.33335V15H13.3327"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.66602 21.6667C7.07361 24.5997 8.43423 27.3173 10.5383 29.4009C12.6423 31.4845 15.3731 32.8185 18.3099 33.1974C21.2467 33.5764 24.2266 32.9792 26.7907 31.4979C29.3547 30.0167 31.3606 27.7335 32.4994 25M33.3327 31.6667V25H26.666"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_261_4865">
                  <rect width="40" height="40" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div>
            <p className="font-medium text-[16px]">Return Delivery</p>
            <p className="font-medium text-[12px]">
              Free 30 Days Delivery Returns.{" "}
              <a href="#" className=" underline">
                Details
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
