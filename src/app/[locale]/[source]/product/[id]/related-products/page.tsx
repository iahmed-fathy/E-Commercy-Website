"use client";

import Breadcrumb from "@/components/breadCrumbs/Breadcrumbs";
import ProductsList from "@/components/productsList/ProductsList";
import {
  selectAllProducts,
  selectFavoriteIds,
} from "@/features/products/productsSlice";
import { useSelector } from "react-redux";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

export default function RelatedProducts() {
  const t = useTranslations("headers");
  const params = useParams();
  const id = params.id as string;
  const products = useSelector(selectAllProducts);
  const choiceProduct = products.find((product) => product.id === id);

  const filteredProducts = products.filter(
    (product) => product.category === choiceProduct?.category
  );

  return (
    <div className="flex flex-col gap-10 pt-10">
      <div className="self-start">
        <Breadcrumb productName={choiceProduct?.title} />
      </div>
      {filteredProducts.length > 0 ? (
        <>
          <h2 className="text-[40px] font-medium text-center">
            {t("Explore Related Products")}
          </h2>
          <ProductsList products={filteredProducts} source="our-products" />
        </>
      ) : (
        <h2 className="text-[40px] mt-10 font-medium text-center">
          {t("There are no related products")}
        </h2>
      )}
    </div>
  );
}
