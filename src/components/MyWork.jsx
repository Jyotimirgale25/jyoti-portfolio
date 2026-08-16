import React, { useState } from "react";
import {
  ArrowUpRight,
  MessageCircle,
  ShieldCheck,
  X,
  Sparkles,
  Calendar,
  Github,
  ExternalLink,
} from "lucide-react";

const projects = [
  {
    
    title: "Schedule Pro",
    subtitle: "Enterprise Schedule Management System",
    tag: "Full-Stack",
    category: "Workforce Management",
    desc: "Enterprise-grade employee scheduling system with role-based dashboards for Admins, Managers, and Employees. Features include leave management, shift swapping, project tracking, and real-time notifications.",
    technologies: ["React", "Spring Boot", "PostgreSQL", "JWT", "Docker", "OAuth2"],
    icon: Calendar,
    iconStyle: "brown",
    image: "/screenshot/schedulepro.png",
    repo: "https://github.com/Jyotimirgale25/schedulepro",
    live: "https://schedulepro-frontend.onrender.com",
  },
  {
    
    title: "ChatPro",
    subtitle: "Real-time Chat with Microservices",
    tag: "Microservices",
    category: "Real-time Communication",
    desc: "Full-stack real-time chat application built with JWT Authentication and Microservices Architecture. Currently, the Authentication Module is fully implemented with Eureka Discovery, Config Server, API Gateway, and Auth Service.",
    technologies: ["React", "Spring Boot", "JWT", "Eureka", "WebSockets", "Redis"],
    icon: MessageCircle,
    iconStyle: "gold",
    image: "/screenshot/Login.png",
    repo: "https://github.com/Jyotimirgale25/chatpro",
  },
  {
    
    title: "SAWARI",
    subtitle: "Women-Focused Safety Platform",
    tag: "Full-Stack",
    category: "Safety & Mobility",
    desc: "A women-safety-first ride-sharing web application. Features include SOS alerts with triple-tap gesture, ride booking with women-only filter, driver verification, and role-based dashboards for passengers, drivers, and admins.",
    technologies: ["React", "React Router", "Fetch API", "JWT", "PostgreSQL"],
    icon: ShieldCheck,
    iconStyle: "beige",
    image: "/screenshot/chatpro.png",
    repo: "https://github.com/Jyotimirgale25/sawari-frontend",
  },
];

function ChatWavePreview() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-amber-600 via-amber-700 to-stone-800">
      <div className="absolute -top-24 -right-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-16 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="absolute left-[7%] right-[7%] top-[16%] bottom-[-5%] overflow-hidden rounded-[18px] border border-white/50 bg-white/95 shadow-2xl">
        <div className="flex h-9 items-center justify-between border-b border-gray-100 bg-white px-4">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-red-300" />
            <span className="h-2 w-2 rounded-full bg-yellow-300" />
            <span className="h-2 w-2 rounded-full bg-green-300" />
          </div>
          <div className="h-1.5 w-24 rounded-full bg-gray-100" />
          <div className="h-5 w-5 rounded-md bg-gray-100" />
        </div>
        <div className="flex h-full">
          <div className="w-[29%] border-r border-gray-100 bg-[#fafafe] p-3">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-amber-600 text-[10px] font-bold text-white">C</div>
              <div className="h-2 w-14 rounded-full bg-gray-200" />
            </div>
            <div className="space-y-2.5">
              <div className="rounded-lg bg-amber-50 p-2">
                <div className="flex items-center gap-2">
                  <div className="h-5 w-5 rounded-full bg-amber-200" />
                  <div className="space-y-1">
                    <div className="h-1.5 w-12 rounded-full bg-amber-300" />
                    <div className="h-1 w-8 rounded-full bg-gray-200" />
                  </div>
                </div>
              </div>
              <div className="p-2">
                <div className="flex items-center gap-2">
                  <div className="h-5 w-5 rounded-full bg-stone-200" />
                  <div className="space-y-1">
                    <div className="h-1.5 w-14 rounded-full bg-gray-200" />
                    <div className="h-1 w-9 rounded-full bg-gray-100" />
                  </div>
                </div>
              </div>
              <div className="p-2">
                <div className="flex items-center gap-2">
                  <div className="h-5 w-5 rounded-full bg-amber-100" />
                  <div className="space-y-1">
                    <div className="h-1.5 w-11 rounded-full bg-gray-200" />
                    <div className="h-1 w-7 rounded-full bg-gray-100" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-white p-4">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <div className="mb-1 h-2 w-20 rounded-full bg-gray-300" />
                <div className="h-1.5 w-10 rounded-full bg-gray-100" />
              </div>
              <div className="h-6 w-6 rounded-full bg-gray-100" />
            </div>
            <div className="space-y-4">
              <div className="flex gap-2">
                <div className="h-6 w-6 shrink-0 rounded-full bg-gray-100" />
                <div className="rounded-xl rounded-tl-sm bg-gray-100 px-4 py-3">
                  <div className="h-1.5 w-28 rounded-full bg-gray-300" />
                  <div className="mt-1.5 h-1.5 w-20 rounded-full bg-gray-200" />
                </div>
              </div>
              <div className="flex justify-end">
                <div className="rounded-xl rounded-tr-sm bg-amber-600 px-4 py-3 shadow-sm">
                  <div className="h-1.5 w-24 rounded-full bg-white/70" />
                  <div className="mt-1.5 h-1.5 w-14 rounded-full bg-white/40" />
                </div>
              </div>
              <div className="flex gap-2">
                <div className="h-6 w-6 shrink-0 rounded-full bg-gray-100" />
                <div className="rounded-xl rounded-tl-sm bg-gray-100 px-4 py-3">
                  <div className="h-1.5 w-20 rounded-full bg-gray-300" />
                  <div className="mt-1.5 h-1.5 w-28 rounded-full bg-gray-200" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-5 left-7 flex h-10 w-10 items-center justify-center rounded-xl border border-white/60 bg-white shadow-lg">
        <MessageCircle size={18} strokeWidth={1.8} className="text-amber-600" />
      </div>
    </div>
  );
}

