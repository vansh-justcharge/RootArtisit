// Models.js
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
                    className="flex flex-col cursor-pointer transition-transform duration-500 ease-in-out hover:scale-90"
                >
                    <img
                    src={model.image}
                    alt={`${model.name} (${model.location})`}
                    className="w-full h-[250px] md:h-[600px] object-cover mb-2 md:mb-4"
                    />
                    <span className="font-bold text-sm md:text-base mb-1 md:mb-2">
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
