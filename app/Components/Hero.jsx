"use client";

import React, { useState } from "react";
import { font } from "./font/font";
import { useRouter } from "next/navigation";

const Hero = () => {
  const [registrationNumber, setRegistrationNumber] = useState("");
  const router = useRouter();
  
  const slide = {
    image: "/hero-bg.jpg",
    heading: "Discover the hidden history of your car",
    text: "Order a detailed report to protect yourself from bad purchases sell with confidence and ensure your vehicle's safety",
  };
  
  const handleGetReport = () => {
    if (!registrationNumber.trim()) {
      alert("Please enter a registration number");
    } else {
      // Navigate to the result page with the registration number as a query parameter
      router.push(`/packages`);
      // router.push(`/result?reg=${encodeURIComponent(registrationNumber)}`);
    }
  };

  return (
    <section id="home" className={`${font.className} relative w-full h-[600px] md:h-[700px] overflow-hidden mt-10`}>
      {/* Background Image with Enhanced Overlay */}
      <img
        src={slide.image}
        alt="Hero Background"
        className="w-full h-full object-cover"
      />
      
      {/* Multiple Layer Overlays for Better Design */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-amber-900/40 to-yellow-900/60"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-yellow-400/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-40 left-20 w-48 h-48 bg-amber-500/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
      
      {/* Main Content Container */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
        <div className="flex flex-col w-full max-w-4xl mx-auto text-center">
          
          {/* Enhanced Heading with Yellow Accent */}
          <div className="mb-8">
            <div className="inline-block px-6 py-2 bg-yellow-400/20 rounded-full border border-yellow-400/30 mb-6">
              <span className="text-yellow-300 font-semibold text-sm uppercase tracking-wider">
                🚗 Vehicle History Reports
              </span>
            </div>
            
            <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-yellow-400">Discover</span> the hidden 
              <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text text-transparent">
                history of your car
              </span>
            </h1>
            
            <p className="text-gray-200 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
              Order a detailed report to protect yourself from bad purchases, 
              <span className="text-yellow-300 font-semibold"> sell with confidence</span> and 
              ensure your vehicle's safety
            </p>
          </div>

          {/* Enhanced Search Section */}
          <div className="w-full max-w-2xl mx-auto">
            {/* Input Container with Enhanced Design */}
            <div className="relative mb-6">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-2 shadow-2xl border-2 border-yellow-400/30">
                <div className="flex flex-col md:flex-row gap-2">
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      placeholder="Enter Registration Number (e.g., AB12 CDE)"
                      className="bg-transparent w-full p-4 pr-12 text-gray-800 placeholder-gray-500 rounded-xl outline-none text-lg font-medium"
                      value={registrationNumber}
                      onChange={(e) => setRegistrationNumber(e.target.value.toUpperCase())}
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2">
                      <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                  </div>
                  
                  <button 
                    className="bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg border-2 border-yellow-500/50 uppercase tracking-wide"
                    onClick={handleGetReport}
                  >
                    <span className="flex items-center justify-center gap-2">
                      Get Report
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span>Instant Results</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span>Secure & Confidential</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span>Official DVLA Data</span>
              </div>
            </div>
          </div>

          {/* Feature Highlights */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-yellow-400/20 hover:bg-white/15 transition-all duration-300">
              <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-yellow-300 font-bold text-lg mb-2">Comprehensive Checks</h3>
              <p className="text-gray-300 text-sm">MOT history, mileage verification, and outstanding finance</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-yellow-400/20 hover:bg-white/15 transition-all duration-300">
              <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              </div>
              <h3 className="text-yellow-300 font-bold text-lg mb-2">Theft & Write-off</h3>
              <p className="text-gray-300 text-sm">Insurance database checks and stolen vehicle reports</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-yellow-400/20 hover:bg-white/15 transition-all duration-300">
              <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-yellow-300 font-bold text-lg mb-2">Instant Reports</h3>
              <p className="text-gray-300 text-sm">Get your detailed vehicle report in seconds</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;