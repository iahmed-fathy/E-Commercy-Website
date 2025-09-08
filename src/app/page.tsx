import BrowseByCategory from "@/components/browseByCategory/page";
import CategoriesSideNav from "../components/categoriesSideNav/CategoriesSideNav";
import FlashSalesComponent from "../components/flashSales/FlashSalesComponent";
import MainSwiperSlide from "../components/swiperSlide/MainSwiperSlide";
import BestSelling from "@/components/bestSelling/BestSelling";
import Promotional from "@/components/promotionalsection/Promotional";
import OurProducts from "@/components/ourProducts/OurProducts";
import FeaturesBar from "@/components/featuresBar/FeaturesBar";

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <section className="flex max-sm:flex-col">
        <CategoriesSideNav />
        <div className="sm:m-auto sm:px-4 overflow-hidden">
          <MainSwiperSlide />
        </div>
      </section>
      <FlashSalesComponent />
      <BrowseByCategory />
      <BestSelling />
      <Promotional />
      <OurProducts />
      <FeaturesBar />
    </div>
  );
}
