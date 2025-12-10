"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] relative overflow-hidden">
      <div className="absolute -right-40 top-0 w-[150%] h-[110%] md:w-full md:h-full pointer-events-none z-0">
        <Image
          src="/lableaks_top.webp"
          alt="Lab Leaks Top"
          fill
          className="object-contain object-top-right"
          priority
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-12 md:px-4">
        <div className="text-center">
          <div className="relative inline-block mb-8">
            <div className="flex items-center justify-center gap-4">
              <Image
                src="/404.webp"
                alt="404 Image"
                width={500}
                height={300}
                priority
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
          </div>

          {/* Error message */}
          <div className="mb-8 md:flex gap-2 space-y-5">
            <p className="text-gray-600 text-lg">
              <span className="text-4xl text-brand-200">Oops,</span> Page Not
              Found. Please go back to the Home Page.
            </p>
            <Button
              className="bg-brand-200 hover:bg-brand-300 w-36 font-normal text-white cursor-pointer px-12 py-6 rounded-full text-lg"
              onClick={() => (window.location.href = "/")}
            >
              Home
              <ArrowRight className="ml-2 h-5 w-5 font-medium" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
