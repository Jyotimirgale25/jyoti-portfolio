import React from "react";
import {
  ArrowRight,
  Download,
  Coffee,
  Briefcase,
  Layers,
  Award,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Calendar,
  Sparkles,
  Rocket,
} from "lucide-react";

export default function HeroBeige() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-[#f5efe8] overflow-hidden pt-24 pb-16"
    >
      {/* =====================================================
          BACKGROUND DECORATIONS
      ===================================================== */}

      <div className="absolute top-20 right-10 w-80 h-80 rounded-full bg-[#d4c5b2]/20 blur-3xl pointer-events-none" />

      <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-[#c4a882]/10 blur-3xl pointer-events-none" />

      {/* Code decoration */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 w-[30%] opacity-[0.035] hidden lg:block pointer-events-none">
        <div className="font-mono text-[#8b7355] text-xs leading-relaxed">
          <div>const developer = {"{"}</div>
          <div className="ml-4">name: "Jyoti Mirgale",</div>
          <div className="ml-4">role: "Full-Stack Developer",</div>
          <div className="ml-4">
            skills: ["React", "Spring Boot", "PostgreSQL"],
          </div>
          <div className="ml-4">
            passion: "Building clean digital experiences"
          </div>
          <div>{"}"};</div>
          <div className="mt-2">// Available for work</div>
        </div>
      </div>

      {/* Floating square */}
      <div className="absolute right-[10%] top-[16%] w-12 h-12 border-2 border-[#d4c5b2]/30 rounded-lg rotate-12 hidden md:block pointer-events-none" />

      {/* Floating circle */}
      <div className="absolute right-[5%] bottom-[25%] w-9 h-9 border-2 border-[#c4a882]/25 rounded-full hidden md:block pointer-events-none" />

      {/* Small left decoration */}
      <div className="absolute left-[5%] top-[22%] w-6 h-6 border-2 border-[#d4c5b2]/20 rounded-full hidden md:block pointer-events-none" />

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 xl:gap-16 items-center">

          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div className="min-w-0">

            {/* Available badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#e8ddd0] text-[#8b7355] text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-[#8b7355] animate-pulse" />
              Available for work
            </div>

            {/* Heading */}
            <h1 className="mt-6 text-[#3d2b1f] leading-[1.05]">

              <span className="block text-base md:text-lg lg:text-xl font-sans font-normal text-[#8b7355] mb-3">
                Hello, I'm
              </span>

<span className="block text-4xl md:text-[44px] xl:text-[52px] font-serif font-bold">
  Jyoti Mirgale
</span>

            </h1>

            {/* Role */}
            <div className="mt-6 flex items-center gap-3">

              <div className="w-12 h-12 rounded-full bg-[#8b7355]/10 flex items-center justify-center shrink-0">
                <Coffee
                  size={20}
                  className="text-[#8b7355]"
                />
              </div>

              <span className="text-lg md:text-xl font-medium text-[#5c4a3a]">
                Full-Stack Developer
              </span>

            </div>
{/* Description */}
<p className="mt-7 text-base md:text-lg text-[#6b5a4a] leading-relaxed max-w-xl">
  I’m at the beginning of my professional journey, driven by curiosity,
  creativity, and a desire to keep learning. I enjoy taking an idea,
  understanding the challenge behind it, and turning it into something useful.
</p>

<p className="mt-4 text-sm md:text-base text-[#7a6a5a] leading-relaxed max-w-xl">
  Every project is an opportunity to learn something new, solve a different
  problem, and grow one step further as a
  <span className="text-[#5c4a3a] font-medium">
    {" "}developer.
  </span>
</p>

            {/* Quick info */}
            <div className="mt-7 flex flex-wrap gap-3">

              <div className="flex items-center gap-2 text-sm text-[#6b5a4a] bg-white/40 px-3.5 py-2 rounded-full border border-[#d4c5b2]/40">
                <MapPin size={14} className="text-[#8b7355]" />
                India
              </div>

              <div className="flex items-center gap-2 text-sm text-[#6b5a4a] bg-white/40 px-3.5 py-2 rounded-full border border-[#d4c5b2]/40">
                <Calendar size={14} className="text-[#8b7355]" />
                Academic Projects
              </div>

              <div className="flex items-center gap-2 text-sm text-[#6b5a4a] bg-white/40 px-3.5 py-2 rounded-full border border-[#d4c5b2]/40">
                <Rocket size={14} className="text-[#8b7355]" />
                3+ Projects
              </div>

            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href="#works"
                className="group px-7 py-3.5 rounded-xl bg-[#3d2b1f] text-[#f5efe8] text-sm font-medium hover:bg-[#5c4a3a] transition-all hover:-translate-y-1 shadow-lg shadow-[#3d2b1f]/20 flex items-center gap-2"
              >
                View Projects

                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>

              <a
                href="/Jyoti_Mirgale_Resume.pdf"
                download
                className="px-7 py-3.5 rounded-xl border-2 border-[#d4c5b2] text-[#3d2b1f] text-sm font-medium hover:bg-[#d4c5b2]/30 transition-all flex items-center gap-2"
              >
                <Download size={18} />
                Download Resume
              </a>

            </div>

            {/* Social links */}
            <div className="mt-7 flex gap-3">

              <a
                href="https://github.com/Jyotimirgale25"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-11 h-11 rounded-full bg-white/60 border border-[#d4c5b2] flex items-center justify-center text-[#6b5a4a] hover:bg-[#e8ddd0] hover:border-[#8b7355] transition-all"
              >
                <Github size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/jyoti-mirgale-19a779358/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-11 h-11 rounded-full bg-white/60 border border-[#d4c5b2] flex items-center justify-center text-[#6b5a4a] hover:bg-[#e8ddd0] hover:border-[#8b7355] transition-all"
              >
                <Linkedin size={18} />
              </a>

              <a
                href="mailto:jyotimirgale101@gmail.com"
                aria-label="Email"
                className="w-11 h-11 rounded-full bg-white/60 border border-[#d4c5b2] flex items-center justify-center text-[#6b5a4a] hover:bg-[#e8ddd0] hover:border-[#8b7355] transition-all"
              >
                <Mail size={18} />
              </a>

            </div>
          </div>

          {/* =================================================
              RIGHT CONTENT
          ================================================= */}

          <div className="w-full max-w-xl mx-auto lg:ml-auto">

            {/* Decorative background only */}
            <div className="relative">

              <div className="absolute -right-6 -top-8 w-24 h-24 bg-[#e8ddd0]/50 rounded-lg rotate-12 hidden sm:block pointer-events-none" />

              <div className="absolute -left-6 top-12 w-16 h-16 bg-[#d4c5b2]/25 rounded-full hidden sm:block pointer-events-none" />

              {/* ============================================
                  TECH STACK
              ============================================ */}

              <div className="relative z-10 flex flex-wrap gap-2 justify-center lg:justify-start mb-5">

                <span className="px-3.5 py-2 rounded-full bg-white/60 backdrop-blur border border-[#d4c5b2]/40 text-[#5c4a3a] text-xs font-medium flex items-center gap-1.5">
                  <span>⚛️</span>
                  React
                </span>

                <span className="px-3.5 py-2 rounded-full bg-white/60 backdrop-blur border border-[#d4c5b2]/40 text-[#5c4a3a] text-xs font-medium flex items-center gap-1.5">
                  <span>🌱</span>
                  Spring Boot
                </span>

                <span className="px-3.5 py-2 rounded-full bg-white/60 backdrop-blur border border-[#d4c5b2]/40 text-[#5c4a3a] text-xs font-medium flex items-center gap-1.5">
                  <span>🐘</span>
                  PostgreSQL
                </span>

                <span className="px-3.5 py-2 rounded-full bg-white/60 backdrop-blur border border-[#d4c5b2]/40 text-[#5c4a3a] text-xs font-medium flex items-center gap-1.5">
                  <span>🐳</span>
                  Docker
                </span>

              </div>

              {/* ============================================
                  STATS CARDS
              ============================================ */}

              <div className="relative z-10 grid grid-cols-2 gap-4">

                {/* Projects */}
                <div className="p-4 rounded-2xl bg-white/65 backdrop-blur border border-[#d4c5b2]/50 hover:shadow-lg transition-all hover:-translate-y-1 group">

                  <div className="flex items-start justify-between">

                    <div>
                      <div className="text-3xl md:text-4xl font-serif font-bold text-[#3d2b1f]">
                        3+
                      </div>

                      <div className="text-[#8b7355] text-sm mt-1">
                        Projects Built
                      </div>
                    </div>

                    <Briefcase
                      size={18}
                      className="text-[#c4a882] group-hover:text-[#8b7355] transition-colors"
                    />

                  </div>

                  <div className="mt-3 w-full h-1 bg-[#e8ddd0] rounded-full overflow-hidden">
                    <div className="w-3/4 h-full bg-[#b99a72] rounded-full" />
                  </div>

                </div>

                {/* Tech Stack */}
                <div className="p-4 rounded-2xl bg-white/65 backdrop-blur border border-[#d4c5b2]/50 hover:shadow-lg transition-all hover:-translate-y-1 group">

                  <div className="flex items-start justify-between">

                    <div>
                      <div className="text-3xl md:text-4xl font-serif font-bold text-[#3d2b1f]">
                        15+
                      </div>

                      <div className="text-[#8b7355] text-sm mt-1">
                        Tech Stack
                      </div>
                    </div>

                    <Layers
                      size={18}
                      className="text-[#c4a882] group-hover:text-[#8b7355] transition-colors"
                    />

                  </div>

                  <div className="mt-3 w-full h-1 bg-[#e8ddd0] rounded-full overflow-hidden">
                    <div className="w-3/4 h-full bg-[#b99a72] rounded-full" />
                  </div>

                </div>

                {/* Repositories */}
                <div className="p-4 rounded-2xl bg-white/65 backdrop-blur border border-[#d4c5b2]/50 hover:shadow-lg transition-all hover:-translate-y-1 group">

                  <div className="flex items-start justify-between">

                    <div>
                      <div className="text-3xl md:text-4xl font-serif font-bold text-[#3d2b1f]">
                        4+
                      </div>

                      <div className="text-[#8b7355] text-sm mt-1">
                        Repositories
                      </div>
                    </div>

                    <Award
                      size={18}
                      className="text-[#c4a882] group-hover:text-[#8b7355] transition-colors"
                    />

                  </div>

                  <div className="mt-3 w-full h-1 bg-[#e8ddd0] rounded-full overflow-hidden">
                    <div className="w-3/4 h-full bg-[#b99a72] rounded-full" />
                  </div>

                </div>

                {/* Open for Work */}
                <div className="p-4 rounded-2xl bg-white/65 backdrop-blur border border-[#d4c5b2]/50 hover:shadow-lg transition-all hover:-translate-y-1 group">

                  <div className="flex items-start justify-between">

                    <div>
                      <div className="text-3xl md:text-4xl font-serif font-bold text-[#3d2b1f]">
                        💻
                      </div>

                      <div className="text-[#8b7355] text-sm mt-1">
                        Open for Work
                      </div>
                    </div>

                    <Sparkles
                      size={18}
                      className="text-[#c4a882] group-hover:text-[#8b7355] transition-colors"
                    />

                  </div>

                  <div className="mt-3 w-full h-1 bg-[#e8ddd0] rounded-full overflow-hidden">
                    <div className="w-full h-full bg-[#b99a72] rounded-full" />
                  </div>

                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}