import React from "react";

const TestimonialCard = ({ data }) => {
  const { name, role, message, profileImage } = data;

  return (
    <>
    <div className="flex flex-col items-center justify-center p-6 bg-white shadow-lg rounded-lg text-center space-y-4">
      <img
        src={profileImage}
        alt={name}
        className="w-20 h-20 rounded-full object-cover border-2 border-blue-500"
      />
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-sm text-gray-500">{role}</p>
      <p className="text-gray-700">{message}</p>
    </div>
    </>
  );
};

export default TestimonialCard;