export default function MyWork() {
  const [wipProject, setWipProject] = useState(null);

  const handleProjectAction = (project) => {
    if (project.repo) {
      window.open(project.repo, "_blank", "noopener,noreferrer");
    } else {
      setWipProject(project.title);
    }
  };

  const colorStyles = {
    brown: {
      bg: "bg-amber-50 dark:bg-amber-900/30",
      text: "text-amber-700 dark:text-amber-400",
      border: "border-amber-200 dark:border-amber-800",
      icon: "bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400",
      hover: "hover:border-amber-300 dark:hover:border-amber-700",
      shadow: "shadow-amber-500/20",
    },
    gold: {
      bg: "bg-yellow-50 dark:bg-yellow-900/30",
      text: "text-yellow-700 dark:text-yellow-400",
      border: "border-yellow-200 dark:border-yellow-800",
      icon: "bg-yellow-100 dark:bg-yellow-900/40 text-yellow-600 dark:text-yellow-400",
      hover: "hover:border-yellow-300 dark:hover:border-yellow-700",
      shadow: "shadow-yellow-500/20",
    },
    beige: {
      bg: "bg-stone-100 dark:bg-stone-800/30",
      text: "text-stone-700 dark:text-stone-400",
      border: "border-stone-200 dark:border-stone-700",
      icon: "bg-stone-100 dark:bg-stone-800/40 text-stone-600 dark:text-stone-400",
      hover: "hover:border-stone-300 dark:hover:border-stone-600",
      shadow: "shadow-stone-500/20",
    },
  };

  return (
    <section
      id="works"
      className="relative overflow-hidden bg-[#F5F0E8] dark:bg-[#1A1816] py-20 md:py-24 lg:py-28 transition-colors duration-300"
    >
      {/* Subtle ambient background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-180px] top-[30%] h-[420px] w-[420px] rounded-full bg-amber-200/20 dark:bg-amber-500/5 blur-3xl" />
        <div className="absolute right-[-180px] top-[10%] h-[460px] w-[460px] rounded-full bg-stone-200/20 dark:bg-stone-500/5 blur-3xl" />
      </div>

      <div className="container-main relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* =========================================
            SECTION INTRO
           ========================================= */}
        <div className="mx-auto max-w-4xl text-center">
          {/* Eyebrow */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D4C5AD] dark:border-[#3D322B] bg-[#FBF8F2] dark:bg-[#24201C] px-4 py-2 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-amber-600" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#6B5A4A] dark:text-[#B8A08E]">
              Selected Work
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl font-bold leading-[1.08] tracking-[-0.035em] text-[#2C2420] dark:text-[#EDE6DC] sm:text-5xl md:text-6xl">
            Selected work that{" "}
            <span className="text-[#8A7A6A] dark:text-[#9A8A7A]">solves real problems.</span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-[#6B5A4A] dark:text-[#B8A08E] sm:text-base md:text-[17px]">
            A collection of projects where I&apos;ve turned ideas into
            practical, user-focused experiences across web, communication,
            safety, and technology.
          </p>
        </div>

        {/* =========================================
            PROJECT STATS
           ========================================= */}
        <div className="mx-auto mt-12 max-w-3xl border-y border-[#D4C5AD] dark:border-[#3D322B]">
          <div className="grid grid-cols-3">
            {[
              ["03", "Projects"],
              ["03", "Categories"],
              ["12+", "Technologies"],
            ].map(([value, label], index) => (
              <div
                key={label}
                className={`flex min-h-[88px] flex-col items-center justify-center px-3 text-center md:min-h-[100px] ${
                  index !== 2 ? "border-r border-[#D4C5AD] dark:border-[#3D322B]" : ""
                }`}
              >
                <span className="text-2xl font-bold tracking-tight text-[#2C2420] dark:text-[#EDE6DC] md:text-3xl">
                  {value}
                </span>

                <span className="mt-1.5 text-[9px] font-medium uppercase tracking-[0.22em] text-[#8A7A6A] dark:text-[#9A8A7A] md:text-[10px]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================
            PROJECT GRID
           ========================================= */}
        <div className="mt-11 grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {projects.map((project) => {
            const Icon = project.icon;
            const colors = colorStyles[project.iconStyle] || colorStyles.brown;

            return (
              <article
                key={project.title}
                className={`
                  group
                  overflow-hidden
                  rounded-[24px]
                  border
                  border-[#D4C5AD] dark:border-[#3D322B]
                  bg-[#FBF8F2] dark:bg-[#24201C]
                  shadow-[0_8px_30px_rgba(44,36,32,0.06)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_18px_45px_rgba(44,36,32,0.12)]
                  ${colors.hover}
                `}
              >
                {/* =================================
                    PROJECT PREVIEW
                   ================================= */}
                <div className="relative h-[205px] overflow-hidden sm:h-[220px]">
                  {/* Project number */}
                  <div className="absolute left-4 top-4 z-30 inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/95 px-3.5 py-2 shadow-sm backdrop-blur">
                   

                   

                    
                  </div>

                  {/* Preview */}
                  {project.image ? (
                    <>
                      <img
                        src={project.image}
                        alt={`${project.title} project preview`}
                        className="
                          h-full
                          w-full
                          object-cover
                          object-center
                          transition-transform
                          duration-700
                          ease-out
                          group-hover:scale-[1.025]
                        "
                      />

                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/[0.04] via-transparent to-white/[0.06]" />
                    </>
                  ) : (
                    <ChatWavePreview />
                  )}
                </div>

                {/* =================================
                    PROJECT CONTENT
                   ================================= */}
                <div className="p-5 sm:p-6">
                  {/* Category row */}
                  <div className="mb-4 flex flex-wrap items-center gap-x-2 gap-y-2">
                    <span
                      className={`
                        inline-flex
                        items-center
                        rounded-full
                        px-3
                        py-1.5
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-[0.16em]
                        ${colors.bg} ${colors.text} border ${colors.border}
                      `}
                    >
                      {project.tag}
                    </span>

                    <span className="h-1 w-1 rounded-full bg-[#D4C5AD] dark:bg-[#3D322B]" />

                    <span className="text-[9px] font-medium uppercase tracking-[0.15em] text-[#8A7A6A] dark:text-[#9A8A7A]">
                      {project.category}
                    </span>
                  </div>

                  {/* Title + Icon */}
                  <div className="flex items-start justify-between gap-5">
                    <div className="min-w-0">
                      <h3 className="text-xl font-bold tracking-[-0.02em] text-[#2C2420] dark:text-[#EDE6DC] sm:text-[21px]">
                        {project.title}
                      </h3>

                      <p className={`mt-1 text-sm font-medium ${colors.text}`}>
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Project icon */}
                    <div
                      className={`
                        hidden
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        border
                        sm:flex
                        ${colors.icon} border ${colors.border}
                      `}
                    >
                      <Icon size={18} strokeWidth={1.8} />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-4 max-w-[600px] text-sm leading-6 text-[#6B5A4A] dark:text-[#B8A08E]">
                    {project.desc}
                  </p>

                  {/* Technology pills */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="
                          rounded-full
                          border
                          border-[#D4C5AD] dark:border-[#3D322B]
                          bg-[#F5F0E8] dark:bg-[#1A1816]
                          px-2.5
                          py-1
                          text-[9px]
                          font-medium
                          text-[#6B5A4A] dark:text-[#B8A08E]
                        "
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* =================================
                      CTA FOOTER
                     ================================= */}
                  <div className="mt-5 flex items-center justify-between border-t border-[#E8DCC8] dark:border-[#3D322B] pt-4">
                    <button
                      type="button"
                      onClick={() => handleProjectAction(project)}
                      className="
                        group/cta
                        inline-flex
                        items-center
                        gap-2
                        text-sm
                        font-semibold
                        text-[#2C2420] dark:text-[#EDE6DC]
                        transition-colors
                        hover:text-amber-600 dark:hover:text-amber-400
                      "
                    >
                      <span>
                        {project.repo ? "View on GitHub" : "View project"}
                      </span>

                      <ArrowUpRight
                        size={15}
                        strokeWidth={1.8}
                        className="
                          transition-transform
                          duration-300
                          group-hover/cta:translate-x-0.5
                          group-hover/cta:-translate-y-0.5
                        "
                      />
                    </button>

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          text-xs
                          text-[#8A7A6A] dark:text-[#9A8A7A]
                          hover:text-amber-600 dark:hover:text-amber-400
                          transition-colors
                        "
                      >
                        Live Demo →
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* =========================================
            SECTION FOOTER
           ========================================= */}
        <div className="mt-12 flex flex-col items-center">
          <div className="flex w-full max-w-[340px] items-center justify-center gap-4">
            <div className="h-px flex-1 bg-[#D4C5AD] dark:bg-[#3D322B]" />

            <div className="flex items-center gap-2">
              <Sparkles
                size={13}
                strokeWidth={1.8}
                className="text-amber-500"
              />

              <span className="text-[9px] font-medium uppercase tracking-[0.22em] text-[#8A7A6A] dark:text-[#9A8A7A]">
                Building &amp; Learning
              </span>
            </div>

            <div className="h-px flex-1 bg-[#D4C5AD] dark:bg-[#3D322B]" />
          </div>

          <p className="mt-3 text-center text-xs text-[#8A7A6A] dark:text-[#9A8A7A]">
            Turning ideas into meaningful digital experiences.
          </p>
        </div>
      </div>

      {/* =========================================
          WORK IN PROGRESS MODAL
         ========================================= */}
      {wipProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="wip-title"
        >
          {/* Backdrop */}
          <button
            type="button"
            aria-label="Close dialog"
            className="absolute inset-0 cursor-default bg-[#111122]/45 backdrop-blur-sm"
            onClick={() => setWipProject(null)}
          />

          {/* Modal */}
          <div
            className="
              relative
              w-full
              max-w-sm
              rounded-[24px]
              border
              border-[#D4C5AD] dark:border-[#3D322B]
              bg-[#FBF8F2] dark:bg-[#24201C]
              p-7
              text-center
              shadow-[0_25px_80px_rgba(20,20,40,0.2)]
              animate-in
              fade-in
              zoom-in-95
              duration-200
            "
          >
            {/* Close */}
            <button
              type="button"
              onClick={() => setWipProject(null)}
              aria-label="Close"
              className="
                absolute
                right-4
                top-4
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                text-[#8A7A6A] dark:text-[#9A8A7A]
                transition-colors
                hover:bg-[#E8DCC8] dark:hover:bg-[#3D322B]
                hover:text-[#2C2420] dark:hover:text-[#EDE6DC]
              "
            >
              <X size={17} />
            </button>

            {/* Icon */}
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-50 dark:bg-amber-900/30 text-amber-500">
              <Sparkles size={25} strokeWidth={1.8} />
            </div>

            <h3
              id="wip-title"
              className="text-xl font-bold tracking-tight text-[#2C2420] dark:text-[#EDE6DC]"
            >
              Work in Progress
            </h3>

            <p className="mt-2 text-sm leading-6 text-[#6B5A4A] dark:text-[#B8A08E]">
              The{" "}
              <span className="font-semibold text-[#2C2420] dark:text-[#EDE6DC]">
                {wipProject}
              </span>{" "}
              case study is currently being written. Check back soon!
            </p>

            <button
              type="button"
              onClick={() => setWipProject(null)}
              className="
                mt-6
                w-full
                rounded-xl
                bg-gradient-to-r from-amber-600 to-amber-800
                py-3
                text-sm
                font-semibold
                text-white
                transition-all
                hover:shadow-lg
                hover:scale-105
              "
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </section>
  );
}