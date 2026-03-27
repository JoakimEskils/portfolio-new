import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-6"
      style={{ backgroundColor: "#0a192f" }}
    >
      <div className="text-center">
        <p
          className="mb-2 font-mono text-sm font-semibold tracking-widest uppercase"
          style={{ color: "#64ffda" }}
        >
          404
        </p>
        <h1
          className="text-4xl font-bold tracking-tight sm:text-5xl mb-4"
          style={{ color: "#ccd6f6" }}
        >
          Page Not Found
        </h1>
        <p className="mb-8" style={{ color: "#8892b0" }}>
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="font-semibold transition-colors duration-200"
          style={{ color: "#ccd6f6" }}
        >
          ← Go Home
        </Link>
      </div>
    </div>
  );
}
