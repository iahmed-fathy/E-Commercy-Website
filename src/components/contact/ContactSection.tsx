import Image from "next/image";
import { getTranslations } from "next-intl/server";

export default async function Contact() {
  const t = await getTranslations("contact");

  return (
    <section className="flex gap-10 mt-10 max-sm:flex-col">
      <div className="flex flex-col items-center p-8 shadow gap-8 rounded-[4px] max-sm:w-full">
        <div className="flex flex-col gap-4 w-full">
          <div className="flex gap-2 items-center">
            <Image
              src={"/icons/callIcon.png"}
              alt="call icon"
              height={32}
              width={32}
            />
            <h4 className="font-medium text-[16px]">{t("Call To Us")}</h4>
          </div>
          <p className="text-[14px]">{t("address")}</p>
          <address className="text-[14px]">{t("phone")}</address>
        </div>

        <hr className="bg-black/40 w-full" />

        <div className="flex flex-col gap-4 w-full">
          <div className="flex gap-2 items-center">
            <Image
              src={"/icons/emailIcon.png"}
              alt="email icon"
              height={32}
              width={32}
            />
            <h4 className="font-medium text-[16px]">{t("Write To US")}</h4>
          </div>
          <p className="text-[14px]">{t("fill form")}</p>
          <address className="text-[14px] flex flex-col gap-2">
            <span>{t("Emails1")}</span>
            <span>{t("Emails2")}</span>
          </address>
        </div>
      </div>
      <form className="w-2/3 max-sm:w-full p-10 max-xl:p-5 shadow rounded-[4px] flex flex-col gap-10">
        <div className="flex max-sm:flex-col max-sm:items-start gap-4 justify-between items-center">
          <div className="relative w-fit">
            <input
              type="text"
              placeholder={t("Your Name")}
              required
              className="peer py-2 px-4 focus:outline-0 bg-[#F5F5F5] w-[235px] max-xl:w-[220px] h-[50px] rounded-[4px]"
            />
            <span className="absolute right-[10px] top-[20px] transform -translate-y-1/2 text-red-300 pointer-events-none peer-focus:hidden">
              *
            </span>
          </div>
          <div className="relative w-fit">
            <input
              type="email"
              placeholder={t("Your Email")}
              required
              className="peer py-2 px-4 focus:outline-0 bg-[#F5F5F5] w-[235px] max-xl:w-[220px] h-[50px] rounded-[4px]"
            />
            <span className="absolute right-[10px] top-[20px] transform -translate-y-1/2 text-red-300 pointer-events-none peer-focus:hidden">
              *
            </span>
          </div>
          <div className="relative w-fit">
            <input
              type="text"
              placeholder={t("Your Phone")}
              required
              className="peer py-2 px-4 focus:outline-0 bg-[#F5F5F5] w-[235px] max-xl:w-[220px] h-[50px] rounded-[4px]"
            />
            <span className="absolute right-[10px] top-[20px] transform -translate-y-1/2 text-red-300 pointer-events-none peer-focus:hidden">
              *
            </span>
          </div>
        </div>

        <textarea
          name="message"
          id="message"
          className="w-full bg-[#F5F5F5] h-[207px] p-5 resize-none focus:outline-0"
          placeholder={t("Your Message")}
        ></textarea>
        <button className="font-medium text-[16px] text-white bg-[#DB4444] w-[211px] h-[56px] rounded-[4px] cursor-pointer self-end max-sm:self-center">
          {t("Send Message")}
        </button>
      </form>
    </section>
  );
}
