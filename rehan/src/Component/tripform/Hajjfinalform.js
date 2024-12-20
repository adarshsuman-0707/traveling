import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Hajjfinalform = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { city, date, days } = location.state || {};

  const [package3, setPackage3] = useState("");
  const [package2, setPackage2] = useState("");
  const [sharing, setSharing] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to the next page with state
    navigate("/details", {
      state: { package3, package2, sharing },
    });
  };

  return (
    <div className="flex items-center justify-center py-10">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-md lg:h-[55vh] h-[115%]"
      >
        <h1 className="text-2xl font-serif text-gray-700 text-center mb-6">
          Fill Form and we will contact you
        </h1>

        {/* Display passed values */}
        <div className="mb-6 md:flex md:justify-center md:items-center md:space-x-60 md:block hidden ">
          <p className="text-xl font-bold  text-[#d9832e] ">City: {city}</p>
          <p className="text-xl font-bold  text-[#d9832e] ">Days: {days}</p>
          <p className="text-xl font-bold  text-[#d9832e] ">Date: {date}</p>
        </div>

        <div className="md:hidden block flex flex-col space-y-5 ">
          <p className="text-xl font-bold  text-[#d9832e] ">City: {city}</p>
          <p className="text-xl font-bold  text-[#d9832e] ">Days: {days}</p>
          <p className="text-xl font-bold  text-[#d9832e] ">Date: {date}</p>
        </div>

        {/* Package selection fields */}
        <div className="flex-1 min-w-[200px]">
          <label className="block text-gray-600 font-medium mb-2">Package:</label>
          <select
            value={package3}
            onChange={(e) => setPackage3(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-orange-300"
          >
            <option value="">Select a type of  package</option>
            <option value="Gold">With Visa</option>
            <option value="Silver">With Ticket</option>
            <option value="Platinum">With Insurance & Visa</option>
            <option value="Executive">Without Visa & Ticket</option>
          </select>
        </div>

        <div className="flex-1 min-w-[200px]">
          <label className="block text-gray-600 font-medium mb-2">Package:</label>
          <select
            value={package3}
            onChange={(e) => setPackage3(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-orange-300"
          >
            <option value="">Select a package</option>
            <option value="Gold">Gold</option>
            <option value="Platinum">premium</option>
            <option value="silver">silver</option>
            <option value="bronze">bronze</option>
          </select>
        </div>
        <div className="flex-1 min-w-[200px]">
          <label className="block text-gray-600 font-medium mb-2">Package:</label>
          <select
            value={package3}
            onChange={(e) => setPackage3(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-orange-300"
          >
            <option value="">Select a package</option>
            <option value="Gold">With Visa</option>
            <option value="Silver">With Ticket</option>
            <option value="Platinum">With Insurance & Visa</option>
            <option value="Executive">Without Visa & Ticket</option>
          </select>
        </div>

        {/* Form submission */}
        <div className="mt-8 text-center">
          <button
            type="submit"
            className="bg-[#d9832e] text-white font-medium py-2 px-8 rounded-md hover:bg-black transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Hajjfinalform;
