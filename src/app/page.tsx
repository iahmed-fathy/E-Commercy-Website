import CategoriesSideNav from "../components/categoriesSideNav/CategoriesSideNav";
import FlashSalesComponent from "../components/flashSales/FlashSalesComponent";
import MainSwiperSlide from "../components/swiperSlide/MainSwiperSlide";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 ">
      <section className="flex max-sm:flex-col">
        <CategoriesSideNav />
        <div className="sm:m-auto sm:px-4 overflow-hidden">
          <MainSwiperSlide />
        </div>
      </section>
      <FlashSalesComponent />
    </div>
  );
}
