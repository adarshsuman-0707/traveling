import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaShareAltSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      {/* Footer Main Section */}
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-wrap justify-between gap-8">
          {/* Address Section */}
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-bold mb-4">Address</h3>
            <p>Shop no 4, New XYZ Nagar, Bhopal [Madhya Pradesh]</p>
          </div>

          {/* Contact Details Section */}
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-bold mb-4">Contact Details</h3>
            <p>📞 +91 6221211222</p>
            <p>📞 +91 9822256347</p>
            <p>📧 info@luckytravels.in</p>
          </div>

          {/* Destination Section */}
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-bold mb-4">Destination</h3>
            <p>Domestic</p>
            <p>International</p>
          </div>

          {/* Useful Links Section */}
          
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-10 bg-gray-900 py-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 px-6 md:px-12">
          {/* Logo Section */}
          <div>
            <img src="/logo.png" alt="Lucky Travels Logo" className="w-24" />
          </div>

          {/* Social Icons Section */}
          <div className="flex space-x-6 text-2xl text-gray-400">
            <a href="#" className="hover:text-blue-500">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-pink-500">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-blue-700">
              <FaLinkedin />
            </a>
            <a href="#" className="hover:text-teal-500">
              <FaShareAltSquare />
            </a>
          </div>

          {/* Copyright Section */}
          <div className="text-center text-gray-400 text-sm">
            <p>
              © 2024 Lucky Travels - Powered by{" "}
              <a href="#" className="text-blue-500 hover:underline">
                Flourishers Edge
              </a>
            </p>
            <p>Unveiling The Magic of Hassle-Free Travel.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
