"use client";
import Breadcrumb from "@/components/breadCrumbs/Breadcrumbs";
import ProductImgsPreview from "@/components/productDetails/ProductImgsPreview";
import ProductInf from "@/components/productDetails/ProductInf";
import RelatedItem from "@/components/relatedItem/RelatedItem";
import { selectAllProducts } from "@/features/products/productsSlice";
import { notFound, useParams } from "next/navigation";
import { useSelector } from "react-redux";

export default function DetailsPage() {
  const products = useSelector(selectAllProducts);
  const params = useParams();
  const id = params.id as string;
  const source = params.source as string;
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-15 px-30 max-lg:px-5 pt-10">
      <Breadcrumb productName={product?.title} />
      <div className="flex gap-10 max-lg:flex-col max-sm:gap-5">
        <ProductImgsPreview gallery={product?.gallery} />
        <ProductInf product={product} />
      </div>
      <RelatedItem
        lable="Related Item"
        category={product.category}
        id={product.id}
        source={source}
      />
    </div>
  );
}
