"use client";
import React, { useState } from "react";
import { CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

type PackageKey = "cleaning" | "maintenance" | "complete";

const SectionPrice = () => {
  const [activePackage, setActivePackage] = useState<PackageKey>("maintenance");

  const packages: Record<PackageKey, string[]> = {
    cleaning: [
      "Module Check-up & Maintenance",
      "Power Supply Check-up & Maintenance",
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
      "RC Check-up & Maintenance",
      "Processor Check-up & Maintenance",
      "Cabling Check-up & Maintenance",
      "Full System Diagnostic",
      "Priority Support 24/7",
    ],
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
          Your Service Plan
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Choose the maintenance plan that fits your needs. VisionLab offers
          flexible options for one-time repairs, monthly care, or annual service
          all handled by certified technicians to keep your LED & LCD screens in
          top condition.
        </p>

        <Card className="bg-gray-50 p-8 border-none">
          <p className="text-center text-gray-600 mb-4">Maintenance Package</p>
          <div className="text-center mb-6">
            <div className="text-4xl font-bold text-gray-900">
              IDR 6.000.000
            </div>
            <p className="text-gray-600">/ Sqm / Month</p>
          </div>

          {/* Package Selection Buttons */}
          <div className="flex justify-center gap-4 mb-8 flex-wrap">
            <Button
              variant={activePackage === "cleaning" ? "secondary" : "ghost"}
              onClick={() => setActivePackage("cleaning")}
              className={`rounded-full transition-all ${
                activePackage === "cleaning"
                  ? "bg-orange-100 text-orange-600 hover:bg-orange-200"
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
                  ? "bg-orange-100 text-orange-600 hover:bg-orange-200"
                  : "text-gray-600"
              }`}
            >
              Complete Package
            </Button>
          </div>

          {/* Package Features List */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {packages[activePackage].map((item: string, idx: number) => (
              <div key={idx} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-orange-500 shrink-0" />
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
