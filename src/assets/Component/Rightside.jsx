import React, { useState } from 'react';

const SellUSDTForm = () => {
  const [sellAmount, setSellAmount] = useState(200);
  const [receiveAmount, setReceiveAmount] = useState(19200);
  const [balanceError, setBalanceError] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState('INR');

  const countries = [
    { code: 'INR', name: 'India', flag: '🇮🇳' },
    { code: 'USD', name: 'USA', flag: '🇺🇸' },
    { code: 'EUR', name: 'Europe', flag: '🇪🇺' },
    { code: 'GBP', name: 'UK', flag: '🇬🇧' },
  ];

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg max-w-sm mx-auto absolute top-44 right-32">
      <h2 className="text-xl font-bold text-orange-500 mb-4">Sell USDT</h2>

      {/* You Sell Section */}
      <div className="mb-4">
        <label className="text-gray-600 text-sm mb-1 block">You sell</label>
        <div className="flex items-center border rounded-lg p-3">
          <input
            type="number"
            value={sellAmount}
            onChange={(e) => setSellAmount(e.target.value)}
            className="w-full outline-none text-lg text-black"
          />
          <div className="flex items-center space-x-2 text-black ">
            <img src="https://cryptologos.cc/logos/tether-usdt-logo.png" alt="USDT Logo" className="w-6 h-6" />
            <h5 className="font-medium text-[15px]">USDT <span className=' text-zinc-600'>TRC20</span> </h5>
          </div>
        </div>
        {balanceError && <p className="text-red-500 text-sm mt-1">Insufficient Balance</p>}
      </div>

      {/* You Receive Section with Country Select */}
      <div className="mb-4">
        <label className="text-gray-600 text-sm mb-1 block">You Receive</label>
        <div className="flex items-center border rounded-lg p-3">
          <input
            type="text"
            value={`₹ ${receiveAmount.toFixed(2)}`}
            readOnly
            className="w-full outline-none text-lg text-black" 
          />
          <select
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            className="ml-2 outline-none bg-transparent text-lg font-medium px-3 py-2 rounded-xl bg-gray-300 text-black"
          >
            {countries.map((country) => (
              <option key={country.code} value={country.code}>
                {country.flag} {country.name}
              </option>
            ))}
          </select>
        </div>
      </div>

     
      <div className="mb-4 text-center text-sm text-gray-600">
        Your order: <span className="font-semibold">{sellAmount} USDT</span> to <span className="font-semibold">₹ {receiveAmount.toFixed(2)} {selectedCountry}</span>
      </div>

      
      <button
        className="w-full py-3 bg-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-300"
        disabled={balanceError}
      >
        Add USDT to Wallet
      </button>

      
      <div className="flex justify-center items-center space-x-4 mt-6 ">
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" className="h-6" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg" alt="MasterCard" className="h-6" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/UPI_Logo.svg" alt="UPI" className="h-6" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Bank_transfer_logo.png" alt="Bank Transfer" className="h-6" />
      </div>

      
      <div className="mt-4 text-center text-gray-500">
        Powered by <span className="font-semibold">Moonpay</span>
      </div>
    </div>
  );
};

export default SellUSDTForm;

