import Breadcrumb from "@/components/breadCrumbs/Breadcrumbs";
import ProductImgsPreview from "@/components/productDetails/ProductImgsPreview";
import ProductInf from "@/components/productDetails/ProductInf";
import RelatedItem from "@/components/relatedItem/RelatedItem";
import { products } from "@/features/products/ProductsData";
import { notFound } from "next/navigation";
type Params = {
  params: {
    source: string;
    id: string;
  };
};
export default function ProductDetailsPage({ params }: Params) {
  const { source, id } = params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-15">
      <Breadcrumb productName={product?.title} />
      <div className="flex gap-10">
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
