import Image from "next/image";
import PromotionalTimer from "./PromotionalTimer";
import Link from "next/link";

export default function Promotional() {
  const now = new Date();
  const endOfDayLocal = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    23,
    59,
    59
  );
  const targetDateUTC = endOfDayLocal.toISOString();

  return (
    <section className="bg-black p-10 flex max-sm:flex-col gap-10">
      <div className="flex flex-col gap-4 w-1/2 max-sm:w-full">
        <span className="text-[#00FF66] text-[16px] font-semibold max-sm:text-center">
          Categories
        </span>
        <h4 className="font-semibold text-[48px] max-sm:text-center text-white">
          Enhance Your Music Experience
        </h4>
        <PromotionalTimer targetDate={targetDateUTC} />
        <Link
          href={"/flash-sale/product/23"}
          className="bg-[#00FF66] text-white text-[16px] font-semibold flex justify-center items-center h-[56px] w-[234px] rounded-[4px] cursor-pointer hover:animate-pulse animate-infinite animate-delay-500 animate-ease-in-out max-sm:self-center mt-10 self-start"
        >
          Buy Now!
        </Link>
      </div>
      <Image
        src={"/products/JBL_BOOMBOX_2_HERO_020_x1.png"}
        alt="JBL_BOOMBOX_2_HERO_020_x1"
        width={568}
        height={330}
        className="w-1/2 max-sm:w-full drop-shadow-[0_0_100px_rgba(100,100,100,.8)]"
      />
    </section>
  );
}
