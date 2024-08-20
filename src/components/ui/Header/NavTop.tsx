import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { NavTopProps } from "@/types";
import React, { useState } from "react";

const NavTop = ({ onTabSelect }: NavTopProps) => {
  const [activeTab, setActiveTab] = useState<string>("EIIA");

  const handleTabChange = (value: string) => {
    setActiveTab(value); // Set the active tab state
    onTabSelect(value); // Propagate the change to parent
  };

  return (
    <Tabs
      defaultValue="EIIA"
      onValueChange={handleTabChange}
      className="  w-[300px]"
    >
      <TabsList className="flex justify-between ">
        <TabsTrigger
          value="EIIA"
          className={`${
            activeTab === "EIIA"
              ? "bg-white rounded-tr-[0.3rem] text-black text-2xl"
              : ""
          } text-2xl`}
        >
          EIIA
        </TabsTrigger>
        <TabsTrigger
          value="GENTLEMAN"
          className={`${
            activeTab === "GENTLEMAN" ? "bg-white rounded-tr-[0.3rem] text-black" : ""
          }   text-2xl`}
        >
          GENTLEMAN
        </TabsTrigger>
        <TabsTrigger
          value="GLASSY"
          className={`${
            activeTab === "GLASSY" ? "bg-white rounded-tr-[0.3rem] text-black" : ""
          }   text-2xl`}
        >
          GLASSY
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default NavTop;
