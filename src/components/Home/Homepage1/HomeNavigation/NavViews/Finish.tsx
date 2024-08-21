import React from "react";
import { CombinedCarousel } from "./CombinedCarousel";

const Finish = () => {
  return (
    <div className="mx-auto w-4/5 bg-white p-4 pb-16 mt-5 ">
      <div
        className="text-[#1C1C1C] text-[30px] underline  underline-offset-8   "
        style={{ textDecorationColor: "#E84538" }}
      >
        Women
      </div>
      <div className="flex gap-8 ">
        <CombinedCarousel />
      </div>
    </div>
  );
};

export default Finish;
