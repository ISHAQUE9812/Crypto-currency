import React from "react";
import {motion} from 'framer-motion'
import { BsPerson, BsWallet2, BsArrowRight } from "react-icons/bs";
const Laftside = () => {
  return (
    <div className="w-full h-screen bg-[#000] text-white pt-14">
      <div className="pl-10 ">
        <motion.h1
        initial={{ y: "60%",opacity:'0',scale:'0', overflow:'hidden' }}
        animate={{ y: '0%', opacity:'2' }}
        transition={{  duration: 2.5,   }}
         className="text-[3vw] font-semibold tracking-tight  pb-2">
          Crypto to <span className="text-orange-400">Cash</span> Made Simple
        </motion.h1>
        <motion.p
         initial={{ y: "60%",opacity:'0',scale:'0', overflow:'hidden' }}
         animate={{ y: '0%', opacity:'2' }}
         transition={{  duration: 1,   }}
         className="leading-[20px] pb-6 ">
          Easily transform your crypto currency into fiat with our trusted
          off-ramp service. We <br />
          prioritize <span className="text-orange-400">security</span> and{" "}
          <span className="text-orange-400">speed</span>, so you can access your
          funds without hassle.
        </motion.p>
      </div>
     
      <div className="w-[37vw] flex items-center bg-white rounded-md text-black p-4 ml-10 mt-5">
        <div className="bg-orange-400 px-[20px] py-[10px] rounded-md ">1</div>
        <div className="px-[15px]">
          <h3 className="text-[18px] font-semibold">Register</h3>
          <p className="text-[15px]  text-gray-500">
            Register using your email and phone number
          </p>
        </div>
        <span className="text-green-400 pl-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-user"
          >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </span>
      </div>
      
      <div className="w-[37vw] flex items-center bg-white rounded-md text-black p-4 ml-10 mt-4">
        <span className="text-green-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-coins"
          >
            <circle cx="8" cy="8" r="6"></circle>
            <path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path>
            <path d="M7 6h1v4"></path>
            <path d="m16.71 13.88.7.71-2.82 2.82"></path>
          </svg>
        </span>
        <div className="px-[20px]">
          <h3 className="text-[18px] font-semibold">Deposit USDT</h3>
          <p className="text-[15px]  text-gray-500">
            Deposit USDT to your unique Moon Pay's Wallet
          </p>
        </div>
        <div className="bg-orange-400 px-[20px] py-[10px] rounded-md ml-12">
          2
        </div>
      </div>
     
      <div className="w-[37vw] flex items-center bg-white rounded-md text-black p-4 ml-10 mt-4">
        <div className="bg-orange-400 px-[20px] py-[10px] rounded-md ">3</div>
        <div className="px-[20px]">
          <h3 className="text-[18px] font-semibold">Start Exchanging</h3>
          <p className="text-[15px] text-gray-500">
            Exchange your USDT at the best market rates
          </p>
        </div>
        <span className="text-green-500 text-2xl flex items-center pl-16">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-arrow-left-right"
          >
            <path d="M8 3 4 7l4 4"></path>
            <path d="M4 7h16"></path>
            <path d="m16 21 4-4-4-4"></path>
            <path d="M20 17H4"></path>
          </svg>
        </span>
      </div>
      <div className="w-[38vw] flex items-center justify-center flex-col ml-6 mt-10 h-32 bg-black  border-orange-400  border-[1px] rounded-md">
        <h1 className="text-3xl font-bold mb-3 ">₹ 96</h1>
        <span className="bg-red-500 rounded-md text-xs px-1 py-1">
          1 USDT = ₹ 96
        </span>
      </div>
    </div>
  );
};

export default Laftside;
