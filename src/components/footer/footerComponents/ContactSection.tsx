import { getTranslations } from "next-intl/server";

export default async function ContactSection() {
  const t = await getTranslations("headers");

  return (
    <ul className="flex flex-col gap-4">
      <h6 className="font-Medium text-[24px]">{t("Support")}</h6>
      <li>
        <a href="#" className="font-normal text-[16px]">
          {t("address")}
        </a>
      </li>
      <li>
        <a
          href="mailto:exclusive@gmail.com"
          className="font-normal text-[16px]"
        >
          exclusive@gmail.com
        </a>
      </li>
      <li>
        <a href="tel:+88015888889999" className="font-normal text-[16px]">
          +88015-88888-9999
        </a>
      </li>
    </ul>
  );
}
