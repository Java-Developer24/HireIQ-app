import { ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LogOut, MapPin, Clock } from "lucide-react";

export const CandidateLayout = ({
  children,
  showLogo = true,
  companyName = "Data Panther Solutions",
  className = "bg-cream",
  hideHeader = false,
}: {
  children: ReactNode;
  showLogo?: boolean;
  companyName?: string;
  className?: string;
  hideHeader?: boolean;
}) => {
  const navigate = useNavigate();

  return (
    <div className={`min-h-screen flex flex-col ${className}`}>
      {showLogo && (
        <header className="h-14 bg-[#0D1829] flex items-center justify-between px-8 flex-none sticky top-0 z-50">
          <Link to="/" className="flex items-center gap-2.5 group transition-transform hover:scale-[0.98]">
            <div className="h-7 w-10 bg-white rounded-md flex items-center justify-center shadow-sm">
              <div className="h-3.5 w-6 bg-[#0D1829] rounded-sm" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-white text-sm leading-tight">{companyName}</span>
              <span className="text-[10px] text-white/40 font-medium">Hiring Portal</span>
            </div>
          </Link>

          {!hideHeader ? (
            <div className="flex items-center gap-6">
              <div className="hidden md:flex items-center gap-4 text-white/40 text-[10px] font-bold uppercase tracking-widest">
                <div className="flex items-center gap-1.5 border-r border-white/10 pr-4">
                  <MapPin className="h-3 w-3" /> Hyderabad
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="h-3 w-3" /> 20-25 mins
                </div>
              </div>
              <div className="h-7 w-px bg-white/10 hidden md:block" />
              <button
                onClick={() => navigate("/")}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/80 hover:text-white transition-all text-xs font-bold"
              >
                <LogOut className="h-3.5 w-3.5" /> Logout
              </button>
            </div>
          ) : (
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/80 hover:text-white transition-all text-xs font-bold"
            >
              <LogOut className="h-3.5 w-3.5" /> Logout
            </button>
          )}
        </header>
      )}
      <main className="flex-1 flex flex-col">
        {children}
      </main>
    </div>
  );
};
