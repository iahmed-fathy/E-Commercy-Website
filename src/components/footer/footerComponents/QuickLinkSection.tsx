import { getLocale, getTranslations } from "next-intl/server";
import Link from "next/link";

export default async function QuickLinkSection() {
  const t = await getTranslations("headers");
  const local = await getLocale();

  return (
    <section>
      <h6 className="font-Medium text-[24px] mb-4">{t("quickLink")}</h6>
      <ul className="flex flex-col gap-4">
        <li>
          <Link href="#" className="font-normal text-[16px]">
            {t("privacyPolicy")}
          </Link>
        </li>
        <li>
          <Link href="#" className="font-normal text-[16px]">
            {t("termsOfUse")}
          </Link>
        </li>
        <li>
          <Link href="#" className="font-normal text-[16px]">
            {t("faq")}
          </Link>
        </li>
        <li>
          <Link href={`/${local}/contact`} className="font-normal text-[16px]">
            {t("contact")}
          </Link>
        </li>
      </ul>
    </section>
  );
}
