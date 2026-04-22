import { ReactNode } from "react";
import { Link } from "react-router-dom";

export const CandidateLayout = ({
  children,
  showLogo = true,
  companyName = "Data Panther Solutions",
  className = "bg-cream"
}: {
  children: ReactNode;
  showLogo?: boolean;
  companyName?: string;
  className?: string;
}) => {
  return (
    <div className={`min-h-screen flex flex-col ${className}`}>
      {showLogo && (
        <header className="h-16 bg-[#0D1829] flex items-center px-8 flex-none">
          <Link to="/" className="flex items-center gap-3">
            <div className="h-8 w-12 bg-white/20 rounded flex items-center justify-center">
              <div className="h-5 w-8 bg-white/40 rounded-sm" />
            </div>
            <span className="font-display font-bold text-white text-base">{companyName}</span>
          </Link>
        </header>
      )}
      <main className="flex-1 flex flex-col">
        {children}
      </main>
    </div>
  );
};
