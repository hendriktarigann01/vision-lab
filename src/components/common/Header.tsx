"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import LanguageSelector from "@/components/features/LanguageSelector";
import { Menu, X, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import {
  isActivePath,
  getLocalizedHref,
  getLinkClassName,
} from "@/lib/navigationHelpers";

const Header: React.FC = () => {
  const t = useTranslations("header");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const { scrollY } = useScroll();
  const params = useParams();
  const pathname = usePathname();
  const locale = params.locale as string;

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;

    if (latest > previous && latest > 150) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }

    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <motion.header
      className="fixed w-full z-20 top-2 md:top-5 px-0 md:px-4"
      variants={{
        visible: { y: 0 },
        hidden: { y: "-150%" },
      }}
      animate={isVisible ? "visible" : "hidden"}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <nav
        aria-label="Main navigation"
        className={`max-w-7xl mx-auto px-6 rounded-2xl py-4 transition-all duration-300 
                  ${
                    isScrolled
                      ? "bg-white/50 backdrop-blur-md md:shadow-[0_4px_50px_rgba(175,175,175,0.2)]"
                      : "bg-none md:bg-white md:shadow-[0_4px_50px_rgba(175,175,175,0.2)]"
                  }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link
              href={getLocalizedHref(locale, "/")}
              className="cursor-pointer"
              aria-label="VisionLAB Home"
            >
              <Image
                src="/vision-lab-logo.webp"
                alt="VisionLAB Logo"
                width={200}
                height={40}
                className="object-contain"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation - Using <ul> for semantic HTML */}
          <ul className="hidden md:flex items-center gap-2 list-none">
            <li>
              <Link
                href={getLocalizedHref(locale, "/")}
                className={`px-6 py-2 rounded-full transition ${getLinkClassName(
                  isActivePath(pathname, locale, "/"),
                  "bg-brand-200 text-white",
                  "text-gray-700 hover:text-brand-200"
                )}`}
              >
                {t("home")}
              </Link>
            </li>
            <li>
              <Link
                href={getLocalizedHref(locale, "/about-us")}
                className={`px-6 py-2 rounded-full transition ${getLinkClassName(
                  isActivePath(pathname, locale, "/about-us"),
                  "bg-brand-200 text-white",
                  "text-gray-700 hover:text-brand-200"
                )}`}
              >
                {t("aboutUs")}
              </Link>
            </li>
            <li>
              <Link
                href={getLocalizedHref(locale, "/services")}
                className={`px-6 py-2 rounded-full transition ${getLinkClassName(
                  isActivePath(pathname, locale, "/services"),
                  "bg-brand-200 text-white",
                  "text-gray-700 hover:text-brand-200"
                )}`}
              >
                {t("services")}
              </Link>
            </li>
            <li>
              <Link
                href={getLocalizedHref(locale, "/contact-us")}
                className={`px-6 py-2 rounded-full transition ${getLinkClassName(
                  isActivePath(pathname, locale, "/contact-us"),
                  "bg-brand-200 text-white",
                  "text-gray-700 hover:text-brand-200"
                )}`}
              >
                {t("contactUs")}
              </Link>
            </li>
            <li>
              <LanguageSelector />
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg bg-brand-200 text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Open mobile menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <Menu className="w-6 h-6 text-white" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 transition-opacity duration-300 z-30"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Panel */}
      <aside
        id="mobile-menu"
        className={`fixed inset-y-0 left-0 w-full bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-40 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-label="Mobile navigation"
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <Image
              src="/vision-lab-logo.webp"
              alt="VisionLAB Logo"
              width={150}
              height={30}
              className="object-contain"
            />
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Close mobile menu"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          {/* Mobile Menu Navigation */}
          <nav
            className="flex-1 overflow-y-auto p-6"
            aria-label="Mobile menu navigation"
          >
            <ul className="space-y-2 list-none">
              <li>
                <Link
                  href={getLocalizedHref(locale, "/")}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center justify-between p-4 rounded-xl transition-colors group ${getLinkClassName(
                    isActivePath(pathname, locale, "/"),
                    "bg-brand-200 text-white",
                    "text-gray-700"
                  )}`}
                >
                  <span className="text-lg">{t("home")}</span>
                  <ArrowRight
                    className={`w-5 h-5 transition-colors ${getLinkClassName(
                      isActivePath(pathname, locale, "/"),
                      "text-white",
                      "text-gray-400 group-hover:text-brand-200"
                    )}`}
                    aria-hidden="true"
                  />
                </Link>
              </li>

              <li
                className="my-2 border-b-2 border-dashed border-brand-50"
                aria-hidden="true"
              />

              <li>
                <Link
                  href={getLocalizedHref(locale, "/about-us")}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center justify-between p-4 rounded-xl transition-colors group ${getLinkClassName(
                    isActivePath(pathname, locale, "/about-us"),
                    "bg-brand-200 text-white",
                    "text-gray-700"
                  )}`}
                >
                  <span className="text-lg">{t("aboutUs")}</span>
                  <ArrowRight
                    className={`w-5 h-5 transition-colors ${getLinkClassName(
                      isActivePath(pathname, locale, "/about-us"),
                      "text-white",
                      "text-gray-400 group-hover:text-brand-200"
                    )}`}
                    aria-hidden="true"
                  />
                </Link>
              </li>

              <li
                className="my-2 border-b-2 border-dashed border-brand-50"
                aria-hidden="true"
              />

              <li>
                <Link
                  href={getLocalizedHref(locale, "/services")}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center justify-between p-4 rounded-xl transition-colors group ${getLinkClassName(
                    isActivePath(pathname, locale, "/services"),
                    "bg-brand-200 text-white",
                    "text-gray-700"
                  )}`}
                >
                  <span className="text-lg">{t("services")}</span>
                  <ArrowRight
                    className={`w-5 h-5 transition-colors ${getLinkClassName(
                      isActivePath(pathname, locale, "/services"),
                      "text-white",
                      "text-gray-400 group-hover:text-brand-200"
                    )}`}
                    aria-hidden="true"
                  />
                </Link>
              </li>

              <li
                className="my-2 border-b-2 border-dashed border-brand-50"
                aria-hidden="true"
              />

              <li>
                <Link
                  href={getLocalizedHref(locale, "/contact-us")}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center justify-between p-4 rounded-xl transition-colors group ${getLinkClassName(
                    isActivePath(pathname, locale, "/contact-us"),
                    "bg-brand-200 text-white",
                    "text-gray-700"
                  )}`}
                >
                  <span className="text-lg">{t("contactUs")}</span>
                  <ArrowRight
                    className={`w-5 h-5 transition-colors ${getLinkClassName(
                      isActivePath(pathname, locale, "/contact-us"),
                      "text-white",
                      "text-gray-400 group-hover:text-brand-200"
                    )}`}
                    aria-hidden="true"
                  />
                </Link>
              </li>

              <li className="py-4">
                <LanguageSelector />
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </motion.header>
  );
};

export default Header;
