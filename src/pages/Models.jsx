import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../Components/Navbar';
import modelsData from '../data/ModelData';

const Models = () => {
  const [filter, setFilter] = useState('ALL');

  const filteredModels = modelsData.filter(model => {
    if (filter === 'ALL') return true;
    if (filter === 'FEMALE') return model.gender.toLowerCase() === 'female';
    if (filter === 'MALE') return model.gender.toLowerCase() === 'male';
    return true;
  });

  return (
    <div className="bg-white min-h-screen">
      <NavBar />
      <div className="max-w-7xl mx-auto px-8 py-24">
        {/* Filter options */}
        <div className="flex justify-end mb-8 gap-8">
          {['ALL', 'FEMALE', 'MALE'].map(type => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`uppercase font-bold text-sm underline underline-offset-4 ${
                filter === type ? 'text-black' : 'text-gray-600 hover:text-black'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {filteredModels.length > 0 ? (
            filteredModels.map((model, idx) => (
              <Link
                key={idx}
                to={`/model/${encodeURIComponent(model.name)}`}
                state={{ model }}
                className="flex flex-col cursor-pointer"
              >
                {/* Image + Overlay wrapper */}
                <div className="relative group transition-transform duration-500 ease-in-out hover:scale-95">
                  <img
                    src={model.image}
                    alt={`${model.name} (${model.location})`}
                    className="w-full h-[250px] md:h-[600px] object-cover"
                  />

                  {/* Overlay only on image */}
                  <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-white text-sm md:text-[20px] px-4">
                    <p className="mt-2">Height: {model.height}</p>
                    <p className="mt-2">Waist: {model.waist}</p>
                    <p className="mt-2">Shoes: {model.shoes}</p>
                    <p className="mt-2">Bust: {model.bust}</p>
                    <p className="mt-2">Hips: {model.hips}</p>
                  </div>
                </div>

                {/* Name + Location (outside hover) */}
                <span className="font-bold text-sm md:text-base mb-1 mt-2 md:mb-2">
                  {model.name} ({model.location})
                </span>
              </Link>

            ))
          ) : (
            <p className="text-center col-span-3">No models found for selected filter.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Models;
