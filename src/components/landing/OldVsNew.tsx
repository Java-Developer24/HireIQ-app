import { X, Check } from "lucide-react";

const oldWay = [
  "Manual resume reading — 3 days",
  "Phone screens one by one",
  "Inconsistent scoring",
  "Candidates drop off waiting",
  "Gut-feel decisions",
];

const newWay = [
  "80 resumes in 2 minutes",
  "Video interviews 24/7",
  "Every candidate same criteria",
  "Shortlist in hours",
  "Data-backed recommendation",
];

export const OldVsNew = () => {
  return (
    <section className="py-24">
      <div className="container max-w-6xl">
        <div className="text-center mb-12">
          <div className="text-xs font-medium text-ink-muted uppercase tracking-wider">// The shift //</div>
          <h2 className="mt-2 font-display font-bold text-4xl sm:text-5xl text-ink">
            The old way vs <span className="italic text-forest">HireIQ</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Old way */}
          <div className="rounded-3xl border border-ink/10 bg-white p-8">
            <div className="text-sm font-semibold text-ink-muted uppercase tracking-wider mb-6">Old way</div>
            <ul className="space-y-4">
              {oldWay.map((item) => (
                <li key={item} className="flex items-start gap-3 text-ink-muted">
                  <span className="mt-0.5 h-5 w-5 rounded-full bg-ink/10 flex items-center justify-center flex-none">
                    <X className="h-3 w-3" />
                  </span>
                  <span className="text-[15px]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* HireIQ */}
          <div className="rounded-3xl border border-forest/20 bg-forest text-cream p-8 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-60 h-60 lime-glow opacity-40" />
            <div className="relative">
              <div className="text-sm font-semibold text-lime uppercase tracking-wider mb-6">HireIQ</div>
              <ul className="space-y-4">
                {newWay.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 h-5 w-5 rounded-full bg-lime flex items-center justify-center flex-none">
                      <Check className="h-3 w-3 text-forest" strokeWidth={3} />
                    </span>
                    <span className="text-[15px]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Stat bar */}
        <div className="mt-8 rounded-3xl border border-ink/10 bg-white p-8">
          <div className="grid sm:grid-cols-2 gap-6 items-center">
            <div>
              <div className="text-xs uppercase tracking-wider text-ink-muted mb-1">Traditional</div>
              <div className="font-display font-bold text-2xl text-ink mb-2">14 days</div>
              <div className="h-3 w-full bg-ink/10 rounded-full">
                <div className="h-full w-full bg-ink/30 rounded-full" />
              </div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-lime/90 mb-1" style={{color:'hsl(var(--forest))'}}>HireIQ</div>
              <div className="font-display font-bold text-2xl text-forest mb-2">4 hours</div>
              <div className="h-3 w-full bg-ink/10 rounded-full">
                <div className="h-full w-[12%] bg-lime rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};