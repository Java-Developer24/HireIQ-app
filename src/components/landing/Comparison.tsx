import { Check, X } from "lucide-react";

const rows: [string, boolean | string, boolean | string, boolean][] = [
  ["AI scores resume vs JD", "Partial", true, true],
  ["Questions generated from resume", false, false, true],
  ["Sends invites autonomously", false, "Manual", true],
  ["AI voice video interview", false, true, true],
  ["Auto-rejects with personalised email", false, false, true],
  ["Plain-English AI recommendation", false, "Score only", true],
  ["Human required per candidate", "Always", "Often", false],
];

const cell = (v: boolean | string) => {
  if (v === true) return <Check className="h-4 w-4 text-lime mx-auto" strokeWidth={3} />;
  if (v === false) return <X className="h-4 w-4 text-ink-muted/50 mx-auto" />;
  return <span className="text-xs text-ink-muted">{v}</span>;
};

export const Comparison = () => {
  return (
    <section className="py-24 bg-cream">
      <div className="container max-w-[900px]">
        <div className="text-center mb-10">
          <div className="text-xs font-medium text-ink-muted uppercase tracking-wider">// Comparison //</div>
          <h2 className="mt-2 font-display font-bold text-4xl text-ink">
            How HireIQ stacks up.
          </h2>
        </div>

        <div className="rounded-3xl border border-ink/10 bg-white overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-ink/10">
                <th className="text-left p-4 font-medium text-ink-muted">Feature</th>
                <th className="p-4 font-medium text-ink-muted">Traditional ATS</th>
                <th className="p-4 font-medium text-ink-muted">HireVue / Jobma</th>
                <th className="p-4 font-display font-bold text-forest border-l-2 border-lime bg-lime/10">HireIQ</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className="border-b border-ink/5 last:border-0">
                  <td className="p-4 text-ink">{r[0]}</td>
                  <td className="p-4 text-center">{cell(r[1])}</td>
                  <td className="p-4 text-center">{cell(r[2])}</td>
                  <td className="p-4 text-center border-l-2 border-lime bg-lime/5">{cell(r[3])}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};