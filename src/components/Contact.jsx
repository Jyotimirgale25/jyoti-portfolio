import React, { useState } from "react";
import {
  Send,
  AlertCircle,
  Mail,
  Github,
  Linkedin,
  ArrowUpRight,
  CircleCheck,
  MapPin,
} from "lucide-react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mdenzopw";

// Your contact links
const CONTACT_LINKS = {
  email: "mailto:jyotimirgale101@gmail.com",
  github: "https://github.com/Jyotimirgale25",
  linkedin: "https://www.linkedin.com/in/jyoti-mirgale-19a779358/",
};

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (status !== "idle") setStatus("idle");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === "sending") return;

    setStatus("sending");
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#f5efe8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur-sm border border-[#d4c5b2]/40 shadow-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-[#8b7355] animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#6b5a4a]">
              Get In Touch
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-[#3d2b1f] mb-4">
            Let's talk about{" "}
            <span className="bg-gradient-to-r from-[#8b7355] to-[#5c4a3a] bg-clip-text text-transparent">
              your next project
            </span>
          </h2>

          <p className="text-[#6b5a4a] max-w-2xl mx-auto text-lg">
            Have an opportunity, project, or idea you'd like to discuss?
            I'm a Computer Science graduate with experience in Java, Spring Boot,
            React.js, and PostgreSQL — let's build something great together.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Left - Contact Info */}
          <div className="space-y-6">
            <div className="bg-white/70 backdrop-blur-sm rounded-xl border border-[#d4c5b2]/30 p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#3d2b1f] mb-4">Let's Connect</h3>

              {/* Availability */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#e8f0e8] border border-[#a8c4a8]/50 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#6b8b6b] animate-pulse" />
                <span className="text-sm font-medium text-[#4a7a4a]">
                  Open to opportunities
                </span>
              </div>

              <p className="text-[#6b5a4a] mb-6">
                I'm open to opportunities where I can contribute, collaborate,
                and build reliable, scalable web applications across the full
                stack using Java, Spring Boot, React.js, and PostgreSQL.
              </p>

              {/* Contact Links */}
              <div className="space-y-3">
                <a
                  href={CONTACT_LINKS.email}
                  className="flex items-center gap-3 p-3 rounded-xl bg-[#f5efe8] hover:bg-[#e8ddd0] transition-colors group"
                >
                  <div className="p-2 bg-[#e8ddd0] rounded-lg text-[#8b7355] group-hover:bg-[#d4c5b2] transition-colors">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-[#6b5a4a]/50">Email</p>
                    <p className="text-sm font-medium text-[#3d2b1f]">jyotimirgale101@gmail.com</p>
                  </div>
                  <ArrowUpRight size={16} className="ml-auto text-[#6b5a4a]/40 group-hover:text-[#8b7355]" />
                </a>

                <a
                  href={CONTACT_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-[#f5efe8] hover:bg-[#e8ddd0] transition-colors group"
                >
                  <div className="p-2 bg-[#e8ddd0] rounded-lg text-[#3d2b1f] group-hover:bg-[#d4c5b2] transition-colors">
                    <Github size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-[#6b5a4a]/50">GitHub</p>
                    <p className="text-sm font-medium text-[#3d2b1f]">View my projects</p>
                  </div>
                  <ArrowUpRight size={16} className="ml-auto text-[#6b5a4a]/40 group-hover:text-[#8b7355]" />
                </a>

                <a
                  href={CONTACT_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-[#f5efe8] hover:bg-[#e8ddd0] transition-colors group"
                >
                  <div className="p-2 bg-[#e8ddd0] rounded-lg text-[#8b7355] group-hover:bg-[#d4c5b2] transition-colors">
                    <Linkedin size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-[#6b5a4a]/50">LinkedIn</p>
                    <p className="text-sm font-medium text-[#3d2b1f]">Let's connect</p>
                  </div>
                  <ArrowUpRight size={16} className="ml-auto text-[#6b5a4a]/40 group-hover:text-[#8b7355]" />
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3 text-[#6b5a4a] text-sm">
              <MapPin size={18} className="text-[#8b7355]" />
              <span>Pune, India</span>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-white/70 backdrop-blur-sm rounded-xl border border-[#d4c5b2]/30 p-6 shadow-sm">
            <h3 className="text-xl font-bold text-[#3d2b1f] mb-2">Send a message</h3>
            <p className="text-sm text-[#6b5a4a] mb-6">Tell me a little about what you're working on.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                name="name"
                type="text"
                placeholder="Your name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-[#d4c5b2]/40 bg-white/50 text-[#3d2b1f] placeholder:text-[#6b5a4a]/40 focus:border-[#8b7355] focus:ring-4 focus:ring-[#8b7355]/10 outline-none transition-all"
              />

              <input
                name="email"
                type="email"
                placeholder="Your email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-[#d4c5b2]/40 bg-white/50 text-[#3d2b1f] placeholder:text-[#6b5a4a]/40 focus:border-[#8b7355] focus:ring-4 focus:ring-[#8b7355]/10 outline-none transition-all"
              />

              <textarea
                name="message"
                placeholder="Tell me about your project..."
                rows="4"
                required
                value={form.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-[#d4c5b2]/40 bg-white/50 text-[#3d2b1f] placeholder:text-[#6b5a4a]/40 focus:border-[#8b7355] focus:ring-4 focus:ring-[#8b7355]/10 outline-none transition-all resize-none"
              />

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-3 bg-gradient-to-r from-[#8b7355] to-[#5c4a3a] text-[#f5efe8] rounded-lg font-semibold hover:scale-105 transition-all duration-300 shadow-md shadow-[#8b7355]/20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "sending" ? (
                  <>
                    <span className="inline-block w-4 h-4 border-2 border-[#f5efe8]/30 border-t-[#f5efe8] rounded-full animate-spin mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={16} className="inline ml-2" />
                  </>
                )}
              </button>

              {status === "success" && (
                <div className="flex items-center gap-2 p-3 bg-[#e8f0e8] text-[#4a7a4a] rounded-lg border border-[#a8c4a8]/50">
                  <CircleCheck size={18} className="shrink-0" />
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </div>
              )}

              {status === "error" && (
                <div className="flex items-center gap-2 p-3 bg-[#f5e8e8] text-[#8b4a4a] rounded-lg border border-[#d4b2b2]/50">
                  <AlertCircle size={18} className="shrink-0" />
                  <span>Something went wrong. Please try again or email me directly.</span>
                </div>
              )}

              {status !== "success" && status !== "error" && (
                <p className="text-center text-xs text-[#6b5a4a]/40 pt-2">
                  I usually respond within 1–2 business days.
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Footer Divider */}
        <div className="flex items-center justify-center gap-4 mt-16">
          <span className="h-px w-12 bg-[#d4c5b2]/50" />
          <span className="text-xs font-semibold uppercase tracking-wider text-[#6b5a4a]/40">
            Thanks for stopping by
          </span>
          <span className="h-px w-12 bg-[#d4c5b2]/50" />
        </div>
      </div>
    </section>
  );
}