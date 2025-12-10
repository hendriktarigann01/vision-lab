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
          {title}{" "}
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
      <Image loading="lazy" src={src} alt={alt} fill className="object-cover" />
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

      <div className={`${isImageLeft ? "order-1 h-full" : "order-2 h-full"}`}>
        <ServiceImage src={image} alt={imageAlt} />
      </div>
    </div>
  );
};

// Main Component - Receive data as props
interface SectionExplanationProps {
  sections: Array<{
    title: string;
    description: string;
    points: Array<{ title: string; description: string }>;
    image: string;
    imageAlt: string;
    imagePosition: "left" | "right";
  }>;
}

const SectionExplanation: React.FC<SectionExplanationProps> = ({
  sections,
}) => {
  const serviceSections: ServiceSectionData[] = sections.map((section) => ({
    title: section.title,
    description: section.description,
    points: section.points.map((point) => ({
      title: point.title,
      description: point.description,
    })),
    image: section.image,
    imageAlt: section.imageAlt,
    imagePosition: section.imagePosition,
  }));

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
