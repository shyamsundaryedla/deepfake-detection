// utils/ThemeSwitcher.tsx
"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BiMoon, BiSun } from "react-icons/bi";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="relative inline-block w-16 h-8 select-none transition-all duration-300 ease-in-out">
      <input
        type="checkbox"
        id="theme-toggle"
        className="sr-only"
        checked={theme === "dark"}
        onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
      />
      <label
        htmlFor="theme-toggle"
        className="block overflow-hidden h-8 rounded-full bg-gray-300 dark:bg-gray-600 cursor-pointer transition-colors duration-300 ease-in-out"
      >
        <span className="absolute inset-y-0 left-0 flex items-center justify-center w-8 h-8 transition-all duration-300 ease-in-out bg-white rounded-full shadow-md transform translate-x-0 dark:translate-x-8">
          {theme === "dark" ? (
            <BiMoon className="text-indigo-700 text-xl" />
          ) : (
            <BiSun className="text-yellow-500 text-xl" />
          )}
        </span>
        <span className="sr-only">Toggle theme</span>
      </label>
    </div>
  );
};
