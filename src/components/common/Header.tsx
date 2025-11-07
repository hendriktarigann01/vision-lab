"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import LanguageSelector from "@/components/features/LanguageSelector";
import { Menu } from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;

    if (latest > previous && latest > 150) {
      // Scrolling down
      setIsVisible(false);
    } else {
      // Scrolling up
      setIsVisible(true);
    }

    // Update background blur state
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  // Smooth scroll handler
  const handleScrollTo = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 100; // Offset untuk fixed header
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
          {/* Logo */}
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
              className="px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition font-medium"
            >
              Home
            </a>
            <a
              href="#about-us"
              onClick={(e) => handleScrollTo(e, "about-us")}
              className="px-6 py-2 text-gray-700 hover:text-orange-500 transition font-medium"
            >
              About Us
            </a>
            <a
              href="#service"
              onClick={(e) => handleScrollTo(e, "service")}
              className="px-6 py-2 text-gray-700 hover:text-orange-500 transition font-medium"
            >
              Services
            </a>
            <a
              href="#contact-us"
              onClick={(e) => handleScrollTo(e, "contact-us")}
              className="px-6 py-2 text-gray-700 hover:text-orange-500 transition font-medium"
            >
              Contact Us
            </a>
            {/* <LanguageSelector /> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg bg-orange-500 text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4">
            <div className="flex flex-col gap-2">
              <a
                href="#home"
                onClick={(e) => handleScrollTo(e, "home")}
                className="px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition font-medium text-center"
              >
                Home
              </a>
              <a
                href="#about-us"
                onClick={(e) => handleScrollTo(e, "about-us")}
                className="px-4 py-2 text-gray-700 hover:text-orange-500 transition font-medium text-center"
              >
                About Us
              </a>
              <a
                href="#service"
                onClick={(e) => handleScrollTo(e, "service")}
                className="px-4 py-2 text-gray-700 hover:text-orange-500 transition font-medium text-center"
              >
                Services
              </a>
              <a
                href="#contact-us"
                onClick={(e) => handleScrollTo(e, "contact-us")}
                className="px-4 py-2 text-gray-700 hover:text-orange-500 transition font-medium text-center"
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;
