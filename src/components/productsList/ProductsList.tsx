"use client";
import { Product } from "@/features/products/ProductsData";
import ProductCard from "../productCard/ProductCard";
import { useState } from "react";

type ProductsListProps = {
  products: Product[];
};
export default function ProductsList({ products }: ProductsListProps) {
  const [productsDisplayedNum, setProductsDisplayedNum] = useState(12);
  return (
    <>
      <div className="grid grid-cols-4 max-sm:grid-cols-1 max-lg:grid-cols-2 gap-15">
        {products.slice(0, productsDisplayedNum).map((product) => (
          <ProductCard
            product={product}
            key={product.id}
            source="flash-sale"
            starsIcon
            seenIcon
            wishlistIcon
          />
        ))}
      </div>
      <button
        className="bg-[#DB4444] text-white text-[16px] font-semibold flex justify-center items-center h-[56px] w-[234px] rounded-[4px] cursor-pointer hover:animate-pulse animate-infinite animate-delay-500 animate-ease-in-out hover:-translate-y-1 self-center mt-10"
        onClick={() => setProductsDisplayedNum((prev) => prev + 6)}
      >
        Load More
      </button>
    </>
  );
}
