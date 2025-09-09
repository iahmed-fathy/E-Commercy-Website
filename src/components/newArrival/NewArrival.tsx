import Image from "next/image";
import Link from "next/link";

export default function NewArrival() {
  return (
    <section className="flex flex-col gap-6 ">
      <div className="flex gap-4 items-center">
        <div className="w-5 h-10 bg-[#DB4444] rounded-[4px]"></div>
        <h6 className="font-semibold text-[#DB4444] text-[16px]">Featured</h6>
      </div>
      <h2 className="font-semibold text-[36px]">New Arrival</h2>
      <div className="text-white border-white flex gap-5 w-full max-sm:flex-col">
        <div className="w-full">
          <div className="relative  bg-black h-[600px] max-sm:h-[400px] flex items-end justify-center">
            <Image
              src={"/products/PlayStation 5.png"}
              alt="PlayStation 5.png"
              width={500}
              height={500}
            />
            <div className="absolute start-5 bottom-5 w-1/3 max-sm:w-2/3 flex flex-col gap-2">
              <h6 className="font-semibold text-[24px] ">PlayStation 5</h6>
              <p className="text-[14px]">
                Black and White version of the PS5 coming out on sale.
              </p>
              <Link
                href={"/our-products"}
                className="text-[16px] font-medium border-b  w-fit"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full justify-between gap-5">
          <div className="bg-black p-5 h-1/2 flex items-end">
            <div className="w-2/5 max-sm:w-2/3 flex flex-col gap-2">
              <h6 className="font-semibold text-[24px] ">
                Women’s Collections
              </h6>
              <p className="text-[14px]">
                Featured woman collections that give you another vibe.
              </p>
              <Link
                href={"/our-products"}
                className="text-[16px] font-medium border-b  w-fit"
              >
                Shop Now
              </Link>
            </div>
          </div>
          <div className="flex gap-5 h-1/2">
            <div className="relative p-2 w-full flex items-center justify-center bg-black">
              <Image
                src={"/products/Amazon Echo (2nd Generation).png"}
                alt="Amazon Echo (2nd Generation)"
                width={190}
                height={220}
                className="drop-shadow-[0_0_100px_rgba(100,100,100,1)] max-sm:w-[120px]"
              />
              <div className="absolute start-5 bottom-5 flex flex-col gap-1 max-sm:gap-[4px]">
                <h6 className="font-semibold text-[24px] max-sm:text-[20px]">
                  Speakers
                </h6>
                <p className="text-[14px]">Amazon wireless speakers</p>
                <Link
                  href={"/our-products"}
                  className="text-[16px] font-medium border-b  w-fit"
                >
                  Shop Now
                </Link>
              </div>
            </div>
            <div className="relative p-2 w-full flex items-center justify-center bg-black">
              <Image
                src={"/products/Gucci Intense Oud Eau de Parfum.png"}
                alt="Gucci Intense Oud Eau de Parfum.png"
                width={190}
                height={220}
                className="drop-shadow-[0_0_100px_rgba(100,100,100,1)] max-sm:w-[120px]"
              />
              <div className="absolute start-5 bottom-5 flex flex-col gap-1 max-sm:gap-[4px]">
                <h6 className="font-semibold text-[24px] max-sm:text-[20px]">
                  Perfume
                </h6>
                <p className="text-[14px]">GUCCI INTENSE OUD EDP</p>
                <Link
                  href={"/our-products"}
                  className="text-[16px] font-medium border-b  w-fit"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
