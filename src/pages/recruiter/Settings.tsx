import { RecruiterLayout } from "@/components/layout/RecruiterLayout";
import {
  Upload,
  ExternalLink,
  Check,
  Globe,
  Mail,
  Users,
  Sliders,
  Puzzle,
  CreditCard
} from "lucide-react";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("Branding");

  const tabs = [
    { label: "Branding", icon: Globe },
    { label: "Email templates", icon: Mail },
    { label: "Team members", icon: Users },
    { label: "Scoring presets", icon: Sliders },
    { label: "Integrations", icon: Puzzle },
    { label: "Account & billing", icon: CreditCard },
  ];

  return (
    <RecruiterLayout title="Settings" showNewJobButton={false}>
      <div className="p-8 space-y-6 max-w-6xl mx-auto">
        {/* Header */}
        <div>
          <h1 className="font-display font-bold text-2xl text-ink">Settings</h1>
          <p className="text-sm text-ink-muted mt-1">Manage your organisation, branding, team, and integrations.</p>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-ink/10 gap-8 overflow-x-auto no-scrollbar">
          {tabs.map(t => (
            <button
              key={t.label}
              onClick={() => setActiveTab(t.label)}
              className={`pb-4 px-1 text-sm font-bold whitespace-nowrap transition-all relative ${
                activeTab === t.label ? "text-forest" : "text-ink-muted hover:text-ink"
              }`}
            >
              {t.label}
              {activeTab === t.label && (
                <div className="absolute bottom-0 inset-x-0 h-0.5 bg-forest rounded-full" />
              )}
            </button>
          ))}
        </div>

        {activeTab === "Branding" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 animate-in fade-in duration-500">
            {/* Left: Form */}
            <div className="lg:col-span-7 space-y-8">
              <section className="space-y-6">
                <div className="flex items-center gap-2">
                  <h3 className="text-[10px] font-bold text-ink-muted uppercase tracking-widest">Organisation</h3>
                </div>

                <div className="flex items-center gap-6">
                  <div className="h-24 w-24 border-2 border-dashed border-ink/10 rounded-2xl flex flex-col items-center justify-center gap-2 bg-cream/20 shrink-0">
                    <div className="h-8 w-12 bg-forest/10 rounded flex items-center justify-center">
                      <div className="h-4 w-6 bg-forest/20 rounded-sm" />
                    </div>
                    <button className="text-[10px] font-bold text-forest hover:underline">Change logo</button>
                  </div>
                  <div className="flex-1 space-y-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-ink uppercase tracking-tight">Company name</label>
                      <input type="text" defaultValue="Data Panther Solutions" className="w-full h-11 px-4 rounded-xl border border-ink/10 bg-white text-sm focus:outline-none transition" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-ink uppercase tracking-tight">Tagline</label>
                      <input type="text" defaultValue="AI-powered hiring at scale" className="w-full h-11 px-4 rounded-xl border border-ink/10 bg-white text-sm focus:outline-none transition" />
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-ink uppercase tracking-tight">Brand colour</label>
                  <div className="flex items-center gap-3">
                    <div className="h-11 w-11 rounded-xl bg-forest shrink-0 border border-ink/10" />
                    <input type="text" defaultValue="#1a2744" className="w-full h-11 px-4 rounded-xl border border-ink/10 bg-white text-sm font-mono focus:outline-none transition uppercase" />
                  </div>
                </div>
              </section>

              <section className="space-y-6 pt-6 border-t border-ink/5">
                <div className="flex items-center gap-2">
                  <h3 className="text-[10px] font-bold text-ink-muted uppercase tracking-widest">Candidate portal</h3>
                </div>

                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <p className="text-sm font-bold text-ink">Show company tagline</p>
                      <p className="text-xs text-ink-muted">Display your tagline on the application landing page.</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <p className="text-sm font-bold text-ink">Show salary range</p>
                      <p className="text-xs text-ink-muted">Make the salary range visible to candidates.</p>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <p className="text-sm font-bold text-ink">Allow cover note</p>
                      <p className="text-xs text-ink-muted">Let candidates add an optional cover message.</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </section>

              <button className="h-12 px-8 bg-forest text-cream font-bold rounded-xl hover:bg-forest-deep transition shadow-lg shadow-forest/10">
                Save branding
              </button>
            </div>

            {/* Right: Preview */}
            <div className="lg:col-span-5">
              <div className="sticky top-24 space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-[10px] font-bold text-ink-muted uppercase tracking-widest">Preview — how candidates see you</label>
                  <Link to="/apply/demo" target="_blank" className="text-[10px] font-bold text-forest hover:underline flex items-center gap-1">
                    Open in new tab <ExternalLink className="h-2.5 w-2.5" />
                  </Link>
                </div>

                <div className="rounded-[24px] border border-ink/10 bg-[#F5F7FA] p-6 h-[500px] shadow-inner overflow-hidden relative group">
                  <div className="bg-white rounded-xl shadow-2xl h-full flex flex-col overflow-hidden scale-90 group-hover:scale-95 transition duration-500">
                    <div className="h-10 bg-[#0D1829] px-4 flex items-center shrink-0">
                      <div className="h-4 w-6 bg-white/20 rounded flex items-center justify-center">
                        <div className="h-2 w-3 bg-white/40 rounded-[1px]" />
                      </div>
                    </div>
                    <div className="p-6 space-y-4">
                      <div className="space-y-2">
                        <div className="h-6 bg-ink/10 rounded-md w-3/4" />
                        <div className="flex gap-2">
                          <div className="h-4 bg-ink/5 rounded-full w-16" />
                          <div className="h-4 bg-forest/10 rounded-full w-12" />
                        </div>
                      </div>
                      <div className="h-24 bg-cream/30 rounded-xl" />
                      <div className="space-y-3 pt-4">
                        <div className="h-9 bg-cream rounded-lg border border-ink/5" />
                        <div className="h-9 bg-cream rounded-lg border border-ink/5" />
                        <div className="h-20 bg-cream rounded-lg border border-ink/5" />
                        <div className="h-10 bg-forest rounded-lg" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#F5F7FA] via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab !== "Branding" && (
          <div className="py-20 flex flex-col items-center justify-center text-center space-y-4 opacity-40">
            <div className="h-16 w-16 rounded-full bg-cream flex items-center justify-center text-ink-muted">
              {(() => {
                const Icon = tabs.find(t => t.label === activeTab)?.icon || Globe;
                return <Icon className="h-8 w-8" />;
              })()}
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-ink">{activeTab}</h3>
              <p className="text-sm text-ink-muted">This settings panel is coming soon.</p>
            </div>
          </div>
        )}
      </div>
    </RecruiterLayout>
  );
};

export default Settings;
