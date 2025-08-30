import ProductCard from "../productCard/ProductCard";
import { products } from "@/features/products/ProductsData";

type RelatedItemType = {
  category: string;
  id: string;
};

function getRandomItems<T>(items: T[], count: number): T[] {
  const shuffled = [...items].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export default function RelatedItem({ category, id }: RelatedItemType) {
  const filteredProducts = products.filter(
    (product) => product.category === category && product.id !== id
  );

  const randomProducts = getRandomItems(filteredProducts, 10);

  return (
    randomProducts.length > 0 && (
      <section className="flex flex-col gap-6">
        <div className="flex  gap-4 items-center">
          <div className="w-5 h-10 bg-[#DB4444] rounded-[4px]"></div>
          <h6 className="font-semibold text-[#DB4444] text-[16px]">
            Related Item
          </h6>
        </div>
        <div className="flex gap-4 overflow-x-scroll hide-scrollbar">
          {randomProducts.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </section>
    )
  );
}
