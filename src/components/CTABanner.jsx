import React from "react";
import { ArrowRight, Download, Sparkles, Code2 } from "lucide-react";

export default function CTABanner() {
  return (
    <section id="services" className="py-20 bg-[#f5efe8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#3d2b1f] to-[#5c4a3a] shadow-xl">
          
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 -left-20 w-72 h-72 bg-[#d4c5b2] rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 -right-20 w-96 h-96 bg-[#c4a882] rounded-full mix-blend-overlay filter blur-3xl animate-pulse animation-delay-2000"></div>
          </div>

          {/* Decorative dots */}
          <div className="absolute top-4 right-4 opacity-20">
            <div className="grid grid-cols-4 gap-2">
              {[...Array(16)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-[#d4c5b2] rounded-full"></div>
              ))}
            </div>
          </div>

          <div className="relative z-10 px-6 py-16 md:px-12 md:py-20 lg:px-16 lg:py-24 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#d4c5b2] animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#f5efe8]/80">
                Open to opportunities
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#f5efe8] mb-4">
              Let's build something{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4c5b2] to-[#f5efe8]">
                great together.
              </span>
            </h2>

            {/* Description */}
            <p className="max-w-2xl mx-auto text-[#d4c5b2]/80 text-lg leading-relaxed mb-8">
              I'm a Computer Science graduate with hands-on experience in 
              Java, Spring Boot, React.js, and PostgreSQL. I'm open to 
              opportunities where I can build reliable, scalable web 
              applications and contribute across the full stack.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/Jyoti_Mirgale_Resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#f5efe8] text-[#3d2b1f] rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Download size={18} />
                Download Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-[#f5efe8] rounded-xl font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                Let's Connect
                <ArrowRight size={18} />
              </a>
            </div>

            {/* Tech Stack Tags */}
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {["Java", "Spring Boot", "React.js", "PostgreSQL", "Docker", "CI/CD"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sm text-[#d4c5b2]/80 border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Footer message */}
            <div className="mt-8 flex items-center justify-center gap-3 text-[#d4c5b2]/50 text-sm">
              <Sparkles size={16} className="text-[#d4c5b2]" />
              <span>Open for collaboration • Full-stack development</span>
              <Sparkles size={16} className="text-[#d4c5b2]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}