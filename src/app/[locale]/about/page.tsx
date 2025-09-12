import Breadcrumb from "@/components/breadCrumbs/Breadcrumbs";
import FeaturesBar from "@/components/featuresBar/FeaturesBar";
import MetricsCards from "@/components/metricsCards/MetricsCards";
import TeamMembersSlider from "@/components/teamMembersSlider/TeamMembersSlider";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

export default async function About() {
  const t = await getTranslations("AboutPage");

  return (
    <div className="flex flex-col gap-20 pt-10">
      <Breadcrumb />
      <section className="flex max-lg:flex-col gap-25 items-center">
        <div className="flex flex-col gap-2 max-w-[525px] max-sm:order-2">
          <h2 className="font-semibold text-[54px] max-sm:text-center mb-10">
            {t("title")}
          </h2>
          <p className="text-[18px] leading-[40px]">{t("paragraph1")}</p>
          <p className="text-[18px] leading-[40px]">{t("paragraph2")}</p>
        </div>
        <div className="max-sm:order-1 rounded-2xl overflow-hidden">
          <Image
            src={"/about.webp"}
            alt={t("imageAlt")}
            width={705}
            height={609}
          ></Image>
        </div>
      </section>
      <MetricsCards />
      <TeamMembersSlider />
      <FeaturesBar />
    </div>
  );
}
