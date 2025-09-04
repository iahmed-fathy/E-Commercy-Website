"use client";

import {
  selectCartIds,
  selectFavoriteIds,
} from "@/features/products/productsSlice";
import { useSelector } from "react-redux";
import Link from "next/link";
import SearchBar from "./SearchBar";
import SideNavDialog from "./SideNavDialog";
import Image from "next/image";
import User from "./User";

export default function UserActions() {
  const favoriteProducts = useSelector(selectFavoriteIds);
  const cartProducts = useSelector(selectCartIds);
  return (
    <div className="flex gap-4 w-full justify-end">
      <div className="sm:hidden">
        <SideNavDialog />
      </div>
      <SearchBar />
      <div className="flex gap-2 items-center">
        <Link href={"/wishlist"} className="relative">
          {favoriteProducts.length > 0 && (
            <div className="absolute top-0 right-0 text-[10px] rounded-full w-[18px] h-[18px] flex items-center justify-center text-white font-bold bg-[#DB4444]">
              {favoriteProducts.length}
            </div>
          )}
          <Image
            src="/icons/wishlistIcon.png"
            alt="wishlist Icon"
            width={32}
            height={32}
            className="w-[32px] h-[32px]"
          ></Image>
        </Link>
        <Link href={"/cart"} className="relative">
          {cartProducts.length > 0 && (
            <div className="absolute top-0 right-0 text-[10px] rounded-full w-[18px] h-[18px] flex items-center justify-center text-white font-bold bg-[#DB4444]">
              {cartProducts.length}
            </div>
          )}

          <Image
            src="/icons/cartIcon.png"
            alt="cart Icon"
            width={32}
            height={32}
            className="w-[32px] h-[32px]"
          ></Image>
        </Link>
        <User />
      </div>
    </div>
  );
}
