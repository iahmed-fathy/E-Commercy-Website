import Image from "next/image";
import { getTranslations } from "next-intl/server";

export default async function FeaturesBar() {
  const t = await getTranslations("headers");

  return (
    <div className="flex max-w-[1000px] max-sm:flex-col gap-20 self-center">
      <div className="flex flex-col w-[300] items-center justify-center text-center">
        <Image
          src="/icons/delivery.png"
          alt="delivery icon"
          width={81}
          height={80}
          className="mb-4"
        />
        <p className="font-semibold text-[20px] mb-2">
          {t("FREE AND FAST DELIVERY")}
        </p>
        <p className="text-[14px]">
          {t("Free delivery for all orders over $140")}
        </p>
      </div>
      <div className="flex flex-col w-[300] items-center justify-center text-center">
        <Image
          src="/icons/cusstomerService.png"
          alt="delivery icon"
          width={81}
          height={80}
          className="mb-4"
        />
        <p className="font-semibold text-[20px] mb-2">
          {t("24/7 CUSTOMER SERVICE")}
        </p>
        <p className="text-[14px]"> {t("Friendly 24/7 customer support")}</p>
      </div>
      <div className="flex flex-col w-[300] items-center justify-center text-center">
        <Image
          src="/icons/moneyBack.png"
          alt="moneyBack icon"
          width={81}
          height={80}
          className="mb-4"
        />
        <p className="font-semibold text-[20px] mb-2">
          {t("MONEY BACK GUARANTEE")}
        </p>
        <p className="text-[14px]"> {t("We reurn money within 30 days")}</p>
      </div>
    </div>
  );
}
