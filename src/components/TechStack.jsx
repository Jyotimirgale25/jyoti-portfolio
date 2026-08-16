import React from "react";
import {
  SiJavascript,
  SiPython,
  SiReact,
  SiHtml5,
  SiCss,
  SiBootstrap,
  SiTailwindcss,
  SiNodedotjs,
  SiSpringboot,
  SiSpring,
  SiHibernate,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiApachemaven,
  SiVite,
  SiRedis,
  SiDocker,
  SiSocketdotio,
  SiGooglecloud,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { Code2, Server, Database, Layout, Wrench, Sparkles } from "lucide-react";

/* =====================================================
   TECHNOLOGY DATA
===================================================== */

const categories = [
  {
    title: "Languages",
    description: "Core programming languages I work with",
    icon: <Code2 size={18} className="text-[#8b7355]" />,
    skills: [
      {
        icon: <FaJava size={25} className="text-[#f89820]" />,
        title: "Java",
        desc: "Primary backend language",
        primary: true,
      },
      {
        icon: <SiJavascript size={24} className="text-[#f7df1e]" />,
        title: "JavaScript",
        desc: "Web & frontend development",
        primary: true,
      },
      {
        icon: <SiPython size={24} className="text-[#3776ab]" />,
        title: "Python",
        desc: "Scripting & automation",
      },
    ],
  },

  {
    title: "Frontend",
    description: "Modern UI frameworks and tools",
    icon: <Layout size={18} className="text-[#8b7355]" />,
    skills: [
      {
        icon: <SiReact size={25} className="text-[#61dafb]" />,
        title: "React.js",
        desc: "UI development",
        primary: true,
      },
      {
        icon: <SiHtml5 size={24} className="text-[#e34f26]" />,
        title: "HTML5",
        desc: "Web markup",
        primary: true,
      },
      {
        icon: <SiCss size={24} className="text-[#1572b6]" />,
        title: "CSS3",
        desc: "Web styling",
        primary: true,
      },
      {
        icon: <SiBootstrap size={24} className="text-[#7952b3]" />,
        title: "Bootstrap",
        desc: "Responsive UI framework",
      },
      {
        icon: <SiTailwindcss size={24} className="text-[#38bdf8]" />,
        title: "Tailwind CSS",
        desc: "Utility-first CSS",
        primary: true,
      },
      {
        icon: <SiVite size={24} className="text-[#646cff]" />,
        title: "Vite",
        desc: "Frontend build tool",
      },
    ],
  },

  {
    title: "Backend",
    description: "APIs, microservices & server-side systems",
    icon: <Server size={18} className="text-[#8b7355]" />,
    skills: [
      {
        icon: <SiSpringboot size={25} className="text-[#6db33f]" />,
        title: "Spring Boot",
        desc: "Backend framework",
        primary: true,
      },
      {
        icon: <SiSpring size={25} className="text-[#6db33f]" />,
        title: "Spring Security",
        desc: "Authentication & JWT",
        primary: true,
      },
      {
        icon: <SiSpring size={25} className="text-[#6db33f]" />,
        title: "Spring Cloud",
        desc: "Microservices (Eureka, Gateway)",
        primary: true,
      },
      {
        icon: <SiHibernate size={24} className="text-[#59666c]" />,
        title: "Hibernate / JPA",
        desc: "Java ORM & persistence",
        primary: true,
      },
      {
        icon: <SiNodedotjs size={24} className="text-[#5fa04e]" />,
        title: "Node.js",
        desc: "JavaScript runtime",
      },
      {
        icon: <SiSocketdotio size={24} className="text-white" />,
        title: "Socket.io",
        desc: "Real-time WebSocket",
      },
    ],
  },

  {
    title: "Databases",
    description: "Data storage & management",
    icon: <Database size={18} className="text-[#8b7355]" />,
    skills: [
      {
        icon: <SiPostgresql size={24} className="text-[#4169e1]" />,
        title: "PostgreSQL",
        desc: "Advanced relational DB",
        primary: true,
      },
      {
        icon: <SiRedis size={24} className="text-[#dc382d]" />,
        title: "Redis",
        desc: "Caching & session storage",
      },
    ],
  },

  {
    title: "DevOps & Deployment",
    description: "Containerization, CI/CD & cloud",
    icon: <Wrench size={18} className="text-[#8b7355]" />,
    skills: [
      {
        icon: <SiDocker size={24} className="text-[#2496ed]" />,
        title: "Docker",
        desc: "Containerization",
        primary: true,
      },
      {
        icon: <SiGit size={24} className="text-[#f05032]" />,
        title: "Git",
        desc: "Version control",
        primary: true,
      },
      {
        icon: <SiGithub size={24} className="text-white" />,
        title: "GitHub",
        desc: "Code collaboration",
        primary: true,
      },
      {
        icon: <SiApachemaven size={24} className="text-[#c71a36]" />,
        title: "Maven",
        desc: "Java build tool",
        primary: true,
      },
      {
        icon: <SiGooglecloud size={24} className="text-[#4285f4]" />,
        title: "Render",
        desc: "Cloud deployment",
      },
      {
        icon: <Code2 size={24} className="text-[#007acc]" />,
        title: "VS Code",
        desc: "Primary code editor",
      },
    ],
  },
];

/* =====================================================
   TECH CARD COMPONENT
===================================================== */

function TechCard({ skill }) {
  return (
    <div
      className="
        group
        relative
        flex
        min-h-[94px]
        items-center
        gap-4
        overflow-hidden
        rounded-xl
        border
        border-[#d4c5b2]/20
        bg-white/40
        backdrop-blur-sm
        px-4
        py-3.5
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#8b7355]/40
        hover:bg-white/60
        hover:shadow-[0_12px_30px_rgba(139,115,85,0.12)]
      "
    >
      {/* Gradient hover glow - Beige/Brown */}
      <div
        className="
          pointer-events-none
          absolute
          -right-8
          -top-8
          h-20
          w-20
          rounded-full
          bg-[#8b7355]/5
          blur-2xl
          transition-all
          duration-300
          group-hover:bg-[#8b7355]/15
        "
      />

      {/* Icon */}
      <div
        className="
          relative
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center
          rounded-xl
          border
          border-[#d4c5b2]/20
          bg-white/50
          transition-all
          duration-300
          group-hover:border-[#8b7355]/30
          group-hover:bg-white/70
        "
      >
        {skill.icon}
      </div>

      {/* Text */}
      <div className="relative min-w-0">
        <div className="flex items-center gap-2">
          <h3
            className="
              truncate
              text-[13px]
              font-semibold
              tracking-[-0.01em]
              text-[#3d2b1f]
            "
          >
            {skill.title}
          </h3>

          {skill.primary && (
            <span
              className="
                hidden
                shrink-0
                items-center
                gap-1
                rounded-full
                border
                border-[#8b7355]/30
                bg-[#8b7355]/10
                px-1.5
                py-0.5
                text-[8px]
                font-medium
                uppercase
                tracking-wider
                text-[#6b5a4a]
                sm:inline-flex
              "
            >
              <span className="h-1 w-1 rounded-full bg-[#8b7355]" />
              Core
            </span>
          )}
        </div>

        <p
          className="
            mt-1
            truncate
            text-[11px]
            leading-relaxed
            text-[#6b5a4a]/60
            transition-colors
            duration-300
            group-hover:text-[#6b5a4a]/80
          "
        >
          {skill.desc}
        </p>
      </div>
    </div>
  );
}

/* =====================================================
   MAIN COMPONENT
===================================================== */

export default function TechStack() {
  const totalSkills = categories.reduce(
    (acc, cat) => acc + cat.skills.length,
    0
  );

  return (
    <section
      id="skills"
      className="
        relative
        overflow-hidden
        bg-[#f5efe8]
        py-16
        sm:py-20
      "
    >
      {/* =================================================
          BACKGROUND GLOW - BEIGE/BROWN
      ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[-120px]
          h-[400px]
          w-[650px]
          -translate-x-1/2
          rounded-full
          bg-[#d4c5b2]/30
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-160px]
          right-[-100px]
          h-[350px]
          w-[350px]
          rounded-full
          bg-[#c4a882]/20
          blur-[110px]
        "
      />

      {/* =================================================
          CONTENT
      ================================================= */}

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="mx-auto mb-12 max-w-3xl text-center">

          {/* Eyebrow */}
          <div
            className="
              mb-4
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[#d4c5b2]/40
              bg-white/50
              backdrop-blur-sm
              px-3.5
              py-1.5
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#8b7355]" />
            <span
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-[#6b5a4a]
              "
            >
              Skills & Technologies
            </span>
          </div>

          {/* Heading */}
          <h2
            className="
              text-3xl
              font-bold
              leading-[1.1]
              tracking-[-0.035em]
              text-[#3d2b1f]
              sm:text-4xl
              lg:text-[42px]
            "
          >
            Tools I use to{" "}
            <span className="bg-gradient-to-r from-[#8b7355] to-[#5c4a3a] bg-clip-text text-transparent">
              build full-stack solutions.
            </span>
          </h2>

          {/* Description */}
          <p
            className="
              mx-auto
              mt-4
              max-w-xl
              text-[13px]
              leading-6
              text-[#6b5a4a]/60
              sm:text-sm
            "
          >
            A complete stack covering everything from React frontends to
            Spring Boot microservices, with PostgreSQL, Docker, and CI/CD.
            <span className="block mt-2 text-[#6b5a4a]/40 text-xs">
              {totalSkills} technologies across {categories.length} categories
            </span>
          </p>
        </div>

        {/* =================================================
            CATEGORIES
        ================================================= */}

        <div className="space-y-8">

          {categories.map((category) => (
            <div key={category.title}>

              {/* Category title */}
              <div className="mb-3.5 flex items-center gap-4">

                <div className="shrink-0 flex items-center gap-2">
                  {category.icon}
                  <div>
                    <h3
                      className="
                        text-[13px]
                        font-semibold
                        tracking-tight
                        text-[#3d2b1f]
                      "
                    >
                      {category.title}
                    </h3>
                    <p
                      className="
                        mt-0.5
                        text-[10px]
                        text-[#6b5a4a]/50
                      "
                    >
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="h-px flex-1 bg-[#d4c5b2]/30" />
                <span className="text-[10px] text-[#6b5a4a]/30 font-mono">
                  {category.skills.length}
                </span>
              </div>

              {/* Cards */}
              <div
                className="
                  grid
                  grid-cols-1
                  gap-2.5
                  sm:grid-cols-2
                  lg:grid-cols-3
                  xl:grid-cols-4
                "
              >
                {category.skills.map((skill) => (
                  <TechCard
                    key={skill.title}
                    skill={skill}
                  />
                ))}
              </div>

            </div>
          ))}

        </div>

        {/* =================================================
            FOOTER: Tech Summary - BEIGE/BROWN
        ================================================= */}
        <div className="mt-12 pt-6 border-t border-[#d4c5b2]/30">
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#6b5a4a]/40">
            <span className="flex items-center gap-1.5">
              <Sparkles size={12} className="text-[#8b7355]" />
              Built with
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#61dafb]" />
              React
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#6db33f]" />
              Spring Boot
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#4169e1]" />
              PostgreSQL
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2496ed]" />
              Docker
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#f05032]" />
              Git
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}