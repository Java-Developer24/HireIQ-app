import { CandidateDashboardLayout } from "@/components/layout/CandidateDashboardLayout";
import { CheckCircle2, Clock, Check } from "lucide-react";
import { useEffect, useState } from "react";

export default function ApplicationTracking() {
  const [stage, setStage] = useState("applied");

  useEffect(() => {
    const saved = localStorage.getItem("candidate_stage");
    if (saved) setStage(saved);
  }, []);

  const stages = [
    { key: "applied", label: "Application Received", date: "Oct 24, 2023" },
    { key: "mcq_done", label: "Skills Assessment", date: stage !== "applied" ? "Oct 25, 2023" : "Pending" },
    { key: "video_done", label: "Video Interview", date: stage === "video_done" || stage === "coding_done" ? "Oct 26, 2023" : "Pending" },
    { key: "coding_done", label: "Machine Coding", date: stage === "coding_done" ? "Oct 27, 2023" : "Pending" },
    { key: "hired", label: "Final Decision", date: "Pending" }
  ];

  const getStatus = (key: string, index: number) => {
    const stageOrder = ["applied", "mcq_done", "video_done", "coding_done", "hired"];
    const currentIndex = stageOrder.indexOf(stage);

    if (index < currentIndex) return "completed";
    if (index === currentIndex) return "current";
    return "upcoming";
  };

  return (
    <CandidateDashboardLayout title="Application Tracking">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-3xl border border-charcoal/10 shadow-sm overflow-hidden">
          <div className="p-8 border-b border-charcoal/5 bg-cream/30">
            <h2 className="text-2xl font-display font-bold text-charcoal">Senior Backend Engineer</h2>
            <p className="text-charcoal-muted mt-1">HireIQ Partner Solutions • Applied on Oct 24, 2023</p>
          </div>

          <div className="p-8">
            <h3 className="text-sm font-bold text-charcoal uppercase tracking-wider mb-8">Current Status</h3>

            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-[1.1rem] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-coral before:via-charcoal/10 before:to-charcoal/10">
              {stages.map((s, i) => {
                const status = getStatus(s.key, i);
                return (
                  <div key={s.key} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className={`flex items-center justify-center w-9 h-9 rounded-full border-4 border-white bg-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 ${status === 'completed' ? 'text-coral' : status === 'current' ? 'text-amber' : 'text-charcoal/20'}`}>
                      {status === 'completed' ? <CheckCircle2 className="h-5 w-5" /> : status === 'current' ? <Clock className="h-5 w-5" /> : <div className="h-2 w-2 rounded-full bg-charcoal/20" />}
                    </div>

                    <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-2xl border border-charcoal/10 bg-white shadow-sm">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className={`text-base font-bold ${status === 'upcoming' ? 'text-charcoal/40' : 'text-charcoal'}`}>{s.label}</h4>
                        {status === 'completed' && <span className="text-[10px] font-bold uppercase tracking-wider text-coral bg-coral/10 px-2 py-0.5 rounded-md">Done</span>}
                        {status === 'current' && <span className="text-[10px] font-bold uppercase tracking-wider text-amber bg-amber-soft px-2 py-0.5 rounded-md">In Progress</span>}
                      </div>
                      <time className={`text-xs font-medium ${status === 'upcoming' ? 'text-charcoal/30' : 'text-charcoal-muted'}`}>{s.date}</time>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </CandidateDashboardLayout>
  );
}
