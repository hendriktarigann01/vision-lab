"use client";
import React from "react";
import { Card } from "@/components/ui/card";

const SectionProcess = () => {
  const processes = [
    {
      num: "1",
      title: "Initial Inspection",
      desc: "Initial inspection to determine the general condition of the screen and determine maintenance requirements.",
    },
    {
      num: "2",
      title: "Dust & Surface Cleaning",
      desc: "Clean the inside of the module and connectors to remove dust and signal interference.",
    },
    {
      num: "3",
      title: "Color & Brightness Calibration",
      desc: "Adjust the color and brightness to maintain a balanced display.",
    },
    {
      num: "4",
      title: "Electrical & Cooling Check",
      desc: "Ensure that the power and cooling systems are working properly to prevent overheating.",
    },
    {
      num: "5",
      title: "Performance Test & Report",
      desc: "Performing comprehensive functional tests and providing maintenance reports",
    },
    {
      num: "6",
      title: "Periodic Maintenance Contract",
      desc: "Regular maintenance contract program (monthly, quarterly, and yearly) with a regular schedule and priority support",
    },
  ];

  return (
    <section className="py-10 md:py-16 px-8 md:px-6 bg-[#FAFAFA]">
      <div className="mx-auto max-w-7xl py-0 md:py-10">
        {/* Title */}
        <h2 className="text-lg md:text-4xl text-center mb-6 md:mb-12 text-gray-900">
          Maintenance Process
        </h2>
        <p className="text-sm md:text-base text-center px-9 md:px-0 text-gray-600 mb-6 md:mb-12 max-w-3xl mx-auto">
          <span className="text-orange-500 font-semibold">VisionLab</span>{" "}
          follows a systematic process to ensure every LED & LCD screen gets the
          best care — from inspection to final testing, handled by professional
          technicians for lasting performance.
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
