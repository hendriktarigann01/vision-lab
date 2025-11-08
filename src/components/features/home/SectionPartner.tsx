"use client";
import React from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { useTranslations } from "next-intl";

const SectionPartner = () => {
  const t = useTranslations("partners");

  const partners = [
    { name: "LINSN Technology", logo: "/logos/logo-linsn.png" },
    { name: "FABULUX LED", logo: "/logos/logo-fabulux.png" },
    { name: "Ledman", logo: "/logos/logo-ledman.png" },
    { name: "Unilumin", logo: "/logos/logo-unilumin.png" },
    { name: "LAMPRO", logo: "/logos/logo-lampro.png" },
    { name: "Karindo", logo: "/logos/logo-karindo.png" },
    { name: "LIGHTLINK", logo: "/logos/logo-lightlink.png" },
    { name: "MJ SOLUTION INDONESIA", logo: "/logos/logo-mjs.png" },
    { name: "Absen", logo: "/logos/logo-absen.png" },
    { name: "LEYARD", logo: "/logos/logo-leyard.png" },
  ];

  return (
    <section className="py-10 md:py-16 px-8 md:px-6 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-lg md:text-4xl text-center mb-6 md:mb-12 text-gray-900">
          {t("title")}
        </h2>
        <p className="text-sm md:text-base text-center px-9 md:px-0 text-gray-600 mb-6 md:mb-12 max-w-3xl mx-auto">
          {t("description")}
        </p>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-6">
          {partners.map((partner, idx) => (
            <Card
              key={idx}
              className={`bg-white rounded-md border-none p-4 md:p-6 flex items-center justify-center shadow-none h-16 md:min-h-[120px]
                          ${
                            idx === partners.length - 1
                              ? "col-span-3 justify-self-center w-[calc(33.333%-20px)] md:col-span-1 md:justify-self-auto md:w-auto"
                              : ""
                          }
                        `}
            >
              <div className="relative w-full h-8 md:h-16">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain"
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionPartner;
