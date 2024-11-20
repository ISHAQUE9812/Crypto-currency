import React from 'react';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-black text-white py-12">
      {/* Contact Us Header */}
      <div className=" mb-8 px-10">
        <h1 className="text-4xl font-bold">Get in Touch with Moon Pay – We're Here to Assist You</h1>
        <p className="text-gray-400 mt-2">
          For help with crypto sales or account-related queries, contact us through our Contact Us page.
          Our team is ready to assist you with all your needs.
        </p>
        <button className="mt-4 px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
          Contact Us
        </button>
      </div>

      {/* Divider Line */}
      <div className="w-full h-1 bg-orange-500 mb-8"></div>

      {/* Core Values Section */}
      <div className="flex flex-col md:flex-row justify-around text-left px-4 md:px-16">
        {/* Transparency */}
        <div className="mb-8 md:mb-0">
          <h2 className="text-xl font-bold text-orange-500 mb-2">Transparency</h2>
          <p className="text-gray-400">
            We strive to provide accurate information to our users at all times. This includes being
            transparent about our fees, policies, and any updates that may affect our users.
          </p>
        </div>

        {/* Security */}
        <div className="mb-8 md:mb-0">
          <h2 className="text-xl font-bold text-orange-500 mb-2">Security</h2>
          <p className="text-gray-400">
            The security of our user's assets and personal data is of utmost importance to us.
            We employ cutting-edge security protocols and industry best practices.
          </p>
        </div>

        {/* Customer-Centric */}
        <div>
          <h2 className="text-xl font-bold text-orange-500 mb-2">Customer-Centric</h2>
          <p className="text-gray-400">
            Our customers are at the heart of everything we do. We are committed to providing a
            personalized and exceptional experience for each of our users.
          </p>
        </div>
      </div>

      
      <div className="mt-12 px-4 md:px-16">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
         
          <div className="flex items-center space-x-2">
            <img src="https://moonpay.com/logo.png" alt="Moonpay Logo" className="w-10 h-10" />
            <span className="text-lg font-semibold">Moonpay</span>
          </div>
          <p className="text-gray-400 text-sm">Trade Smarter, Trade Better</p>
        </div>

        
        <div className="flex justify-center space-x-4 text-sm text-orange-500 mb-4">
          <a href="#" className="hover:underline">Home</a>
          <span>|</span>
          <a href="#" className="hover:underline">Contact Us</a>
          <span>|</span>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <span>|</span>
          <a href="#" className="hover:underline">Terms and Conditions</a>
        </div>

       
        <div className="text-center text-gray-400 text-xs border-t border-gray-700 pt-4">
          <p>
            Disclaimer: Cryptocurrency and digital asset investments carry risks, including potential capital loss.
            Information on this website is for informational purposes and should not be construed as financial,
            investment, or legal advice.
          </p>
        </div>

        
        <div className="flex justify-center space-x-6 mt-6">
          <FaTwitter className="text-white hover:text-orange-500 cursor-pointer" size={20} />
          <FaFacebookF className="text-white hover:text-orange-500 cursor-pointer" size={20} />
          <FaInstagram className="text-white hover:text-orange-500 cursor-pointer" size={20} />
          <FaLinkedin className="text-white hover:text-orange-500 cursor-pointer" size={20} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
