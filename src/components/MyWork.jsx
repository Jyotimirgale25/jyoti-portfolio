import React, { useState } from "react";
import {
  ArrowUpRight,
  MessageCircle,
  ShieldCheck,
  X,
  Sparkles,
  Calendar,
  Users,
  Bell,
  CheckCircle,
  Clock,
  MapPin,
  AlertTriangle,
  FileText,
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Schedule Pro",
    subtitle: "Enterprise Schedule Management System",
    tag: "Full-Stack Development",
    category: "Workforce Management",
    desc: "Enterprise-grade employee scheduling system with role-based dashboards for Admins, Managers, and Employees. Features include leave management, shift swapping, project tracking, and real-time notifications.",
    technologies: ["React", "Spring Boot", "PostgreSQL", "JWT", "Docker", "OAuth2"],
    icon: Calendar,
    iconStyle: "blue",
    image: "/schedulepro.png",
    repo: "https://github.com/Jyotimirgale25/schedulepro",
    live: "https://schedulepro-frontend.onrender.com",
    features: [
      "3 Role-Based Dashboards (Admin, Manager, Employee)",
      "Google OAuth2 + JWT Authentication",
      "Leave Management with Approval Workflow",
      "Shift Swap Request System",
      "Project & Task Tracking",
      "Real-time Notifications",
      "Docker Containerization",
      "CI/CD Pipeline with GitHub Actions",
    ],
  },
  {
    number: "02",
    title: "ChatPro",
    subtitle: "Real-time Chat with Microservices",
    tag: "Microservices Architecture",
    category: "Real-time Communication",
    desc: "Full-stack real-time chat application built with JWT Authentication and Microservices Architecture. Currently, the Authentication Module is fully implemented with Eureka Discovery, Config Server, API Gateway, and Auth Service.",
    technologies: ["React", "Spring Boot", "JWT", "Eureka", "WebSockets", "MongoDB"],
    icon: MessageCircle,
    iconStyle: "purple",
    image: "/chatpro.png",
    repo: "https://github.com/Jyotimirgale25/chatpro",
    features: [
      "✅ JWT Authentication (100% Complete)",
      "✅ Eureka Discovery Service",
      "✅ Config Service with Centralized Configuration",
      "✅ API Gateway with Routing",
      "✅ Password Encryption with BCrypt",
      "✅ Global Exception Handling",
      "⬜ WebSocket Chat (In Progress)",
      "⬜ Real-time Messaging (In Progress)",
    ],
  },
  {
    number: "03",
    title: "SAWARI",
    subtitle: "Women-Focused Safety Platform",
    tag: "Full-Stack Development",
    category: "Safety & Mobility",
    desc: "A women-safety-first ride-sharing web application. Features include SOS alerts with triple-tap gesture, ride booking with women-only filter, driver verification, and role-based dashboards for passengers, drivers, and admins.",
    technologies: ["React", "React Router", "Fetch API", "JWT", "PostgreSQL"],
    icon: ShieldCheck,
    iconStyle: "green",
    image: "/sawari.png",
    repo: "https://github.com/Jyotimirgale25/sawari-frontend",
    features: [
      "Passenger: Browse rides, Book, SOS alerts",
      "Driver: Create rides, Manage bookings, Verification",
      "Admin: SOS resolution, User verification",
      "Women-only ride filter",
      "Triple-tap SOS gesture",
      "Role-based access control",
      "Identity verification (Aadhar + ID)",
      "Real-time SOS history tracking",
    ],
  },
];

