import { CandidateLayout } from "@/components/layout/CandidateLayout";
import {
  Clock,
  ArrowRight,
  AlertTriangle,
  ChevronRight
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const AssessmentMCQ = () => {
  const [selected, setSelected] = useState("");
  const navigate = useNavigate();

  return (
    <CandidateLayout className="bg-[#F5F7FA]" showLogo={false}>
      {/* Top Bar */}
      <header className="h-14 bg-white border-b border-ink/5 px-8 flex items-center justify-between flex-none">
        <div className="flex items-center gap-6">
          <span className="text-sm font-bold text-ink">Skills assessment — Senior Backend Engineer</span>
          <div className="h-4 w-px bg-ink/10" />
          <div className="flex items-center gap-3">
             <span className="text-[10px] font-bold text-ink-muted uppercase tracking-widest">Question 4 of 20</span>
             <div className="w-48 h-1.5 bg-cream rounded-full overflow-hidden">
                <div className="h-full bg-forest w-[20%]" />
             </div>
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm font-bold text-ink-muted">
           <Clock className="h-4 w-4 text-amber-warm" />
           Time remaining: 18:42
        </div>
      </header>

      {/* Warning Banner */}
      <div className="bg-amber-soft/50 border-b border-amber-warm/10 py-2 px-8 flex items-center justify-center gap-2">
        <AlertTriangle className="h-3.5 w-3.5 text-amber-warm" />
        <p className="text-[10px] font-bold text-ink-muted uppercase tracking-widest">Tab switching is monitored during this assessment</p>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="max-w-[680px] w-full bg-white border border-ink/10 rounded-[32px] p-10 shadow-sm space-y-10 animate-in slide-in-from-bottom-4 duration-500">
           <div className="space-y-4">
              <span className="text-[10px] font-bold text-ink-muted uppercase tracking-widest block">Question 4</span>
              <h2 className="text-lg md:text-xl font-medium text-ink leading-relaxed">
                Which of the following indexing strategies would best optimise a PostgreSQL query performing a range scan on a timestamp column with high cardinality?
              </h2>
           </div>

           <RadioGroup value={selected} onValueChange={setSelected} className="space-y-3">
             {[
               { id: "A", text: "B-Tree index on the timestamp column" },
               { id: "B", text: "Hash index on the timestamp column" },
               { id: "C", text: "GIN index with trigram extension" },
               { id: "D", text: "Partial index with a WHERE clause filter" }
             ].map((opt) => (
               <label
                 key={opt.id}
                 className={`flex items-center gap-4 p-5 rounded-2xl border transition-all cursor-pointer group ${
                   selected === opt.id
                    ? "bg-forest/[0.03] border-forest shadow-sm"
                    : "bg-white border-ink/10 hover:border-ink/20"
                 }`}
               >
                 <RadioGroupItem value={opt.id} className="sr-only" />
                 <div className={`h-5 w-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                   selected === opt.id ? "border-forest bg-forest" : "border-ink/20 group-hover:border-ink/30"
                 }`}>
                   {selected === opt.id && <div className="h-2 w-2 rounded-full bg-white" />}
                 </div>
                 <span className={`text-sm font-medium ${selected === opt.id ? "text-forest" : "text-ink"}`}>
                   {opt.id}. {opt.text}
                 </span>
               </label>
             ))}
           </RadioGroup>

           <div className="space-y-4 pt-4">
             <button
               onClick={() => navigate("/assessment-coding")}
               className="w-full h-14 bg-[#0D1829] text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-forest-deep transition shadow-xl shadow-[#0D1829]/10"
             >
               Next question <ArrowRight className="h-4 w-4" />
             </button>
             <p className="text-center text-[10px] text-ink-muted italic font-medium">
               You cannot return to previous questions.
             </p>
           </div>
        </div>
      </div>
    </CandidateLayout>
  );
};

export default AssessmentMCQ;
