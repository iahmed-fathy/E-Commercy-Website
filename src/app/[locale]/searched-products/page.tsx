"use client";

import Breadcrumb from "@/components/breadCrumbs/Breadcrumbs";
import ProductsList from "@/components/productsList/ProductsList";
import {
  selectSearchedProducts,
  selectSearchValue,
} from "@/features/products/productsSlice";
import { useSelector } from "react-redux";
import { useTranslations } from "next-intl";

export default function SearchPage() {
  const t = useTranslations("headers");

  const searchValue = useSelector(selectSearchValue);
  const searchedProducts = useSelector(selectSearchedProducts(searchValue));

  return (
    <div className="flex flex-col gap-10 pt-10">
      <div className="self-start">
        <Breadcrumb />
      </div>
      <h2 className="text-[40px] font-medium text-center">
        {t("Explore Searched Products")}
      </h2>
      <ProductsList products={searchedProducts} source="searched-products" />
    </div>
  );
}
