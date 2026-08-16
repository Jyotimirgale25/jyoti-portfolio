import React from "react";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const educationData = [
  {
    id: 1,
    degree: "B.Sc. Computer Science",
    institution: "JSPM University, Wagholi",
    year: "2022 - 2025",
    score: "CGPA: 8.77/10",
    icon: GraduationCap,
    description:
      "Specialized in full-stack development, Java, and database management systems.",
  },
  {
    id: 2,
    degree: "HSC (12th)",
    institution: "R.R. Shinde Junior College, Hadapsar",
    year: "2020 - 2022",
    score: "Percentage: 60%",
    icon: Calendar,
    description:
      "Completed higher secondary education with a focus on science and mathematics.",
  },
  {
    id: 3,
    degree: "SSC (10th)",
    institution: "Nutan Madhyamik Vidyalaya, Mundhwa",
    year: "2018 - 2020",
    score: "Percentage: 82%",
    icon: MapPin,
    description:
      "Completed secondary education with distinction.",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="relative py-20 bg-[#f5efe8] overflow-hidden"
    >
      {/* ================= BACKGROUND DECORATIONS ================= */}

      <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-[#d4c5b2]/10 blur-3xl" />

      <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full bg-[#c4a882]/10 blur-3xl" />

      <div className="absolute right-[8%] top-[20%] w-12 h-12 border-2 border-[#d4c5b2]/30 rounded-lg rotate-12 hidden md:block" />

      <div className="absolute left-[5%] bottom-[25%] w-8 h-8 border-2 border-[#c4a882]/20 rounded-full hidden md:block" />

      {/* ================= MAIN CONTAINER ================= */}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">

        {/* ================= SECTION HEADER ================= */}

        <div className="text-center mb-16">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#e8ddd0] border border-[#d4c5b2] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#8b7355] animate-pulse" />

            <span className="text-xs font-semibold uppercase tracking-wider text-[#6b5a4a]">
              Education
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#3d2b1f]">
            My{" "}
            <span className="text-[#8b7355]">
              Education
            </span>
          </h2>

          <p className="text-[#6b5a4a] max-w-2xl mx-auto mt-4 text-base md:text-lg">
            My academic journey and qualifications that built my foundation
            in computer science and software development.
          </p>
        </div>

        {/* ================= TIMELINE ================= */}

        <div className="relative max-w-5xl mx-auto">

          {/* Center Timeline Line */}

          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#d4c5b2] -translate-x-1/2 hidden md:block" />

          {educationData.map((item, index) => {
            const Icon = item.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={item.id}
                className="relative mb-12 last:mb-0"
              >

                {/* ================= CENTER ICON ================= */}

                <div className="hidden md:flex absolute left-1/2 top-7 -translate-x-1/2 items-center justify-center w-12 h-12 rounded-full bg-[#3d2b1f] text-[#f5efe8] shadow-lg z-20 border-4 border-[#f5efe8]">
                  <Icon size={20} />
                </div>

                {/* ================= ROW ================= */}

                <div
                  className={`flex flex-col md:flex-row items-center ${
                    isEven
                      ? "md:flex-row"
                      : "md:flex-row-reverse"
                  }`}
                >

                  {/* Spacer */}

                  <div className="hidden md:block w-1/2" />

                  {/* ================= CARD ================= */}

                  <div
                    className={`w-full md:w-1/2 ${
                      isEven
                        ? "md:pr-12"
                        : "md:pl-12"
                    }`}
                  >

                    <div
                      className={`relative p-6 rounded-2xl bg-white/60 backdrop-blur border border-[#d4c5b2]/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${
                        isEven
                          ? "md:mr-4"
                          : "md:ml-4"
                      }`}
                    >

                      {/* Mobile Icon */}

                      <div className="md:hidden absolute -left-3 top-6 w-8 h-8 rounded-full bg-[#3d2b1f] text-[#f5efe8] flex items-center justify-center shadow-md">
                        <Icon size={14} />
                      </div>

                      <div className="ml-5 md:ml-0">

                        {/* ================= CARD HEADER ================= */}

                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">

                          <div>

                            <h3 className="text-xl font-serif font-bold text-[#3d2b1f]">
                              {item.degree}
                            </h3>

                            <p className="mt-1 text-[#8b7355] font-medium">
                              {item.institution}
                            </p>

                          </div>

                          <span className="inline-flex w-fit px-3 py-1 rounded-full bg-[#e8ddd0] border border-[#d4c5b2]/60 text-xs font-medium text-[#6b5a4a]">
                            {item.year}
                          </span>

                        </div>

                        {/* ================= SCORE ================= */}

                        <div className="mt-4">

                          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#f5efe8] border border-[#d4c5b2] text-xs font-semibold text-[#8b7355]">

                            <Award size={13} />

                            {item.score}

                          </span>

                        </div>

                        {/* ================= DESCRIPTION ================= */}

                        <p className="mt-4 text-sm text-[#6b5a4a] leading-relaxed">
                          {item.description}
                        </p>

                      </div>
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ================= MOBILE STATS ================= */}

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 md:hidden">

          {educationData.map((item) => (

            <div
              key={item.id}
              className="text-center p-5 rounded-2xl bg-white/60 backdrop-blur border border-[#d4c5b2]/50 shadow-sm"
            >

              <div className="text-xl font-serif font-bold text-[#3d2b1f]">
                {item.score.split(":")[1]?.trim() || item.score}
              </div>

              <div className="text-xs text-[#8b7355] mt-1">
                {item.degree}
              </div>

            </div>

          ))}

        </div>

        {/* ================= ACADEMIC SUMMARY ================= */}

        <div className="mt-12 p-6 rounded-2xl bg-white/50 backdrop-blur border border-[#d4c5b2]/50 text-center shadow-sm">

          <p className="text-[#6b5a4a] text-sm md:text-base">

            <span className="font-semibold text-[#3d2b1f]">
              Academic Performance:
            </span>

            {" "}
            CGPA: 8.77/10
            {" • "}
            HSC: 60%
            {" • "}
            SSC: 82%

          </p>

        </div>

      </div>
    </section>
  );
}