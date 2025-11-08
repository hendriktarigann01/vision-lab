"use client";
import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";

const Hero: React.FC = () => {
  const t = useTranslations("hero");

  return (
    <section
      id="home"
      className="relative md:min-h-screen z-10 overflow-hidden pt-24 bg-[#FAFAFA] w-full"
    >
      <div className="absolute -right-40 top-0 w-[150%] h-[110%] md:w-full md:h-full pointer-events-none z-0">
        <Image
          src="/lableaks_top.png"
          alt="Lab Leaks Top"
          fill
          className="object-contain object-top-right"
        />
      </div>
      {/* Content */}
      <div className="max-w-7xl mx-auto w-full px-10 md:px-6 py-10 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center w-full">
          {/* Left Content */}
          <div className="space-y-4 md:space-y-6">
            <h1 className="text-center md:text-left text-3xl md:text-4xl lg:text-5xl text-orange-500 leading-tight font-bold">
              {t("title")}
              <br />
              <span>{t("titleSecond")}</span>
            </h1>

            <p className="text-gray-600 text-center md:text-left text-base md:text-lg">
              {t("description")}
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
              <button className="w-36 md:w-48 md:px-8 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
                {t("bookService")}
              </button>
              <button className="w-36 md:w-48 md:px-8 py-3 border-2 border-orange-500 text-orange-500 rounded-full hover:bg-orange-50 transition font-semibold">
                {t("exploreService")}
              </button>
            </div>
          </div>

          {/* Right Content - Technician Illustration */}
          <div className="relative flex justify-center items-center">
            <div className="relative w-full max-w-[550px] aspect-square">
              <Image
                src="/vl-human-boy.png"
                alt="Technician Illustration"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
