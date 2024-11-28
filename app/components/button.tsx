'use client'
import React, { ReactNode } from "react";
import Image from 'next/image'; // Import Image from next/image
import { getTextColor } from "../utils/colorUtils";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { LucideIcon } from "lucide-react";

interface ButtonProps {
  children?: ReactNode;
  nextSectionId?: string;
  icon?: LucideIcon | string; // Updated to accept string for local path icons
  link?: string;
  className?: string;
}

export default function Button({
  children,
  nextSectionId,
  icon,
  link,
  className = "",
}: ButtonProps) {
  const activeBgColor = useIntersectionObserver();
  const textColor = getTextColor(activeBgColor);
  const borderColor = textColor === "text-light" ? "border-light" : "border-dark";

  const handleClick = () => {
    if (link) {
      window.open(link, "_blank", "noopener,noreferrer");
    } else if (nextSectionId) {
      const nextSection = document.getElementById(nextSectionId);
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const baseStyles = `
    cursor-pointer
    transition-all
    duration-500
    ease-in-out
    hover:scale-105
    active:scale-95
    ${className}
  `;

  // Icon-only button (for links)
  if (icon && !children) {
    return (
      <button
        onClick={handleClick}
        className={`p-2 border rounded-full ${borderColor} ${baseStyles} ${textColor}`}
      >
        {typeof icon === "string" ? (
          <Image src={icon} alt="icon" width={20} height={20} className={`w-5 h-5 ${textColor} ${baseStyles} transition-colors duration-500`} />
        ) : (
          React.createElement(icon, {
            className: ` ${textColor} transition-colors duration-500`,
          })
        )}
      </button>
    );
  }

  // Text button (for section navigation)
  return (
    <button
      onClick={handleClick}
      className={`px-6 py-2 border rounded-full ${borderColor} ${baseStyles}`}
    >
      <div className="flex items-center gap-2">
        {icon && (
          typeof icon === "string" ? (
            <Image src={icon} alt="icon" width={16} height={16} className={`w-4 h-4 ${textColor} transition-colors duration-500`} />
          ) : (
            React.createElement(icon, {
              className: ` ${textColor} transition-colors duration-500`,
            })
          )
        )}
        <span
          className={`${textColor} text-sm font-bold transition-colors duration-500`}
        >
          {children}
        </span>
      </div>
    </button>
  );
}