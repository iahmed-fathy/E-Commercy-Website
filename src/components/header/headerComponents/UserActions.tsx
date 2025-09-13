"use client";

import {
  selectCartIds,
  selectFavoriteIds,
} from "@/features/products/productsSlice";
import { useSelector } from "react-redux";
import Link from "next/link";
import { useLocale } from "next-intl";
import SearchBar from "./SearchBar";
import SideNavDialog from "./SideNavDialog";
import Image from "next/image";
import UserState from "./UserState";
import { useEffect, useState } from "react";

export default function UserActions() {
  const [isClient, setIsClient] = useState(false);
  const favoriteProducts = useSelector(selectFavoriteIds);
  const cartProducts = useSelector(selectCartIds);
  const locale = useLocale();

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="flex gap-4 w-full justify-end max-lg:justify-between">
      <div className="lg:hidden">
        <SideNavDialog />
      </div>
      <SearchBar />
      <div className="flex gap-2 items-center">
        <Link href={`/${locale}/wishlist`} className="relative">
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
          />
        </Link>
        <Link href={`/${locale}/cart`} className="relative">
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
          />
        </Link>
        <UserState />
      </div>
    </div>
  );
}
