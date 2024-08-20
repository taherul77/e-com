"use client";



import Navbar from "@/components/ui/Header/Navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { ReactNode } from "react";


function layout({ children }: { children: ReactNode }) {
  const queryClient = new QueryClient();

  return (
    
      <QueryClientProvider client={queryClient}>
       <Navbar></Navbar>
        {children}
       
      </QueryClientProvider>
   
  );
}

export default layout;
