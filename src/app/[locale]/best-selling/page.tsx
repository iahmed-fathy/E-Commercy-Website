"use client";

import Breadcrumb from "@/components/breadCrumbs/Breadcrumbs";
import ProductsList from "@/components/productsList/ProductsList";
import { selectAllProducts } from "@/features/products/productsSlice";
import { useSelector } from "react-redux";
import { useTranslations } from "next-intl";

export default function BestSellingPage() {
  const t = useTranslations("headers");

  const products = useSelector(selectAllProducts);
  const BestSellingProduct = products.filter(
    (product) => product.soldCount > 10000
  );

  return (
    <div className="flex flex-col gap-10 pt-10">
      <div className="self-start">
        <Breadcrumb />
      </div>
      <h2 className="text-[40px] font-medium text-center">
        {t("Explore Best Selling Products")}
      </h2>
      <ProductsList products={BestSellingProduct} source="best-selling" />
    </div>
  );
}
