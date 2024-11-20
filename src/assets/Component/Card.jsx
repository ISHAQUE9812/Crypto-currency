import React, { useState, useEffect } from "react";
import TestimonialCard from "./TestimonialCard";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

const testimonials = [
  {
    name: "Arbaz Sower",
    role: "Frontend Developer",
    message: "Arbaz has excellent skills in web development. He consistently delivers high-quality results.",
    profileImage: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    name: "Ahmed Nunno",
    role: "React Developer",
    message: "Ahmed is a reliable team player who contributes great ideas to every project.",
    profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS13sKnlKVEffnM5wn4HesveUvn2Dcxkam41w&s",
  },
  {
    name: "Khaled",
    role: "MERN Stack Developer",
    message: "Khaled’s expertise in full-stack development is truly impressive.",
    profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiCLdGM0fh_tCL5w6Yxt082tJtr1G-sdCYXg&s",
  },
  {
    name: "Ishaque",
    role: "Software Engineer",
    message: "Ishaque delivers top-notch solutions with exceptional coding standards.",
    profileImage: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "sower",
    role: "",
    message: "Ishaque delivers top-notch solutions with exceptional coding standards.",
    profileImage: "https://randomuser.me/api/portraits/men/9.jpg",
  },
  {
    name: "shaikh",
    role: "Software Engineer",
    message: "Ishaque delivers top-notch solutions with exceptional coding standards.",
    profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCards = testimonials.length;

  // Auto-scroll to the next testimonial every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCards); // Change by one card
    }, 2000);
    return () => clearInterval(interval); // Clear interval on unmount
  }, [totalCards]);

  // Handle previous button click (go back by one card)
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalCards) % totalCards); // Move back by one card
  };

  // Handle next button click (move forward by one card)
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCards); // Move forward by one card
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto mt-10">
      <div className="flex items-center justify-between space-x-4">
        {/* Testimonial Cards */}
        <div className="flex w-full overflow-hidden space-x-4 transition-transform duration-500">
          {/* Display the current testimonial */}
          <TestimonialCard data={testimonials[currentIndex]} />
          <TestimonialCard
            data={testimonials[(currentIndex + 1) % totalCards]} // Next testimonial for sliding effect
          />
        </div>

        {/* Left Button */}
        <button
          onClick={handlePrev}
          className="absolute left-1 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-700"
        >
          <GoChevronLeft size={20} />
        </button>

        {/* Right Button */}
        <button
          onClick={handleNext}
          className="absolute right-1 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-700"
        >
          <GoChevronRight size={20} />
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {Array.from({ length: totalCards }).map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-blue-600" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
