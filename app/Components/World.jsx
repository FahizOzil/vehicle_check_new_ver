import React from 'react';

const countries = {
  Europe: [
    "United Kingdom", "Ireland", "Lithuania", "Estonia", "Latvia", "Poland", "Romania", "Hungary",
    "France", "Ukraine", "Sweden", "Belgium", "Czech Republic", "Croatia", "Bulgaria", "Slovakia",
    "Serbia", "Finland", "Slovenia", "Germany", "Italy", "Switzerland", "Denmark", "Spain", "Portugal", "Greece"
  ],
  Oceania: ["Australia"]
};

const countryToFlag = {
  "United States": "us.png",
  "Mexico": "mexico.png",
  "United Kingdom": "uk.png",
  "Ireland": "ireland.png",
  "Lithuania": "lithuania.png",
  "Estonia": "estonia.png",
  "Latvia": "lativia.png",
  "Poland": "poland.png",
  "Romania": "romania.png",
  "Hungary": "hungary.png",
  "France": "france.png",
  "Ukraine": "ukraine.png",
  "Sweden": "sweden.png",
  "Belgium": "belgium.png",
  "Czech Republic": "czech-republic.png",
  "Croatia": "croatia.png",
  "Bulgaria": "bulgaria.png",
  "Slovakia": "slovakia.png",
  "Serbia": "serbia.png",
  "Finland": "finland.png",
  "Slovenia": "slovenia.png",
  "Germany": "germany.png",
  "Italy": "italy.png",
  "Switzerland": "switzerland.png",
  "Denmark": "denmark.png",
  "Spain": "spain.png",
  "Portugal": "portugal.png",
  "Greece": "greece.png",
  "Australia": "australia.png"
};

const World = () => {
  return (
    <div id='about' className="relative py-20 px-6 md:px-20 overflow-hidden">
      {/* Background with yellow gradient overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/world.jpeg')" }}
      ></div>
      
      {/* Yellow gradient overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-yellow-400/90 via-amber-500/85 to-yellow-600/90"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-300/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-amber-400/20 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-yellow-500/15 rounded-full blur-lg"></div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-16">
        {/* Left Content Section */}
        <div className="w-full lg:w-1/2 space-y-8">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="bg-white/20 text-gray-800 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide border-2 border-yellow-300/50 backdrop-blur-sm">
                Global Reach
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-black leading-tight text-gray-900 drop-shadow-lg">
              Empowering the <br />
              <span className="text-amber-800 relative">
                Future
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-300 rounded-full"></div>
              </span> of <br />
              Automotive Data
            </h1>
            
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border-2 border-yellow-300/30">
              <p className="text-lg text-gray-800 leading-relaxed font-medium">
                Since our establishment in <span className="font-bold text-amber-700">2016</span>, we have expanded our services to 
                <span className="font-bold text-amber-700"> 28 countries</span> and are continuously striving to reach even more.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                Our <span className="font-bold text-amber-700">VehiclesCheck reports</span> are now accessible in these countries.
              </p>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-xl border-2 border-yellow-300/30">
                <div className="text-3xl font-black text-amber-700">28</div>
                <div className="text-sm font-bold text-gray-700 uppercase tracking-wide">Countries</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-xl border-2 border-yellow-300/30">
                <div className="text-3xl font-black text-amber-700">2016</div>
                <div className="text-sm font-bold text-gray-700 uppercase tracking-wide">Established</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content Section - Countries */}
        <div className="w-full lg:w-1/2 space-y-8">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border-2 border-yellow-300/50">
            <h2 className="text-2xl font-black text-gray-900 mb-8 text-center">
              <span className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
                Available Countries
              </span>
            </h2>
            
            {Object.entries(countries).map(([region, countryList]) => (
              <div key={region} className="mb-8 last:mb-0">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full"></div>
                  <h3 className="text-xl font-black text-gray-800 uppercase tracking-wide">{region}</h3>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {countryList.map((country, index) => (
                    <div
                      key={country}
                      className="group flex items-center gap-3 bg-gradient-to-r from-yellow-50 to-amber-50 hover:from-yellow-100 hover:to-amber-100 px-4 py-3 rounded-xl shadow-md border-2 border-yellow-200/50 hover:border-yellow-300 text-sm font-bold text-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                      style={{
                        animationDelay: `${index * 50}ms`
                      }}
                    >
                      <div className="relative">
                        <img
                          src={`/${countryToFlag[country] || 'default.png'}`}
                          alt={`${country} flag`}
                          className="w-6 h-6 rounded-full object-cover shadow-sm border-2 border-white group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <span className="group-hover:text-amber-700 transition-colors duration-300">
                        {country}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <button className="bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white px-10 py-4 rounded-full font-black text-lg uppercase tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-2xl border-2 border-amber-700 shadow-xl">
              Explore Our Services
            </button>
          </div>
        </div>
      </div>

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-yellow-200/30"></path>
        </svg>
      </div>
    </div>
  );
};

export default World;