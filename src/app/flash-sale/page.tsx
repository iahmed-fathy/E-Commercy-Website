"use client";

import Breadcrumb from "@/components/breadCrumbs/Breadcrumbs";
import ProductsList from "@/components/productsList/ProductsList";
import { RootState } from "@/store";
import { useSelector } from "react-redux";

export default function () {
  const products = useSelector((state: RootState) => state.products.items);
  const flashSaleProduct = products.filter((product) => product.discount > 0);

  return (
    <div className="flex flex-col gap-10">
      <div className="self-start">
        <Breadcrumb />
      </div>
      <h2 className="text-[40px] font-medium text-center">
        Explore Flash Sale Products
      </h2>
      <ProductsList products={flashSaleProduct} />
    </div>
  );
}
