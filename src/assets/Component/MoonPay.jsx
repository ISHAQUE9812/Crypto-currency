import React from 'react'

const MoonPay = () => {
  return (
    <>
    <div className="max-w-6xl mx-auto bg-black text-white p-8 rounded-lg border border-orange-500">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500 mb-6">
      Why Choose Moon Pay for USDT Exchange
    </h2>
    <div className="  md:flex-row gap-8">
      {/* Left Section */}
      <div className="flex items-center justify-between">
        <img
          src="https://via.placeholder.com/150"
          alt="Moon Pay Exchange"
          className="w-24 h-52 rounded-md mb-4  "
        />
        <p className="text-[1.3vw] ml-10">
          At Moon Pay, we offer a seamless and secure platform for exchanging USDT. With our intuitive interface and advanced security measures, you can buy and sell USDT with confidence and ease. Our commitment to transparency, reliability, and customer satisfaction sets us apart, making Moon Pay the preferred choice for USDT exchange.
        </p>
      </div>

      {/* Right Section */}
      <div className="flex-1 flex items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold text-orange-500">Vision</h3>
          <p className="text-lg">
            Revolutionizing cryptocurrency exchange with Moon Pay's secure platform, fostering a community of empowered users.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-orange-500">Customer-Centric Approach</h3>
          <p className="text-lg">
            Empowering individuals to confidently participate in the cryptocurrency ecosystem through a trustworthy and inclusive platform.
          </p>
        </div>
      </div>
    </div>
  </div>
  {/* Technologies Section */}
  <div className="mt-10 flex flex-col items-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
        Using the <span className="text-orange-500">latest technologies</span> to keep our platform safe.
      </h2>
      <p className="text-lg mb-6">
        Moon Pay's built with your security in mind. That's why we use AES-256 encryption across the board, and we’re PCI-DSS and ISO 27001 compliant.
      </p>
      <div className="flex flex-col items-center gap-4">
        <div className="text-yellow-400 text-2xl">★★★★☆</div>
        <p className="text-lg">TrustScore: 4.3 | 1,280 reviews</p>
      </div>
    </div>
  </>
  )
}

export default MoonPay
