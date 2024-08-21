import Image from "next/image";
import React from "react";
import { LuTriangleRight } from "react-icons/lu";
import { IoIosColorPalette } from "react-icons/io";
import { LuPackage } from "react-icons/lu";
import { FaTruck } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { RiCustomerService2Line } from "react-icons/ri";

const servicesData = [
  { icon: LuTriangleRight, text: "Measurement" },
  { icon: IoIosColorPalette, text: "Design" },
  { icon: LuPackage, text: "Packaging" },
  { icon: FaTruck, text: "Shipment" },
  { icon: FaGear, text: "Installation" },
  { icon: RiCustomerService2Line, text: "Customer Services" },
];

const Services = () => {
  return (
    <div className="mx-auto p-5 bg-gray-400 w-10/12">
      <div
        className="text-[#1C1C1C] text-[30px] underline  underline-offset-8  "
        style={{ textDecorationColor: "#E84538" }}
      >
        Services
      </div>

      <div>
        From the beginning, Tilottoma Bangla Group has ensured the service. In
        that continuation, MY KITCHEN is highly committed to ensuring service.
        There are following service those are provided to you.
      </div>
      <div className="flex flex-wrap justify-between items-center gap-6 mt-12  ">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="card h-52 w-40   bg-gray-300 flex flex-col justify-center items-center text-center hover:pb-10 hover:bg-white group transition-all duration-300 cursor-pointer"
          >
            <service.icon
              size={30}
              className="text-gray-400 transition-all duration-300 group-hover:text-red-500"
            />
            <p className="mt-2 text-sm text-gray-400 transition-all duration-300 group-hover:text-red-500">
              {service.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
