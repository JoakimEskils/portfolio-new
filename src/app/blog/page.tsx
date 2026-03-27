import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Blog() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6"
      style={{ backgroundColor: "#0a192f", color: "#8892b0" }}
    >
      <div className="max-w-lg text-center">
        <p
          className="mb-4 font-mono text-sm font-semibold tracking-widest uppercase"
          style={{ color: "#64ffda" }}
        >
          Coming Soon
        </p>

        <h1
          className="text-4xl font-bold tracking-tight sm:text-5xl mb-4"
          style={{ color: "#ccd6f6" }}
        >
          Blog
        </h1>

        <p className="text-base leading-relaxed mb-8" style={{ color: "#8892b0" }}>
          I&apos;m working on content about functional programming, distributed
          systems, backend architecture, and experiences building at scale.
          Stay tuned.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="font-semibold transition-colors duration-200"
            style={{ color: "#ccd6f6" }}
          >
            ← Back to Home
          </Link>

          <a
            href="https://github.com/JoakimEskils"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-1 font-semibold transition-colors duration-200"
            style={{ color: "#ccd6f6" }}
          >
            GitHub
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
