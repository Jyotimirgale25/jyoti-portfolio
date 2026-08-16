import React from "react";
import { Github, Linkedin, Mail, Code2, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#d4c5b2]/40 bg-[#f5efe8]/80 backdrop-blur-sm py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-[#3d2b1f] rounded-lg">
              <Code2 size={14} className="text-[#f5efe8]" />
            </div>
            <span className="text-sm font-semibold text-[#3d2b1f]">
              Jyoti Mirgale
            </span>
            <span className="hidden sm:inline text-xs text-[#6b5a4a]/60 ml-1">
              • Full-Stack Developer
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Jyotimirgale25"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-[#6b5a4a]/60 hover:text-[#3d2b1f] transition-colors duration-300"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/jyoti-mirgale-19a779358/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-[#6b5a4a]/60 hover:text-[#3d2b1f] transition-colors duration-300"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:jyotimirgale101@gmail.com"
              aria-label="Email"
              className="text-[#6b5a4a]/60 hover:text-[#3d2b1f] transition-colors duration-300"
            >
              <Mail size={18} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-[#6b5a4a]/50">
            © {currentYear} Jyoti Mirgale
          </p>
        </div>

        {/* Divider with tech stack note */}
        <div className="mt-4 pt-4 border-t border-[#d4c5b2]/30">
          <p className="text-[10px] text-[#6b5a4a]/40 text-center flex items-center justify-center gap-1">
            Built with <Heart size={10} className="text-[#b8956a] inline" /> using 
            React • Spring Boot • PostgreSQL
          </p>
        </div>
      </div>
    </footer>
  );
}