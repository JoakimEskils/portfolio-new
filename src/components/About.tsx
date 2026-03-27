export default function About() {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
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
          About
        </h2>
      </div>

      <div className="space-y-4" style={{ color: "#8892b0" }}>
        <p>
          I&apos;m a software engineer based in{" "}
          <span style={{ color: "#ccd6f6" }} className="font-medium">
            Stockholm, Sweden
          </span>
          , with a focus on backend systems, distributed architecture, and
          functional programming. Currently at{" "}
          <a
            href="https://bricco.se"
            target="_blank"
            rel="noreferrer noopener"
            className="font-medium transition-colors duration-200"
            style={{ color: "#ccd6f6" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#64ffda")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#ccd6f6")}
          >
            Bricco AB
          </a>
          , where I architect and build robust backend services for financial
          and enterprise systems.
        </p>

        <p>
          Before that, I spent a year at{" "}
          <a
            href="https://klarna.com"
            target="_blank"
            rel="noreferrer noopener"
            className="font-medium transition-colors duration-200"
            style={{ color: "#ccd6f6" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#64ffda")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#ccd6f6")}
          >
            Klarna
          </a>{" "}
          working on card issuing, building and maintaining business-critical
          systems within the{" "}
          <span style={{ color: "#ccd6f6" }} className="font-medium">
            PCI DSS
          </span>{" "}
          compliance boundary. That experience gave me a deep appreciation for
          the rigour required in regulated financial environments, where
          correctness and security are non-negotiable.
        </p>

        <p>
          My work spans the full stack, from system architecture and backend
          services to frontend interfaces, and I have hands-on experience
          shipping{" "}
          <span style={{ color: "#ccd6f6" }} className="font-medium">
            SaaS products
          </span>{" "}
          end-to-end. I&apos;m deeply interested in{" "}
          <span style={{ color: "#ccd6f6" }} className="font-medium">
            card payments
          </span>
          ,{" "}
          <span style={{ color: "#ccd6f6" }} className="font-medium">
            financial systems
          </span>
          , and the engineering challenges of keeping mission-critical flows
          reliable at scale. I hold a B.Sc. in Computer Science &amp;
          Engineering from{" "}
          <a
            href="https://uu.se"
            target="_blank"
            rel="noreferrer noopener"
            className="font-medium transition-colors duration-200"
            style={{ color: "#ccd6f6" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#64ffda")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#ccd6f6")}
          >
            Uppsala University
          </a>
          .
        </p>

        <p>
          I lean heavily on AI tooling like Claude and Cursor to maximise
          throughput and stay in flow. Pairing strong engineering fundamentals
          with the right AI tools lets me move fast without sacrificing quality.
        </p>
      </div>
    </section>
  );
}
