import ProductCard from "../productCard/ProductCard";
import Link from "next/link";
import { products } from "@/features/products/ProductsData";
import { getTranslations } from "next-intl/server";

export default async function BestSelling() {
  const t = await getTranslations("headers");

  const bestSellingProducts = products
    .filter((product) => product.soldCount > 10000)
    .slice(0, 5);

  return (
    <section className="flex flex-col gap-6">
      <div className="flex gap-4 items-center">
        <div className="w-5 h-10 bg-[#DB4444] rounded-[4px]"></div>
        <h6 className="font-semibold text-[#DB4444] text-[16px]">
          {t("This Month")}
        </h6>
      </div>
      <div className="flex items-center max-sm:flex-col justify-between max-lg:gap-6">
        <h2 className="font-semibold text-[36px] max-sm:text-center">
          {t("Best Selling Products")}
        </h2>
        <Link
          href={"/best-selling"}
          className="bg-[#DB4444] text-white text-[16px] font-semibold flex justify-center items-center h-[56px] w-[159px] rounded-[4px] cursor-pointer hover:animate-pulse animate-infinite animate-delay-500 animate-ease-in-out"
        >
          {t("View All")}
        </Link>
      </div>
      <div className="flex gap-4 items-center sm:justify-center max-lg:overflow-x-scroll hide-scrollbar">
        {bestSellingProducts.map((product) => {
          return (
            <ProductCard
              product={product}
              key={product.id}
              source="best-selling"
            />
          );
        })}
      </div>
    </section>
  );
}
