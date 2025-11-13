"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";

type PackageKey = "cleaning" | "maintenance" | "complete";

const SectionPrice = () => {
  const t = useTranslations("home.pricing");
  const [activePackage, setActivePackage] = useState<PackageKey>("maintenance");

  const packages: Record<PackageKey, string[]> = {
    cleaning: [
      t("features.moduleCleaning"),
      t("features.frameCleaning"),
      t("features.internalCleaning"),
      t("features.generalCleaning"),
    ],
    maintenance: [
      t("features.moduleCheckup"),
      t("features.powerSupplyCheckup"),
      t("features.rcCheckup"),
      t("features.processorCheckup"),
      t("features.cablingCheckup"),
    ],
    complete: [
      t("features.moduleCheckup"),
      t("features.powerSupplyCheckup"),
      t("features.generalCleaning"),
      t("features.rcCheckup"),
      t("features.processorCheckup"),
      t("features.moduleCleaning"),
      t("features.internalCleaning"),
    ],
  };

  const getPackageName = (key: PackageKey) => {
    return t(`packages.${key}`);
  };

  return (
    <section className="py-16 md:py-24 px-8 md:px-6 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-lg md:text-4xl text-center mb-6 md:mb-12 text-gray-900">
          {t("title")}
        </h2>
        <p className="text-sm md:text-base text-center px-9 md:px-0 text-gray-600 mb-6 md:mb-12 max-w-3xl mx-auto">
          {t("description")}
        </p>

        {/* Package Selection Buttons Mobile (Select) */}
        <div className="md:hidden w-full max-w-52 mb-8 flex justify-center mx-auto">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="bg-brand-200 hover:bg-brand-300 text-white w-full py-6 px-6 rounded-full">
                <span>{getPackageName(activePackage)}</span>
                <ChevronDown className="h-5 w-5 ml-2 shrink-0" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="center"
              className="w-(--radix-dropdown-menu-trigger-width) bg-white rounded-2xl shadow-lg border border-gray-200 p-2"
            >
              <DropdownMenuItem
                onClick={() => setActivePackage("cleaning")}
                className={`cursor-pointer py-3 px-4 rounded-lg text-gray-700 hover:bg-gray-100 focus:bg-gray-100 ${
                  activePackage === "cleaning"
                    ? "bg-brand-50/20 text-brand-200"
                    : ""
                }`}
              >
                {t("packages.cleaning")}
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setActivePackage("maintenance")}
                className={`cursor-pointer py-3 px-4 rounded-lg text-gray-700 hover:bg-gray-100 focus:bg-gray-100 ${
                  activePackage === "maintenance"
                    ? "bg-brand-50/20 text-brand-200"
                    : ""
                }`}
              >
                {t("packages.maintenance")}
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setActivePackage("complete")}
                className={`cursor-pointer py-3 px-4 rounded-lg text-gray-700 hover:bg-gray-100 focus:bg-gray-100 ${
                  activePackage === "complete"
                    ? "bg-brand-50/20 text-brand-200"
                    : ""
                }`}
              >
                {t("packages.complete")}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <Card
          className="bg-gray-50 gap-8 md:gap-6 py-8 md:py-12 border-none shadow-none"
          style={{ boxShadow: "0px 4px 50px rgba(175, 175, 175, 0.2)" }}
        >
          <div className="text-center space-y-5">
            <p className="rounded-lg md:rounded-md text-gray-600 p-5 w-56 bg-[#F5F5F5] mx-auto">
              {getPackageName(activePackage)}
            </p>
            <div className="text-4xl text-gray-900">{t("price")}</div>
            <p className="text-gray-600">{t("perUnit")}</p>
          </div>

          {/* Package Selection Buttons Desktop */}
          <div className="hidden md:flex bg-[#F5F5F5] w-auto p-3 rounded-3xl mx-auto justify-center gap-4 flex-wrap">
            <Button
              variant={activePackage === "cleaning" ? "secondary" : "ghost"}
              onClick={() => setActivePackage("cleaning")}
              className={`rounded-full font-normal cursor-pointer transition-all ${
                activePackage === "cleaning"
                  ? "bg-brand-200 text-white hover:bg-brand-200"
                  : "text-gray-600"
              }`}
            >
              {t("packages.cleaning")}
            </Button>
            <Button
              variant={activePackage === "maintenance" ? "default" : "ghost"}
              onClick={() => setActivePackage("maintenance")}
              className={`rounded-full font-normal cursor-pointer transition-all ${
                activePackage === "maintenance"
                  ? "bg-brand-200 text-white hover:bg-brand-200"
                  : "text-gray-600"
              }`}
            >
              {t("packages.maintenance")}
            </Button>
            <Button
              variant={activePackage === "complete" ? "secondary" : "ghost"}
              onClick={() => setActivePackage("complete")}
              className={`rounded-full font-normal cursor-pointer transition-all ${
                activePackage === "complete"
                  ? "bg-brand-200 text-white hover:bg-brand-200"
                  : "text-gray-600"
              }`}
            >
              {t("packages.complete")}
            </Button>
          </div>

          {/* Package Features List */}
          <div
            className={`grid gap-4 md:gap-6 mx-16 md:mx-auto
                      ${
                        packages[activePackage].length === 4
                          ? "md:grid-cols-2 max-w-2xl space-x-10"
                          : ""
                      }
                      ${
                        packages[activePackage].length <= 3
                          ? "md:grid-cols-1 max-w-md"
                          : ""
                      }
                      ${
                        packages[activePackage].length > 4
                          ? "md:grid-cols-2 max-w-3xl"
                          : ""
                      }`}
          >
            {packages[activePackage].map((item: string, idx: number) => (
              <div key={idx} className="flex items-center gap-3 w-full">
                <div className="w-5 h-5 md:w-6 md:h-6 bg-brand-50 flex items-center justify-center rounded-full text-brand-200 shrink-0">
                  <Check
                    className="text-brand-200"
                    size={
                      typeof window !== "undefined" && window.innerWidth < 768
                        ? 12
                        : 16
                    }
                  />
                </div>

                <span className="text-xs md:text-base text-gray-700">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Link
              href={`https://wa.me/628111122492?text=Hi VisionLAB, I would like to know more about your ${getPackageName(
                activePackage
              )}. When can we schedule a consultation?`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-brand-200 hover:bg-brand-300 text-white px-8 py-3 rounded-full font-normal cursor-pointer"
              >
                {t("getStarted")}
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default SectionPrice;
