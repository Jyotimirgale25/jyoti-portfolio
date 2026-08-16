// src/components/ThemeToggle.jsx
import React from "react";
import { Sun, Moon } from "lucide-react";
import useTheme from "../hooks/useTheme";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="p-2 rounded-lg transition-all duration-300 hover:bg-[#D4C5AD]/20 dark:hover:bg-[#3D322B]/20 text-[#6B5A4A] dark:text-[#B8A08E] hover:text-[#2C2420] dark:hover:text-[#EDE6DC]"
    >
      {theme === "dark" ? (
        <Sun size={18} className="text-yellow-400" />
      ) : (
        <Moon size={18} />
      )}
    </button>
  );
}