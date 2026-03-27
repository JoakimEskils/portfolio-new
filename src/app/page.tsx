"use client";

import { useState, useEffect } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
];

const SOCIAL_LINKS = [
  {
    href: "https://github.com/JoakimEskils",
    label: "GitHub",
    icon: Github,
    external: true,
  },
  {
    href: "https://linkedin.com/in/joakimeskils",
    label: "LinkedIn",
    icon: Linkedin,
    external: true,
  },
  {
    href: "mailto:joakim@joakimeskils.com",
    label: "Email",
    icon: Mail,
    external: false,
  },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -60% 0px" }
    );

    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="relative min-h-screen"
      style={{ backgroundColor: "#0a192f", color: "#8892b0" }}
    >
      {/* Spotlight gradient that follows mouse */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(29, 78, 216, 0.08), transparent 80%)`,
        }}
      />

      <div
        className="mx-auto min-h-screen max-w-screen-xl px-6 md:px-12 lg:px-24"
        style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
      >
        <div className="lg:flex lg:justify-between lg:gap-4">
          {/* ── Left Sidebar ── */}
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[45%] lg:flex-col lg:justify-between lg:py-24">
            <div>
              {/* Name */}
              <h1
                className="text-4xl font-bold tracking-tight sm:text-5xl"
                style={{ color: "#ccd6f6" }}
              >
                Joakim Eskils
              </h1>

              {/* Title */}
              <h2
                className="mt-3 text-lg font-medium tracking-tight"
                style={{ color: "#ccd6f6" }}
              >
                Software Engineer at Bricco AB
              </h2>

              {/* Tagline */}
              <p className="mt-4 max-w-xs leading-normal" style={{ color: "#8892b0" }}>
                I build scalable, resilient systems and love functional
                programming, distributed architecture, and clean design.
              </p>

              {/* Desktop nav */}
              <nav className="hidden lg:block" aria-label="On-page sections">
                <ul className="mt-16 w-max">
                  {NAV_ITEMS.map(({ id, label }) => (
                    <li key={id}>
                      <button
                        onClick={() => scrollTo(id)}
                        className="group flex items-center py-3 cursor-pointer"
                      >
                        <span
                          className="mr-4 h-px transition-all duration-300"
                          style={{
                            width: activeSection === id ? 64 : 32,
                            backgroundColor:
                              activeSection === id ? "#ccd6f6" : "#233554",
                          }}
                        />
                        <span
                          className="text-xs font-bold uppercase tracking-widest transition-colors duration-300"
                          style={{
                            color:
                              activeSection === id ? "#ccd6f6" : "#8892b0",
                          }}
                        >
                          {label}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Social icons */}
            <ul
              className="ml-1 mt-8 flex items-center gap-5 lg:mt-0"
              aria-label="Social media"
            >
              {SOCIAL_LINKS.map(({ href, label, icon: Icon, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noreferrer noopener" : undefined}
                    aria-label={label}
                    className="block transition-colors duration-200"
                    style={{ color: "#8892b0" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#64ffda")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "#8892b0")
                    }
                  >
                    <Icon className="h-6 w-6" />
                  </a>
                </li>
              ))}
            </ul>
          </header>

          {/* ── Right Content ── */}
          <main className="pt-24 lg:w-[55%] lg:py-24">
            <About />
            <Experience />
            <Projects />

            <footer
              className="max-w-md pb-16 text-sm sm:pb-0"
              style={{ color: "#495670" }}
            >
              <p>
                Designed &amp; built by Joakim Eskils using Next.js &amp; Tailwind CSS.
              </p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}
