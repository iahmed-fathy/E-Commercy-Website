"use client";

import ProductCard from "@/components/productCard/ProductCard";
import {
  addToCart,
  removeFromFavorites,
  selectAllProducts,
  selectFavoriteIds,
} from "@/features/products/productsSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export default function WishListSection() {
  const favoriteProductsIds = useSelector(selectFavoriteIds);
  const products = useSelector(selectAllProducts);
  const dispatch = useDispatch();
  const t = useTranslations("headers");
  const router = useRouter();

  const MoveToCart = () => {
    favoriteProductsIds.forEach((productId) => {
      dispatch(removeFromFavorites(productId));
      dispatch(addToCart(productId));
      router.push("/cart");
    });
  };

  return (
    <section className="flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <div>
          {t("Wishlist")} ({favoriteProductsIds.length})
        </div>
        <button
          className="text-[16px] font-medium hover:text-white hover:bg-[#DB4444] w-[223px] h-[56px] rounded-[4px] border border-black/40 hover:border-[#DB4444] cursor-pointer"
          onClick={MoveToCart}
        >
          {t("Move All To Bag")}
        </button>
      </div>
      <div className="flex gap-4 overflow-x-scroll hide-scrollbar">
        {products.map((product) => {
          if (favoriteProductsIds.includes(product.id)) {
            return (
              <ProductCard
                inWishlistPage
                product={product}
                key={product.id}
                source="wishlist"
              />
            );
          }
        })}
      </div>
    </section>
  );
}
