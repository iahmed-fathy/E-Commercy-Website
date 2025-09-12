"use client";

import { selectByCategory } from "@/features/products/productsSlice";
import { useSelector } from "react-redux";
import categories from "@/features/categories/categories";
import Breadcrumb from "@/components/breadCrumbs/Breadcrumbs";
import ProductsList from "@/components/productsList/ProductsList";
import React from "react";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";

export default function CategoryProductPage() {
  const t = useTranslations("headers");

  const params = useParams();
  const id = params.id as string;
  const category = categories.find((category) => category.id === id);
  const categoryName = category ? category.label : "";
  const products = useSelector(
    selectByCategory(categoryName.toLocaleLowerCase())
  );

  return (
    <div className="flex flex-col gap-10 pt-10">
      <div className="self-start">
        <Breadcrumb productName={t(categoryName)} />
      </div>
      <h2 className="text-[40px] font-medium text-center">
        {`${t("ExploreProductsByCategory", { category: t(categoryName) })}`}
      </h2>
      {category && <ProductsList products={products} source={categoryName} />}
    </div>
  );
}
