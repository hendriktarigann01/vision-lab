/**
 * Helper functions for navigation and routing
 */

/**
 * Checks if a path is currently active
 * @param pathname - Current pathname from usePathname()
 * @param locale - Current locale from useParams()
 * @param path - Path to check (e.g.: '/about-us' or '/services')
 * @param exact - If true, only match exact path. If false, match path and sub-paths (default: false)
 * @returns boolean - true if path is active
 *
 * // For URL /services/complete-service
 * isActivePath('/services/complete-service', 'id', '/services') // true (matches parent)
 * isActivePath('/services/complete-service', 'id', '/services', true) // false (exact mode)
 */
export const isActivePath = (
  pathname: string,
  locale: string | undefined,
  path: string,
  exact: boolean = false
): boolean => {
  // Normalize path to always start with '/'
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  // Remove locale from pathname for easier comparison
  let pathWithoutLocale = pathname;
  if (locale && pathname.startsWith(`/${locale}`)) {
    pathWithoutLocale = pathname.substring(`/${locale}`.length) || "/";
  }

  // Check exact match
  if (pathWithoutLocale === normalizedPath) return true;

  // If not exact mode, check if pathname starts with path (for nested routes)
  if (!exact) {
    // Ensure match is at the beginning of segment, not in the middle of a word
    // '/services/test' should match '/services' but '/services-other' should not
    if (
      normalizedPath !== "/" &&
      pathWithoutLocale.startsWith(normalizedPath + "/")
    ) {
      return true;
    }
  }

  // Special case for home page (root path)
  if (
    (normalizedPath === "/" || normalizedPath === "") &&
    (pathWithoutLocale === "/" || pathname === `/${locale}`)
  ) {
    return true;
  }

  return false;
};

/**
 * Generate href for link based on locale
 * @param locale - Current locale from useParams()
 * @param path - Target path (e.g.: '/about-us')
 * @param defaultLocale - Default locale that is not displayed in URL (default: 'en')
 * @returns string - href adjusted with locale
 */
export const getLocalizedHref = (
  locale: string | undefined,
  path: string,
  defaultLocale: string = "en"
): string => {
  // Normalize path to always start with '/'
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  // If locale exists and is not default locale, add locale in front of path
  if (locale && locale !== defaultLocale) {
    return `/${locale}${normalizedPath}`;
  }

  // If locale is default or undefined, return path without locale
  return normalizedPath;
};

/**
 * Get class name for link based on active status
 * @param isActive - Whether the link is active
 * @param activeClass - Class used when active
 * @param inactiveClass - Class used when not active
 * @returns string - Combined class name
 */
export const getLinkClassName = (
  isActive: boolean,
  activeClass: string,
  inactiveClass: string
): string => {
  return isActive ? activeClass : inactiveClass;
};
