import { CandidateLayout } from "@/components/layout/CandidateLayout";
import {
  Clock,
  ArrowRight,
  AlertTriangle,
  Play,
  CheckCircle2,
  XCircle,
  RefreshCw,
  Code2,
  Database
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AssessmentCoding = () => {
  const navigate = useNavigate();

  return (
    <CandidateLayout className="bg-[#1e1e2e]" showLogo={false}>
      {/* Top Bar */}
      <header className="h-14 bg-white border-b border-ink/5 px-8 flex items-center justify-between flex-none">
        <div className="flex items-center gap-6">
          <span className="text-sm font-bold text-ink">Coding assessment — Senior Backend Engineer</span>
          <div className="h-4 w-px bg-ink/10" />
          <div className="flex items-center gap-3">
             <span className="text-[10px] font-bold text-ink-muted uppercase tracking-widest">Problem 1 of 2</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm font-bold text-ink-muted">
           <Clock className="h-4 w-4 text-amber-warm" />
           Time remaining: 42:18
        </div>
      </header>

      {/* Warning Banner */}
      <div className="bg-amber-soft/90 border-b border-amber-warm/10 py-1.5 px-8 flex items-center justify-center gap-2 flex-none">
        <AlertTriangle className="h-3 w-3 text-amber-warm" />
        <p className="text-[9px] font-bold text-ink/70 uppercase tracking-widest">Tab switching and copy-paste are monitored during this assessment</p>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Left Panel: Problem description */}
        <div className="w-[42%] bg-white border-r border-ink/10 overflow-y-auto p-8 space-y-8">
           <div className="space-y-4">
              <span className="text-[10px] font-bold text-ink-muted uppercase tracking-widest block">Problem 1</span>
              <h2 className="text-2xl font-display font-bold text-ink flex items-center gap-3">
                <Database className="h-6 w-6 text-forest" />
                Optimise database query
              </h2>
           </div>

           <div className="space-y-6 text-sm text-ink leading-relaxed">
              <p>
                Given a <code className="bg-cream px-1.5 py-0.5 rounded font-mono">users</code> table with 10 million rows, write a SQL query that efficiently retrieves all users who registered in the last 30 days, ordered by registration date descending.
              </p>

              <div className="space-y-3">
                 <h4 className="text-xs font-bold text-ink uppercase tracking-wider">Example</h4>
                 <div className="p-4 bg-cream/30 border border-ink/5 rounded-xl font-mono text-[12px] text-ink-muted">
                    <p className="font-bold text-ink mb-2">Input:</p>
                    <p>users table with columns: id, email, created_at, status...</p>
                 </div>
                 <div className="p-4 bg-cream/30 border border-ink/5 rounded-xl font-mono text-[12px] text-ink-muted">
                    <p className="font-bold text-ink mb-2">Expected Output:</p>
                    <p>Paginated list of users ordered DESC by created_at...</p>
                 </div>
              </div>

              <div className="space-y-3">
                 <h4 className="text-xs font-bold text-ink uppercase tracking-wider">Constraints</h4>
                 <ul className="space-y-2 text-xs font-medium text-ink-muted">
                    <li className="flex items-center gap-2"><div className="h-1 w-1 rounded-full bg-forest" /> Use PostgreSQL syntax</li>
                    <li className="flex items-center gap-2"><div className="h-1 w-1 rounded-full bg-forest" /> Query must use index if available</li>
                    <li className="flex items-center gap-2"><div className="h-1 w-1 rounded-full bg-forest" /> Handle 10M rows efficiently</li>
                 </ul>
              </div>
           </div>
        </div>

        {/* Right Panel: Code Editor */}
        <div className="flex-1 flex flex-col overflow-hidden">
           <div className="h-12 bg-[#1e1e2e] px-4 flex items-center justify-between border-b border-white/5">
              <div className="flex items-center gap-4">
                 <div className="px-3 py-1 bg-white/5 rounded-md text-[11px] font-bold text-white/80">Python</div>
              </div>
              <button className="flex items-center gap-1.5 text-[10px] font-bold text-white/40 hover:text-white transition">
                 <RefreshCw className="h-3 w-3" /> Reset to starter
              </button>
           </div>

           <div className="flex-1 bg-[#1e1e2e] p-6 font-mono text-[13px] leading-relaxed overflow-y-auto custom-scrollbar">
              <div className="flex gap-4">
                 <div className="text-white/20 select-none text-right w-6">
                    {Array.from({ length: 15 }).map((_, i) => (
                      <div key={i}>{i + 1}</div>
                    ))}
                 </div>
                 <div className="text-white/90">
                    <div><span className="text-[#c678dd]">SELECT</span> id, email, created_at</div>
                    <div><span className="text-[#c678dd]">FROM</span> users</div>
                    <div><span className="text-[#c678dd]">WHERE</span> created_at {`>=`} <span className="text-[#d19a66]">NOW</span>() - <span className="text-[#c678dd]">INTERVAL</span> <span className="text-[#98c379]">'30 days'</span></div>
                    <div><span className="text-[#c678dd]">ORDER BY</span> created_at <span className="text-[#c678dd]">DESC</span></div>
                    <div><span className="text-[#c678dd]">LIMIT</span> <span className="text-[#d19a66]">100</span>;</div>
                    <div className="h-4 animate-pulse border-l border-white/40 ml-0.5" />
                 </div>
              </div>
           </div>

           <div className="h-1/3 bg-[#16161e] border-t border-white/5 flex flex-col">
              <div className="p-4 flex items-center justify-between border-b border-white/5">
                 <div className="flex items-center gap-3">
                    <button className="h-9 px-4 bg-[#00CC88] text-white text-xs font-bold rounded-lg hover:bg-[#00CC88]/80 transition">Run code</button>
                    <button
                      onClick={() => navigate("/submission-done")}
                      className="h-9 px-4 bg-[#2D5BFF] text-white text-xs font-bold rounded-lg hover:bg-[#2D5BFF]/80 transition"
                    >
                      Submit solution
                    </button>
                 </div>
                 <div className="text-[11px] font-mono font-bold text-white/40">⏱ 42:18</div>
              </div>
              <div className="flex-1 p-5 overflow-y-auto font-mono text-[12px] space-y-2.5">
                 <p className="text-white/40 uppercase tracking-widest text-[10px] font-bold mb-3">Test results</p>
                 <div className="flex items-center gap-2 text-[#00CC88]">
                    <CheckCircle2 className="h-3.5 w-3.5" /> Test 1 passed
                 </div>
                 <div className="flex items-center gap-2 text-[#00CC88]">
                    <CheckCircle2 className="h-3.5 w-3.5" /> Test 2 passed
                 </div>
                 <div className="flex items-center gap-2 text-[#FF4D4D]">
                    <XCircle className="h-3.5 w-3.5" /> Test 3 failed — Expected 100 rows, got 0 rows
                 </div>
              </div>
           </div>
        </div>
      </div>
    </CandidateLayout>
  );
};

export default AssessmentCoding;
