import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const ModelDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const model = location.state?.model;
  const [view, setView] = useState("main");
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [modalImages, setModalImages] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!model) {
    navigate("/", { replace: true });
    return null;
  }

  // Handle opening modal
  const openModal = (images, index) => {
    setModalImages(images);
    setSelectedImageIndex(index);
  };

  // Handle next/prev
  const nextImage = () => {
    setSelectedImageIndex((prev) =>
      prev + 1 < modalImages.length ? prev + 1 : 0
    );
  };
  const prevImage = () => {
    setSelectedImageIndex((prev) =>
      prev - 1 >= 0 ? prev - 1 : modalImages.length - 1
    );
  };

  // Desktop right content
  let rightContent;
  if (view === "main") {
    rightContent = (
      <div className="w-full bg-gray-100 flex items-center justify-center">
        <img
          src={model.image}
          alt={`${model.name} (${model.location})`}
          className="object-cover w-full h-full cursor-pointer"
          onClick={() => openModal([model.image], 0)}
        />
      </div>
    );
  } else if (view === "polaroids") {
    const polaroids = model.polaroidImages || [];
    rightContent =
      polaroids.length > 0 ? (
        <div className="grid grid-cols-2 gap-6">
          {polaroids.slice(0, 4).map((imgUrl, idx) => (
            <div
              key={idx}
              className="relative w-full bg-gray-100 flex items-center justify-center"
            >
              <img
                src={imgUrl}
                alt={`Polaroid ${idx + 1}`}
                className="object-cover w-full h-full cursor-pointer"
                onClick={() => openModal(polaroids, idx)}
              />
              {idx === 3 && polaroids.length > 4 && (
                <div
                  className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-lg font-bold cursor-pointer"
                  onClick={() => openModal(polaroids, 3)}
                >
                  +{polaroids.length - 4} more
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No gallery images</p>
      );
  } else if (view === "portfolio") {
    const portfolio = model.portfolioImages || [];
    rightContent =
      portfolio.length > 0 ? (
        <div className="grid grid-cols-2 gap-6">
          {portfolio.slice(0, 4).map((imgUrl, idx) => (
            <div
              key={idx}
              className="relative w-full bg-gray-100 flex items-center justify-center"
            >
              <img
                src={imgUrl}
                alt={`Portfolio ${idx + 1}`}
                className="object-cover w-full h-full cursor-pointer"
                onClick={() => openModal(portfolio, idx)}
              />
              {idx === 3 && portfolio.length > 4 && (
                <div
                  className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-lg font-bold cursor-pointer"
                  onClick={() => openModal(portfolio, 3)}
                >
                  +{portfolio.length - 4} more
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No gallery images</p>
      );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-4">
        {/* MOBILE VIEW */}
        <div className="block md:hidden space-y-8">
          {/* Name */}
          <h1 className="text-3xl font-extrabold uppercase">
            {model.name} <br /> ({model.location})
          </h1>

          {/* Main Image */}
          <div className="w-full bg-gray-100">
            <img
              src={model.image}
              alt={`${model.name} (${model.location})`}
              className="object-cover w-full cursor-pointer"
              onClick={() => openModal([model.image], 0)}
            />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-y-6 mb-6 text-left">
            <div>
              <div className="font-bold uppercase text-sm mb-1">Height</div>
              <div className="font-semibold">{model.height}</div>
            </div>
            <div>
              <div className="font-bold uppercase text-sm mb-1">Waist</div>
              <div className="font-semibold">{model.waist}</div>
            </div>
            <div>
              <div className="font-bold uppercase text-sm mb-1">Shoes</div>
              <div className="font-semibold">{model.shoes}</div>
            </div>
            <div>
              <div className="font-bold uppercase text-sm mb-1">Bust</div>
              <div className="font-semibold">{model.bust}</div>
            </div>
            <div>
              <div className="font-bold uppercase text-sm mb-1">Hips</div>
              <div className="font-semibold">{model.hips}</div>
            </div>
          </div>

          {/* Polaroids */}
          <div>
            <h2 className="font-bold uppercase mb-4">Polaroids</h2>
            {model.polaroidImages && model.polaroidImages.length > 0 ? (
              <div className="grid grid-cols-2 gap-4">
                {model.polaroidImages.slice(0, 4).map((imgUrl, idx) => (
                  <div
                    key={idx}
                    className="relative w-full bg-gray-100 cursor-pointer"
                    onClick={() => openModal(model.polaroidImages, idx)}
                  >
                    <img
                      src={imgUrl}
                      alt={`Polaroid ${idx + 1}`}
                      className="object-cover w-full"
                    />
                    {idx === 3 && model.polaroidImages.length > 4 && (
                      <div
                        className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white font-bold text-lg"
                        onClick={() => openModal(model.polaroidImages, 3)}
                      >
                        +{model.polaroidImages.length - 4} more
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No gallery Found</p>
            )}
          </div>

          {/* Portfolio */}
          <div>
            <h2 className="font-bold uppercase mb-4">Portfolio</h2>
            {model.portfolioImages && model.portfolioImages.length > 0 ? (
              <div className="grid grid-cols-2 gap-4">
                {model.portfolioImages.slice(0, 4).map((imgUrl, idx) => (
                  <div
                    key={idx}
                    className="relative w-full bg-gray-100 cursor-pointer"
                    onClick={() => openModal(model.portfolioImages, idx)}
                  >
                    <img
                      src={imgUrl}
                      alt={`Portfolio ${idx + 1}`}
                      className="object-cover w-full"
                    />
                    {idx === 3 && model.portfolioImages.length > 4 && (
                      <div
                        className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white font-bold text-lg"
                        onClick={() => openModal(model.portfolioImages, 3)}
                      >
                        +{model.portfolioImages.length - 4} more
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No gallery Found</p>
            )}
          </div>

          {/* Instagram */}
          <div className="mb-6">
            <a
              href={model.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-bold uppercase underline"
            >
              Instagram
            </a>
          </div>
        </div>

        {/* DESKTOP VIEW */}
        <div
          className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-10 items-start"
          style={{ minHeight: "700px" }}
        >
          {/* LEFT CONTENT */}
          <div
            style={
              view === "main"
                ? { alignSelf: "flex-start", marginTop: "160px" }
                : { position: "sticky", top: "200px", alignSelf: "flex-start" }
            }
          >
            <h1 className="text-5xl font-extrabold mb-10 mt-0 uppercase">
              {model.name} <br /> ({model.location})
            </h1>
            <div className="mb-10">
              <div className="grid grid-cols-3 gap-y-6 mb-6 text-left">
                <div>
                  <div className="font-bold uppercase text-base mb-1">
                    Height
                  </div>
                  <div className="font-semibold">{model.height}</div>
                </div>
                <div>
                  <div className="font-bold uppercase text-base mb-1">
                    Waist
                  </div>
                  <div className="font-semibold">{model.waist}</div>
                </div>
                <div>
                  <div className="font-bold uppercase text-base mb-1">
                    Shoes
                  </div>
                  <div className="font-semibold">{model.shoes}</div>
                </div>
                <div>
                  <div className="font-bold uppercase text-base mb-1">
                    Bust
                  </div>
                  <div className="font-semibold">{model.bust}</div>
                </div>
                <div>
                  <div className="font-bold uppercase text-base mb-1">
                    Hips
                  </div>
                  <div className="font-semibold">{model.hips}</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-8 text-lg font-bold uppercase mt-6">
              <button
                onClick={() => setView("polaroids")}
                className="text-left uppercase hover:underline"
              >
                Polaroids
              </button>
              <button
                onClick={() => setView("portfolio")}
                className="text-left uppercase hover:underline"
              >
                Portfolio
              </button>
              <a
                href={model.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-left hover:underline"
              >
                Instagram
              </a>
              {(view === "polaroids" || view === "portfolio") && (
                <button
                  onClick={() => setView("main")}
                  className="text-xs underline text-gray-500 font-medium text-left mt-1"
                >
                  Show Main Image
                </button>
              )}
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className={`${view === "main" ? "" : "overflow-y-auto"} py-20`}>
            {rightContent}
          </div>
        </div>
      </div>

      {/* FULLSCREEN MODAL */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <button
            className="absolute top-4 right-6 text-white text-3xl"
            onClick={() => setSelectedImageIndex(null)}
          >
            <X size={32} />
          </button>
          <button className="absolute left-4 text-white" onClick={prevImage}>
            <ChevronLeft size={40} />
          </button>
          <img
            src={modalImages[selectedImageIndex]}
            alt="Enlarged"
            className="max-h-[90%] max-w-[90%] object-contain"
          />
          <button className="absolute right-4 text-white" onClick={nextImage}>
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ModelDetails;
