import React, { useState } from 'react'
import MyKitchen from './NavViews/MyKitchen';
import Finish from './NavViews/Finish';
import Services from './NavViews/Services';
import EcoFriendly from './NavViews/EcoFriendly';

const HomeNavigation = () => {
    const [activeComponent, setActiveComponent] = useState("MyKitchen");

    const renderComponent = () => {
      switch (activeComponent) {
        case "MyKitchen":
          return <MyKitchen />;
        case "Finish":
          return <Finish />;
        case "Services":
          return <Services />;
        case "EcoFriendly":
          return <EcoFriendly />;
        default:
          return <MyKitchen />;
      }
    };
  
    return (
      <div className="py-10   ">
        <div className="flex justify-center gap-10 pb-5">
          <button
            className={`font-light  py-3 rounded-2xl px-4  ${
              activeComponent === "MyKitchen"
                ? " bg-black text-white"
                : "hover:bg-slate-300"
            }`}
            onClick={() => setActiveComponent("MyKitchen")}
          >
            Shop All
          </button>
          <button
            className={`font-light  py-3 rounded-2xl px-4 ${
              activeComponent === "Finish"
                ? " bg-black text-white"
                : "hover:bg-slate-300"
            }`}
            onClick={() => setActiveComponent("Finish")}
          >
            Activewears
          </button>
          <button
            className={`font-light  py-3 rounded-2xl px-4 ${
              activeComponent === "Services"
                ? " bg-black text-white"
                : "hover:bg-slate-300"
            }`}
            onClick={() => setActiveComponent("Services")}
          >
            Sweatshirts
          </button>
          <button
            className={`font-light  py-3 rounded-2xl  px-4  ${
              activeComponent === "EcoFriendly"
                ? " bg-black text-white"
                : "hover:bg-slate-300"
            }`}
            onClick={() => setActiveComponent("EcoFriendly")}
          >
            Costs & Jackets
          </button>
          <button
            className={`font-light  py-3 rounded-2xl  px-4  ${
              activeComponent === "EcoFriendly"
                ? " bg-black text-white"
                : "hover:bg-slate-300"
            }`}
            onClick={() => setActiveComponent("EcoFriendly")}
          >
            Jeans
          </button>
        </div>
        <div className="flex justify-center">{renderComponent()}</div>
      </div>
    );
  };
  

  

export default HomeNavigation