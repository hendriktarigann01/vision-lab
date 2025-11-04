"use client";
import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-12 px-6 relative overflow-hidden">
      {/* 🖼️ Decorative pattern footer - Layer paling belakang di pojok kanan bawah */}
      <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-40 pointer-events-none z-0">
        <Image
          src="/lableaks_bottom.png"
          alt="Lab Leaks Bottom"
          fill
          className="object-contain"
        />
      </div>
      {/* Akhir decorative pattern */}

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
        {/* Konten grid utama footer, diberi z-10 agar di atas gambar dekoratif */}

        {/* Company Info */}
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-white rounded-full"></div>
            </div>
            <div>
              <h3 className="text-xl font-bold">
                Vision<span className="text-orange-500">LAB</span>
              </h3>
              <p className="text-xs text-gray-600">
                Bringing Clarity Back to Your Screen
              </p>
              <p className="text-xs text-gray-500">by MJ Solution Indonesia</p>
            </div>
          </div>

          <p className="text-gray-600 mb-6">
            Professional LED & LCD repair, maintenance, and calibration
            services.
          </p>

          {/* Address */}
          <div className="flex gap-3 mb-4">
            <div className="text-orange-500 mt-1">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
            </div>
            <div className="text-gray-600 text-sm">
              <p>The Mansion Bougenville Kemayoran</p>
              <p>Tower Fontana Zona I Lantai 50</p>
              <p>Kemayoran Jakarta Utara</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex gap-3 items-center">
            <div className="text-orange-500">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
            </div>
            <p className="text-gray-600 text-sm">(+62) 811-1122-492</p>
          </div>
        </div>

        {/* Pages */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-4">Pages</h4>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>
              <a href="#home" className="hover:text-orange-500 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-orange-500 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-orange-500 transition">
                Services
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-orange-500 transition">
                About Us
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-4">Services</h4>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>
              <a href="#service" className="hover:text-orange-500 transition">
                General Check-Up
              </a>
            </li>
            <li>
              <a href="#service" className="hover:text-orange-500 transition">
                Complete Service
              </a>
            </li>
            <li>
              <a href="#service" className="hover:text-orange-500 transition">
                Routine Cleaning
              </a>
            </li>
            <li>
              <a href="#service" className="hover:text-orange-500 transition">
                Long-term Contract for Distributor
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media - Full Width */}
        <div className="col-span-1 md:col-span-4 mt-8">
          <h4 className="font-semibold text-gray-800 mb-4">Social Media</h4>
          <div className="flex gap-4">
            <a
              href="#instagram"
              className="text-orange-500 hover:text-orange-600 transition"
            >
              <svg
                width="32"
                height="32"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="#linkedin"
              className="text-orange-500 hover:text-orange-600 transition"
            >
              <svg
                width="32"
                height="32"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="#tiktok"
              className="text-orange-500 hover:text-orange-600 transition"
            >
              <svg
                width="32"
                height="32"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-200 relative z-10">
        {/* Diberi z-10 agar di atas gambar dekoratif */}
        <p className="text-center text-gray-500 text-sm">© VisionLAB 2025</p>
      </div>
    </footer>
  );
};

export default Footer;
