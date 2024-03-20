import React, { useState, useEffect } from "react";
import { Button } from "./Button";

export const TopBar = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);
  const [isOnTop, setIsOnTop] = useState(false);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY === 0) {
      setIsCollapsed(false);
      setIsOnTop(false);
    } else if (currentScrollY > lastScrollY) {
      setIsCollapsed(true);
      setIsOnTop(true);
    } else if (currentScrollY < lastScrollY) {
      setIsOnTop(false);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`transition-height fixed left-0 top-0  w-full py-3 duration-300 ease-in-out ${isCollapsed ? `${isOnTop ? "z-50" : "z-30"} h-16 bg-green shadow-md` : "z-20 h-[100vh] bg-white/95 shadow-md md:pl-[30%] lg:pl-[25%]"}`}
    >
      <div
        className={`  transition-all duration-300 ease-in-out ${isCollapsed ? "max-h-0 overflow-hidden opacity-0" : "mb-5 max-h-screen pt-16 opacity-100"}`}
      >
        {children}
      </div>

      <Button
        label={isCollapsed ? "Show" : "Hide"}
        onClick={toggleCollapse}
        className="absolute left-4 top-2 md:left-8 lg:left-16"
      />
    </div>
  );
};
