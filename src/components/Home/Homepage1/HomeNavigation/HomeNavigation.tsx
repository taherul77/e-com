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
      <div className="py-16   ">
        <div className="flex justify-center gap-32 pb-10">
          <button
            className={`font-light px-3 py-3  ${
              activeComponent === "MyKitchen"
                ? " bg-black text-white"
                : "hover:bg-slate-300"
            }`}
            onClick={() => setActiveComponent("MyKitchen")}
          >
            Men
          </button>
          <button
            className={`font-light px-3 py-3  ${
              activeComponent === "Finish"
                ? " bg-black text-white"
                : "hover:bg-slate-300"
            }`}
            onClick={() => setActiveComponent("Finish")}
          >
            Women
          </button>
          <button
            className={`font-light px-3 py-3  ${
              activeComponent === "Services"
                ? " bg-black text-white"
                : "hover:bg-slate-300"
            }`}
            onClick={() => setActiveComponent("Services")}
          >
            Services
          </button>
          <button
            className={`font-light px-3 py-3  ${
              activeComponent === "EcoFriendly"
                ? " bg-black text-white"
                : "hover:bg-slate-300"
            }`}
            onClick={() => setActiveComponent("EcoFriendly")}
          >
            Children
          </button>
        </div>
        <div className="flex justify-center">{renderComponent()}</div>
      </div>
    );
  };
  

  

export default HomeNavigation