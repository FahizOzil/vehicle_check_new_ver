"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    text: "I used this service to check the history of a car I inherited. The report was thorough and helped me understand the vehicle's condition and value. It was reassuring to have all the necessary information at my fingertips. I'll definitely use it again for any future purchases or sales!",
    author: "Michael B.",
    rating: 5,
  },
  {
    text: "The report I received was incredibly detailed and insightful. It gave me a clear picture of the car's history and helped me avoid a potentially costly mistake. The customer service team was also very responsive and helpful. If you're buying or selling a car, this is a must-have tool!",
    author: "Laura K.",
    rating: 5,
  },
  {
    text: "I recently used this service to get a comprehensive report on a used car I was considering. The report was incredibly detailed and helped me avoid a bad deal. I was able to negotiate confidently and ended up with a great car. Highly recommend!",
    author: "Sarah T.",
    rating: 5,
  },
  {
    text: "I run a small dealership and this service has become an essential part of my workflow. It saves me time and gives my customers peace of mind. Totally worth it.",
    author: "Greg H.",
    rating: 5,
  },
  {
    text: "I've always been skeptical of online reports, but VehiclesCheck changed my mind. The information was spot on and super easy to digest. I feel way more confident buying used cars now.",
    author: "Ashley R.",
    rating: 5,
  },
  {
    text: "Great tool for anyone in the market for a vehicle. The interface is clean, and the report quality is outstanding. This is now part of my regular car shopping process.",
    author: "Tom C.",
    rating: 5,
  },
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex justify-center mb-4">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${
            i < rating ? "text-yellow-400" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024, // for tablets and small desktops
        settings: {
          slidesToShow: 2,
          autoplaySpeed: 5000,
        },
      },
      {
        breakpoint: 640, // for mobile
        settings: {
          slidesToShow: 1,
          autoplaySpeed: 6000,
        },
      },
    ],
  };

  return (
    <div className="py-20 px-6 md:px-20 bg-gradient-to-br from-yellow-50 via-amber-50 to-yellow-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-200 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-amber-200 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-100 opacity-10 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block bg-yellow-200 text-amber-800 px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-4">
            Customer Reviews
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Listen up! Our Customers Have 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-amber-600"> Something to Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from real customers who've used our vehicle scanning services
          </p>
        </div>

        {/* Custom Slider Styling */}
        <style jsx global>{`
          .slick-dots {
            bottom: -60px !important;
          }
          .slick-dots li button:before {
            color: #f59e0b !important;
            font-size: 12px !important;
            opacity: 0.5 !important;
          }
          .slick-dots li.slick-active button:before {
            color: #d97706 !important;
            opacity: 1 !important;
            transform: scale(1.3);
          }
          .slick-prev, .slick-next {
            z-index: 2 !important;
          }
          .slick-prev:before, .slick-next:before {
            color: #f59e0b !important;
            font-size: 30px !important;
          }
        `}</style>

        <Slider {...settings}>
          {testimonials.map((t, index) => (
            <div key={index} className="px-4">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 text-center h-full transform transition-all duration-300 hover:-translate-y-2 border-l-4 border-yellow-400 relative overflow-hidden group">
                {/* Quote decoration */}
                <div className="absolute top-4 left-4 text-6xl text-yellow-200 opacity-50 font-serif">"</div>
                <div className="absolute bottom-4 right-4 text-6xl text-yellow-200 opacity-50 font-serif rotate-180">"</div>
                
                {/* Content */}
                <div className="relative z-10">
                  <StarRating rating={t.rating} />
                  
                  <p className="text-gray-700 mb-6 italic text-lg leading-relaxed font-medium">
                    {t.text}
                  </p>
                  
                  {/* Author section */}
                  <div className="border-t-2 border-yellow-100 pt-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        {t.author.charAt(0)}
                      </span>
                    </div>
                    <p className="font-bold text-gray-900 text-lg">{t.author}</p>
                    <p className="text-amber-600 font-semibold text-sm">Verified Customer</p>
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-amber-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </div>
            </div>
          ))}
        </Slider>

        {/* Bottom CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-yellow-400 to-amber-500 rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Join Our Happy Customers?
            </h3>
            <p className="text-yellow-100 text-lg mb-6 max-w-2xl mx-auto">
              Get your comprehensive vehicle report today and drive with confidence
            </p>
            <button className="bg-white text-amber-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-50 transform hover:scale-105 transition-all duration-300 shadow-lg">
              Get Your Report Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;