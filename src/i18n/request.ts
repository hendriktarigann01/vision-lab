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

  // HANYA load common translations (yang dipakai di semua halaman)
  const messages = (await import(`@/messages/${locale}/common.json`)).default;

  return {
    locale,
    messages,
  };
});
