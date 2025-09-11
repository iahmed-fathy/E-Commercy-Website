"use client";

import Breadcrumb from "@/components/breadCrumbs/Breadcrumbs";
import ProductsList from "@/components/productsList/ProductsList";
import { selectAllProducts } from "@/features/products/productsSlice";
import { useSelector } from "react-redux";

export default function OurProducts() {
  const products = useSelector(selectAllProducts);

  return (
    <div className="flex flex-col gap-10 pt-10">
      <div className="self-start">
        <Breadcrumb />
      </div>
      <h2 className="text-[40px] font-medium text-center">
        Explore Our Products
      </h2>
      <ProductsList products={products} />
    </div>
  );
}
