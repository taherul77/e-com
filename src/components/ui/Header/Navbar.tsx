"use client";
import React, { useState, useEffect } from "react";
import NavTop from "./NavTop";
import {
  FaUser,
  FaHeart,
  FaShoppingCart,
  FaHeadset,
  FaGlobe,
} from "react-icons/fa";
import Link from "next/link";
import { NavbarProps } from "@/types";

interface Link {
  label: string;
  href: string;
  highlight?: boolean;
}

const Navbar = ({ onTabSelect, selectedTab }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

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

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 1);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Main Header (Visible when not scrolled) */}
      <div className={`${isScrolled ? "hidden" : "block"}`}>
        <div className="bg-black text-white flex justify-between items-center max-w-screen">
          <div>
            <NavTop onTabSelect={onTabSelect} />
          </div>
          <div className="flex items-center space-x-6 px-6 text-white">
            <span className="text-sm font-semibold">
              EXTRA 10% OFF ON FIRST ORDER
            </span>
            <Link href="#" className="hover:text-gray-300">
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
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search the store"
                className="border rounded-full px-4 py-1 w-64 focus:outline-none"
              />
              <button className="absolute right-0 top-0 bottom-0 px-4 text-white bg-black rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Header (Visible when scrolled) */}
      <header
        className={`${
          isScrolled
            ? "fixed top-0 left-0 right-0 z-50 bg-white border-b transition-transform duration-300 ease-in-out"
            : "hidden"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center py-4">
          <div className="text-3xl font-bold">{selectedTab}</div>
          <nav className="flex space-x-6 text-sm font-medium">
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
          </nav>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search the store"
                className="border rounded-full px-4 py-1 w-64 focus:outline-none"
              />
              <button className="absolute right-0 top-0 bottom-0 px-4 text-white bg-black rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
