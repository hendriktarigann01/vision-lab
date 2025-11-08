"use client";
import Image from "next/image";
import React from "react";
import { Card } from "@/components/ui/card";
import { useTranslations } from "next-intl";

const SectionAboutUs = () => {
  const t = useTranslations("aboutUs");

  const stats = [
    {
      icon: (
        <Image src="/icons/icon-repair.png" alt="icon" width={48} height={48} />
      ),
      value: t("stats.repaired.value"),
      label: t("stats.repaired.label"),
    },
    {
      icon: (
        <Image
          src="/icons/icon-satisfy.png"
          alt="icon"
          width={48}
          height={48}
        />
      ),
      value: t("stats.satisfaction.value"),
      label: t("stats.satisfaction.label"),
    },
    {
      icon: (
        <Image src="/icons/icon-done.png" alt="icon" width={48} height={48} />
      ),
      value: t("stats.projects.value"),
      label: t("stats.projects.label"),
    },
  ];

  return (
    <section
      id="about-us"
      className="py-10 md:py-16 px-8 md:px-6 bg-[#FAFAFA] flex items-center justify-center"
    >
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-lg md:text-4xl text-center mb-6 md:mb-12 text-gray-900">
          {t("title")}
        </h2>
        <div className="grid grid-cols-3 gap-4 md:gap-8">
          {stats.map((stat, idx) => (
            <Card
              key={idx}
              className="p-0 md:p-6 gap-2 md:gap-4 bg-transparent w-fit border-none shadow-none"
            >
              <div className="px-2 md:px-3 w-12 md:w-20">{stat.icon}</div>
              <div className="text-base md:text-4xl border-l-3 px-2 md:px-3 border-brand-200 font-normal text-gray-900">
                {stat.value}
              </div>
              <p className="text-xs md:text-base text-gray-600 px-2 md:px-3">
                {stat.label}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionAboutUs;
