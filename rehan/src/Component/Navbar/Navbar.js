import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";


const Navbar = ({ scrollRefs }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const userLoggedIn = localStorage.getItem("userLoggedIn");
    if (userLoggedIn) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userLoggedIn");
    setIsAuthenticated(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (refName) => {
    if (scrollRefs[refName]?.current) {
      scrollRefs[refName].current.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    } else {
      navigate("/");
      setTimeout(() => {
        if (scrollRefs[refName]?.current) {
          scrollRefs[refName].current.scrollIntoView({ behavior: "smooth" });
        }
      }, 200);
    }
  };

  return (
    <nav className="navbar shadow-md sticky top-0 z-10 bg-white flex justify-between items-start  px-4 md:px-16 py-2 h-14">
      {/* Logo */}
      <div className="logo ">
      
          <Link to="/" className="no-underline">
            <img src="logo.png" alt="Logo" className="w-14 h-14 -mt-2" />
          </Link>
     
      </div>

      {/* Desktop & Mobile Menu */}
      <div>
        <ul
          className={`${
            isMobileMenuOpen
              ? "flex flex-col items-center absolute top-full left-0 w-full bg-white shadow-md py-6 space-y-4 transition duration-300 z-10"
              : "hidden md:flex md:space-x-8"
          }`}
        >
          <li>
            <button
              onClick={() => scrollToSection("packageRef")}
              className="bg-white text-black hover:text-[#d9832e] text-lg transition"
            >
              Package
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("holidayRef")}
              className="bg-white text-black hover:text-[#d9832e] text-lg transition"
            >
              International
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("domesticRef")}
              className="bg-white text-black hover:text-[#d9832e] text-lg transition"
            >
              Domestic
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("serviceRef")}
              className="bg-white text-black hover:text-[#d9832e] text-lg transition"
            >
              Services
            </button>
          </li>
          <li>

          <Link to="Gallery">
            <button
           
              className="bg-white text-black hover:text-[#d9832e] text-lg transition"
            >
              Gallery
            </button>
            </Link>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("contactRef")}
              className="bg-white text-black hover:text-[#d9832e] text-lg transition"
            >
              Contact
            </button>
          </li>
          <li>
  {isAuthenticated ? (
    <div className="flex items-start mt-2 h-14 space-x-6">
      {/* Account Button */}
      <Link
        to="/account"
        className="flex items-center bg-white text-black hover:text-[#d9832e] text-lg transition"
      >

        <span className="ml-5 h-8">Account</span>
      </Link>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="border-2 border-red-600 bg-transparent text-red-600 px-4 py-1 rounded-lg text-lm hover:bg-red-600 hover:text-white transition"
      >
        Logout
      </button>
    </div>
  ) : (
    <Link to="/Login">
      <button
        onClick={() => setIsMobileMenuOpen(false)}
        className="border-2 border-[#d9832e] bg-transparent text-[#d9832e] px-6 py-2 rounded-lg text-lg hover:bg-[#1e3c72] hover:text-white hover:border-[#1e3c72] transition"
      >
        Login
      </button>
    </Link>
  )}
</li>

        </ul>
      </div>

      {/* Hamburger Menu */}
      <button
        className="md:hidden text-2xl text-black focus:outline-none"
        onClick={toggleMobileMenu}
      >
        {isMobileMenuOpen ? <>&#10005;</> : <>&#9776;</>}
      </button>
    </nav>
  );
};

export default Navbar;
