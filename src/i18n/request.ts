import { getRequestConfig } from "next-intl/server";

const supportedLocales = ["en", "ar", "es"];

export default getRequestConfig(async ({ locale }) => {
  const activeLocale: string = supportedLocales.includes(locale ?? "")
    ? locale!
    : "en";

  return {
    locale: activeLocale,
    messages: (await import(`../messages/${activeLocale}.json`)).default,
  };
});
