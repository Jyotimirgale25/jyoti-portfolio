import React from "react";
import {
  Code2,
  Layers3,
  Lightbulb,
  Rocket,
  ArrowRight,
  GraduationCap,
  Award,
  Briefcase,
  Users,
} from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-[#f5efe8]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* Label */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur-sm border border-[#d4c5b2]/40 shadow-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-[#8b7355] animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#6b5a4a]">
              About Me
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-[#3d2b1f] mb-4">
            Building thoughtful digital{" "}
            <span className="bg-gradient-to-r from-[#8b7355] to-[#5c4a3a] bg-clip-text text-transparent">
              experiences
            </span>
          </h2>

          <p className="text-[#6b5a4a] max-w-2xl mx-auto text-lg">
            A Computer Science graduate with hands-on experience in Java, Spring Boot,
            React.js, and PostgreSQL. I build full-stack applications that solve
            real-world problems.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="flex items-center gap-4 p-4 bg-white/70 backdrop-blur-sm rounded-xl shadow-sm border border-[#d4c5b2]/30">
              <div className="p-3 bg-gradient-to-br from-[#8b7355] to-[#5c4a3a] rounded-lg text-[#f5efe8]">
                <Code2 size={24} />
              </div>
              <div>
                <h3 className="font-bold text-[#3d2b1f]">Full-Stack Developer</h3>
                <p className="text-sm text-[#6b5a4a]">Java • Spring Boot • React.js • PostgreSQL</p>
              </div>
            </div>

            <h3 className="text-3xl font-bold text-[#3d2b1f]">
              I turn ideas into{" "}
              <span className="text-[#8b7355]">working products.</span>
            </h3>

            <p className="text-[#6b5a4a] leading-relaxed">
              I'm a Computer Science graduate (CGPA: 8.77) from JSPM University
              with a passion for building full-stack applications. I have hands-on
              experience with Java, Spring Boot, React.js, and PostgreSQL, and I've
              built projects ranging from employee scheduling systems to real-time
              chat applications.
            </p>

            <p className="text-[#6b5a4a] leading-relaxed">
              I enjoy solving real problems through thoughtful design, scalable
              code, and continuous learning — from implementing JWT authentication
              to deploying microservices with Docker and CI/CD pipelines.
            </p>

            {/* Tech Pills */}
            <div className="flex flex-wrap gap-2">
              {["Java", "Spring Boot", "React.js", "PostgreSQL", "Docker", "Git", "Maven"].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white/70 backdrop-blur-sm border border-[#d4c5b2]/30 rounded-full text-sm text-[#6b5a4a] hover:border-[#8b7355] hover:text-[#3d2b1f] transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#8b7355] to-[#5c4a3a] text-[#f5efe8] rounded-xl hover:scale-105 transition-all duration-300 shadow-lg shadow-[#8b7355]/20"
            >
              View My Work
              <ArrowRight size={18} />
            </a>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Code2, title: "Full-Stack", desc: "End-to-end development with Java & React" },
              { icon: Layers3, title: "Clean Architecture", desc: "Maintainable & scalable code" },
              { icon: Lightbulb, title: "Problem Solver", desc: "Turning complex into simple" },
              { icon: Rocket, title: "Always Learning", desc: "Microservices, Docker, CI/CD" },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-[#d4c5b2]/30 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="p-2 bg-[#e8ddd0] rounded-lg w-fit mb-3 group-hover:bg-[#d4c5b2] transition-colors">
                  <item.icon className="text-[#8b7355]" size={22} />
                </div>
                <h4 className="font-bold text-[#3d2b1f] mb-1">{item.title}</h4>
                <p className="text-sm text-[#6b5a4a]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          <div className="text-center p-4 bg-white/70 backdrop-blur-sm rounded-xl shadow-sm border border-[#d4c5b2]/30">
            <div className="text-3xl font-bold bg-gradient-to-r from-[#8b7355] to-[#5c4a3a] bg-clip-text text-transparent">
              3+
            </div>
            <div className="text-sm text-[#6b5a4a]">Projects</div>
          </div>
          <div className="text-center p-4 bg-white/70 backdrop-blur-sm rounded-xl shadow-sm border border-[#d4c5b2]/30">
            <div className="text-3xl font-bold bg-gradient-to-r from-[#8b7355] to-[#5c4a3a] bg-clip-text text-transparent">
              2
            </div>
            <div className="text-sm text-[#6b5a4a]">Internships</div>
          </div>
          <div className="text-center p-4 bg-white/70 backdrop-blur-sm rounded-xl shadow-sm border border-[#d4c5b2]/30">
            <div className="text-3xl font-bold bg-gradient-to-r from-[#8b7355] to-[#5c4a3a] bg-clip-text text-transparent">
              8.77
            </div>
            <div className="text-sm text-[#6b5a4a]">CGPA</div>
          </div>
          <div className="text-center p-4 bg-white/70 backdrop-blur-sm rounded-xl shadow-sm border border-[#d4c5b2]/30">
            <div className="text-3xl font-bold bg-gradient-to-r from-[#8b7355] to-[#5c4a3a] bg-clip-text text-transparent">
              Java
            </div>
            <div className="text-sm text-[#6b5a4a]">Primary Stack</div>
          </div>
        </div>
      </div>
    </section>
  );
}