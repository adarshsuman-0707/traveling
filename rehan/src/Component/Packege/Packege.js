import React from 'react';
import { Link } from 'react-router-dom';

function Packege() {
  // Dynamic data for the cards
  const packages = [
    {
      id: 1,
      title: "Hajj",
      description: "This is a short description. It can span one or two lines. Adjusts size for different screens.",
      price: "$5642",
      imgSrc: "shutter.webp",
      link: "/MoreAbout"
    },
    {
      id: 2,
      title: "Umrah",
      description: "This is a short description. It can span one or two lines. Adjusts size for different screens.",
      price: "$5642",
      imgSrc: "shutter.webp",
      link: "/MoreAbout"
    },
    {
      id: 3,
      title: "Custom Umrah",
      description: "This is a short description. It can span one or two lines. Adjusts size for different screens.",
      price: "$5642",
      imgSrc: "shutter.webp",
      link: "/MoreAbout"
    },
    // Add more packages here
  ];

  return (
    <>
      <h1 className="heading">PACKAGES</h1>

      {/* Container for cards */}
      <div className="lg:flex lg:flex-row flex-col gap-4">
        {packages.map((pack) => (
          <div
            key={pack.id}
            className="cards max-w-sm md:max-w-l lg:max-w-[25%] md:h-[65%] mx-auto bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <div className="w-full h-48 md:h-60 lg:h-60 object-cover">
              <img src={pack.imgSrc} alt=""/ >
            
            </div>

            <div className="p-6">
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold md:mt-6 mt-20">
                {pack.title}
              </h2>
              <p className="text-sm md:text-base lg:text-lg text-gray-500 mb-10">
                {pack.description}
              </p>
              <hr className="border-gray-300 mb-4" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-2xl md:text-3xl font-bold text-orange-400 hover:text-color-blue-400">
                  Starting at:
                </div>
                <div className="text-2xl md:text-3xl font-bold text-gray-800">
                  {pack.price}
                </div>
                <Link to={pack.link}>
                  <button className="text-white px-4 py-2 rounded-lg shadow-md hover:bg-black w-full sm:w-auto">
                    More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Packege;
