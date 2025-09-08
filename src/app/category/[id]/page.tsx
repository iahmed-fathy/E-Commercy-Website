"use client";

import { selectByCategory } from "@/features/products/productsSlice";
import { useSelector } from "react-redux";
import categories from "@/features/categories/categories";
import Breadcrumb from "@/components/breadCrumbs/Breadcrumbs";
import ProductsList from "@/components/productsList/ProductsList";

type Params = {
  params: {
    id: string;
  };
};

export default function CategoryProductPage({ params }: Params) {
  const { id } = params;
  const category = categories.find((category) => category.id === id);
  const categoryName = category ? category.label : "";
  const products = useSelector(
    selectByCategory(categoryName.toLocaleLowerCase())
  );

  return (
    <div className="flex flex-col gap-10 pt-10">
      <div className="self-start">
        <Breadcrumb productName={categoryName} />
      </div>
      <h2 className="text-[40px] font-medium text-center">
        {`Explore ${categoryName} Products`}
      </h2>
      <ProductsList products={products} />
    </div>
  );
}
