import React, { useEffect, useState } from "react";
import {
  Code2,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
} from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Works", href: "#works" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* ================================
     SCROLL EFFECT
  ================================= */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* ================================
     ACTIVE SECTION
  ================================= */

  useEffect(() => {
    const sectionIds = navLinks.map((link) =>
      link.href.replace("#", "")
    );

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-45% 0px -50% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  /* ================================
     MOBILE SCROLL LOCK
  ================================= */

  useEffect(() => {
    document.body.style.overflow = mobileOpen
      ? "hidden"
      : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#F5F0E8]/95 dark:bg-[#1A1816]/95 backdrop-blur-md shadow-lg border-b border-[#D4C5AD] dark:border-[#3D322B]"
          : "bg-[#F5F0E8]/80 backdrop-blur-sm"
      }`}
    >
      {/* SAME WIDTH AS HERO */}
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">

        <div className="flex items-center justify-between h-16">

          {/* ================================
              LOGO
          ================================= */}

          <a
            href="#home"
            className="flex items-center gap-2 group shrink-0"
          >
            <div className="p-1.5 bg-[#3d2b1f] rounded-lg transition-transform group-hover:scale-105">
              <Code2
                size={18}
                className="text-[#f5efe8]"
              />
            </div>

            <span className="text-[#2C2420] dark:text-[#EDE6DC] font-bold text-lg">
              Portfolio
            </span>
          </a>

          {/* ================================
              DESKTOP NAVIGATION
          ================================= */}

          <nav className="hidden md:flex items-center gap-8">

            {navLinks.map((link) => {

              const isActive =
                activeSection ===
                link.href.replace("#", "");

              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`text-sm transition-colors relative ${
                    isActive
                      ? "text-[#2C2420] dark:text-[#EDE6DC] font-medium"
                      : "text-[#6B5A4A] dark:text-[#B8A08E] hover:text-[#2C2420] dark:hover:text-[#EDE6DC]"
                  }`}
                >
                  {link.label}

                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#8b7355] rounded-full" />
                  )}
                </a>
              );
            })}

          </nav>

          {/* ================================
              RIGHT SIDE
          ================================= */}

          <div className="hidden md:flex items-center gap-5">

            <a
              href="https://github.com/Jyotimirgale25"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-[#6B5A4A] hover:text-[#2C2420] transition-colors"
            >
              <Github size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/jyoti-mirgale-19a779358/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-[#6B5A4A] hover:text-[#2C2420] transition-colors"
            >
              <Linkedin size={18} />
            </a>

            <a
              href="mailto:jyotimirgale101@gmail.com"
              aria-label="Email"
              className="text-[#6B5A4A] hover:text-[#2C2420] transition-colors"
            >
              <Mail size={18} />
            </a>

            <ThemeToggle />

          </div>

          {/* ================================
              MOBILE MENU BUTTON
          ================================= */}

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-[#2C2420] dark:text-[#EDE6DC] hover:bg-[#D4C5AD]/20 transition-colors"
          >
            <Menu size={22} />
          </button>

        </div>
      </div>

      {/* ================================
          MOBILE MENU
      ================================= */}

      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-50">

          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />

          {/* Drawer */}
          <div className="absolute top-0 right-0 bottom-0 w-72 max-w-[80%] bg-[#FBF8F2] dark:bg-[#24201C] shadow-2xl flex flex-col border-l border-[#D4C5AD] dark:border-[#3D322B]">

            {/* Header */}
            <div className="flex items-center justify-between px-5 py-6 border-b border-[#E8DCC8] dark:border-[#3D322B]">

              <span className="font-bold text-[#2C2420] dark:text-[#EDE6DC] text-lg">
                Menu
              </span>

              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="w-9 h-9 flex items-center justify-center rounded-lg text-[#6B5A4A] hover:bg-[#E8DCC8] transition-colors"
              >
                <X size={20} />
              </button>

            </div>

            {/* Links */}
            <nav className="flex flex-col px-5 py-4 gap-1">

              {navLinks.map((link) => {

                const isActive =
                  activeSection ===
                  link.href.replace("#", "");

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`px-3 py-3 rounded-lg text-base transition-colors ${
                      isActive
                        ? "bg-[#e8ddd0] text-[#2C2420] font-semibold"
                        : "text-[#6B5A4A] hover:bg-[#E8DCC8]"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}

              <a
                href="/Jyoti_Mirgale_Resume.pdf"
                download
                onClick={() => setMobileOpen(false)}
                className="px-3 py-3 rounded-lg text-base bg-[#3d2b1f] text-[#f5efe8] font-semibold text-center hover:bg-[#5c4a3a] transition-all mt-2"
              >
                📄 Resume
              </a>

            </nav>

            {/* Mobile Social */}
            <div className="mt-auto flex items-center gap-5 px-5 py-6 border-t border-[#E8DCC8] dark:border-[#3D322B]">

              <a
                href="https://github.com/Jyotimirgale25"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-[#6B5A4A] hover:text-[#2C2420]"
              >
                <Github size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/jyoti-mirgale-19a779358/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-[#6B5A4A] hover:text-[#2C2420]"
              >
                <Linkedin size={20} />
              </a>

              <a
                href="mailto:jyotimirgale101@gmail.com"
                aria-label="Email"
                className="text-[#6B5A4A] hover:text-[#2C2420]"
              >
                <Mail size={20} />
              </a>

              <ThemeToggle />

            </div>

          </div>
        </div>
      )}
    </header>
  );
}