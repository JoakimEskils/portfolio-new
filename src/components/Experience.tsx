import { ArrowUpRight } from "lucide-react";

const experiences = [
  {
    period: "Oct 2022 — Present",
    title: "Software Engineer",
    company: "Bricco AB",
    description:
      "Architect and build backend services and integrations for financial and enterprise systems. Lead technical decisions across data pipelines, API design, and cloud infrastructure. Work closely with cross-functional teams to deliver high-reliability solutions.",
    skills: ["TypeScript", "Node.js", "Python", "Next.js", "PostgreSQL", "AWS", "GCP", "Docker", "GraphQL"],
    link: "https://bricco.se",
  },
  {
    period: "Nov 2021 — Oct 2022",
    title: "Software Engineer",
    company: "Klarna",
    description:
      "Worked on card issuing within Klarna's PCI DSS compliance boundary. Built and maintained business-critical backend services handling card lifecycle management and transaction flows. Operated in a highly regulated environment where correctness, auditability, and security were paramount.",
    skills: ["Scala", "Kafka", "PostgreSQL", "AWS", "Kubernetes", "PCI DSS", "GCP"],
    link: "https://klarna.com",
  },
  {
    period: "Jun 2020 — Sep 2021",
    title: "Software Developer",
    company: "Bricco AB",
    description:
      "Full-stack development across multiple client projects. Designed RESTful APIs, database schemas, and frontend interfaces. Worked with modern JavaScript frameworks alongside server-side Node.js services.",
    skills: ["TypeScript", "React", "Node.js", "Python", "PostgreSQL", "REST APIs"],
    link: "https://bricco.se",
  },
  {
    period: "Apr 2020 — Aug 2021",
    title: "ML Engineer",
    company: "Bazaro",
    description:
      "Developed machine learning pipelines and data processing systems for e-commerce recommendation and analytics. Designed data collection workflows and experimented with model architectures for product classification and demand forecasting.",
    skills: ["Python", "PostgreSQL", "Azure", "Docker"],
    link: null,
  },
  {
    period: "Jun — Aug 2019",
    title: "Software Engineer Intern",
    company: "Saab",
    description:
      "Software development internship working on internal tooling and systems. Gained exposure to safety-critical software development practices and large-scale enterprise codebases.",
    skills: ["Java"],
    link: "https://saab.com",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Work experience"
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
          Experience
        </h2>
      </div>

      <ol className="group/list">
        {experiences.map((exp, i) => (
          <li key={i} className="mb-12">
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              {/* Hover card background */}
              <div
                className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-lg transition-all duration-300 lg:block lg:group-hover:opacity-100"
                style={{
                  backgroundColor: "rgba(100, 255, 218, 0.03)",
                  boxShadow: "inset 0 1px 0 0 rgba(148,163,184,0.07)",
                  opacity: 0,
                }}
              />

              {/* Period */}
              <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide sm:col-span-2 sm:text-right" style={{ color: "#495670" }}>
                {exp.period}
              </header>

              {/* Content */}
              <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug">
                  {exp.link ? (
                    <a
                      href={exp.link}
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
                        {exp.title} ·{" "}
                        <span className="inline-block">
                          {exp.company}
                          <ArrowUpRight className="ml-0.5 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform duration-200 group-hover/link:-translate-y-1 group-hover/link:translate-x-1" />
                        </span>
                      </span>
                    </a>
                  ) : (
                    <span style={{ color: "#ccd6f6" }}>
                      {exp.title} · {exp.company}
                    </span>
                  )}
                </h3>

                <p className="mt-2 text-sm leading-normal" style={{ color: "#8892b0" }}>
                  {exp.description}
                </p>

                <ul className="mt-2 flex flex-wrap gap-2" aria-label="Technologies used">
                  {exp.skills.map((skill) => (
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
      </ol>

      <div className="mt-4">
        <a
          href="https://linkedin.com/in/joakimeskils"
          target="_blank"
          rel="noreferrer noopener"
          className="group/link inline-flex items-center gap-1 font-semibold leading-tight transition-colors duration-200"
          style={{ color: "#ccd6f6" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#64ffda")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#ccd6f6")}
        >
          <span>View Full Résumé</span>
          <ArrowUpRight className="ml-0.5 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform duration-200 group-hover/link:-translate-y-1 group-hover/link:translate-x-1" />
        </a>
      </div>
    </section>
  );
}
