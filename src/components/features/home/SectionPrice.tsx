"use client";
import React, { useState } from "react";
import { Check } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/button";

type PackageKey = "cleaning" | "maintenance" | "complete";

const SectionPrice = () => {
  const [activePackage, setActivePackage] = useState<PackageKey>("maintenance");

  const packages: Record<PackageKey, string[]> = {
    cleaning: [
      "Module Cleaning",
      "Frame Cleaning",
      "Internal Cleaning",
      "General Cleaning",
    ],
    maintenance: [
      "Module Check-up & Maintenance",
      "Power Supply Check-up & Maintenance",
      "RC Check-up & Maintenance",
      "Processor Check-up & Maintenance",
      "Cabling Check-up & Maintenance",
    ],
    complete: [
      "Module Check-up & Maintenance",
      "Power Supply Check-up & Maintenance",
      "General Cleaning",
      "RC Check-up & Maintenance",
      "Processor Check-up & Maintenance",
      "Module Cleaning",
      "Internal Cleaning",
    ],
  };

  return (
    <section className="py-16 px-4 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-center mb-4 text-gray-900">
          Your Service Plan
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Choose the maintenance plan that fits your needs. VisionLab offers
          flexible options for one-time repairs, monthly care, or annual service
          all handled by certified technicians to keep your LED & LCD screens in
          top condition.
        </p>

        <Card
          className="bg-gray-50 py-12 border-none shadow-none"
          style={{ boxShadow: "0px 4px 50px rgba(175, 175, 175, 0.2)" }}
        >
          <p className="text-center rounded-md text-gray-600 p-5 w-56 bg-[#F5F5F5] mx-auto">
            Maintenance Package
          </p>
          <div className="text-center">
            <div className="text-4xl text-gray-900">IDR 6.000.000</div>
            <p className="text-gray-600">/ Sqm / Month</p>
          </div>

          {/* Package Selection Buttons */}
          <div className="flex bg-[#F5F5F5] w-[45%] p-3 rounded-3xl mx-auto justify-center gap-4 flex-wrap">
            <Button
              variant={activePackage === "cleaning" ? "secondary" : "ghost"}
              onClick={() => setActivePackage("cleaning")}
              className={`rounded-full transition-all ${
                activePackage === "cleaning"
                  ? "bg-orange-500 text-white hover:bg-orange-600"
                  : "text-gray-600"
              }`}
            >
              Cleaning Package
            </Button>
            <Button
              variant={activePackage === "maintenance" ? "default" : "ghost"}
              onClick={() => setActivePackage("maintenance")}
              className={`rounded-full transition-all ${
                activePackage === "maintenance"
                  ? "bg-orange-500 text-white hover:bg-orange-600"
                  : "text-gray-600"
              }`}
            >
              Maintenance Package
            </Button>
            <Button
              variant={activePackage === "complete" ? "secondary" : "ghost"}
              onClick={() => setActivePackage("complete")}
              className={`rounded-full transition-all ${
                activePackage === "complete"
                  ? "bg-orange-500 text-white hover:bg-orange-600"
                  : "text-gray-600"
              }`}
            >
              Complete Package
            </Button>
          </div>

          {/* Package Features List */}
          <div
            className={`grid gap-6 mx-auto
                      ${packages[activePackage].length === 4 ? "md:grid-cols-2 max-w-2xl space-x-10" : ""}
                      ${packages[activePackage].length <= 3 ? "md:grid-cols-1 max-w-md" : ""}
                      ${packages[activePackage].length > 4 ? "md:grid-cols-2 max-w-3xl" : ""}`}
          >
            {packages[activePackage].map((item: string, idx: number) => (
              <div key={idx} className="flex items-center gap-3 w-full">
                <div className="w-6 h-6 bg-orange-200 flex items-center justify-center rounded-full text-orange-500 shrink-0">
                  <Check size={16} />
                </div>

                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold"
            >
              Get Started Now
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default SectionPrice;
