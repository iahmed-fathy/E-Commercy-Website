"use client";

// @ts-expect-error don`t find splide types
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";
import Link from "next/link";

export default function MainSwiperSlide() {
  return (
    <Splide
      options={{
        type: "loop",
        autoplay: true,
        interval: 2000,
        pauseOnHover: true,
        arrows: false,
        pagination: true,
      }}
    >
      <SplideSlide>
        <div className="bg-black text-white flex items-center justify-between p-10 max-sm:p-5">
          <div>
            <h2 className="text-4xl font-bold">iPhone 14 Series</h2>
            <p className="text-2xl mt-4 mb-8">Up to 10% off Voucher</p>
            <Link href={"#"} className="border px-4 py-2 mb-2 inline-block">
              Shop Now
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
      </SplideSlide>
      <SplideSlide>
        <div className="bg-black text-white flex items-center justify-between p-10 max-sm:p-5">
          <div>
            <h2 className="text-4xl font-bold">iPhone 14 Series</h2>
            <p className="text-2xl mt-4 mb-8">Up to 10% off Voucher</p>
            <Link href={"#"} className="border px-4 py-2 mb-2 inline-block">
              Shop Now
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
      </SplideSlide>
      <SplideSlide>
        <div className="bg-black text-white flex items-center justify-between p-10 max-sm:p-5">
          <div>
            <h2 className="text-4xl font-bold">iPhone 14 Series</h2>
            <p className="text-2xl mt-4 mb-8">Up to 10% off Voucher</p>
            <Link href={"#"} className="border px-4 py-2 mb-2 inline-block">
              Shop Now
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
      </SplideSlide>
      <SplideSlide>
        <div className="bg-black text-white flex items-center justify-between p-10 max-sm:p-5">
          <div>
            <h2 className="text-4xl font-bold">iPhone 14 Series</h2>
            <p className="text-2xl mt-4 mb-8">Up to 10% off Voucher</p>
            <Link href={"#"} className="border px-4 py-2 mb-2 inline-block">
              Shop Now
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
      </SplideSlide>
      <SplideSlide>
        <div className="bg-black text-white flex items-center justify-between p-10 max-sm:p-5">
          <div>
            <h2 className="text-4xl font-bold">iPhone 14 Series</h2>
            <p className="text-2xl mt-4 mb-8">Up to 10% off Voucher</p>
            <Link href={"#"} className="border px-4 py-2 mb-2 inline-block">
              Shop Now
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
      </SplideSlide>
    </Splide>
  );
}
