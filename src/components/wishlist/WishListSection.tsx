"use client";

import ProductCard from "@/components/productCard/ProductCard";
import {
  selectAllProducts,
  selectFavoriteIds,
} from "@/features/products/productsSlice";
import { useSelector } from "react-redux";

export default function WishListSection() {
  //TODO Move All To Bag
  const favoriteProducts = useSelector(selectFavoriteIds);
  const products = useSelector(selectAllProducts);
  return (
    <section className="flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <div>Wishlist ({favoriteProducts.length})</div>
        <button className="text-[16px] font-medium hover:text-white hover:bg-[#DB4444] w-[223px] h-[56px] rounded-[4px] border border-black/40 hover:border-[#DB4444] cursor-pointer">
          Move All To Bag
        </button>
      </div>
      <div className="flex gap-4 overflow-x-scroll hide-scrollbar">
        {products.map((product) => {
          if (favoriteProducts.includes(product.id)) {
            return (
              <ProductCard
                deleteIcon
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
