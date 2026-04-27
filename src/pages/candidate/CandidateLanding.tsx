import { Link } from "react-router-dom";
import { HireIqLogo } from "@/components/HireIqLogo";
import { ArrowRight } from "lucide-react";

export default function CandidateLanding() {
  return (
    <div className="min-h-screen bg-cream flex flex-col font-sans">
      <header className="h-16 border-b border-charcoal/10 flex items-center justify-between px-6 bg-white shrink-0">
        <HireIqLogo />
        <Link to="/candidate/login" className="px-5 py-2 rounded-xl bg-charcoal text-white text-sm font-bold hover:bg-charcoal/90 transition shadow-sm">
          Candidate Login
        </Link>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center text-center px-6 max-w-4xl mx-auto py-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-soft text-amber text-xs font-bold uppercase tracking-wider mb-8">
          <span className="h-2 w-2 rounded-full bg-amber animate-pulse" />
          Careers at HireIQ Partners
        </div>

        <h1 className="text-5xl md:text-7xl font-display font-bold text-charcoal leading-[1.1] mb-6">
          Find your next <br />
          <span className="text-coral italic">dream job</span> with us.
        </h1>

        <p className="text-lg md:text-xl text-charcoal-muted max-w-2xl mb-10 leading-relaxed">
          Join a team of innovators building the future of AI-powered hiring. We're looking for passionate individuals to grow with us.
        </p>

        <Link to="/candidate/login" className="h-14 px-8 rounded-2xl bg-coral text-white text-lg font-bold flex items-center justify-center gap-2 hover:bg-coral-dark transition shadow-lg shadow-coral/20 hover:scale-105 active:scale-95">
          View Open Positions <ArrowRight className="h-5 w-5" />
        </Link>
      </main>
    </div>
  );
}
