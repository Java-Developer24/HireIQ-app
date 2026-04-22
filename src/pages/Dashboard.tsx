import { Link } from "react-router-dom";
import { LayoutGrid, Briefcase, ClipboardList, Settings, Plus, ChevronDown, AlertTriangle, ArrowRight } from "lucide-react";
import { HireIqLogo } from "@/components/HireIqLogo";

const SidebarItem = ({ Icon, label, active = false, badge }: { Icon: any; label: string; active?: boolean; badge?: string }) => (
  <button
    className={`relative w-full h-10 px-3 rounded-xl flex items-center gap-3 text-sm font-medium transition ${
      active ? "bg-cream/15 text-cream" : "text-cream/60 hover:text-cream hover:bg-cream/5"
    }`}
  >
    <Icon className="h-[18px] w-[18px] flex-none" />
    <span className="flex-1 text-left">{label}</span>
    {badge && (
      <span className="h-5 min-w-5 px-1.5 rounded-full bg-destructive text-[10px] font-bold text-white flex items-center justify-center">
        {badge}
      </span>
    )}
  </button>
);

const Metric = ({ label, value, tone }: { label: string; value: string; tone?: "good" | "bad" }) => (
  <div className="rounded-2xl border border-ink/10 bg-white p-5">
    <div className="text-xs text-ink-muted">{label}</div>
    <div className={`mt-2 font-display font-bold text-3xl ${tone === "good" ? "text-forest" : tone === "bad" ? "text-destructive" : "text-ink"}`}>{value}</div>
  </div>
);

