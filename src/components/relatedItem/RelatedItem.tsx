"use client";

import Link from "next/link";
import ProductCard from "../productCard/ProductCard";
import { useSelector } from "react-redux";
import { selectAllProducts } from "@/features/products/productsSlice";

type RelatedItemType = {
  category?: string;
  categories?: string[];
  id: string | string[];
  source: string;
  lable: string;
  seeAll?: boolean;
  href?: string;
};
function getRandomItems<T>(items: T[], count: number): T[] {
  const shuffled = [...items].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export default function RelatedItem({
  category,
  categories,
  id,
  source,
  lable,
  seeAll,
  href = "#",
}: RelatedItemType) {
  const products = useSelector(selectAllProducts);
  const excludeIds = Array.isArray(id) ? id : [id];

  const filterCategories = categories ?? (category ? [category] : []);

  const filteredProducts = products.filter(
    (product) =>
      filterCategories.includes(product.category) &&
      !excludeIds.includes(product.id)
  );

  const randomProducts = getRandomItems(filteredProducts, 10);

  return (
    randomProducts.length > 0 && (
      <section className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <div className="flex  gap-4 items-center">
            <div className="w-5 h-10 bg-[#DB4444] rounded-[4px]"></div>
            <h6 className="font-semibold text-[#DB4444] text-[16px]">
              {lable}
            </h6>
          </div>
          {seeAll && (
            <Link
              href={href}
              className="flex items-center justify-center text-[16px] font-medium hover:text-white hover:bg-[#DB4444] w-[150px] h-[56px] rounded-[4px] border border-black/40 hover:border-[#DB4444] cursor-pointer"
            >
              See All
            </Link>
          )}
        </div>
        <div className="flex gap-4 overflow-x-scroll hide-scrollbar">
          {randomProducts.map((product) => (
            <ProductCard
              starsIcon
              seenIcon
              wishlistIcon
              product={product}
              key={product.id}
              source={source}
            />
          ))}
        </div>
      </section>
    )
  );
}
