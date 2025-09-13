"use client";
import Breadcrumb from "@/components/breadCrumbs/Breadcrumbs";
import ProductImgsPreview from "@/components/productDetails/ProductImgsPreview";
import ProductInf from "@/components/productDetails/ProductInf";
import RelatedItem from "@/components/relatedItem/RelatedItem";
import { selectAllProducts } from "@/features/products/productsSlice";
import { notFound, useParams } from "next/navigation";
import { useSelector } from "react-redux";
import { useTranslations } from "next-intl";

export default function DetailsPage() {
  const t = useTranslations("products");
  const products = useSelector(selectAllProducts);
  const params = useParams();
  const id = params.id as string;
  const source = params.source as string;
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  const translatedTitle = t(id + ".title") || product.title;

  return (
    <div className="flex flex-col gap-15 px-30 max-lg:px-5 pt-10">
      <Breadcrumb productName={translatedTitle} />
      <div className="flex gap-10 max-xl:flex-col max-sm:gap-5">
        <ProductImgsPreview gallery={product?.gallery} />
        <ProductInf product={{ ...product, title: translatedTitle }} />
      </div>
      <RelatedItem
        seeAll
        lable="Related Item"
        category={product.category}
        id={product.id}
        source={source}
      />
    </div>
  );
}
