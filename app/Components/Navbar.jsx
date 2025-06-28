"use client";

import React, { useState, useEffect } from "react";
import navLinks from "./data/navLinks";
import { font } from "./font/font";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);

  useEffect(() => {
    const path = window.location.pathname;
    setActiveLink(path);
    
    // Set up scroll observation for sections
    const observeScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 200; // Adding offset for better UX
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveLink(`#${sectionId}`);
        }
      });
    };
    
    window.addEventListener('scroll', observeScroll);
    return () => window.removeEventListener('scroll', observeScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleMouseEnter = (index) => setDropdownOpen(index);
  const handleMouseLeave = () => setDropdownOpen(null);
  const toggleMobileDropdown = (index) =>
    setMobileDropdownOpen(mobileDropdownOpen === index ? null : index);

  // Smooth scroll function
  const handleNavClick = (e, href) => {
    e.preventDefault();
    
    if (href.startsWith('#')) {
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100, // Offset to account for the navbar height
          behavior: 'smooth'
        });
        
        // Close mobile menu if open
        if (isOpen) {
          setIsOpen(false);
        }
      }
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-400 shadow-xl border-b-4 border-yellow-600">
        {/* Top Header Section */}
        <header className={`${font.className} flex items-center justify-between px-6 py-4`}>
          <Link href="/">
            <div className="flex items-center transition-transform duration-300 hover:scale-105">
              <img
                src="/Vehicles-Scanner-Logo.png"
                alt="Logo"
                className="w-auto h-10 sm:h-12 md:h-16 lg:h-20 drop-shadow-lg"
              />
            </div>
          </Link>
          
          <div className="hidden md:flex items-center space-x-10">
            <div className="text-sm group">
              <p className="font-medium text-gray-800">Email Us At:</p>
              <a href="mailto:info@vehiclescanners.co.uk" className="text-gray-900 text-lg font-bold group-hover:text-amber-800 transition-colors duration-300">
                info@vehiclescanners.co.uk
              </a>
            </div>
            
            <div className="hidden lg:flex items-center">
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full font-bold text-sm uppercase tracking-wide transition-all duration-300 hover:shadow-lg hover:scale-105 border-2 border-amber-700">
                Contact Us
              </button>
            </div>
          </div>
    
          {/* Hamburger Icon with improved styling */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none bg-amber-600 hover:bg-amber-700 p-3 rounded-lg transition-all duration-300 shadow-lg"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </header>
    
        {/* Navigation Menu - Desktop */}
        <nav className="hidden md:block bg-gradient-to-r from-amber-500 via-yellow-600 to-amber-500 shadow-lg border-t border-yellow-300">
          <div className="container mx-auto">
            <ul className="flex justify-center">
              {navLinks.map((item, index) => (
                <li
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <a 
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="block"
                  >
                    <motion.div
                      whileHover={{ scale: 1.05, y: -2 }}
                      className={`px-6 py-4 text-white font-bold mx-1 flex items-center text-sm uppercase tracking-wide ${
                        activeLink === item.href ? "bg-yellow-700 border-b-3 border-yellow-300 shadow-inner" : ""
                      } hover:bg-yellow-700/80 hover:text-yellow-100 transition-all duration-300 rounded-t-lg`}
                    >
                      {item.label}
                      {item.subLinks && <FaChevronDown className="ml-2 text-xs opacity-80 group-hover:rotate-180 transition-transform duration-300" />}
                    </motion.div>
                  </a>
                  
                  {/* Dropdown Menu with improved styling */}
                  {item.subLinks && dropdownOpen === index && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute left-0 mt-0 w-64 bg-white rounded-b-lg shadow-2xl border-2 border-yellow-300" 
                      style={{zIndex: 1000}}
                    >
                      {item.subLinks.map((subItem, subIndex) => (
                        <a 
                          key={subItem.label} 
                          href={subItem.href}
                          onClick={(e) => handleNavClick(e, subItem.href)}
                          className="block"
                        >
                          <motion.span 
                            whileHover={{ x: 5 }}
                            className={`block px-6 py-4 text-gray-800 hover:bg-yellow-50 hover:text-amber-700 transition-all duration-200 font-medium border-l-4 border-transparent hover:border-l-4 hover:border-yellow-500 ${
                              subIndex === item.subLinks.length - 1 ? 'rounded-b-lg' : ''
                            }`}
                          >
                            {subItem.label}
                          </motion.span>
                        </a>
                      ))}
                    </motion.div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </nav>
        
        {/* Mobile Menu with improved styling */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-gradient-to-b from-amber-600 to-yellow-700 shadow-inner border-t border-yellow-300"
            >
              <div className="py-2">
                {navLinks.map((item, index) => (
                  <div key={item.label} className="border-b border-yellow-500/30">
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`block px-6 py-4 ${
                        activeLink === item.href ? "text-yellow-200 bg-yellow-800/50" : "text-white"
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-sm uppercase tracking-wide">{item.label}</span>
                        {item.subLinks && (
                          <button 
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              toggleMobileDropdown(index);
                            }}
                            className="p-2 text-yellow-200 hover:text-white focus:outline-none"
                          >
                            <FaChevronDown className={`transition-transform duration-300 ${
                              mobileDropdownOpen === index ? "rotate-180" : ""
                            }`} />
                          </button>
                        )}
                      </div>
                    </a>
                    {item.subLinks && mobileDropdownOpen === index && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="bg-yellow-800/30"
                      >
                        {item.subLinks.map((subItem) => (
                          <a
                            key={subItem.label}
                            href={subItem.href}
                            onClick={(e) => handleNavClick(e, subItem.href)}
                            className="block px-10 py-3 text-yellow-100 hover:text-white hover:bg-yellow-700/50 transition-colors duration-200 border-l-4 border-transparent hover:border-l-4 hover:border-yellow-300 font-medium"
                          >
                            {subItem.label}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ))}
                
                {/* Mobile contact button */}
                <div className="px-6 py-4">
                  <a 
                    href="mailto:info@vehiclescanners.co.uk"
                    className="block text-center bg-amber-600 hover:bg-amber-700 text-white py-4 rounded-full font-bold text-sm uppercase tracking-wide transition-all duration-300 border-2 border-amber-700 hover:scale-105"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Nav;