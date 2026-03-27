import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "PingPad",
    description:
      "API testing and webhook management SaaS. Features real-time request inspection, automated testing workflows, and a clean developer-focused UI. Built with a microservices architecture using gRPC and Kafka for inter-service communication.",
    skills: ["Spring Boot", "React", "Go", "PostgreSQL", "Docker", "gRPC", "Kafka"],
    github: "https://github.com/JoakimEskils/ping-pad",
    link: null,
  },
  {
    title: "Haskell Animation",
    description:
      "Purely functional animations rendered in Haskell. Explores composable graphics primitives and functional reactive programming patterns, demonstrating how complex visual behaviours can emerge from simple, composable pure functions.",
    skills: ["Haskell", "FRP", "Functional Programming"],
    github: "https://github.com/JoakimEskils/haskell-animation",
    link: null,
  },
  {
    title: "Blackjack in Haskell",
    description:
      "A fully functional Blackjack game implemented in pure Haskell. Demonstrates type-driven design, pure functional state management, and the elegance of modelling game logic without mutation.",
    skills: ["Haskell", "Functional Programming", "Type Systems"],
    github: "https://github.com/JoakimEskils/blackjack",
    link: null,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Selected projects"
    >
      {/* Mobile section heading */}
      <div
        className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"
        style={{ backgroundColor: "rgba(10, 25, 47, 0.85)" }}
      >
        <h2
          className="text-sm font-bold uppercase tracking-widest lg:sr-only"
          style={{ color: "#ccd6f6" }}
        >
          Projects
        </h2>
      </div>

      <ul className="group/list">
        {projects.map((project, i) => (
          <li key={i} className="mb-12">
            <div className="group relative grid gap-4 pb-1 transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              {/* Hover card background */}
              <div
                className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-lg transition-all duration-300 lg:block"
                style={{
                  backgroundColor: "rgba(100, 255, 218, 0)",
                  transition: "background-color 0.3s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    "rgba(100, 255, 218, 0.03)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    "rgba(100, 255, 218, 0)";
                }}
              />

              <div className="z-10">
                <h3 className="font-medium leading-snug">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group/link inline-flex items-baseline gap-1 font-medium leading-tight transition-colors duration-200"
                    style={{ color: "#ccd6f6" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#64ffda")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "#ccd6f6")
                    }
                  >
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                    <span>
                      {project.title}
                      <ArrowUpRight className="ml-0.5 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform duration-200 group-hover/link:-translate-y-1 group-hover/link:translate-x-1" />
                    </span>
                  </a>
                </h3>

                <p
                  className="mt-2 text-sm leading-normal"
                  style={{ color: "#8892b0" }}
                >
                  {project.description}
                </p>

                <ul className="mt-2 flex flex-wrap gap-2" aria-label="Technologies used">
                  {project.skills.map((skill) => (
                    <li key={skill}>
                      <div
                        className="flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5"
                        style={{
                          backgroundColor: "rgba(100, 255, 218, 0.08)",
                          color: "#64ffda",
                        }}
                      >
                        {skill}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-4">
        <a
          href="https://github.com/JoakimEskils"
          target="_blank"
          rel="noreferrer noopener"
          className="group/link inline-flex items-center gap-1 font-semibold leading-tight transition-colors duration-200"
          style={{ color: "#ccd6f6" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#64ffda")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#ccd6f6")}
        >
          <span>View GitHub Archive</span>
          <ArrowUpRight className="ml-0.5 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform duration-200 group-hover/link:-translate-y-1 group-hover/link:translate-x-1" />
        </a>
      </div>
    </section>
  );
}
