"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import LanguageSelector from "@/components/features/LanguageSelector";
import { Menu, X, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

const Header: React.FC = () => {
  const t = useTranslations("header");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const { scrollY } = useScroll();

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

  const handleScrollTo = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsMenuOpen(false);
    }
  };

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
        className={`max-w-7xl mx-auto px-6 rounded-2xl py-4 transition-all duration-300 
                  ${
                    isScrolled
                      ? "bg-white/50 backdrop-blur-md md:shadow-[0_4px_50px_rgba(175,175,175,0.2)]"
                      : "bg-none md:bg-white md:shadow-[0_4px_50px_rgba(175,175,175,0.2)]"
                  }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative">
              <Image
                src="/vision-lab-logo.png"
                alt="VisionLab Logo"
                width={200}
                height={40}
                className="object-contain"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href="#home"
              onClick={(e) => handleScrollTo(e, "home")}
              className="px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition"
            >
              {t("home")}
            </a>
            <a
              href="#about-us"
              onClick={(e) => handleScrollTo(e, "about-us")}
              className="px-6 py-2 text-gray-700 hover:text-orange-500 transition"
            >
              {t("aboutUs")}
            </a>
            <a
              href="#service"
              onClick={(e) => handleScrollTo(e, "service")}
              className="px-6 py-2 text-gray-700 hover:text-orange-500 transition"
            >
              {t("services")}
            </a>
            <a
              href="#contact-us"
              onClick={(e) => handleScrollTo(e, "contact-us")}
              className="px-6 py-2 text-gray-700 hover:text-orange-500 transition"
            >
              {t("contactUs")}
            </a>
            <LanguageSelector />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg bg-orange-500 text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
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
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`fixed inset-y-0 left-0 w-full bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-40 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <Image
              src="/vision-lab-logo.png"
              alt="VisionLab Logo"
              width={150}
              height={30}
              className="object-contain"
            />
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto p-6">
            <div className="space-y-2">
              <a
                href="#home"
                onClick={(e) => handleScrollTo(e, "home")}
                className="flex items-center justify-between p-4 text-gray-700 hover:bg-orange-50 rounded-xl transition-colors group"
              >
                <span className="text-lg">{t("home")}</span>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-orange-500 transition-colors" />
              </a>
              <div className="my-2 border-b border-dashed border-orange-200" />

              <a
                href="#about-us"
                onClick={(e) => handleScrollTo(e, "about-us")}
                className="flex items-center justify-between p-4 text-gray-700 hover:bg-orange-50 rounded-xl transition-colors group"
              >
                <span className="text-lg">{t("aboutUs")}</span>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-orange-500 transition-colors" />
              </a>
              <div className="my-2 border-b border-dashed border-orange-200" />

              <a
                href="#service"
                onClick={(e) => handleScrollTo(e, "service")}
                className="flex items-center justify-between p-4 text-gray-700 hover:bg-orange-50 rounded-xl transition-colors group"
              >
                <span className="text-lg">{t("services")}</span>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-orange-500 transition-colors" />
              </a>
              <div className="my-2 border-b border-dashed border-orange-200" />

              <a
                href="#contact-us"
                onClick={(e) => handleScrollTo(e, "contact-us")}
                className="flex items-center justify-between p-4 text-gray-700 hover:bg-orange-50 rounded-xl transition-colors group"
              >
                <span className="text-lg">{t("contactUs")}</span>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-orange-500 transition-colors" />
              </a>

              <div className="py-4">
                <LanguageSelector />
              </div>
            </div>
          </nav>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
