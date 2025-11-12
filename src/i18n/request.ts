import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (
    !locale ||
    !routing.locales.includes(locale as (typeof routing.locales)[number])
  ) {
    locale = routing.defaultLocale;
  }

  // Load all translation files and merge them
  const messages = (
    await Promise.all([
      import(`@/messages/${locale}/common.json`),
      import(`@/messages/${locale}/heroes.json`),
      import(`@/messages/${locale}/home.json`),
      import(`@/messages/${locale}/about-us.json`),
      import(`@/messages/${locale}/contact.json`),
      import(`@/messages/${locale}/services-details.json`),
    ])
  ).reduce((acc, module) => ({ ...acc, ...module.default }), {});

  return {
    locale,
    messages,
  };
});
