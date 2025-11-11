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
    title: "Cleaning (Indoor/Outdoor)",
    description:
      "VisionLAB ensures that every LED display remains clean, bright, and in perfect working order through a thorough routine maintenance process. From the surface to the cooling system. This process includes:",
    points: [
      {
        title: "Screen Surface Cleaning",
        description:
          "Use a microfiber cloth and non-corrosive cleaning fluid to maintain clarity and prevent damage to the LED module.",
      },
      {
        title: "Internal Module & Frame Maintenance",
        description:
          "Removing dust and dirt that accumulates between panels and frame structures to keep the system stable and efficient.",
      },
      {
        title: "Documentation of Initial Conditions & Cleaning Areas",
        description:
          "Each finding is recorded in an initial report accompanied by photos of the screen before and after cleaning as evidence of transparent and measurable maintenance results.",
      },
    ],
    image: "/services/detail/maintenance-1.webp",
    imageAlt: "Cleaning (Indoor/Outdoor)",
    imagePosition: "right",
  },
  {
    title: "Color & Brightness Calibration",
    description:
      "VisionLAB restores color accuracy and brightness to LED displays through a comprehensive calibration process. From initial analysis to final validation, each step ensures that your LED display is consistent, bright, and meets professional visual standards.",
    points: [
      {
        title: "Analyze the initial condition of the screen",
        description:
          "Identify visual imbalances such as faded colors, overly bright areas, or differences in brightness between panels.",
      },
      {
        title: "Color & Brightness Adjustment Between Panels",
        description:
          "Matching color reproduction and luminance across the entire display area for uniform and natural visual results.",
      },
      {
        title: "Accuracy & Display Consistency Validation",
        description:
          "Performing final checks to ensure brightness and color levels remain stable across different types of content",
      },
    ],
    image: "/services/detail/maintenance-2.webp",
    imageAlt: "Color & Brightness Calibration",
    imagePosition: "left",
  },
  {
    title: "Electrical & Cooling System Check",
    description:
      "Electrical system, power supply, and cooling checks are performed to ensure stable current and optimal temperature to prevent overheating, power disruptions, or premature failure.",
    points: [
      {
        title: "Power Supply Check",
        description:
          "Ensuring each LED module receives stable power according to specifications to prevent power interference and premature failure.",
      },
      {
        title: "Optimized Air Circulation",
        description:
          "Ensuring air flows smoothly throughout the LED cabinet for even heat distribution.",
      },
      {
        title: "Verify Active Cooling System",
        description:
          "Ensure fans and cooling system are functioning properly to prevent overheating and maintain component life.",
      },
    ],
    image: "/services/detail/maintenance-3.webp",
    imageAlt: "Electrical & Cooling System Check",
    imagePosition: "right",
  },
  {
    title: "Update Processor & Firmware",
    description:
      "System updates ensure LED & LCD displays run smoothly, stay responsive, and remain compatible with the latest configurations improving image quality and preventing sync issues.",
    points: [
      {
        title: "System Firmware & Software Updates",
        description:
          "Performing firmware updates on LED processors, receiving cards, and sending cards to maintain compatibility, display performance, and long-term system stability.",
      },
      {
        title: "Mapping Calibration & Display Configuration",
        description:
          "Readjusting the panel layout, refresh rate, synchronizer, and color parameters to ensure a uniform display, no flickering, and no image shifting.",
      },
      {
        title: "Device Synchronization & Stability Testing",
        description:
          "Performing performance tests after updates to ensure all LED modules, processors, and media players run smoothly without signal interference or delay.",
      },
    ],
    image: "/services/detail/maintenance-4.webp",
    imageAlt: "Update Processor & Firmware",
    imagePosition: "left",
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
