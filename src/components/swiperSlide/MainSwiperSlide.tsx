"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function MainSwiperSlide() {
  const t = useTranslations("headers");
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      loop={true}
      className="main-swiper"
      style={
        {
          "--swiper-pagination-color": "#db4444",
          "--swiper-pagination-bullet-inactive-color": "rgba(100, 100, 100,1)",
          "--swiper-pagination-bullet-size": "12px",
          "--swiper-pagination-bullet-horizontal-gap": "4px",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-border-radius": "50%",
        } as React.CSSProperties
      }
    >
      <SwiperSlide>
        <div className="bg-black text-white flex items-center justify-between p-10 max-sm:p-5">
          <div>
            <h2 className="text-4xl font-bold">{t("iPhone 14 Series")}</h2>
            <p className="text-2xl mt-4 mb-8">{t("swiperDes")}</p>
            <Link href={"#"} className="border px-4 py-2 mb-2 inline-block">
              {t("Shop Now")}
            </Link>
          </div>
          <Image
            src="/products/iPhone 14 Series.png"
            alt="product-image"
            width={400}
            height={400}
            className="w-[400px] h-[300px] max-lg:w-[200px] max-lg:h-[200px]"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-black text-white flex items-center justify-between p-10 max-sm:p-5">
          <div>
            <h2 className="text-4xl font-bold">{t("iPhone 14 Series")}</h2>
            <p className="text-2xl mt-4 mb-8">{t("swiperDes")}</p>
            <Link href={"#"} className="border px-4 py-2 mb-2 inline-block">
              {t("Shop Now")}
            </Link>
          </div>
          <Image
            src="/products/iPhone 14 Series.png"
            alt="product-image"
            width={400}
            height={400}
            className="w-[400px] h-[300px] max-lg:w-[200px] max-lg:h-[200px]"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-black text-white flex items-center justify-between p-10 max-sm:p-5">
          <div>
            <h2 className="text-4xl font-bold">{t("iPhone 14 Series")}</h2>
            <p className="text-2xl mt-4 mb-8">{t("swiperDes")}</p>
            <Link href={"#"} className="border px-4 py-2 mb-2 inline-block">
              {t("Shop Now")}
            </Link>
          </div>
          <Image
            src="/products/iPhone 14 Series.png"
            alt="product-image"
            width={400}
            height={400}
            className="w-[400px] h-[300px] max-lg:w-[200px] max-lg:h-[200px]"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-black text-white flex items-center justify-between p-10 max-sm:p-5">
          <div>
            <h2 className="text-4xl font-bold">{t("iPhone 14 Series")}</h2>
            <p className="text-2xl mt-4 mb-8">{t("swiperDes")}</p>
            <Link href={"#"} className="border px-4 py-2 mb-2 inline-block">
              {t("Shop Now")}
            </Link>
          </div>
          <Image
            src="/products/iPhone 14 Series.png"
            alt="product-image"
            width={400}
            height={400}
            className="w-[400px] h-[300px] max-lg:w-[200px] max-lg:h-[200px]"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-black text-white flex items-center justify-between p-10 max-sm:p-5">
          <div>
            <h2 className="text-4xl font-bold">{t("iPhone 14 Series")}</h2>
            <p className="text-2xl mt-4 mb-8">{t("swiperDes")}</p>
            <Link href={"#"} className="border px-4 py-2 mb-2 inline-block">
              {t("Shop Now")}
            </Link>
          </div>
          <Image
            src="/products/iPhone 14 Series.png"
            alt="product-image"
            width={400}
            height={400}
            className="w-[400px] h-[300px] max-lg:w-[200px] max-lg:h-[200px]"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
