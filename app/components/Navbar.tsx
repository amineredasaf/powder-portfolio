"use client";
import React, { useState } from "react";
import Button from "./button";
import { getTextColor } from "../utils/colorUtils.tsx";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";


const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeBgColor = useIntersectionObserver();
  const textColor = getTextColor(activeBgColor);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="top-1 fixed w-full flex justify-between items-center py-[10px] px-[20px]">
      <div className={`${textColor} text-xl`}>@amineredasaf</div>
      <div className="md:hidden">
        <button onClick={toggleMenu} className={`${textColor}`}>
          &#9776;
        </button>
      </div>
      <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-3">
          <Button nextSectionId="hero">hero</Button>
          <Button nextSectionId="about">about</Button>
          <Button nextSectionId="skills">skills</Button>
        </div>
      </div>
      {menuOpen && (
        <div className="absolute top-full left-0 w-full space-y-2 flex flex-col items-center md:hidden">
          <Button nextSectionId="hero" >hero</Button>
          <Button nextSectionId="about" >about</Button>
          <Button nextSectionId="skills" >skills</Button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
