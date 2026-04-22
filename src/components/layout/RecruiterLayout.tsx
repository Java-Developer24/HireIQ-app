import { Link, useLocation } from "react-router-dom";
import { LayoutGrid, Briefcase, ClipboardList, Settings, Plus, ChevronDown } from "lucide-react";
import { ReactNode } from "react";

const SidebarItem = ({ Icon, label, path, badge }: { Icon: any; label: string; path: string; badge?: string }) => {
  const location = useLocation();
  const active = location.pathname === path || (path !== "/dashboard" && location.pathname.startsWith(path));

  return (
    <Link
      to={path}
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
    </Link>
  );
};

export const RecruiterLayout = ({ children, title, showNewJobButton = true }: { children: ReactNode; title: string; showNewJobButton?: boolean }) => {
  return (
    <div className="min-h-screen flex bg-cream">
      {/* Sidebar */}
      <aside className="w-60 bg-forest-deep flex flex-col px-4 py-5 gap-1 fixed inset-y-0 left-0 z-50">
        <Link to="/dashboard" className="mb-6 px-2 flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-forest flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-lime/30 rounded-full blur-md" />
            <span className="relative font-display font-bold text-lime text-lg leading-none">H</span>
          </div>
          <span className="font-display font-bold text-[18px] tracking-tight text-cream">HireIQ</span>
        </Link>

        <div className="px-3 mb-1.5 text-[10px] uppercase tracking-wider text-cream/40 font-semibold">Workspace</div>
        <SidebarItem Icon={LayoutGrid} label="Dashboard" path="/dashboard" />
        <SidebarItem Icon={Briefcase} label="Jobs" path="/jobs" />
        <SidebarItem Icon={ClipboardList} label="Review Queue" path="/review" badge="3" />
        <SidebarItem Icon={Settings} label="Settings" path="/settings" />

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
      <div className="flex-1 flex flex-col ml-60">
        {/* Top bar */}
        <header className="h-14 bg-white border-b border-ink/10 flex items-center justify-between px-6 sticky top-0 z-40">
          <div className="text-sm text-ink-muted">
            <span className="text-ink font-semibold">{title}</span>
          </div>
          <div className="flex items-center gap-3">
            {showNewJobButton && (
              <Link to="/jobs/new" className="inline-flex items-center gap-1.5 h-9 px-3.5 rounded-lg bg-forest text-cream text-sm font-semibold hover:bg-forest-deep transition">
                <Plus className="h-4 w-4" /> New Job
              </Link>
            )}
            <button className="inline-flex items-center gap-2 h-9 px-2 rounded-lg hover:bg-cream/60 transition">
              <span className="text-sm font-medium text-ink">Azeem</span>
              <div className="h-7 w-7 rounded-full bg-forest text-cream flex items-center justify-center text-[11px] font-bold">AZ</div>
              <ChevronDown className="h-3.5 w-3.5 text-ink-muted" />
            </button>
          </div>
        </header>

        {/* Body */}
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
};
