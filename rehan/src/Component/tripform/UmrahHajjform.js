import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const UmrahHajjform = () => {
  const [city, setCity] = useState("");
  const [date, setDate] = useState("");
  const [days, setDays] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate with state
    navigate("/Hajjfinalform", {
      state: { city, date, days },
    });
  };

  return (
    <div className="flex items-center justify-center py-10">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-md lg:h-[40vh] h-[115%]"
      >
        <h1 className="text-2xl font-serif text-gray-700 text-center mb-6">
          Fill Form and we are contact you
        </h1>

        <div className="flex flex-wrap gap-6">
          {/* City Group */}
          <div className="flex-1 min-w-[200px]">
            <label className="block text-gray-600 font-medium mb-2">
              City Group:
            </label>
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-orange-300"
            >
              <option value="">Select a city</option>
              <option value="Bhopal">Bhopal</option>
              <option value="Indore">Indore</option>
              <option value="Jabalpur">Jabalpur</option>
            </select>
          </div>

          {/* Date */}
          <div className="flex-1 min-w-[200px]">
            <label className="block text-gray-600 font-medium mb-2">
              Date:
            </label>
            <div className="relative">
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-4 py-2  md:mt-0 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-orange-300"
              />
            </div>
          </div>

          {/* Days */}
          <div className="flex-1 min-w-[200px]">
            <label className="block text-gray-600 font-medium mb-2">
              Days:
            </label>
            <select
              value={days}
              onChange={(e) => setDays(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-orange-300"
            >
              <option value="">Select days</option>
              <option value="7">7 Days</option>
              <option value="10">10 Days</option>
              <option value="14">14 Days</option>
            </select>
          </div>
        </div>

        <div className="flex flex-wrap gap-6 mt-6">{/* Package */}</div>

        <div className="mt-8 text-center">
          <button
            type="submit"
            className="bg-[#d9832e] text-white font-medium py-2 px-8 rounded-md hover:bg-black transition duration-300"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default UmrahHajjform;
