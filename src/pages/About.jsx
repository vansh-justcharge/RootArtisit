// pages/About.jsx
import React from 'react';
import Navbar from '../Components/Navbar';

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 py-32 md:py-40">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-12">ABOUT US</h1>

        <p className="mb-6 text-lg md:text-xl font-semibold leading-relaxed">
          Root Artists is dedicated to empowering Homegrown / International artists, talents, and models to achieve their full potential. We believe in creating an environment that nurtures creativity, fosters collaboration, and encourages growth.
        </p>

        <p className="mb-6 text-lg md:text-xl font-semibold leading-relaxed">
          Integrity, diversity, and innovation will be the core. Promoting and Encouraging Nativity, originality and creativity in all that we do.
        </p>

        <p className="mb-6 text-lg md:text-xl font-semibold leading-relaxed">
          In Root Artists we follow a concept of ‘Vasudhaiva Kutumbakam’ – uniting the world as a canvas of creativity and unity.
        </p>

        <p className="mb-6 text-lg md:text-xl font-semibold leading-relaxed">
          Committed to Building resources, support, and guidance to achieve their full potential and create a creative culture across the spectrum.
        </p>
      </div>
    </div>
  );
};

export default About;
