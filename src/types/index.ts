import { ReactNode } from "react";

export interface NavTopProps {
    onTabSelect: (value: string) => void;
  }
  export interface NavbarProps {
    onTabSelect: (tab: string) => void;
    selectedTab: string;
  }