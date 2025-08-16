import React, { useState } from 'react';
import Navbar from '../Components/Navbar';

const initialState = {
  name: '',
  artistType: '',
  profession: '',
  measurement: '',
  gender: '',
  portfolio: null,
};

const artistTypes = [
  '', // default empty
  'Model',
  'Creative'
];

const genders = [
  '', // default empty
  'Male',
  'Female'
];

const GetScouted = () => {
  const [form, setForm] = useState(initialState);

  const handleChange = e => {
    const { name, value, files, type } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'file' ? files[0] : value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // handle form submission logic here
    alert('Application Submitted!');
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="px-6 md:pl-0 md:pr-0 max-w-6xl mx-auto py-16">
        {/* Heading */}
        <h1 className="text-3xl font-extrabold mt-6 mb-2">Submit Your Application</h1>
        <p className="font-bold text-sm mb-6">Please submit your application using the form below and we</p>
        {/* Form box */}
        <form 
          className="border border-gray-400 p-6 md:p-12 rounded-sm"
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          {/* Name */}
          <div className="mb-5">
            <label className="block font-bold text-sm mb-1">
              YOUR NAME <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-400 px-3 py-2 rounded-sm"
            />
          </div>
          {/* Artist Type */}
          <div className="mb-5">
            <label className="block font-bold text-sm mb-1">
              SELECT ARTIST TYPE <span className="text-red-600">*</span>
            </label>
            <select
              name="artistType"
              value={form.artistType}
              onChange={handleChange}
              required
              className="w-full border border-gray-400 px-3 py-2 rounded-sm bg-white"
            >
              <option value="">SELECT ARTIST TYPE</option>
              {artistTypes.slice(1).map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
          {/* Profession */}
          <div className="mb-5">
            <label className="block font-bold text-sm mb-1">
              ADD YOUR PROFESSION <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="profession"
              value={form.profession}
              onChange={handleChange}
              required
              className="w-full border border-gray-400 px-3 py-2 rounded-sm"
            />
          </div>
          {/* Measurement */}
          <div className="mb-5">
            <label className="block font-bold text-sm mb-1">
              MEASUREMENT <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="measurement"
              value={form.measurement}
              onChange={handleChange}
              required
              className="w-full border border-gray-400 px-3 py-2 rounded-sm"
            />
          </div>
          {/* Gender */}
          <div className="mb-5">
            <label className="block font-bold text-sm mb-1">
              SELECT GENDER
            </label>
            <select
              name="gender"
              value={form.gender}
              onChange={handleChange}
              className="w-full border border-gray-400 px-3 py-2 rounded-sm bg-white"
            >
              <option value="">SELECT GENDER</option>
              {genders.slice(1).map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
          {/* Portfolio */}
          <div className="mb-5">
            <label className="block font-bold text-sm mb-1">
              PORTFOLIO <span className="text-red-600">*</span>
            </label>
            <input
              type="file"
              name="portfolio"
              onChange={handleChange}
              required
              className="block"
            />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="bg-black text-white font-bold px-6 py-2 rounded-sm"
          >
            PUBLISH
          </button>
        </form>
      </div>
    </div>
  );
};

export default GetScouted;
