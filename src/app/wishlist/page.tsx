"use client";

import Breadcrumb from "@/components/breadCrumbs/Breadcrumbs";
import RelatedItem from "@/components/relatedItem/RelatedItem";
import WishListSection from "@/components/wishlist/WishListSection";
import {
  selectAllProducts,
  selectFavoriteIds,
} from "@/features/products/productsSlice";
import { useSelector } from "react-redux";

export default function WishList() {
  const products = useSelector(selectAllProducts);
  const favoriteProductIds = useSelector(selectFavoriteIds);
  const favoriteProducts = products.filter((product) =>
    favoriteProductIds.includes(product.id)
  );

  const favoriteCategories = [
    ...new Set(favoriteProducts.map((p) => p.category)),
  ];

  return favoriteProducts.length > 0 ? (
    <div className="flex flex-col gap-15 pt-10">
      <Breadcrumb />
      <WishListSection />
      <RelatedItem
        seeAll
        lable="Just For You"
        categories={favoriteCategories}
        id={favoriteProductIds}
        source="wishlist"
      />{" "}
    </div>
  ) : (
    <div className="text-center text-[32px] pt-10">No Wishlist Items</div>
  );
}
