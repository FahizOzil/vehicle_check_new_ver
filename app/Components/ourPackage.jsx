import React from 'react';
import Link from 'next/link';

const PackageCard = ({ title, price, isPopular, features, deliveryTime, buttonText, cardType, routePath }) => (
  <div className={`bg-white rounded-2xl shadow-2xl p-8 flex flex-col h-full transform transition-all duration-300 hover:scale-105 hover:shadow-3xl border-2 ${
    isPopular ? 'border-yellow-400 bg-gradient-to-br from-yellow-50 to-amber-50' : 'border-gray-200'} relative overflow-hidden`}>
    
    {/* Background decoration */}
    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-yellow-100 to-transparent rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
    
    <div className={`${
      isPopular ? 'bg-gradient-to-r from-yellow-500 to-amber-500' : 
      cardType === 'premium' ? 'bg-gradient-to-r from-amber-600 to-yellow-600' :
      'bg-gradient-to-r from-yellow-400 to-amber-400'
    } text-white text-center py-3 rounded-xl -mt-8 -mx-8 mb-6 font-bold text-sm uppercase tracking-wider shadow-lg`}>
      {isPopular ? '🔥 MOST POPULAR !' : cardType === 'premium' ? '⭐ PREMIUM CHOICE !' : '💰 GREAT VALUE !'}
    </div>
    
    <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">{title}</h2>
    
    <div className="text-center mb-8">
      <div className="text-4xl font-bold text-amber-600 mb-2">{price}</div>
      <div className="text-gray-600 font-medium">per Report</div>
      <div className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold mt-3 inline-block">
        Delivery: {deliveryTime}
      </div>
    </div>

    <div className="flex-grow">
      <h3 className="font-bold mb-4 text-lg text-gray-800 border-b-2 border-yellow-300 pb-2">Package Includes:</h3>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start group">
            <span className="text-yellow-500 mr-3 text-lg font-bold group-hover:text-amber-500 transition-colors">✓</span>
            <span className="text-gray-700 group-hover:text-gray-900 transition-colors font-medium">{feature}</span>
          </li>
        ))}
      </ul>
    </div>

    <div className="mt-8">
      <p className="text-gray-600 mb-6 text-sm bg-gray-50 p-4 rounded-lg border-l-4 border-yellow-400">
        <span className="font-semibold">📋 Note:</span> With {title} you'll receive your comprehensive report in {deliveryTime}
      </p>
      
      <Link href={routePath}>
        <button className={`w-full ${
          isPopular ? 'bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600' :
          cardType === 'premium' ? 'bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700' :
          'bg-gradient-to-r from-yellow-400 to-amber-400 hover:from-yellow-500 hover:to-amber-500'
        } text-white font-bold py-4 px-6 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-lg uppercase tracking-wide border-2 border-transparent hover:border-white`}>
          {buttonText}
        </button>
      </Link>
    </div>
  </div>
);

const Packages = () => {
  const silverFeatures = [
    'Vehicle Overview',
    'Market Value',
    'Vehicle Specifications',
    'Salvage History',
    'Export Records',
    'Impound Records',
    'Sales Listing History'
  ];

  const goldFeatures = [
    'Vehicle Overview',
    'Open Recalls',
    'Market Value',
    'Impound Records',
    'Export Records',
    'Vehicle Specifications',
    'Salvage History',
    'Accident Record'
  ];

  const platinumFeatures = [
    '2 Buyers Numbers from our Directory',
    'Vehicle Specifications',
    'Vehicle Overview',
    'Export Records',
    'HQ Vehicle Images',
    'Sales Listing History',
    'Salvage History',
    'Impound Records',
    'Installed Options and Packages',
    'Title Brand Information',
    'Active Warranties',
    'Open Recalls'
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-yellow-50 via-amber-50 to-yellow-100 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-100/20 to-amber-100/20"></div>
      <div className="absolute top-10 left-10 w-40 h-40 bg-yellow-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-amber-200 rounded-full opacity-20 blur-3xl"></div>
      
      <div className="relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
            Our Premium Packages
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
            Choose the perfect vehicle report package that suits your needs. Get comprehensive, accurate, and fast vehicle history reports.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-amber-400 mx-auto mt-6 rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          <PackageCard
            title="Silver Elite"
            price="$50.99"
            isPopular={false}
            cardType="basic"
            features={silverFeatures}
            deliveryTime="2-4 HOURS"
            buttonText="Get Silver Elite"
            routePath="/result"
          />

          <PackageCard
            title="Gold Deluxe"
            price="$65.99"
            isPopular={true}
            cardType="popular"
            features={goldFeatures}
            deliveryTime="60 minutes"
            buttonText="Get Gold Deluxe"
            routePath="/advance-result"
          />

          <PackageCard
            title="Platinum"
            price="$45.99"
            isPopular={false}
            cardType="premium"
            features={platinumFeatures}
            deliveryTime="12-24 HOURS"
            buttonText="Get Platinum"
            routePath="/Platinum"
          />
        </div>

        {/* Additional CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto border-2 border-yellow-300">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">🚗 Need Help Choosing?</h3>
            <p className="text-gray-600 mb-6">
              Our vehicle experts are ready to help you select the perfect package for your needs. 
              Contact us for personalized recommendations!
            </p>
            <button className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Contact Our Experts
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;