import React from "react";
import { Link } from "react-router-dom";
import AllServices from "./AllServices"


const services = [
  {
    id: 1,
    name: "Zam Zam",
    description: "Pure Zam Zam water provided for your journey.",
    icon: "💧",
  },
  {
    id: 2,
    name: "Ehram Kit",
    description: "Comprehensive Ehram kits for a smooth pilgrimage.",
    icon: "🕌",
  },
  {
    id: 3,
    name: "Food",
    description: "Delicious meals served throughout your trip.",
    icon: "🍴",
  },
  {
    id: 4,
    name: "Hotels",
    description: "Luxury accommodations near holy sites.",
    icon: "🏨",
  },
  {
    id: 5,
    name: "Guidance",
    description: "Experienced guides to assist you during the journey.",
    icon: "📖",
  },
  {
    id: 6,
    name: "Laundry",
    description: "Laundry services for your convenience.",
    icon: "🧺",
  },
];

const Service = () => {
  return (
    <section className="bg-blue-900 py-12 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Our Services</h2>
        <p className="text-white mb-12">
          Explore the exceptional services we offer for your journey.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.id}
              to="/AllServices"
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center transform transition-transform duration-300 hover:scale-105 border-2 border-black-800"
            >
              <div className="text-5xl mb-4 text-indigo-600">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.name}
              </h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
