"use client";
import React from "react";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-black text-white overflow-hidden">
      {/* Background Effect */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://api.builder.io/api/v1/image/assets/TEMP/cbc46bb85436f80a5e71269837433f2d01d0b782?width=4030')",
        }}
      />
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <header className="flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/07857125fa370746e1611741290569363922e840?width=180"
              alt="Truzent Logo"
              className="w-10 h-10 md:w-14 md:h-14"
            />
            <span className="text-xl md:text-2xl font-bold">Truzent</span>
          </div>

          {/* Nav Links */}
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#" className="hover:text-cyan-400 transition-colors">
              Home
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors">
              Features
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors">
              Services
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors">
              About
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors">
              Blog
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors">
              Contact
            </a>
          </nav>

          {/* Button */}
          <button className="px-4 py-2 bg-cyan-500 rounded-md text-sm font-semibold hover:bg-cyan-600 transition-colors">
            Register
          </button>
        </header>

        {/* Hero Section */}
        <main className="flex-1 flex items-center justify-center px-6 text-center">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-extrabold mb-6">
              Welcome To{" "}
              <span className="text-cyan-400 drop-shadow-md">Truzent</span>
            </h1>
            <p className="text-gray-300 text-sm md:text-lg leading-relaxed mb-6">
              Truzent Is Your Go-To Digital Buddy For Staying Safe Online. We
              Turn Complicated Cyber Threats Into Simple, Swipeable Tips That
              Keep You One Step Ahead!
            </p>
            <p className="text-gray-400 font-semibold mb-8">
              Built To Protect, Powered By Trust
            </p>
            <button className="px-6 py-3 bg-cyan-500 text-black font-bold rounded-lg shadow-md hover:bg-cyan-600 transition-colors">
              Get Started
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
