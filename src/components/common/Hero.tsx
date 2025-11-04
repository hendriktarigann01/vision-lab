"use client";
import Image from "next/image";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-orange-50 to-white min-h-[600px] overflow-hidden">
      {/* 🖼️ Decorative pattern header - Layer paling belakang di pojok kanan atas */}
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-40 pointer-events-none z-0">
        <Image
          src="/lableaks_top.png"
          alt="Lab Leaks Top"
          fill
          className="object-contain"
        />
      </div>
      {/* Akhir decorative pattern */}

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10 flex items-center justify-center min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              KEEP YOUR SCREEN{" "}
              <span className="text-orange-500">PERFECT, ANYTIME.</span>
            </h1>

            <p className="text-gray-600 text-lg">
              Quick solutions for LED & LCD screen repair and maintenance
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="px-8 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
                Book a service
              </button>
              <button className="px-8 py-3 border-2 border-orange-500 text-orange-500 rounded-full hover:bg-orange-50 transition font-semibold">
                Explore a service
              </button>
            </div>
          </div>

          {/* Right Content - Technician Illustration */}
          <div className="relative flex justify-center items-center">
            {/* Circular gradient background */}
            <div className="absolute w-96 h-96 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full blur-3xl opacity-30"></div>

            {/* Character Container */}
            <div className="relative w-[550px] h-[550px]">
              <Image
                src="/vl-human-boy.png"
                alt="Technician Illustration"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
