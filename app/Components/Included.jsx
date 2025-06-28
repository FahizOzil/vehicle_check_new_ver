import React from 'react'
import { font } from './font/font'

const Included = () => {
  return (
    <div id='services' className={`${font.className} bg-gradient-to-br from-yellow-50 via-amber-50 to-yellow-100 flex flex-col p-8 md:p-20 justify-center items-center text-gray-800 relative overflow-hidden`}>
        
        {/* Background Decorative Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-200/30 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-amber-300/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-yellow-300/25 rounded-full blur-xl"></div>

        {/* Header Section */}
        <div className="text-center mb-16 max-w-4xl mx-auto relative z-10">
            <div className="inline-block px-6 py-3 bg-yellow-400/20 rounded-full border border-yellow-400/30 mb-6">
                <span className="text-amber-700 font-bold text-sm uppercase tracking-wider">
                    🔍 What's Included
                </span>
            </div>
            
            <h1 className='font-bold text-3xl md:text-5xl lg:text-6xl mb-6 leading-tight'>
                Discover What's 
                <span className="bg-gradient-to-r from-yellow-500 to-amber-600 bg-clip-text text-transparent"> Included </span>
                <br className="hidden md:block" />
                in Your Vehicle Record
            </h1>
            
            <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                Get comprehensive insights with our detailed vehicle reports. Every check includes premium features 
                designed to give you complete peace of mind.
            </p>
        </div>

        {/* Cards Container */}
        <div className='flex md:flex-row flex-col md:space-y-0 space-y-8 md:space-x-8 justify-center items-stretch max-w-7xl mx-auto relative z-10'>
            
            {/* Card 1 - Vehicle Insight */}
            <div className='flex flex-col justify-between h-auto min-h-[28rem] bg-white md:w-[30%] p-8 rounded-2xl shadow-lg hover:shadow-2xl duration-500 border-2 border-yellow-200/50 hover:border-yellow-400/50 items-center group hover:-translate-y-2 transition-all'>
                <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <img src='/comprehension.png' className='w-12 h-12 filter brightness-0 invert'/>
                    </div>
                    
                    <h2 className='text-2xl md:text-3xl font-bold text-gray-800 mb-4 group-hover:text-amber-700 transition-colors'>
                        Vehicle Insight & History
                    </h2>
                    
                    <p className='text-gray-600 leading-relaxed text-base md:text-lg'>
                        Discover the full story of your vehicle with a comprehensive VIN Check report. Get detailed information about the car's specifications, including its make, model, year, body style, color, and country of assembly. Dive into its history with records on odometer readings, smog checks, fuel type, and engine size.
                    </p>
                </div>
                
                {/* Feature List */}
                <div className="mt-6 w-full">
                    <div className="flex items-center text-sm text-amber-700 font-medium mb-2">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                        Complete Vehicle Specifications
                    </div>
                    <div className="flex items-center text-sm text-amber-700 font-medium mb-2">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                        Odometer & Service History
                    </div>
                    <div className="flex items-center text-sm text-amber-700 font-medium">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                        Manufacturing Details
                    </div>
                </div>
            </div>

            {/* Card 2 - Accident Records */}
            <div className='flex flex-col justify-between h-auto min-h-[28rem] bg-white md:w-[30%] p-8 rounded-2xl shadow-lg hover:shadow-2xl duration-500 border-2 border-yellow-200/50 hover:border-yellow-400/50 items-center group hover:-translate-y-2 transition-all'>
                <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <img src='/market.png' className='w-12 h-12 filter brightness-0 invert'/>
                    </div>
                    
                    <h2 className='text-2xl md:text-3xl font-bold text-gray-800 mb-4 group-hover:text-amber-700 transition-colors'>
                        Accident & Repair Records
                    </h2>
                    
                    <p className='text-gray-600 leading-relaxed text-base md:text-lg'>
                        Uncover the past of any vehicle with our VIN lookup tool. Access detailed reports on accidents, major repairs, and service history. Stay informed with data on manufacturer recalls, lien records, salvage information, and more, ensuring you're aware of any potential red flags.
                    </p>
                </div>
                
                {/* Feature List */}
                <div className="mt-6 w-full">
                    <div className="flex items-center text-sm text-amber-700 font-medium mb-2">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                        Accident History Reports
                    </div>
                    <div className="flex items-center text-sm text-amber-700 font-medium mb-2">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                        Manufacturer Recalls
                    </div>
                    <div className="flex items-center text-sm text-amber-700 font-medium">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                        Salvage & Lien Records
                    </div>
                </div>
            </div>

            {/* Card 3 - Fraud Protection */}
            <div className='flex flex-col justify-between h-auto min-h-[28rem] bg-white md:w-[30%] p-8 rounded-2xl shadow-lg hover:shadow-2xl duration-500 border-2 border-yellow-200/50 hover:border-yellow-400/50 items-center group hover:-translate-y-2 transition-all'>
                <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-yellow-600 to-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <img src='/fraud-alert.png' className='w-12 h-12 filter brightness-0 invert'/>
                    </div>
                    
                    <h2 className='text-2xl md:text-3xl font-bold text-gray-800 mb-4 group-hover:text-amber-700 transition-colors'>
                        Ownership & Fraud Protection
                    </h2>
                    
                    <p className='text-gray-600 leading-relaxed text-base md:text-lg'>
                        Safeguard your investment with a deep dive into the vehicle's title records and ownership history. Learn about previous owners, registration details, mileage records, and any branded title alerts. Plus, ensure peace of mind with advanced theft and fraud detection checks.
                    </p>
                </div>
                
                {/* Feature List */}
                <div className="mt-6 w-full">
                    <div className="flex items-center text-sm text-amber-700 font-medium mb-2">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                        Title & Ownership History
                    </div>
                    <div className="flex items-center text-sm text-amber-700 font-medium mb-2">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                        Theft Detection Checks
                    </div>
                    <div className="flex items-center text-sm text-amber-700 font-medium">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                        Fraud Protection Alerts
                    </div>
                </div>
            </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 text-center relative z-10">
            <div className="bg-gradient-to-r from-yellow-400 to-amber-500 rounded-2xl p-8 shadow-xl border border-yellow-300">
                <h3 className="text-white text-2xl font-bold mb-4">
                    Ready to Get Your Vehicle Report?
                </h3>
                <p className="text-yellow-100 mb-6 max-w-2xl mx-auto">
                    Join thousands of satisfied customers who trust our comprehensive vehicle reports for their peace of mind.
                </p>
                <button className="bg-white text-amber-700 px-8 py-3 rounded-full font-bold hover:bg-yellow-50 transition-all duration-300 hover:scale-105 shadow-lg">
                    Start Your Report Now
                </button>
            </div>
        </div>
    </div>
  )
}

export default Included