"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useTranslations } from "next-intl";

const SectionCTA = () => {
  const t = useTranslations("cta");

  return (
    <section
      id="contact-us"
      className="bg-[#FAFAFA] py-10 md:py-16 px-8 md:px-6 flex items-center justify-center"
    >
      <div
        className="relative max-w-7xl bg-[#AFAFAF33]/20 px-8 py-8 md:py-14 mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-8 rounded-4xl"
        style={{ boxShadow: "0px 4px 50px rgba(175, 175, 175, 0.2)" }}
      >
        <div className="flex-1 text-center md:text-left space-y-6">
          {/* Title */}
          <h2 className="text-lg md:text-4xl text-gray-900">
            {t("title")}
            <br />
            {t("titleSecond")}
          </h2>
          <p className="text-sm md:text-base px-0 text-gray-600 mx-auto">
            {t("description")}
          </p>
          <div className="flex justify-center md:justify-start">
            <Button
              size="lg"
              className="bg-brand-200 hover:bg-brand-300 text-white px-8 py-3 cursor-pointer rounded-full font-semibold"
            >
              {t("button")}
            </Button>
          </div>
        </div>

        {/* Character container */}
        <div className="flex-1 flex justify-center relative overflow-visible mt-0">
          <div className="relative md:absolute md:-top-90 w-[300px] h-[300px] md:w-[550px] md:h-[550px]">
            <Image
              src="/vl-human-girl.webp"
              alt="Lab Leaks Top"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionCTA;
