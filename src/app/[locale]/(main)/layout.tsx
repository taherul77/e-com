"use client";

import React, { useState } from "react";
import Navbar from "@/components/ui/Header/Navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HomePage1 from "@/components/Home/Homepage1/HomePage1";
import Homepage2 from "@/components/Home/HomePage2/Homepage2";
import Homepage3 from "@/components/Home/Homepage3/Homepage3";


function Layout({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();
  const [selectedTab, setSelectedTab] = useState<string>("EIIA");

  const homePageMap: Record<string, React.ReactNode> = {
    EIIA: <HomePage1 />,
    GENTLEMAN: <Homepage2 />,
    GLASSY: <Homepage3 />,
  };

  return (
    <QueryClientProvider client={queryClient}>
      <Navbar onTabSelect={setSelectedTab} selectedTab={selectedTab} />
      {homePageMap[selectedTab]}
      {children}
    </QueryClientProvider>
  );
}

export default Layout;
