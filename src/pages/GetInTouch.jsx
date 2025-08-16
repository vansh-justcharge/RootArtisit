import React from "react";
import { Instagram } from "lucide-react";
import Navbar from "../Components/Navbar";

const GetInTouch = () => {
  return (
    <div>
      <Navbar />

      {/* Full height minus navbar height */}
      <div className="flex items-center justify-center min-h-screen px-6 pt-12">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Phone Numbers */}
          <div>
            <h2 className="font-bold text-sm uppercase mb-4">Phone Number</h2>
            <p className="font-extrabold text-xl mb-2">+91 72044 40775</p>
            <p className="font-extrabold text-xl mb-2">+91 72044 40669</p>
            <p className="font-extrabold text-xl">+91 72595 71575</p>
          </div>

          {/* Email + Instagram */}
          <div>
            <h2 className="font-bold text-sm uppercase mb-4">Email</h2>
            <p className="font-extrabold text-xl mb-2">info@rootartists.com</p>
            <p className="font-extrabold text-xl">talents@rootartists.com</p>

            <div className="flex">
                <h2 className="font-bold text-sm uppercase mt-6 mb-2">Instagram</h2>
                <Instagram size={24} className="ml-2 mt-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
