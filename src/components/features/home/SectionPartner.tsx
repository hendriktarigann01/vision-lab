"use client";
import React from "react";
import Image from "next/image";
import { Card } from "@/components/ui/Card";

const SectionPartner = () => {
  const partners = [
    { name: "LINSN Technology", logo: "/logos/logo-linsn.png" },
    { name: "FABULUX LED", logo: "/logos/logo-fabulux.png" },
    { name: "Ledman", logo: "/logos/logo-ledman.png" },
    { name: "Unilumin", logo: "/logos/logo-unilumin.png" },
    { name: "LAMPRO", logo: "/logos/logo-lampro.png" },
    { name: "Karinda", logo: "/logos/logo-karindo.png" },
    { name: "LIGHTLINK", logo: "/logos/logo-lightlink.png" },
    { name: "Absen", logo: "/logos/logo-absen.png" },
    { name: "LEYARD", logo: "/logos/logo-leyard.png" },
    { name: "MJ SOLUTION INDONESIA", logo: "/logos/logo-mjs.png" },
  ];

  return (
    <section className="py-16 px-4 bg-[#F5F5F5]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
          Our Partners
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          VisionLab has experience handling various well-known LED and LCD
          brands with repair services that are precise, safe, and comply with
          manufacturer standards.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {partners.map((partner, idx) => (
            <Card
              key={idx}
              className="bg-white border-none p-6 flex items-center shadow-none justify-center min-h-[120px]"
            >
              <div className="relative w-full h-16">
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
