
"use client";

import React from "react";
import Nav from "../Components/Navbar"; // Adjust path if necessary
import PackageCard from "../Components/ourPackage"; // Adjust path if necessary

const PackagesPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Nav />
      <div className="container mx-auto px-4 py-8">
        
        <PackageCard />


       
      </div>
    </div>
  );
};

export default PackagesPage;
