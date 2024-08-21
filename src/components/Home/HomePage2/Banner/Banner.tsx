"use cli"
import React, { useEffect, useState } from "react";

const Banner = () => {
  const image1 = "/assets/home/slide.webp";
  const [backgroundSize, setBackgroundSize] = useState("100%");

  useEffect(() => {
    const handleScroll = () => {
      // Calculate zoom level based on scroll position
      const scrollPosition = window.scrollY;
      const newSize = 100 + scrollPosition * 0.1; // Adjust the 0.1 to control zoom intensity
      setBackgroundSize(`${newSize}%`);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      {/* Center Image with Zoom Effect */}
      <div
        className="w-full h-full flex flex-col items-center justify-center p-8"
        style={{
          backgroundImage: `url(${image1})`,
          backgroundSize: backgroundSize,
          backgroundPosition: "center",
          transition: "background-size 0.3s ease-out", // Smooth transition
        }}
      >
        <p className="text-sm uppercase font-bold text-white mb-2">
          Set Your Style
        </p>
        <h1 className="text-5xl font-bold text-white mb-4">INSTILEY</h1>
        <p className="text-center text-white mb-6">
          Neque porro quisquam est qui dolorem ipsum quia dolor sit <br />
          amet consectetur adipisci velit sed quia non numquam eius <br />
          modi tempora incidunto.
        </p>
        <div className="flex space-x-4">
          <button className="bg-white text-teal-600 font-semibold px-6 py-2">
            SHOP WOMEN
          </button>
          <button className="bg-white text-teal-600 font-semibold px-6 py-2">
            SHOP MEN
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
