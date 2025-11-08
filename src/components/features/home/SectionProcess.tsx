"use client";
import React from "react";
import { Card } from "@/components/ui/card";
import { useTranslations } from "next-intl";

const SectionProcess = () => {
  const t = useTranslations("process");

  const processes = [
    {
      num: "1",
      title: t("steps.stepOne.title"),
      desc: t("steps.stepOne.description"),
    },
    {
      num: "2",
      title: t("steps.stepTwo.title"),
      desc: t("steps.stepTwo.description"),
    },
    {
      num: "3",
      title: t("steps.stepThree.title"),
      desc: t("steps.stepThree.description"),
    },
    {
      num: "4",
      title: t("steps.stepFour.title"),
      desc: t("steps.stepFour.description"),
    },
    {
      num: "5",
      title: t("steps.stepFive.title"),
      desc: t("steps.stepFive.description"),
    },
    {
      num: "6",
      title: t("steps.stepSix.title"),
      desc: t("steps.stepSix.description"),
    },
  ];

  return (
    <section className="py-10 md:py-16 px-8 md:px-6 bg-[#FAFAFA]">
      <div className="mx-auto max-w-7xl py-0 md:py-10">
        {/* Title */}
        <h2 className="text-lg md:text-4xl text-center mb-6 md:mb-12 text-gray-900">
          {t("title")}
        </h2>
        <p className="text-sm md:text-base text-center px-9 md:px-0 text-gray-600 mb-6 md:mb-12 max-w-3xl mx-auto">
          <span className="text-orange-500 font-semibold">VisionLab</span>{" "}
          {t("description")}
        </p>
        <div className="grid md:grid-cols-3 gap-7 md:gap-8">
          {processes.map((process, idx) => (
            <Card
              key={idx}
              className="bg-transparent py-0 gap-2 border-none shadow-none"
            >
              <div className="ml-3 w-8 h-8 md:w-10 md:h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 text-md md:text-lg">
                {process.num}
              </div>
              <h3 className="px-3 border-l-2 border-orange-500 text-gray-900 text-sm md:text-base">
                {process.title}
              </h3>
              <p className="px-3 text-gray-600 text-xs md:text-sm">
                {process.desc}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionProcess;
