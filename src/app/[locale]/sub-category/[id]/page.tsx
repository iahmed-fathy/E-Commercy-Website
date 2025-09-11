"use client";

import { selectAllProducts } from "@/features/products/productsSlice";
import { useSelector } from "react-redux";
import Breadcrumb from "@/components/breadCrumbs/Breadcrumbs";
import ProductsList from "@/components/productsList/ProductsList";
import React from "react";
import { useParams } from "next/navigation";

export default function SubCategoryPage() {
  const params = useParams();
  const products = useSelector(selectAllProducts);
  const id = params.id as string;
  const subCategoryProducts = products.filter((product) =>
    product.tags?.includes(id.split("-").join(" "))
  );
  return (
    <div className="flex flex-col gap-10 pt-10">
      <div className="self-start">
        <Breadcrumb productName={id.split("-").join(" ")} />
      </div>
      <h2 className="text-[40px] font-medium text-center">
        {`${id.split("-").join(" ")} Products`}
      </h2>
      <ProductsList products={subCategoryProducts} />
    </div>
  );
}
