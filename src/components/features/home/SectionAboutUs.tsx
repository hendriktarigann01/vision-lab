"use client";
import Image from "next/image";
import React from "react";
import { Card } from "@/components/ui/Card";

const SectionAboutUs = () => {
  const stats = [
    {
      icon: (
        <Image src="/icons/icon-repair.png" alt="icon" width={48} height={48} />
      ),
      value: "2000+",
      label: "SQM LED & LCD screens repaired",
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
      value: "95%",
      label: "Customer satisfaction level",
    },
    {
      icon: (
        <Image src="/icons/icon-globe.png" alt="icon" width={48} height={48} />
      ),
      value: "15+",
      label: "Serving cities throughout Indonesia",
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-center mb-12 text-gray-900">
          Data that Proves Our Commitment to Quality
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, idx) => (
            <Card
              key={idx}
              className="p-6 gap-4 bg-transparent border-none shadow-none"
            >
              <div className="px-3">{stat.icon}</div>
              <div className="text-4xl border-l-2 px-3 border-orange-500 font-normal text-gray-900">
                {stat.value}
              </div>
              <p className="text-gray-600 px-3">{stat.label}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionAboutUs;
