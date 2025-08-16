// pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full px-4 sm:px-6">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 w-full bg-white z-50">
        <div className="text-center py-4 sm:py-6 md:py-8">
          <h1 className="text-[48px] sm:text-[80px] md:text-[120px] lg:text-[200px] font-extrabold tracking-tight leading-none">
            ROOTARTISTS
          </h1>
          <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center mt-2 sm:mt-4">
            <Link
              to="/about"
              className="font-bold text-xs sm:text-sm md:text-base cursor-pointer hover:text-gray-500"
            >
              ABOUT US
            </Link>
            <Link
              to="/models"
              className="font-bold text-xs sm:text-sm md:text-base cursor-pointer hover:text-gray-500"
            >
              MODELS
            </Link>
            <Link
              to="/getscouted"
              className="font-bold text-xs sm:text-sm md:text-base cursor-pointer hover:text-gray-500"
            >
              GET SCOUTED
            </Link>
          </div>
        </div>
      </header>

      {/* Content pushed below fixed header */}
      <main className="pt-[160px] sm:pt-[200px] md:pt-[280px] space-y-10 sm:space-y-12 md:space-y-16">
        
        {/* Row 1 */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-11 gap-4 items-end">
          <div className="lg:col-span-3">
            <img
              src="https://rootartists.com/wp-content/uploads/2024/05/1-2.jpg"
              alt="Caption 1"
              className="w-full h-[260px] sm:h-[300px] md:h-[500px] object-cover"
            />
            <p className="mt-2 text-xs sm:text-sm text-start">Caption 1</p>
          </div>

          <div className="lg:col-span-2">
            <video
              src="https://rootartists.com/wp-content/uploads/2024/05/Reel-2.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-[300px] sm:h-[300px] md:h-[500px] object-cover"
            />
            <p className="mt-2 text-xs sm:text-sm text-start">Caption 2</p>
          </div>

          <div className="lg:col-span-3 items-end">
            <img
              src="https://rootartists.com/wp-content/uploads/2024/12/Pulkit-Mishra-91-scaled.jpg"
              alt="Caption 3"
              className="w-full h-[300px] sm:h-[300px] md:h-[500px] object-cover"
            />
            <p className="mt-2 text-xs sm:text-sm text-start">Caption 3</p>
          </div>

          <div className="lg:col-span-3 items-end">
            <img
              src="https://rootartists.com/wp-content/uploads/2024/12/%C2%A9Pulkit-Mishra_Mindyc-scaled.jpg"
              alt="Caption 4"
              className="w-full h-[250px] sm:h-[300px] md:h-[500px] object-cover"
            />
            <p className="mt-2 text-xs sm:text-sm text-start">Caption 4</p>
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <img
              src="https://rootartists.com/wp-content/uploads/2023/12/Screenshot-2023-12-16-at-9.25.png"
              alt="Caption 1"
              className="w-full h-[250px] sm:h-[400px] md:h-[500px] object-cover"
            />
            <p className="mt-2 text-xs sm:text-sm text-start">Caption 1</p>
          </div>
          <div>
            <img
              src="https://rootartists.com/wp-content/uploads/2024/06/SAVE_20240612_132100-2048x1365.jpg"
              alt="Caption 2"
              className="w-full h-[250px] sm:h-[400px] md:h-[500px] object-cover"
            />
            <p className="mt-2 text-xs sm:text-sm text-start">Caption 2</p>
          </div>
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-12 gap-4 items-end">
          <div className="lg:col-span-2">
            <img
              src="https://rootartists.com/wp-content/uploads/2023/12/3-2.png"
              alt="Photographer: Runvijay Paul"
              className="w-full h-[200px] sm:h-[250px] lg:h-[300px] object-cover"
            />
            <p className="mt-2 text-xs sm:text-sm text-start">Photographer: Runvijay Paul</p>
          </div>

          <div className="lg:col-span-3">
            <img
              src="https://rootartists.com/wp-content/uploads/2023/12/c6ce38159442717.png"
              alt="Creative direction : Akshay Pradeep"
              className="w-full h-[150px] sm:h-[250px] lg:h-[300px] object-cover"
            />
            <p className="mt-2 text-xs text-start sm:text-sm">Creative direction : Akshay Pradeep</p>
          </div>

          <div className="lg:col-span-2">
            <img
              src="https://rootartists.com/wp-content/uploads/2023/12/13.png"
              alt="Photographer: Runvijay Paul"
              className="w-full h-[200px] sm:h-[250px] lg:h-[300px] object-cover"
            />
            <p className="mt-2 text-xs text-start sm:text-sm">Photographer: Runvijay Paul</p>
          </div>

          <div className="lg:col-span-5">
            <div className="w-full h-[200px] sm:h-[250px] lg:h-[300px] overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/aoMHK5JChTw"
                title="Film: Raunvijay Paul"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <p className="mt-2 text-xs sm:text-sm">Film: Raunvijay Paul</p>
          </div>
        </div>

        {/* Row 4 */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:h-[350px] md:h-[450px]">
          <div className="sm:col-span-1 flex items-end">
            <img
              src="https://rootartists.com/wp-content/uploads/2024/12/%C2%A9Pulkit-Mishra_Portfolio-4-2048x1639.jpg"
              alt="Caption 1"
              className="w-full h-[150px] sm:h-[220px] object-cover"
            />
          </div>
          <div className="sm:col-span-1">
            <img
              src="https://rootartists.com/wp-content/uploads/2023/12/2.png"
              alt="Caption 2"
              className="w-full h-full min-h-[250px] sm:min-h-[350px] max-h-[450px] object-cover"
            />
          </div>
          <div className="col-span-2">
            <img
              src="https://rootartists.com/wp-content/uploads/2024/05/C4A9921-copy-1-1024x683.jpg"
              alt="Caption 3"
              className="w-full h-full min-h-[250px] sm:min-h-[350px] max-h-[450px] object-cover"
            />
          </div>
        </div>

        {/* Row 5 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <div>
            <img
              src="https://rootartists.com/wp-content/uploads/2024/12/Pulkit-X-Root_Test_07.120182-scaled.jpg"
              alt="Caption 1"
              className="w-full h-[400px] sm:h-[400px] md:h-[500px] object-cover"
            />
            <p className="mt-2 text-xs sm:text-sm text-start ml-6">Caption 1</p>
          </div>
          <div className="sm:col-span-2">
            <img
              src="https://rootartists.com/wp-content/uploads/2023/12/Anushka-London.png"
              alt="Caption 2"
              className="w-full h-[250px] sm:h-[400px] md:h-[500px] object-cover"
            />
            <p className="mt-2 text-xs sm:text-sm text-start">Caption 2</p>
          </div>
        </div>

        {/* Row 6 */}
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 sm:gap-6">
          <div className="sm:col-span-2">
            <img
              src="https://rootartists.com/wp-content/uploads/2023/12/CARPE-DIEM-1-1.png"
              alt="Caption 2"
              className="w-full h-[250px] sm:h-[400px] md:h-[450px] object-cover"
            />
            <p className="mt-2 text-xs sm:text-sm text-start ml-4">Caption 2</p>
          </div>
          <div>
            <img
              src="https://rootartists.com/wp-content/uploads/2024/12/DSC4020-scaled.jpg"
              alt="Caption 2"
              className="w-full h-[400px] sm:h-[400px] md:h-[450px] object-cover"
            />
            <p className="mt-2 text-xs sm:text-sm text-start">Caption 2</p>
          </div>
          <div className="sm:col-span-2">
            <img
              src="https://rootartists.com/wp-content/uploads/2024/05/ECKO_AW_CAMPAIGN_048-copy-1-1.jpg"
              alt="Caption 2"
              className="w-full h-[250px] sm:h-[400px] md:h-[450px] object-cover"
            />
            <p className="mt-2 text-xs sm:text-sm text-start">Caption 2</p>
          </div>
        </div>

        {/* Row 7 */}
        <div className="grid grid-cols-1 sm:grid-cols-10 gap-4 sm:gap-6">
          <div className="sm:col-span-5">
            <img
              src="https://rootartists.com/wp-content/uploads/2023/12/Untitled-1-copy-3.png"
              alt="Caption 1"
              className="w-full h-[250px] sm:h-[350px] md:h-[400px] object-cover"
            />
            <p className="mt-2 text-xs sm:text-sm text-start ml-4">Caption 1</p>
          </div>
          <div className="sm:col-span-2">
            <img
              src="https://rootartists.com/wp-content/uploads/2024/12/DSF5416_%C2%A9Pulkit-Mishra_-scaled.jpg"
              alt="Caption 3"
              className="w-full h-[400px] sm:h-[350px] md:h-[400px] object-cover"
            />
            <p className="mt-2 text-xs sm:text-sm text-start">Caption 3</p>
          </div>
          <div className="sm:col-span-3">
            <img
              src="https://rootartists.com/wp-content/uploads/2024/12/%C2%A9Pulkit-Mishra_1.jpeg"
              alt="Caption 3"
              className="w-full h-[400px] sm:h-[400px] md:h-[500px] object-cover"
            />
            <p className="mt-2 text-xs sm:text-sm text-start">Caption 3</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 sm:py-8 px-4 sm:px-6 mt-6">
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
          <div className="flex flex-col sm:flex-row items-center">
            <a href="/">
              <span className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
                ROOTARTISTS
              </span>
            </a>
            <span className="mt-2 sm:mt-0 sm:ml-4 text-sm sm:text-base">
              Copyright &copy;
            </span>
          </div>
          <a
            href="/getintouch"
            className="text-lg sm:text-xl font-extrabold underline underline-offset-4"
          >
            GET IN TOUCH
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
