"use client";
import Image from "next/image";
import React from "react";
import { MoveDown } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const Hero: React.FC = () => {
  const t = useTranslations("heroes.aboutUs");

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about-us");
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative flex items-center justify-center z-10 overflow-hidden pt-24 bg-[#FAFAFA] w-full"
    >
      <div className="absolute -right-40 top-0 w-[150%] h-[600px] md:w-full md:h-[700px] pointer-events-none z-0">
        <Image
          src="/lableaks_top.webp"
          alt="Lab Leaks Top"
          fill
          className="object-contain object-top-right"
          priority
        />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto w-full px-10 md:px-6 py-10 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center w-full">
          {/* Left Content */}
          <div className="space-y-4 md:space-y-6">
            <p className="text-gray-600 text-center md:text-left text-base md:text-lg">
              {t("label")}
            </p>

            <h1 className="text-center md:text-left text-3xl md:text-4xl lg:text-5xl text-brand-200 leading-tight font-bold">
              {t("title")}
            </h1>

            <p className="text-gray-600 text-center md:text-left text-base md:text-lg">
              {t("description")}
            </p>

            <div className="flex flex-wrap justify-center md:justify-start pt-4">
              <motion.button
                onClick={scrollToAbout}
                className="flex items-center justify-center h-auto gap-2 w-auto cursor-pointer px-6 md:px-8 py-3 bg-brand-200 text-white rounded-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <span>{t("button")}</span>
                <MoveDown className="w-4 h-4" />
              </motion.button>
            </div>
          </div>

          {/* Right Content - Technician Illustration */}
          <div className="relative flex justify-center items-center">
            <div className="relative w-full max-w-[550px] aspect-square">
              <Image
                src="/humans/vl-human-boy-2.webp"
                alt="Technician Illustration"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
