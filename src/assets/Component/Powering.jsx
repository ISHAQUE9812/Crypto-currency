import React from 'react'
const Powering = () => {
    const partners = [
      { img:'https://moonpayx.com/static/media/image1.6b71ac6ddc9da0148195.png'},
      { name: 'NEAR', logo: 'near-logo.svg' },
      { name: 'Polygon', logo: 'polygon-logo.svg' },
      
    ];
  
  return (
    <div className="bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">
          Powering the leading{" "}
          <span className="text-orange-400"> Web3 projects </span>
        </h2>

        <div className="grid grid-cols-5 gap-4">
          {partners.map((partner) => (
            <div key={partner.name} className="flex flex-col items-center">
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-24 h-24"
              />
              <p className="text-sm mt-2">{partner.name}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
            See list of partners
          </button>
          <button className="border-2 border-orange-400 rounded-[10px] hover:bg-orange-600 text-white font-bold py-2 px-4 rounded ml-4">
            Talk to us
          </button>
        </div>
      </div>
    </div>
  );
}

export default Powering;