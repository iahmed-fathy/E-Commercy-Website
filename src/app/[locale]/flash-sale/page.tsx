"use client";

import Breadcrumb from "@/components/breadCrumbs/Breadcrumbs";
import ProductsList from "@/components/productsList/ProductsList";
import { selectAllProducts } from "@/features/products/productsSlice";
import { useSelector } from "react-redux";
import { useTranslations } from "next-intl";

export default function FlashSalePage() {
  const t = useTranslations("headers");

  const products = useSelector(selectAllProducts);
  const flashSaleProduct = products.filter((product) => product.discount > 0);

  return (
    <div className="flex flex-col gap-10 pt-10">
      <div className="self-start">
        <Breadcrumb />
      </div>
      <h2 className="text-[40px] font-medium text-center">
        {t("Explore Flash Sale Products")}
      </h2>
      <ProductsList products={flashSaleProduct} source="flash-sale" />
    </div>
  );
}
