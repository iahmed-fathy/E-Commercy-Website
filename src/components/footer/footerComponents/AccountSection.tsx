import { getLocale, getTranslations } from "next-intl/server";
import Link from "next/link";

export default async function AccountSection() {
  const t = await getTranslations("headers");
  const locale = await getLocale();

  return (
    <ul className="flex flex-col gap-4">
      <h6 className="font-Medium text-[24px]">{t("Account")}</h6>
      <li>
        <Link
          href={`/${locale}/my-account`}
          className="font-normal text-[16px]"
        >
          {t("My Account")}
        </Link>
      </li>
      <li>
        <Link href={`/${locale}/sign-in`} className="font-normal text-[16px]">
          {t("Login / Register")}
        </Link>
      </li>
      <li>
        <Link href={`/${locale}/cart`} className="font-normal text-[16px]">
          {t("Cart")}
        </Link>
      </li>
      <li>
        <Link href={`/${locale}/wishlist`} className="font-normal text-[16px]">
          {t("Wishlist")}
        </Link>
      </li>
      <li>
        <Link
          href={`/${locale}/our-products`}
          className="font-normal text-[16px]"
        >
          {t("Shop")}
        </Link>
      </li>
    </ul>
  );
}
