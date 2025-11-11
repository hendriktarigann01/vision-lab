"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { getLocalizedHref } from "@/lib/navigationHelpers";

const Footer: React.FC = () => {
  const t = useTranslations("footer");
  const params = useParams();
  const locale = params.locale as string;

  // Navigation links configuration
  const pageLinks = [
    { href: "/", label: t("pages.home") },
    { href: "/about-us", label: t("pages.aboutUs") },
    { href: "/services", label: t("pages.services") },
    { href: "/contact-us", label: t("pages.contactUs") },
  ];

  const serviceLinks = [
    {
      href: "/services/complete-service",
      label: t("services.completeService"),
    },
    { href: "/services/maintenance", label: t("services.maintenance") },
    { href: "/services/on-site-training", label: t("services.onSiteTraining") },
  ];

  const desktopServiceLinks = [
    {
      href: "/services/complete-service",
      label: t("services.completeService"),
    },
    {
      href: "/services/maintenance",
      label: t("services.maintenance"),
    },
    {
      href: "/services/on-site-training",
      label: t("services.onSiteTraining"),
    },
  ];

  const socialLinks = [
    {
      href: "https://www.instagram.com/visionlabid/?utm_source=ig_web_button_share_sheet",
      icon: "/icons/icon-instagram.png",
      alt: "Instagram",
      svg: (
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      ),
    },
    {
      href: "https://www.linkedin.com/company/visionlabid/",
      icon: "/icons/icon-linkedin.png",
      alt: "LinkedIn",
      svg: (
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      ),
    },
    {
      href: "#tiktok",
      icon: "/icons/icon-tiktok.png",
      alt: "TikTok",
      svg: (
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
      ),
    },
  ];

  return (
    <footer className="bg-[#FAFAFA] py-8 md:py-12 px-6 relative">
      {/* Decorative */}
      <div className="absolute right-0 bottom-0 w-[110%] h-[110%] pointer-events-none z-0">
        <Image
          src="/lableaks_bottom.webp"
          alt="Lab Leaks Bottom"
          fill
          className="object-contain object-bottom-right"
        />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Column 1: Company Info */}
          <div className="flex flex-col">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/vision-lab-logo.webp"
                  alt="VisionLab Logo"
                  width={200}
                  height={40}
                  className="object-contain"
                />
              </div>

              <p className="text-gray-600 mb-6 text-sm md:text-base">
                {t("description")}
              </p>

              {/* Address */}
              <div className="flex gap-3 mb-4">
                <div className="text-brand-200 mt-1 shrink-0">
                  <Image
                    src="/icons/icon-location.png"
                    alt="icon location"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="text-gray-600 text-sm">
                  <p>{t("address.line1")}</p>
                  <p>{t("address.line2")}</p>
                  <p>{t("address.line3")}</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-3 items-center mb-0 md:mb-10">
                <div className="text-brand-200 shrink-0">
                  <Image
                    src="/icons/icon-phone.png"
                    alt="icon phone"
                    width={24}
                    height={24}
                  />
                </div>
                <p className="text-gray-600 text-sm">{t("phone")}</p>
              </div>
            </div>
          </div>

          {/* Column 2 & 3: Mobile Layout */}
          <div className="md:hidden grid grid-cols-3 gap-6">
            {/* Pages */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-6 text-sm">
                {t("pages.title")}
              </h4>
              <ul className="space-y-5 text-gray-600 text-xs">
                {pageLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={getLocalizedHref(locale, link.href)}
                      className="hover:text-brand-200 transition"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-6 text-sm">
                {t("services.title")}
              </h4>
              <ul className="space-y-5 text-gray-600 text-xs">
                {serviceLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={getLocalizedHref(locale, link.href)}
                      className="hover:text-brand-200 transition"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-6 text-sm">
                {t("socialMedia.title")}
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.alt}
                    href={social.href}
                    className="text-brand-200 hover:text-brand-300 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={social.icon}
                      alt={social.alt}
                      width={20}
                      height={20}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop Layout - Column 2: Pages & Services */}
          <div className="hidden md:flex gap-12 justify-center">
            {/* Pages */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">
                {t("pages.title")}
              </h4>
              <ul className="space-y-3 text-gray-600 text-sm">
                {pageLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={getLocalizedHref(locale, link.href)}
                      className="hover:text-brand-200 transition"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">
                {t("services.title")}
              </h4>
              <ul className="space-y-5 text-gray-600 text-sm">
                {desktopServiceLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={getLocalizedHref(locale, link.href)}
                      className="hover:text-brand-200 transition"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Desktop Layout - Column 3: Social Media */}
          <div className="hidden md:block md:pl-8">
            <h4 className="font-semibold text-gray-800 mb-4">
              {t("socialMedia.title")}
            </h4>
            <div className="flex gap-5">
              {socialLinks.map((social) => (
                <a
                  key={social.alt}
                  href={social.href}
                  className="text-brand-200 hover:text-brand-300 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    width="32"
                    height="32"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {social.svg}
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm mt-8 text-center md:text-left">
          {t("copyright")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
