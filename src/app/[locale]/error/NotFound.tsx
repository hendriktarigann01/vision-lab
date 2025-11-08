import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-orange-50 relative overflow-hidden">
      {/* Decorative dots pattern */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 opacity-30">
        <div
          className="absolute top-20 right-20"
          style={{
            background: "radial-gradient(circle, orange 1px, transparent 1px)",
            backgroundSize: "20px 20px",
            width: "400px",
            height: "400px",
            transform: "rotate(-15deg)",
          }}
        ></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <div className="text-center">
          <div className="relative inline-block mb-8">
            <div className="flex items-center justify-center gap-4">
              <div className="text-[180px] font-bold text-orange-500 leading-none">
                4
              </div>
              <div className="w-32 h-32 bg-orange-500 rounded-full flex items-center justify-center">
                <Image
                  src="/404.png"
                  alt="404 Image"
                  className="w-full h-full object-cover rounded-full"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
              <div className="text-[180px] font-bold text-orange-500 leading-none">
                4
              </div>
            </div>
          </div>

          {/* Error message */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              <span className="text-orange-500">Oops,</span>
            </h1>
            <p className="text-gray-600 text-lg">
              Page Not Found. Please go back to the Home Page.
            </p>
          </div>

          {/* Home button */}
          <Button
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all"
            onClick={() => (window.location.href = "/")}
          >
            Home
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
