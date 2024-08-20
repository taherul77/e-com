"use client";
import Image from "next/image";
import React, { useState } from "react";
import NavTop from "./NavTop";
import {
  FaUser,
  FaHeart,
  FaShoppingCart,
  FaHeadset,
  FaGlobe,
} from "react-icons/fa";
import Link from "next/link";
// Define the type for a single link
interface Link {
  label: string;
  href: string;
  highlight?: boolean;
}

const Navbar = () => {
  const [selectedTab, setSelectedTab] = useState<string>("EIIA");

  // Mapping of tab values to corresponding links
  const linksMap: Record<string, Link[]> = {
    EIIA: [
      { label: "THEME DEMO", href: "#" },
      { label: "SHOP", href: "#" },
      { label: "PRODUCT", href: "#" },
      { label: "BLOG", href: "#" },
      { label: "PAGES", href: "#" },
      { label: "NEW IN", href: "#" },
      { label: "TREND", href: "#" },
      { label: "COLLECTIONS", href: "#" },
      { label: "Buy ELLA", href: "#", highlight: true },
    ],
    GENTLEMAN: [
      { label: "ACCESSORIES", href: "#" },
      { label: "WATCHES", href: "#" },
      { label: "FOOTWEAR", href: "#" },
      { label: "BLOG", href: "#" },
      { label: "GROOMING", href: "#" },
      { label: "FASHION", href: "#" },
      { label: "COLLECTIONS", href: "#" },
      { label: "Buy GENTLEMAN", href: "#", highlight: true },
    ],
    GLASSY: [
      { label: "SUNGLASSES", href: "#" },
      { label: "LENSES", href: "#" },
      { label: "ACCESSORIES", href: "#" },
      { label: "BLOG", href: "#" },
      { label: "BRANDS", href: "#" },
      { label: "STYLES", href: "#" },
      { label: "TREND", href: "#" },
      { label: "COLLECTIONS", href: "#" },
      { label: "Buy GLASSY", href: "#", highlight: true },
    ],
  };

  const links = linksMap[selectedTab];

  return (
    <>
      <div>
        <div className="bg-black text-white flex justify-between items-center max-w-screen">
          <div className=" ">
            <NavTop onTabSelect={setSelectedTab} />
          </div>

          <div className="flex items-center space-x-6 px-6 text-white">
            <span className="text-sm font-semibold">
              EXTRA 10% OFF ON FIRST ORDER
            </span>

            <Link href="#" className=" hover:text-gray-300">
              <FaUser />
            </Link>

            <Link href="#" className="hover:text-gray-300 relative">
              <FaHeart />
              <span className="absolute top-[-10px] right-[-8px] bg-white text-black text-xs rounded-full px-1">
                0
              </span>
            </Link>

            <Link href="#" className="text-lg hover:text-gray-300 relative">
              <FaShoppingCart />
              <span className="absolute top-[-10px] right-[-8px] bg-white text-black text-xs rounded-full px-1">
                0
              </span>
            </Link>

            <Link href="#" className="hover:text-gray-300">
              <FaHeadset />
            </Link>

            <Link href="#" className="hover:text-gray-300">
              <FaGlobe />
            </Link>
          </div>
        </div>

        {/* Second Row - White Background */}
        <div className="bg-white px-4 py-4 flex justify-between items-center border-b-2">
          {/* Left Side - Logo and Links */}
          <div className="flex items-center space-x-8">
            <div className="text-3xl font-bold">{selectedTab}</div>
            <div className="flex space-x-6">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className={`text-sm ${
                    link.highlight
                      ? "text-red-500 font-semibold hover:text-red-600"
                      : "hover:text-gray-800"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right Side - Search Bar */}
          <div className="flex items-center space-x-2">
            <input
              type="text"
              className="border rounded-full py-2 px-4 w-64"
              placeholder="Search the store"
            />
            <button className="bg-black text-white rounded-full px-4 py-2">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
