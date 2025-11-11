import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

// Types
interface ServicePoint {
  title: string;
  description: string;
  variant?: "default" | "standalone";
}

interface ServiceSectionData {
  title: string;
  description: string;
  points: ServicePoint[];
  image: string;
  imageAlt: string;
  imagePosition: "left" | "right";
}

// Reusable Components
const ServiceCheckIcon = () => (
  <div className="w-4 h-4 md:w-5 md:h-5 bg-brand-50 flex items-center justify-center rounded-full text-brand-200 shrink-0">
    <Check
      className="text-brand-200"
      size={typeof window !== "undefined" && window.innerWidth < 768 ? 12 : 16}
    />
  </div>
);

const ServicePoint: React.FC<ServicePoint> = ({
  title,
  description,
  variant = "default",
}) => (
  <div className="flex gap-4">
    <ServiceCheckIcon />
    <div>
      {variant === "default" ? (
        <h3 className="text-xs md:text-sm font-semibold text-gray-600 mb-2 leading-relaxed">
          {title},{" "}
          <span className="text-xs md:text-sm font-normal text-gray-600">
            {description}
          </span>
        </h3>
      ) : (
        <>
          <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </>
      )}
    </div>
  </div>
);

const ServiceImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
  <div className="h-full">
    <div className="relative w-full h-[400px] rounded-2xl overflow-hidden">
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  </div>
);

const ServiceSection: React.FC<ServiceSectionData> = ({
  title,
  description,
  points,
  image,
  imageAlt,
  imagePosition,
}) => {
  const isImageLeft = imagePosition === "left";

  return (
    <div className="grid md:grid-cols-2 gap-8 md:gap-72 mb-16 md:mb-24 items-start">
      {/* Text Content */}
      <div
        className={`${
          isImageLeft
            ? "order-1 md:order-2 h-full"
            : "order-2 md:order-1 h-full"
        }`}
      >
        <h2 className="text-3xl md:text-4xl text-gray-900 mb-3">{title}</h2>
        <p className="text-sm md:text-base text-gray-600 mb-5 leading-relaxed">
          {description}
        </p>

        <div className="space-y-3 max-w-[480px]">
          {points.map((point, index) => (
            <ServicePoint key={index} {...point} />
          ))}
        </div>
      </div>

      {/* Image */}
      <div
        className={`${
          isImageLeft
            ? "order-1 h-full"
            : "order-2 h-full"
        }`}
      >
        <ServiceImage src={image} alt={imageAlt} />
      </div>
    </div>
  );
};

// Data
const serviceSections: ServiceSectionData[] = [
  {
    title: "LED Module Diagnosis & Repair",
    description:
      "The General Check-up service begins with a thorough analysis of each LED module to identify visible and hidden damage. The main objective is to ensure that every pixel and power circuit is working stably before further repairs are carried out. The Inspection & Repair process includes:",
    points: [
      {
        title: "Repairing power lines and connectors",
        description:
          "To ensure that the power supply to each module is working normally. Dead modules will be tested and replaced if necessary.",
      },
      {
        title: "Display & Pixel Error Repair",
        description:
          "Display repair with color patterns to find dead pixels. Repairs are carried out by re-soldering or replacing the LED chip.",
      },
      {
        title: "Signal & Data Connectivity Repair",
        description:
          "Signal stability and data cable repair, Modules with interference are repaired or replaced to restore stable display",
      },
    ],
    image: "/services/detail/complete-service-1.webp",
    imageAlt: "LED Module Diagnosis & Repair",
    imagePosition: "right",
  },
  {
    title: "Control System & Supporting Component Repairs",
    description:
      "After inspecting the module, VisionLAB proceeds to the stage of analyzing the control system and supporting electronic components that are tasked with sending and regulating image display. The process includes:",
    points: [
      {
        title: "Technical Consultation & Control System Diagnosis",
        description:
          "VisionLAB team conducts a comprehensive system analysis ranging from video processors, sending cards, receiving cards, to control software.",
      },
      {
        title: "Supply & Replacement of Supporting Components",
        description:
          "VisionLAB supplies and replaces important components such as power supplies, data cables, and control cards with original spare parts that have been tested to ensure stable system performance.",
      },
      {
        title: "Signal & Data Connectivity Repair.",
        description:
          "Signal stability and data cable repair. Modules with interference are repaired or replaced to restore stable display.",
      },
    ],
    image: "/services/detail/complete-service-2.webp",
    imageAlt: "Control System & Supporting Component Repairs",
    imagePosition: "left",
  },
  {
    title: "Flexible On-Site & In-House Services",
    description:
      "VisionLAB understands that every project has different needs and operational schedules. Therefore, we provide two flexible service options to ensure quick repairs without disrupting your main activities.",
    points: [
      {
        title: "On-Site Service",
        description:
          "Repairs are carried out directly at the screen installation location The process begins with Initial inspection on site, time and cost estimation, immediate repair by technicians, functional testing & handover of work results",
      },
      {
        title: "In-House Service",
        description:
          "Handling is carried out at the VisionLAB Service Center with complete equipment for in-depth analysis. The unit was taken to the service center, where the components and power supply were checked separately, the color and cooling system were recalibrated, and performance was tested for 24 hours before being returned.",
      },
      {
        title: "Signal & Data Connectivity Repair",
        description:
          "Signal stability and data cable repair, Modules with interference are repaired or replaced to restore stable display",
      },
    ],
    image: "/services/detail/complete-service-3.webp",
    imageAlt: "Flexible On-Site & In-House Services",
    imagePosition: "right",
  },
];

// Main Component
const SectionExplanation: React.FC = () => {
  return (
    <section
      id="section-explanation"
      className="py-16 md:py-24 px-8 md:px-6 bg-[#FAFAFA]"
    >
      <div className="max-w-7xl mx-auto">
        {serviceSections.map((section, index) => (
          <ServiceSection key={index} {...section} />
        ))}
      </div>
    </section>
  );
};

export default SectionExplanation;
