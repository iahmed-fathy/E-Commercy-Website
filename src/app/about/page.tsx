import Breadcrumb from "@/components/breadCrumbs/Breadcrumbs";
import FeaturesBar from "@/components/featuresBar/FeaturesBar";
import MetricsCards from "@/components/metricsCards/MetricsCards";
import TeamMembersSlider from "@/components/teamMembersSlider/TeamMembersSlider";
import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col gap-20">
      <Breadcrumb />
      <section className="flex max-lg:flex-col gap-25 items-center">
        <div className="flex flex-col gap-2 max-w-[525px] max-sm:order-2">
          <h2 className="font-semibold text-[54px] max-sm:text-center">
            Our Store
          </h2>
          <p className="text-[16px] leading-[26px]">
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.
          </p>
          <p className="text-[16px] leading-[26px]">
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <div className="max-sm:order-1">
          <Image
            src={"/aboutUs.png"}
            alt="Our Store Image"
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
