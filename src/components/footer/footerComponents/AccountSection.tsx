import { getTranslations } from "next-intl/server";

export default async function AccountSection() {
  const t = await getTranslations("headers");

  return (
    <ul className="flex flex-col gap-4">
      <h6 className="font-Medium text-[24px]">{t("Account")}</h6>
      <li>
        <a href="#" className="font-normal text-[16px]">
          {t("My Account")}
        </a>
      </li>
      <li>
        <a href="#" className="font-normal text-[16px]">
          {t("Login / Register")}
        </a>
      </li>
      <li>
        <a href="#" className="font-normal text-[16px]">
          {t("Cart")}
        </a>
      </li>
      <li>
        <a href="#" className="font-normal text-[16px]">
          {t("Wishlist")}
        </a>
      </li>
      <li>
        <a href="#" className="font-normal text-[16px]">
          {t("Shop")}
        </a>
      </li>
    </ul>
  );
}
