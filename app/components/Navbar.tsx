"use client";
import React, { useState } from "react";
import Button from "./button";
import { getTextColor } from "../utils/colorUtils";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeBgColor = useIntersectionObserver();
  const textColor = getTextColor(activeBgColor);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="top-1 fixed w-full flex justify-between items-center py-[10px] px-[20px] z-20">
      <div className={`${textColor} text-xl`}>
        <span className="md:hidden">
          {menuOpen ? "</>" : "@amineredasaf"}
        </span>
        <span className="hidden md:inline">@amineredasaf</span>
      </div>
      
      <div className="md:hidden flex items-center">
        <div 
          className={`overflow-hidden transition-all duration-300 mr-3
            ${menuOpen ? 'w-auto opacity-100' : 'w-0 opacity-0'}`}
        >
          <div className="flex flex-row items-center space-x-3 whitespace-nowrap">
            <Button nextSectionId="Welcome">Welcome</Button>
            <Button nextSectionId="Experiences">Experiences</Button>
            <Button nextSectionId="Projects">Projects</Button>
            <Button nextSectionId="Contact">Contact</Button>
          </div>
        </div>
        
        <button onClick={toggleMenu} className={`${textColor}`}>
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>
      
      <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-3">
          <Button nextSectionId="Welcome">Welcome</Button>
          <Button nextSectionId="Experiences">Experiences</Button>
          <Button nextSectionId="Projects">Projects</Button>
          <Button nextSectionId="Contact">Contact</Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
