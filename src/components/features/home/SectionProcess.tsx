"use client";
import React from "react";
import { Card } from "@/components/ui/Card";

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
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
          Maintenance Process
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          <span className="text-orange-500 font-semibold">VisionLab</span>{" "}
          follows a systematic process to ensure every LED & LCD screen gets the
          best care — from inspection to final testing, handled by professional
          technicians for lasting performance.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {processes.map((process, idx) => (
            <Card
              key={idx}
              className="p-6 hover:shadow-lg transition-shadow border-none"
            >
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 font-bold text-lg mb-4">
                {process.num}
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 text-lg">
                {process.title}
              </h3>
              <p className="text-gray-600 text-sm">{process.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionProcess;
