// Helper for load page-specific translations
// Gunakan fungsi ini di server components untuk lazy load translations

/**
 * Load translations untuk Home page
 * Menggabungkan common + home + heroes
 */
export async function getHomeTranslations(locale: string) {
  const [common, home, heroes, aboutUs] = await Promise.all([
    import(`@/messages/${locale}/common.json`),
    import(`@/messages/${locale}/home.json`),
    import(`@/messages/${locale}/heroes.json`),
    import(`@/messages/${locale}/about-us.json`),
  ]);

  return {
    ...common.default,
    ...home.default,
    ...heroes.default,
    ...aboutUs.default,
  };
}

/**
 * Load translations untuk About Us page
 */
export async function getAboutUsTranslations(locale: string) {
  const [common, aboutUs, heroes] = await Promise.all([
    import(`@/messages/${locale}/common.json`),
    import(`@/messages/${locale}/about-us.json`),
    import(`@/messages/${locale}/heroes.json`),
  ]);

  return {
    ...common.default,
    ...aboutUs.default,
    ...heroes.default,
  };
}

/**
 * Load translations untuk Contact page
 */
export async function getContactTranslations(locale: string) {
  const [common, contact, heroes] = await Promise.all([
    import(`@/messages/${locale}/common.json`),
    import(`@/messages/${locale}/contact.json`),
    import(`@/messages/${locale}/heroes.json`),
  ]);

  return {
    ...common.default,
    ...contact.default,
    ...heroes.default,
  };
}

/**
 * Load translations untuk Services List page
 */
export async function getServicesTranslations(locale: string) {
  const [common, heroes] = await Promise.all([
    import(`@/messages/${locale}/common.json`),
    import(`@/messages/${locale}/heroes.json`),
  ]);

  return {
    ...common.default,
    ...heroes.default,
  };
}

/**
 * Load translations untuk Service Details pages
 * (complete-service, maintenance, on-site-training)
 */
export async function getServiceDetailsTranslations(locale: string) {
  const [common, serviceDetails] = await Promise.all([
    import(`@/messages/${locale}/common.json`),
    import(`@/messages/${locale}/services-details.json`),
  ]);

  return {
    ...common.default,
    ...serviceDetails.default,
  };
}
