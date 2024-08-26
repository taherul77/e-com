import React, { useEffect, useState } from "react";

const Banner = () => {
  const image1 = "/assets/home/slide.webp";
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const newScale = 1 + scrollPosition / 1000; // Adjust zoom rate
      if (newScale <= 1.1) {
        setScale(newScale); // Limit zoom to 110%
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative flex items-center justify-center h-screen overflow-hidden">
      {/* Background Image with Zoom Effect */}
      <div
        className="absolute inset-0 w-full h-full transition-transform duration-500 ease-in-out"
        style={{
          backgroundImage: `url(${image1})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          transform: `scale(${scale})`, // Smooth zoom effect on scroll
        }}
      />

      {/* Fixed Content */}
      <div className="relative z-10 flex flex-col items-center justify-center p-8 ">
        <p className="text-sm uppercase font-bold text-white mb-2">
          Mid-Season Sale
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
