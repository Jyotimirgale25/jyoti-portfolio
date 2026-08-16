import React from "react";
import { Github, Linkedin, Mail, Code2, FileText } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200/80 bg-white/50 backdrop-blur-sm py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Brand */}
          <div className="flex items-center gap-2">
            <Code2 size={18} className="text-[#6b5bd0]" />
            <span className="text-sm font-semibold text-[#17172d]">
              Jyoti Mirgale
            </span>
            <span className="hidden sm:inline text-xs text-gray-400 ml-1">
              • Full-Stack Developer
            </span>
          </div>

          {/* Social Links + Resume */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Jyotimirgale25"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-400 hover:text-[#17172d] transition-colors duration-300"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/jyoti-mirgale-19a779358/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-[#17172d] transition-colors duration-300"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:jyotimirgale25@gmail.com"
              aria-label="Email"
              className="text-gray-400 hover:text-[#17172d] transition-colors duration-300"
            >
              <Mail size={18} />
            </a>
            <span className="w-px h-5 bg-gray-200" />
            <a
              href="/Jyoti_Mirgale_Resume.pdf"
              download
              className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-[#6b5bd0] transition-colors duration-300"
            >
              <FileText size={14} />
              Resume
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-gray-400">
            © {currentYear} Jyoti Mirgale
          </p>
        </div>

        {/* Divider with tech stack note */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <p className="text-[10px] text-gray-300 text-center">
            Built with React • Tailwind CSS • Spring Boot • PostgreSQL
          </p>
        </div>
      </div>
    </footer>
  );
}