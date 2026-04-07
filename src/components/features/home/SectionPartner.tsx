"use client";
import React from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { useTranslations } from "next-intl";

const SectionPartner = () => {
  const t = useTranslations("home.partners");

  const mobileMainPartners = [
    { name: "Unilumin", logo: "/logos/logo-unilumin.png" },
    { name: "Absen", logo: "/logos/logo-absen.png" },
    { name: "Ledman", logo: "/logos/logo-ledman.png" },
    { name: "LEYARD", logo: "/logos/logo-leyard.png" },
    { name: "LINSN Technology", logo: "/logos/logo-linsn.png" },
    { name: "Qiangli", logo: "/logos/logo-qiangli.png" },
    { name: "FABULUX LED", logo: "/logos/logo-fabulux.png" },
    { name: "LAMPRO", logo: "/logos/logo-lampro.png" },
    { name: "LIGHTLINK", logo: "/logos/logo-lightlink.png" },
    { name: "QSTECH", logo: "/logos/logo-qstech.png" },
    { name: "Panasonic", logo: "/logos/logo-panasonic.png" },
    { name: "Envision", logo: "/logos/logo-envision.png" },
  ];

  const desktopMainPartners = [
    { name: "Unilumin", logo: "/logos/logo-unilumin.png" },
    { name: "Absen", logo: "/logos/logo-absen.png" },
    { name: "Ledman", logo: "/logos/logo-ledman.png" },
    { name: "LEYARD", logo: "/logos/logo-leyard.png" },
    { name: "LINSN Technology", logo: "/logos/logo-linsn.png" },
    { name: "Qiangli", logo: "/logos/logo-qiangli.png" },
    { name: "FABULUX LED", logo: "/logos/logo-fabulux.png" },
    { name: "LAMPRO", logo: "/logos/logo-lampro.png" },
    { name: "LIGHTLINK", logo: "/logos/logo-lightlink.png" },
    { name: "QSTECH", logo: "/logos/logo-qstech.png" },
  ];

  const mobileLastRow = [
    { name: "KMI", logo: "/logos/logo-kmi.png" },
    { name: "NEO", logo: "/logos/logo-neo.png" },
  ];

  const desktopLastRow = [
    { name: "Panasonic", logo: "/logos/logo-panasonic.png" },
    { name: "Envision", logo: "/logos/logo-envision.png" },
    { name: "KMI", logo: "/logos/logo-kmi.png" },
    { name: "NEO", logo: "/logos/logo-neo.png" },
  ];

  const PartnerCard = ({
    partner,
  }: {
    partner: { name: string; logo: string };
  }) => (
    <Card className="bg-white rounded-md border-none p-5 flex items-center justify-center shadow-none h-16 md:min-h-24">
      <div className="relative w-full h-8 md:h-20">
        <Image
          loading="lazy"
          src={partner.logo}
          alt={partner.name}
          fill
          className="object-contain"
        />
      </div>
    </Card>
  );

  return (
    <section className="py-16 md:py-24 px-8 md:px-6 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-lg md:text-4xl text-center mb-6 md:mb-12 text-gray-900">
          {t("title")}
        </h2>
        <p className="text-sm md:text-base text-center px-9 md:px-0 text-gray-600 mb-6 md:mb-12 max-w-3xl mx-auto">
          {t("description")}
        </p>

        {/* Mobile layout */}
        <div className="md:hidden">
          <div className="grid grid-cols-3 gap-6 mb-6">
            {mobileMainPartners.map((partner, idx) => (
              <PartnerCard key={idx} partner={partner} />
            ))}
          </div>
          <div className="flex justify-center gap-6">
            {mobileLastRow.map((partner, idx) => (
              <div key={idx} className="w-[calc((100%-1*1.5rem)/3)] min-w-0">
                <PartnerCard partner={partner} />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop layout */}
        <div className="hidden md:block">
          <div className="grid grid-cols-5 gap-6 mb-6">
            {desktopMainPartners.map((partner, idx) => (
              <PartnerCard key={idx} partner={partner} />
            ))}
          </div>
          <div className="flex justify-center gap-6">
            {desktopLastRow.map((partner, idx) => (
              <div key={idx} className="w-[calc((100%-4*1.5rem)/5)] min-w-0">
                <PartnerCard partner={partner} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionPartner;
