import React, { useState } from "react";

const Navbar = () => {
  const [selectedCountry, setSelectedCountry] = useState('IN');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const countries = [
    { code: "IN", name: "India", flag: "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg" },
    { code: "US", name: "USA", flag: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" },
    { code: "UK", name: "UK", flag: "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg" },
  ];

  const handleCountryChange = (countryCode) => {
    setSelectedCountry(countryCode);
    setIsDropdownOpen(false);
  };

  return (
    <nav className=" bg-[#000] text-white py-4 px-6 flex justify-between items-center">
      
      <div className="flex items-center spacex-64 ">
        <img className="h-7" src="data:image/png;base64,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" alt="MoonPay Logo" />
        <span className="text-[10px] font-bold text-orange-500"></span>
      </div>

     
      <div className=" ml-80">
        <a href="#" className="text-white hover:text-orange-500 p-[10px] rounded-xl hover:bg-white">
          Home
        </a>
        <a href="#" className="text-white mx-20 hover:text-orange-500 p-[10px] rounded-xl hover:bg-white ">
          Exchange
        </a>
        <a href="#" className="text-white hover:text-orange-500 p-[10px] rounded-xl hover:bg-white">
          Sign In
        </a>
      </div>

      
      <div className="flex items-center justify-center space-x-6">
       
        <button className="flex items-center gap-[5px]  text-white font-semibold py-1 px-4 border-orange-500 border-b-2 border-t-2 rounded-full">
           <img className="h-7 " src="https://moonpayx.com/static/media/FINAL-USDT.f08ae8eb91fa31f79e71.png" alt="" /> 
          <span>0 USDT</span>
          <span className="ml-2 size-[15px]  bg-orange-400 text-black flex items-center justify-center rounded-[4px] ">+</span>
        </button>

       
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center space-x-1"
          >
            <img
              src={countries.find((country) => country.code === selectedCountry).flag}
              alt="Selected Country Flag"
              className="h-5 w-5 bg-contain rounded-full border-[1px] bo"
            />
            <span className="text-sm">{selectedCountry}</span>
          </button>

          
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded-lg shadow-lg">
              {countries.map((country) => (
                <button
                  key={country.code}
                  onClick={() => handleCountryChange(country.code)}
                  className="flex items-center px-4 py-2 hover:bg-gray-200 w-full"
                >
                  <img src={country.flag} alt={`${country.name} Flag`} className="h-5 w-5 rounded-full mr-2" />
                  <span>{country.name}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
