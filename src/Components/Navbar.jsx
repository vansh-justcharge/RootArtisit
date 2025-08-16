import React, { useState } from "react";
import { X, Menu as MenuIcon } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* Left: Menu Button (Visible on all screens) */}
          <button
            className="flex items-center gap-2 font-bold text-black"
            onClick={() => setMenuOpen(true)}
          >
            <MenuIcon size={20} />
            MENU
          </button>

          {/* Center: Logo */}
          <div 
            className="text-center flex-1 cursor-pointer md:flex-none"
            onClick={() => navigate("/")}
          >
            <h1 className="font-extrabold text-xl md:text-3xl text-black">
              ROOTARTISTS
            </h1>
          </div>

          {/* Right: Contact */}
          <Link className="hidden md:flex items-center font-bold text-black" to="/getintouch">
            GET IN TOUCH
          </Link>

          {/* Mobile Right Contact */}
          <button
            className="md:hidden font-bold text-black"
            onClick={() => navigate("/getintouch")}
          >
            GET IN TOUCH
          </button>
        </div>
      </nav>

      {/* Side Drawer Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button onClick={() => setMenuOpen(false)}>
            <X size={28} />
          </button>
        </div>

        {/* Menu Items */}
        <nav className="flex flex-col gap-6 text-xl font-bold px-6">
          <a href="/" className="text-gray-700 hover:text-gray-400" onClick={() => setMenuOpen(false)}>HOME</a>
          <a href="/about" className="text-gray-700 hover:text-gray-400" onClick={() => setMenuOpen(false)}>ABOUT US</a>
          <a href="/models" className="text-black hover:text-gray-400" onClick={() => setMenuOpen(false)}>MODELS</a>
          <a href="/getscouted" className="text-black hover:text-gray-400" onClick={() => setMenuOpen(false)}>GET SCOUTED</a>
          <a href="/getintouch" className="text-black mt-8 text-lg hover:text-gray-400 " onClick={() => setMenuOpen(false)}>GET IN TOUCH</a>
        </nav>
      </div>

      {/* Background overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