const StatusPill = ({ s }: { s: "Active" | "Paused" }) => (
  <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold ${s === "Active" ? "bg-lime/20 text-forest" : "bg-ink/10 text-ink-muted"}`}>
    <span className={`h-1.5 w-1.5 rounded-full ${s === "Active" ? "bg-lime" : "bg-ink-muted"}`} />
    {s}
  </span>
);

const jobs = [
  { title: "Senior Backend Engineer", applied: 24, video: 18, shortlisted: 3, pending: 2, status: "Active" as const },
  { title: "Product Manager", applied: 31, video: 20, shortlisted: 5, pending: 0, status: "Active" as const },
  { title: "Data Analyst", applied: 12, video: 8, shortlisted: 2, pending: 1, status: "Active" as const },
  { title: "Sales Executive", applied: 19, video: 14, shortlisted: 4, pending: 0, status: "Paused" as const },
];

const feed = [
  { dot: "bg-destructive", text: "Auto-rejected Ahmed S. — score 31 · Senior Backend Engineer", time: "2 min ago" },
  { dot: "bg-blue-500", text: "Sent video invite to Priya M. — score 74", time: "8 min ago" },
  { dot: "bg-lime", text: "Shortlisted Sara K. · Product Manager", time: "1 hr ago" },
  { dot: "bg-destructive", text: "Auto-rejected James T. — score 28", time: "2 hrs ago" },
  { dot: "bg-blue-500", text: "Sent video invite to Mohan R. — score 81", time: "3 hrs ago" },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen flex bg-cream">
      {/* Sidebar */}
      <aside className="w-60 bg-forest-deep flex flex-col px-4 py-5 gap-1">
        <Link to="/" className="mb-6 px-2 flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-forest flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-lime/30 rounded-full blur-md" />
            <span className="relative font-display font-bold text-lime text-lg leading-none">H</span>
          </div>
          <span className="font-display font-bold text-[18px] tracking-tight text-cream">HireIQ</span>
        </Link>

        <div className="px-3 mb-1.5 text-[10px] uppercase tracking-wider text-cream/40 font-semibold">Workspace</div>
        <SidebarItem Icon={LayoutGrid} label="Dashboard" active />
        <SidebarItem Icon={Briefcase} label="Jobs" />
        <SidebarItem Icon={ClipboardList} label="Review Queue" badge="3" />
        <SidebarItem Icon={Settings} label="Settings" />

        <div className="flex-1" />
        <div className="border-t border-cream/10 pt-3 px-2 flex items-center gap-2.5">
          <div className="h-8 w-8 rounded-full bg-lime text-forest flex items-center justify-center text-xs font-bold flex-none">AZ</div>
          <div className="min-w-0 flex-1">
            <div className="text-xs font-semibold text-cream truncate">Azeem</div>
            <div className="text-[10px] text-cream/50 truncate">Acme Corp · Admin</div>
          </div>
          <ChevronDown className="h-3.5 w-3.5 text-cream/40" />
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col">
        {/* Top bar */}
        <header className="h-14 bg-white border-b border-ink/10 flex items-center justify-between px-6">
          <div className="text-sm text-ink-muted">
            <span className="text-ink font-semibold">Dashboard</span>
          </div>
          <div className="flex items-center gap-3">
            <button className="inline-flex items-center gap-1.5 h-9 px-3.5 rounded-lg bg-forest text-cream text-sm font-semibold hover:bg-forest-deep transition">
              <Plus className="h-4 w-4" /> New Job
            </button>
            <button className="inline-flex items-center gap-2 h-9 px-2 rounded-lg hover:bg-cream/60 transition">
              <span className="text-sm font-medium text-ink">Azeem</span>
              <div className="h-7 w-7 rounded-full bg-forest text-cream flex items-center justify-center text-[11px] font-bold">AZ</div>
              <ChevronDown className="h-3.5 w-3.5 text-ink-muted" />
            </button>
          </div>
        </header>

        {/* Body */}
        <main className="p-8 space-y-6 overflow-auto">
          <div>
            <h1 className="font-display font-bold text-2xl text-ink">Good morning, Azeem</h1>
            <p className="text-sm text-ink-muted mt-1">Here's what the AI has been doing across your active jobs.</p>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <Metric label="Active jobs" value="6" />
            <Metric label="Applications this week" value="48" />
            <Metric label="AI auto-rejected today" value="12" tone="bad" />
            <Metric label="Shortlisted" value="9" tone="good" />
          </div>

          {/* Two column */}
          <div className="grid lg:grid-cols-5 gap-5">
            {/* Jobs table */}
            <div className="lg:col-span-3 rounded-2xl bg-white border border-ink/10 overflow-hidden">
              <div className="px-5 py-4 border-b border-ink/10 flex items-center justify-between">
                <h3 className="font-display font-bold text-base text-ink">Active jobs</h3>
                <button className="text-xs text-forest font-semibold hover:underline">View all</button>
              </div>
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-[11px] uppercase tracking-wider text-ink-muted">
                    <th className="px-5 py-3 font-medium">Job title</th>
                    <th className="px-3 py-3 font-medium text-center">Applied</th>
                    <th className="px-3 py-3 font-medium text-center">Video done</th>
                    <th className="px-3 py-3 font-medium text-center">Shortlist</th>
                    <th className="px-3 py-3 font-medium text-center">Pending</th>
                    <th className="px-5 py-3 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {jobs.map((j) => (
                    <tr key={j.title} className="border-t border-ink/5 hover:bg-cream/40 cursor-pointer transition">
                      <td className="px-5 py-4 font-medium text-ink">{j.title}</td>
                      <td className="px-3 py-4 text-center text-ink">{j.applied}</td>
                      <td className="px-3 py-4 text-center text-ink">{j.video}</td>
                      <td className="px-3 py-4 text-center text-ink font-semibold">{j.shortlisted}</td>
                      <td className="px-3 py-4 text-center">
                        {j.pending > 0 ? (
                          <span className="inline-flex items-center justify-center h-6 min-w-6 px-1.5 rounded-full bg-amber-soft text-amber-warm text-[11px] font-bold">{j.pending}</span>
                        ) : (
                          <span className="text-ink-muted">0</span>
                        )}
                      </td>
                      <td className="px-5 py-4"><StatusPill s={j.status} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Activity feed */}
            <div className="lg:col-span-2 rounded-2xl bg-white border border-ink/10 p-5 flex flex-col">
              <h3 className="font-display font-bold text-base text-ink">AI activity</h3>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {["All", "Rejections", "Invites", "Shortlists"].map((p, i) => (
                  <button key={p} className={`px-3 py-1 rounded-full text-[11px] font-medium ${i === 0 ? "bg-forest text-cream" : "bg-cream text-ink-muted hover:text-ink"}`}>{p}</button>
                ))}
              </div>
              <ul className="mt-4 space-y-3 flex-1">
                {feed.map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className={`mt-1.5 h-2 w-2 rounded-full flex-none ${f.dot}`} />
                    <div className="flex-1 min-w-0">
                      <p className="text-[13px] text-ink leading-snug">{f.text}</p>
                      <p className="text-[11px] text-ink-muted mt-0.5">{f.time}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-4 rounded-xl bg-amber-soft border border-amber-warm/30 p-3.5 flex items-start gap-2.5">
                <AlertTriangle className="h-4 w-4 text-amber-warm flex-none mt-0.5" />
                <div className="flex-1">
                  <p className="text-[12px] text-ink font-medium">Review queue has 3 candidates waiting 18h+</p>
                  <button className="mt-1 inline-flex items-center gap-1 text-[12px] font-semibold text-amber-warm hover:underline">
                    Review now <ArrowRight className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;