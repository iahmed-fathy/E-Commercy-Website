import Link from "next/link";
import { useLocale } from "next-intl";

export default function CenteredText() {
  const locale = useLocale();

  return (
    <div className="text-[14px] text-white items-center flex gap-2 max-sm:flex-col">
      <p className="font-normal text-center max-sm:text-[10px]">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
      </p>
      <Link
        href={`/${locale}/our-products`}
        className="font-semibold underline "
      >
        ShopNow
      </Link>
    </div>
  );
}
