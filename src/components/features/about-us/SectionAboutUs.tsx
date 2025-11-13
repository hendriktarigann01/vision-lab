"use client";
import Image from "next/image";
import React from "react";
import { Card } from "@/components/ui/card";
import { useTranslations } from "next-intl";

const SectionAboutUs = () => {
  const t = useTranslations("aboutUs");

  const visionMission = [
    {
      icon: (
        <Image
          loading="lazy"
          src="/icons/icon-vision.png"
          alt="icon"
          width={48}
          height={48}
        />
      ),
      title: t("visionMission.vision.title"),
      description: t("visionMission.vision.description"),
    },
    {
      icon: (
        <Image
          loading="lazy"
          src="/icons/icon-mission.png"
          alt="icon"
          width={48}
          height={48}
        />
      ),
      title: t("visionMission.mission.title"),
      description: t("visionMission.mission.description"),
    },
  ];

  const stats = [
    {
      icon: (
        <Image
          loading="lazy"
          src="/icons/icon-repair.png"
          alt="icon"
          width={48}
          height={48}
        />
      ),
      value: t("stats.repaired.value"),
      label: t("stats.repaired.label"),
    },
    {
      icon: (
        <Image
          loading="lazy"
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
        <Image
          loading="lazy"
          src="/icons/icon-done.png"
          alt="icon"
          width={48}
          height={48}
        />
      ),
      value: t("stats.projects.value"),
      label: t("stats.projects.label"),
    },
  ];

  return (
    <section
      id="about-us"
      className="py-16 md:py-24 px-8 md:px-6 bg-[#FAFAFA] flex items-center justify-center"
    >
      <div className="max-w-7xl mx-auto">
        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-2 gap-8 mb-12">
          {/* Left */}
          <div>
            {/* Title */}
            <h2 className="text-4xl mb-12 text-gray-900">{t("title")}</h2>
          </div>

          {/* Right - Description and Vision/Mission */}
          <div>
            {/* Description */}
            <p className="text-base text-gray-700 leading-relaxed mb-8">
              {t("description")}
            </p>

            {/* Vision & Mission - 2 columns */}
            <div className="grid grid-cols-2 gap-8">
              {visionMission.map((item, idx) => (
                <div key={idx} className="flex flex-col">
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-base font-normal text-gray-900 border-l-4 border-brand-200 pl-3 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden mb-8">
          {/* Title */}
          <h2 className="text-lg mb-6 text-gray-900">{t("title")}</h2>
          {/* Description */}
          <p className="text-sm text-gray-700 leading-relaxed mb-6">
            {t("description")}
          </p>

          {/* Vision & Mission - stacked */}
          <div className="grid grid-cols-2 gap-6">
            {visionMission.map((item, idx) => (
              <div key={idx} className="flex flex-col gap-2">
                <div className="px-2 md:px-3 w-12 md:w-20">{item.icon}</div>
                <h3 className="text-base font-normal text-gray-900 border-l-4 border-brand-200 px-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed px-2">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats - 3 columns for all screens */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 w-auto md:max-w-5xl mx-auto">
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
