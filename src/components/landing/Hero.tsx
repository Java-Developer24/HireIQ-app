import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";

const FloatingCard = ({
  name, role, side, delay,
}: { name: string; role: string; side: "left" | "right"; delay: string }) => (
  <div
    className={`hidden lg:flex absolute top-32 ${side === "left" ? "left-8" : "right-8"} items-center gap-3 bg-white border border-ink/10 rounded-2xl pl-2 pr-5 py-2 shadow-sm animate-float-slow`}
    style={{ animationDelay: delay }}
  >
    <div className="h-9 w-9 rounded-full bg-forest text-cream flex items-center justify-center text-xs font-semibold">
      {name.split(" ").map(n => n[0]).join("")}
    </div>
    <div>
      <div className="text-xs font-semibold text-ink leading-tight">{name}</div>
      <div className="text-[11px] text-ink-muted">{role}</div>
    </div>
  </div>
);

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-70" />
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[400px] lime-glow pointer-events-none" />

      <FloatingCard name="Maria Angelica" role="Product Designer" side="left" delay="0s" />
      <FloatingCard name="Robert Wilkerson" role="Head of HR" side="right" delay="1.5s" />

      <div className="container relative">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-ink/15 bg-white/60 text-xs text-ink-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-lime animate-pulse-dot" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
            </span>
            Now in early access · Join 120+ companies
          </div>

          <h1 className="mt-8 font-display font-bold text-5xl sm:text-6xl lg:text-[88px] leading-[0.95] text-ink">
            Hiring, on{" "}
            <span className="bg-gradient-to-r from-forest via-forest to-lime bg-clip-text text-transparent italic">
              autopilot.
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-ink-muted max-w-2xl">
            HireIQ screens every resume, runs the video interview, scores every answer,
            and shortlists the best candidates — fully autonomously. You just review the results.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
            <Link
              to="/login"
              className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-forest text-cream font-semibold hover:bg-forest-deep transition"
            >
              Start hiring smarter <ArrowRight className="h-4 w-4" />
            </Link>
            <button className="inline-flex items-center gap-2 h-12 px-6 rounded-full border border-ink/20 text-ink font-medium hover:bg-white transition">
              <Play className="h-3.5 w-3.5 fill-current" /> Watch 2-min demo
            </button>
          </div>

          <p className="mt-4 text-xs text-ink-muted">
            No credit card required · Setup in under 10 minutes
          </p>
        </div>

        {/* Logo strip */}
        <div className="mt-20 border-y border-ink/10 py-6">
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-ink-muted/70 font-display font-semibold text-lg">
            <span>NOX</span>
            <span className="italic">miro</span>
            <span>stripe</span>
            <span>Google</span>
            <span>Adobe</span>
            <span>Spotify</span>
            <span>Notion</span>
          </div>
        </div>
      </div>
    </section>
  );
};