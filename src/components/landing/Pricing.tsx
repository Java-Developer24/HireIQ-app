import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "Free",
    sub: "forever",
    features: ["2 active jobs", "50 applications/month", "Resume scoring", "Email support"],
    highlight: false,
  },
  {
    name: "Growth",
    price: "₹12,000",
    sub: "/month",
    features: ["Unlimited jobs", "500 applications", "All AI modules", "Coding sandbox", "Priority support"],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    sub: "",
    features: ["Unlimited everything", "ATS integrations", "SSO & SAML", "SLA & dedicated CSM"],
    highlight: false,
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-24">
      <div className="container max-w-6xl">
        <div className="text-center mb-12">
          <div className="text-xs font-medium text-ink-muted uppercase tracking-wider">// Pricing //</div>
          <h2 className="mt-2 font-display font-bold text-4xl sm:text-5xl text-ink">
            Plans that scale with <span className="italic">your hiring.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {plans.map((p) => {
            const isHighlight = p.highlight;
            return (
              <div
                key={p.name}
                className={
                  isHighlight
                    ? "rounded-3xl bg-forest text-cream p-8 border-2 border-lime relative"
                    : "rounded-3xl bg-white border border-ink/10 p-8"
                }
              >
                {isHighlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-lime text-forest text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    Most popular
                  </span>
                )}
                <div className={`text-sm font-semibold ${isHighlight ? "text-lime" : "text-ink-muted"}`}>{p.name}</div>
                <div className="mt-3 flex items-end gap-1">
                  <span className={`font-display font-bold text-4xl ${isHighlight ? "text-cream" : "text-ink"}`}>{p.price}</span>
                  <span className={`pb-1 text-sm ${isHighlight ? "text-cream/60" : "text-ink-muted"}`}>{p.sub}</span>
                </div>
                <Link
                  to="/login"
                  className={
                    isHighlight
                      ? "mt-6 inline-flex w-full items-center justify-center h-11 rounded-full bg-lime text-forest font-semibold hover:opacity-90 transition"
                      : "mt-6 inline-flex w-full items-center justify-center h-11 rounded-full bg-forest text-cream font-semibold hover:bg-forest-deep transition"
                  }
                >
                  {p.name === "Enterprise" ? "Contact sales" : "Sign up now"}
                </Link>
                <ul className="mt-6 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className={`flex items-start gap-2 text-sm ${isHighlight ? "text-cream/85" : "text-ink"}`}>
                      <Check className={`h-4 w-4 flex-none mt-0.5 ${isHighlight ? "text-lime" : "text-forest"}`} strokeWidth={3} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};