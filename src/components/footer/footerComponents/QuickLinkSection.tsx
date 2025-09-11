import { getTranslations } from "next-intl/server";

export default async function QuickLinkSection() {
  const t = await getTranslations("headers");

  return (
    <section>
      <h6 className="font-Medium text-[24px] mb-4">{t("quickLink")}</h6>
      <ul className="flex flex-col gap-4">
        <li>
          <a href="#" className="font-normal text-[16px]">
            {t("privacyPolicy")}
          </a>
        </li>
        <li>
          <a href="#" className="font-normal text-[16px]">
            {t("termsOfUse")}
          </a>
        </li>
        <li>
          <a href="#" className="font-normal text-[16px]">
            {t("faq")}
          </a>
        </li>
        <li>
          <a href="#" className="font-normal text-[16px]">
            {t("contact")}
          </a>
        </li>
      </ul>
    </section>
  );
}