// ChatWave Preview Component (Keep as fallback for projects without images)
function ChatWavePreview() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-[#667eea] via-[#6b5bd0] to-[#764ba2]">
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
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-[#5f5ce6] text-[10px] font-bold text-white">C</div>
              <div className="h-2 w-14 rounded-full bg-gray-200" />
            </div>
            <div className="space-y-2.5">
              <div className="rounded-lg bg-[#ececff] p-2">
                <div className="flex items-center gap-2">
                  <div className="h-5 w-5 rounded-full bg-[#c8c8ff]" />
                  <div className="space-y-1">
                    <div className="h-1.5 w-12 rounded-full bg-[#7774e9]" />
                    <div className="h-1 w-8 rounded-full bg-gray-200" />
                  </div>
                </div>
              </div>
              <div className="p-2">
                <div className="flex items-center gap-2">
                  <div className="h-5 w-5 rounded-full bg-[#dff5eb]" />
                  <div className="space-y-1">
                    <div className="h-1.5 w-14 rounded-full bg-gray-200" />
                    <div className="h-1 w-9 rounded-full bg-gray-100" />
                  </div>
                </div>
              </div>
              <div className="p-2">
                <div className="flex items-center gap-2">
                  <div className="h-5 w-5 rounded-full bg-[#f1eaff]" />
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
                <div className="rounded-xl rounded-tr-sm bg-[#625de6] px-4 py-3 shadow-sm">
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
        <MessageCircle size={18} strokeWidth={1.8} className="text-[#625de6]" />
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

  return (
    <section
      id="works"
      className="relative overflow-hidden bg-[#f8f8fb] py-20 md:py-24 lg:py-28"
    >
      {/* Subtle ambient background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-180px] top-[30%] h-[420px] w-[420px] rounded-full bg-[#e7e3fa]/35 blur-3xl" />
        <div className="absolute right-[-180px] top-[10%] h-[460px] w-[460px] rounded-full bg-[#e9e7f8]/30 blur-3xl" />
      </div>

      <div className="container-main relative z-10">
        {/* =========================================
            SECTION INTRO
           ========================================= */}
        <div className="mx-auto max-w-4xl text-center">
          {/* Eyebrow */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gray-500">
              Selected Work
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl font-bold leading-[1.08] tracking-[-0.035em] text-[#19192f] sm:text-5xl md:text-6xl">
            Building real-world{" "}
            <span className="text-[#9da5b7]">solutions, one project at a time.</span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-[#60708a] sm:text-base md:text-[17px]">
            From workforce management to women's safety, each project reflects my
            passion for creating meaningful, user-focused experiences across
            web and full-stack development.
          </p>
        </div>

        {/* =========================================
            PROJECT STATS
           ========================================= */}
        <div className="mx-auto mt-12 max-w-3xl border-y border-gray-200/80">
          <div className="grid grid-cols-3">
            {[
              ["03", "Projects"],
              ["03", "Categories"],
              ["12+", "Technologies"],
            ].map(([value, label], index) => (
              <div
                key={label}
                className={`flex min-h-[88px] flex-col items-center justify-center px-3 text-center md:min-h-[100px] ${
                  index !== 2 ? "border-r border-gray-200/80" : ""
                }`}
              >
                <span className="text-2xl font-bold tracking-tight text-[#16162d] md:text-3xl">
                  {value}
                </span>
                <span className="mt-1.5 text-[9px] font-medium uppercase tracking-[0.22em] text-[#8993a9] md:text-[10px]">
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

            return (
              <article
                key={project.title}
                className="
                  group
                  overflow-hidden
                  rounded-[24px]
                  border
                  border-gray-200/80
                  bg-white
                  shadow-[0_8px_30px_rgba(25,25,47,0.04)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_18px_45px_rgba(25,25,47,0.09)]
                "
              >
                {/* =================================
                    PROJECT PREVIEW
                   ================================= */}
                <div className="relative h-[205px] overflow-hidden sm:h-[220px]">
                  {/* Project number */}
                  <div className="absolute left-4 top-4 z-30 inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/95 px-3.5 py-2 shadow-sm backdrop-blur">
                    <span className="text-[9px] font-bold tracking-[0.18em] text-[#1b1b32]">
                      {project.number}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-gray-300" />
                    <span className="text-[9px] font-medium uppercase tracking-[0.16em] text-gray-400">
                      Project
                    </span>
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
                        ${
                          project.iconStyle === "green"
                            ? "bg-emerald-50 text-emerald-600"
                            : project.iconStyle === "purple"
                            ? "bg-purple-50 text-purple-600"
                            : "bg-indigo-50 text-indigo-600"
                        }
                      `}
                    >
                      {project.tag}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-gray-300" />
                    <span className="text-[9px] font-medium uppercase tracking-[0.15em] text-[#9aa3b5]">
                      {project.category}
                    </span>
                  </div>

                  {/* Title + Icon */}
                  <div className="flex items-start justify-between gap-5">
                    <div className="min-w-0">
                      <h3 className="text-xl font-bold tracking-[-0.02em] text-[#17172d] sm:text-[21px]">
                        {project.title}
                      </h3>
                      <p
                        className={`
                          mt-1
                          text-sm
                          font-medium
                          ${
                            project.iconStyle === "green"
                              ? "text-emerald-600"
                              : project.iconStyle === "purple"
                              ? "text-purple-600"
                              : "text-indigo-600"
                          }
                        `}
                      >
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
                        ${
                          project.iconStyle === "green"
                            ? "border-emerald-100 bg-emerald-50 text-emerald-600"
                            : project.iconStyle === "purple"
                            ? "border-purple-100 bg-purple-50 text-purple-600"
                            : "border-indigo-100 bg-indigo-50 text-indigo-600"
                        }
                      `}
                    >
                      <Icon size={18} strokeWidth={1.8} />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-4 max-w-[600px] text-sm leading-6 text-[#66758d]">
                    {project.desc}
                  </p>

                  {/* Features List (NEW) */}
                  <div className="mt-4 space-y-1">
                    {project.features.slice(0, 4).map((feature, index) => (
                      <p key={index} className="text-xs text-[#66758d] flex items-start gap-1.5">
                        <span className="text-emerald-500 mt-0.5">•</span>
                        {feature}
                      </p>
                    ))}
                    {project.features.length > 4 && (
                      <p className="text-xs text-[#94a0b4] italic">
                        +{project.features.length - 4} more features
                      </p>
                    )}
                  </div>

                  {/* Technology pills */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="
                          rounded-full
                          border
                          border-gray-200
                          bg-[#fafafd]
                          px-2.5
                          py-1
                          text-[9px]
                          font-medium
                          text-[#68758b]
                        "
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* =================================
                      CTA FOOTER
                     ================================= */}
                  <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
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
                        text-[#17172d]
                        transition-colors
                        hover:text-indigo-600
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
                          text-[#94a0b4]
                          hover:text-indigo-600
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
            <div className="h-px flex-1 bg-gray-200" />
            <div className="flex items-center gap-2">
              <Sparkles size={13} strokeWidth={1.8} className="text-amber-500" />
              <span className="text-[9px] font-medium uppercase tracking-[0.22em] text-[#8993a9]">
                Building &amp; Learning
              </span>
            </div>
            <div className="h-px flex-1 bg-gray-200" />
          </div>
          <p className="mt-3 text-center text-xs text-[#94a0b4]">
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
          <button
            type="button"
            aria-label="Close dialog"
            className="absolute inset-0 cursor-default bg-[#111122]/45 backdrop-blur-sm"
            onClick={() => setWipProject(null)}
          />
          <div
            className="
              relative
              w-full
              max-w-sm
              rounded-[24px]
              border
              border-gray-200
              bg-white
              p-7
              text-center
              shadow-[0_25px_80px_rgba(20,20,40,0.2)]
              animate-in
              fade-in
              zoom-in-95
              duration-200
            "
          >
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
                text-gray-400
                transition-colors
                hover:bg-gray-100
                hover:text-gray-700
              "
            >
              <X size={17} />
            </button>
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-50 text-amber-500">
              <Sparkles size={25} strokeWidth={1.8} />
            </div>
            <h3 id="wip-title" className="text-xl font-bold tracking-tight text-[#17172d]">
              Work in Progress
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-500">
              The <span className="font-semibold text-gray-700">{wipProject}</span>{" "}
              case study is currently being written. Check back soon!
            </p>
            <button
              type="button"
              onClick={() => setWipProject(null)}
              className="
                mt-6
                w-full
                rounded-xl
                bg-[#19192f]
                py-3
                text-sm
                font-semibold
                text-white
                transition-all
                hover:bg-[#24243f]
                hover:shadow-lg
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