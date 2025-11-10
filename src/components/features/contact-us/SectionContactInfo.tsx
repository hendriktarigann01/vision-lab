"use client";
import Image from "next/image";
import React from "react";
import { Card } from "@/components/ui/card";
// import { useTranslations } from "next-intl";

const SectionContactInfo = () => {
  //   const t = useTranslations("aboutUs");

  const stats = [
    {
      icon: (
        <Image src="/icons/icon-phone.png" alt="icon" width={48} height={48} />
      ),
      value: "Phone",
      label: "(+62) 811-1122-492",
    },
    {
      icon: (
        <Image
          src="/icons/icon-headquarter.png"
          alt="icon"
          width={48}
          height={48}
        />
      ),
      value: "Headquarter",
      label: "The Mansion Bougenville Tower Fontana Lantai 50 Jakarta Utara",
    },
    {
      icon: (
        <Image src="/icons/icon-mail.png" alt="icon" width={48} height={48} />
      ),
      value: "Email",
      label: "sales@mjsolution.co.id",
    },
  ];

  return (
    <section
      className="py-16 md:py-24 px-8 md:px-6 bg-[#FAFAFA] flex items-center justify-center"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-56">
          {stats.map((stat, idx) => (
            <Card
              key={idx}
              className="p-0 md:p-6 gap-2 md:gap-4 bg-transparent w-full border-none shadow-none"
            >
              <div className="px-2 md:px-3 w-12 md:w-20">{stat.icon}</div>
              <div className="text-base md:text-4xl border-l-3 px-2 md:px-3 border-brand-200 font-normal text-gray-900">
                {stat.value}
              </div>
              <p className="text-xs md:text-base text-brand-200 px-2 md:px-3">
                {stat.label}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionContactInfo;
