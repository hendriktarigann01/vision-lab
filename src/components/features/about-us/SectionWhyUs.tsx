"use client";
import React from "react";

interface Reason {
  number: string;
  title: string;
  description: string;
  position: string;
}

interface ReasonCardProps {
  reason: Reason;
  isMobile?: boolean;
}

interface CenterCircleProps {
  isMobile?: boolean;
}

interface DashedLinesProps {
  isMobile?: boolean;
}

const SectionWhyUs = () => {
  const reasons: Reason[] = [
    {
      number: "1",
      title: "Official Service Warranty",
      description:
        "Every service is covered by an official warranty to ensure quality and customer trust.",
      position: "top-left",
    },
    {
      number: "2",
      title: "Certified Technicians",
      description:
        "Handled by professional technicians with verified certifications and proven expertise.",
      position: "top-right",
    },
    {
      number: "3",
      title: "Fast & Flexible Response",
      description:
        "We provide quick assistance and adjust our service schedule to fit your needs.",
      position: "bottom-left",
    },
    {
      number: "4",
      title: "Nationwide Support",
      description:
        "Our services are available across Indonesia, giving you reliable support wherever you are.",
      position: "bottom-right",
    },
  ];

  const ReasonCard: React.FC<ReasonCardProps> = ({
    reason,
    isMobile = false,
  }) => {
    const sizeClasses = isMobile ? "w-8 h-8 text-xs mb-3" : "w-10 h-10 mb-4";
    const titleClasses = isMobile
      ? "text-xs border-l-2 pl-2 mb-2"
      : "text-xl border-l-4 pl-3 mb-3";
    const descClasses = isMobile
      ? "text-[10px] leading-normal"
      : "text-base leading-relaxed";

    return (
      <div className="flex flex-col items-start">
        <div
          className={`${sizeClasses} bg-brand-50 rounded-full flex items-center justify-center text-brand-200 font-medium`}
        >
          {reason.number}
        </div>
        <h3
          className={`${titleClasses} font-normal text-gray-900 border-brand-200`}
        >
          {reason.title}
        </h3>
        <p className={`${descClasses} text-gray-600`}>{reason.description}</p>
      </div>
    );
  };

  const CenterCircle: React.FC<CenterCircleProps> = ({ isMobile = false }) => {
    const sizeClasses = isMobile ? "w-24 h-24" : "w-48 h-48";
    const textClasses = isMobile
      ? "text-xs font-normal px-0"
      : "text-xl font-medium";

    return (
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${sizeClasses} bg-brand-200 rounded-full flex items-center justify-center z-10`}
      >
        <h2 className={`${textClasses} text-white text-center`}>
          Why Choose Us
        </h2>
      </div>
    );
  };

  const DashedLines: React.FC<DashedLinesProps> = ({ isMobile = false }) => {
    const borderWidth = isMobile
      ? "border-l-2 border-t-2"
      : "border-l-3 border-t-3";
    const containerHeight = isMobile ? "h-1/6" : "h-[30%]";

    return (
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/5 ${containerHeight} pointer-events-none`}
      >
        {/* Left vertical lines */}
        <div
          className={`absolute left-0 top-0 h-[calc(50%)] ${borderWidth} border-dashed border-brand-50`}
        ></div>
        <div
          className={`absolute left-0 bottom-0 h-[calc(50%)] ${borderWidth} border-dashed border-brand-50`}
        ></div>

        {/* Right vertical lines */}
        <div
          className={`absolute right-0 top-0 h-[calc(50%)] ${borderWidth} border-dashed border-brand-50`}
        ></div>
        <div
          className={`absolute right-0 bottom-0 h-[calc(50%)] ${borderWidth} border-dashed border-brand-50`}
        ></div>

        {/* Horizontal lines */}
        <div
          className={`absolute left-0 top-1/2 -translate-y-1/2 w-[calc(50%)] ${borderWidth} border-dashed border-brand-50`}
        ></div>
        <div
          className={`absolute right-0 top-1/2 -translate-y-1/2 w-[calc(50%)] ${borderWidth} border-dashed border-brand-50`}
        ></div>
      </div>
    );
  };

  return (
    <section className="py-16 md:py-24 px-8 md:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Desktop Layout */}
        <div className="hidden md:block relative py-20">
          <div className="grid grid-cols-2 gap-x-[200px] gap-y-[300px] relative">
            {reasons.map((reason) => (
              <ReasonCard key={reason.number} reason={reason} />
            ))}
          </div>
          <CenterCircle />
          <DashedLines />
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden relative">
          <div className="grid grid-cols-2 gap-x-32 gap-y-32 relative px-4">
            {reasons.map((reason) => (
              <ReasonCard key={reason.number} reason={reason} isMobile />
            ))}
          </div>
          <CenterCircle isMobile />
          <DashedLines isMobile />
        </div>
      </div>
    </section>
  );
};

export default SectionWhyUs;
