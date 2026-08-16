import React from "react";
import {
  Cloud,
  BadgeCheck,
  ArrowUpRight,
  Sparkles,
  Award,
  Code,
  GraduationCap,
} from "lucide-react";

// Your certifications
const certifications = [
  {
    title: "RPA Developer Virtual Internship",
    issuer: "EduSkills",
    year: "2024",
    category: "Automation",
    description:
      "Completed a virtual internship focused on Robotic Process Automation (RPA) development, learning automation workflows, bot development, and process optimization using RPA tools.",
    icon: Code,
    color: "brown",
  },
  {
    title: "AI-ML Virtual Internship",
    issuer: "EduSkills",
    year: "2025",
    category: "Artificial Intelligence",
    description:
      "Completed a virtual internship in Artificial Intelligence and Machine Learning, covering key concepts like supervised learning, neural networks, data preprocessing, and model evaluation.",
    icon: Cloud,
    color: "gold",
  },
];

const stats = [
  { value: "02", label: "Certifications" },
  { value: "02", label: "Technical Areas" },
  { value: "2024–25", label: "Learning Period" },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-[#f5efe8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur-sm border border-[#d4c5b2]/40 shadow-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-[#8b7355] animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#6b5a4a]">
              Certifications
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-[#3d2b1f] mb-4">
            Credentials that{" "}
            <span className="bg-gradient-to-r from-[#8b7355] to-[#5c4a3a] bg-clip-text text-transparent">
              back my skills
            </span>
          </h2>

          <p className="text-[#6b5a4a] max-w-2xl mx-auto text-lg">
            Certifications and practical learning experiences from EduSkills
            that have strengthened my foundation in automation, AI, and
            machine learning alongside my full-stack development skills.
          </p>
        </div>

        {/* Stats Strip */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="grid grid-cols-3 bg-white/70 backdrop-blur-sm rounded-xl border border-[#d4c5b2]/30 shadow-sm overflow-hidden">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`text-center py-6 ${
                  index !== stats.length - 1 ? "border-r border-[#d4c5b2]/30" : ""
                }`}
              >
                <div className="text-2xl font-bold text-[#3d2b1f]">{stat.value}</div>
                <div className="text-xs text-[#6b5a4a]/60 uppercase tracking-wider mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {certifications.map((cert) => {
            const Icon = cert.icon;
            const colorClasses = {
              brown: "bg-[#e8ddd0] text-[#8b7355] border-[#d4c5b2]",
              gold: "bg-[#f5efe8] text-[#b8956a] border-[#d4c5b2]",
            };

            return (
              <div
                key={cert.title}
                className="group bg-white/70 backdrop-blur-sm rounded-xl border border-[#d4c5b2]/30 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row gap-5 md:items-center">
                  {/* Icon */}
                  <div
                    className={`p-3 rounded-xl border ${colorClasses[cert.color]} w-fit`}
                  >
                    <Icon size={24} />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-1">
                      <span className="flex items-center gap-1 text-xs font-semibold text-[#6b8b6b]">
                        <BadgeCheck size={14} />
                        {cert.year}
                      </span>
                      <span className="text-[#d4c5b2]">•</span>
                      <span className="text-xs font-medium text-[#6b5a4a]/50 uppercase tracking-wider">
                        {cert.category}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-[#3d2b1f]">{cert.title}</h3>
                    <p className="text-sm text-[#6b5a4a]">{cert.issuer}</p>
                    <p className="text-sm text-[#6b5a4a]/60 mt-2">{cert.description}</p>
                  </div>

                  {/* Action */}
                  <div className="flex flex-col items-start md:items-end gap-2">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#e8f0e8] text-[#4a7a4a] rounded-full text-xs font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6b8b6b]" />
                      Verified
                    </span>
                    <span className="flex items-center gap-1 text-xs text-[#6b5a4a]/40">
                      <Award size={14} />
                      Certificate Available
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tags */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-sm border border-[#d4c5b2]/30 rounded-full text-xs font-semibold text-[#6b5a4a] shadow-sm">
            <Code size={14} className="text-[#8b7355]" />
            RPA Automation
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-sm border border-[#d4c5b2]/30 rounded-full text-xs font-semibold text-[#6b5a4a] shadow-sm">
            <Cloud size={14} className="text-[#b8956a]" />
            AI & Machine Learning
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-sm border border-[#d4c5b2]/30 rounded-full text-xs font-semibold text-[#6b5a4a] shadow-sm">
            <Award size={14} className="text-[#b8956a]" />
            EduSkills
          </span>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <div className="flex items-center justify-center gap-4 max-w-xs mx-auto">
            <span className="flex-1 h-px bg-[#d4c5b2]/50" />
            <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#6b5a4a]/40">
              <Sparkles size={14} className="text-[#b8956a]" />
              Always Learning
            </span>
            <span className="flex-1 h-px bg-[#d4c5b2]/50" />
          </div>
          <p className="text-sm text-[#6b5a4a]/40 mt-3">Building knowledge beyond the classroom.</p>
        </div>
      </div>
    </section>
  );
}