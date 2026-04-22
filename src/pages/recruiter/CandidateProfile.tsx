import { RecruiterLayout } from "@/components/layout/RecruiterLayout";
import {
  ChevronRight,
  Mail,
  Phone,
  Download,
  Share2,
  AlertTriangle,
  Sparkles,
  CheckCircle2,
  XCircle,
  Play,
  Clock,
  MessageSquare,
  FileText
} from "lucide-react";
import { Link } from "react-router-dom";
import { Progress } from "@/components/ui/progress";

const ScoreBar = ({ label, value, color = "bg-forest" }: { label: string; value: number; color?: string }) => (
  <div className="space-y-1.5">
    <div className="flex justify-between text-xs font-bold text-ink">
      <span>{label}</span>
      <span>{value}%</span>
    </div>
    <div className="h-2 w-full bg-cream rounded-full overflow-hidden">
      <div className={`h-full ${color} rounded-full transition-all duration-500`} style={{ width: `${value}%` }} />
    </div>
  </div>
);

const CandidateProfile = () => {
  return (
    <RecruiterLayout title="Candidate Profile" showNewJobButton={false}>
      <div className="p-8 space-y-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-semibold text-ink-muted">
          <Link to="/jobs" className="hover:text-forest transition">Jobs</Link>
          <ChevronRight className="h-3 w-3" />
          <Link to="/jobs/1/pipeline" className="hover:text-forest transition">Senior Backend Engineer</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-ink">Priya Mehta</span>
        </div>

        {/* Header Card */}
        <div className="bg-white border border-ink/10 rounded-[24px] p-6 shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-5">
            <div className="h-16 w-16 rounded-full bg-[#E5F9F1] text-[#00CC88] flex items-center justify-center text-xl font-bold">
              PM
            </div>
            <div className="space-y-1">
              <h1 className="text-2xl font-display font-bold text-ink leading-tight">Priya Mehta</h1>
              <div className="flex items-center gap-4 text-sm text-ink-muted">
                <span className="flex items-center gap-1.5"><Mail className="h-3.5 w-3.5" /> priya.mehta@email.com</span>
                <span className="flex items-center gap-1.5"><Phone className="h-3.5 w-3.5" /> +91 98765 43210</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-8">
            <div className="flex flex-col items-center">
              <span className="text-sm font-bold text-[#00CC88] flex items-center gap-1.5 mb-1">
                <CheckCircle2 className="h-4 w-4" /> Shortlisted
              </span>
              <span className="text-[10px] font-bold text-ink-muted uppercase tracking-widest">Applied 2 days ago</span>
            </div>

            <div className="h-12 w-px bg-ink/5" />

            <div className="text-center">
              <div className="text-3xl font-display font-bold text-forest leading-none">84<span className="text-sm text-ink-muted ml-0.5 font-sans">/100</span></div>
              <div className="mt-1 px-2 py-0.5 rounded bg-[#E5F9F1] text-[#00CC88] text-[9px] font-black tracking-widest uppercase">SHORTLIST</div>
              <div className="mt-1 text-[10px] text-ink-muted/60 font-semibold italic">87% confidence</div>
            </div>

            <div className="flex items-center gap-2">
              <button className="h-10 w-10 flex items-center justify-center rounded-xl border border-ink/10 bg-white hover:bg-cream/40 transition text-ink-muted hover:text-ink shadow-sm"><Share2 className="h-4 w-4" /></button>
              <button className="h-10 w-10 flex items-center justify-center rounded-xl border border-ink/10 bg-white hover:bg-cream/40 transition text-ink-muted hover:text-ink shadow-sm"><Download className="h-4 w-4" /></button>
              <button className="h-10 px-4 rounded-xl border border-[#FF4D4D]/20 bg-white text-[#FF4D4D] text-sm font-bold hover:bg-[#FFE5E5] transition shadow-sm">Override decision</button>
            </div>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-12 gap-6">
          {/* Left Column (55%) */}
          <div className="col-span-12 lg:col-span-7 space-y-6">
            {/* Score Breakdown */}
            <div className="bg-white border border-ink/10 rounded-[24px] p-6 shadow-sm space-y-6">
              <h3 className="text-[10px] font-bold text-ink-muted uppercase tracking-widest block">Score breakdown</h3>
              <div className="grid grid-cols-2 gap-x-12 gap-y-6">
                <ScoreBar label="Skills match" value={81} />
                <ScoreBar label="Experience match" value={78} />
                <ScoreBar label="Education match" value={90} />
                <ScoreBar label="Certifications" value={70} />
                <ScoreBar label="Video interview" value={88} color="bg-[#00CCBB]" />
              </div>

              <div className="pt-4 border-t border-ink/5">
                <div className="flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 rounded-lg bg-cream border border-ink/10 text-[11px] font-semibold text-ink flex items-center gap-1.5">
                    Python — from 'Led Python data pipeline at TechCo'
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-[#FFE5E5] border border-[#FF4D4D]/10 text-[11px] font-semibold text-[#FF4D4D] flex items-center gap-1.5">
                    Kubernetes — not mentioned (required)
                  </span>
                </div>
                <button className="mt-4 text-xs font-bold text-forest hover:underline flex items-center gap-1.5">
                  <Download className="h-3.5 w-3.5" /> Download original resume
                </button>
              </div>
            </div>

            {/* AI Recommendation */}
            <div className="bg-white border border-ink/10 rounded-[24px] p-6 shadow-sm space-y-5">
              <div className="flex items-center gap-2">
                <h3 className="text-[10px] font-bold text-ink-muted uppercase tracking-widest">AI recommendation</h3>
                <Sparkles className="h-3.5 w-3.5 text-plum" />
              </div>

              <div className="flex items-start gap-4">
                <div className="px-4 py-1.5 rounded-lg bg-[#E5F9F1] text-[#00CC88] text-xs font-black tracking-wider shrink-0 mt-1">SHORTLIST</div>
                <p className="text-[13px] text-ink leading-relaxed font-medium">
                  Priya demonstrates strong Python and API development experience closely matching role requirements. 5 years at TechCo included direct GCP stack work. One gap: no Kubernetes mention, though Docker experience suggests adaptability.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-2">
                <div className="space-y-3">
                  <span className="text-[10px] font-bold text-ink-muted uppercase tracking-widest">Strengths</span>
                  <ul className="space-y-2">
                    {["Strong Python + FastAPI match", "GCP hands-on experience", "Clear structured STAR answers"].map(s => (
                      <li key={s} className="flex items-start gap-2 text-[12px] text-ink">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#00CC88] mt-0.5 shrink-0" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-3">
                  <span className="text-[10px] font-bold text-ink-muted uppercase tracking-widest">Concerns</span>
                  <ul className="space-y-2">
                    {["Kubernetes not demonstrated", "Salary expectation may exceed budget"].map(s => (
                      <li key={s} className="flex items-start gap-2 text-[12px] text-ink">
                        <AlertTriangle className="h-3.5 w-3.5 text-amber-warm mt-0.5 shrink-0" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-ink/5 space-y-3">
                <span className="text-[11px] font-bold text-ink uppercase tracking-wider block">Suggested panel questions:</span>
                <div className="space-y-2">
                  <div className="p-3 rounded-xl bg-cream/30 border border-ink/5 text-[12px] text-ink">
                    How have you managed container orchestration in production?
                  </div>
                  <div className="p-3 rounded-xl bg-cream/30 border border-ink/5 text-[12px] text-ink">
                    Walk us through your most complex API design decision.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (45%) */}
          <div className="col-span-12 lg:col-span-5 space-y-6">
            {/* Video Interview */}
            <div className="bg-white border border-ink/10 rounded-[24px] overflow-hidden shadow-sm">
              <div className="p-5 border-b border-ink/10 flex items-center justify-between">
                <h3 className="text-[10px] font-bold text-ink-muted uppercase tracking-widest">Video interview</h3>
                <span className="text-[11px] font-bold text-forest bg-forest/5 px-2 py-0.5 rounded-full">Score 88/100</span>
              </div>

              <div className="p-5 space-y-4">
                <div className="space-y-2">
                  <div className="flex gap-2 items-center">
                    <span className="h-4 px-1 rounded bg-[#E8EDFF] text-[#2D5BFF] text-[8px] font-bold flex items-center">BEHAVIOURAL</span>
                    <span className="text-[11px] font-bold text-ink">Q1: Debugging production issues</span>
                  </div>
                  <div className="aspect-video bg-ink rounded-xl relative flex items-center justify-center overflow-hidden group cursor-pointer">
                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600" className="absolute inset-0 w-full h-full object-cover opacity-60" alt="Video preview" />
                    <div className="h-12 w-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition duration-300">
                      <Play className="h-5 w-5 text-white fill-current" />
                    </div>
                    <div className="absolute bottom-3 inset-x-3 h-1 bg-white/30 rounded-full">
                      <div className="h-full bg-forest w-[40%] rounded-full" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="bg-cream/40 border border-ink/5 rounded-xl p-3 h-32 overflow-y-auto custom-scrollbar">
                    <p className="text-[12px] text-ink leading-relaxed">
                      "So at my previous company at TechCo, we had a reporting pipeline that was taking over 12 hours to run. <span className="bg-forest/10 font-medium">I led the effort to optimize our BigQuery schema</span> which eventually reduced runtime by 73%. We implemented proper partitioning and clustering based on access patterns..."
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-[#E8EDFF]/30 border border-[#E8EDFF] flex items-start gap-2.5">
                    <Sparkles className="h-4 w-4 text-[#2D5BFF] shrink-0 mt-0.5" />
                    <p className="text-[11px] text-ink leading-normal">
                      Candidate described specific BigQuery optimisation reducing pipeline runtime by 73%. Good STAR structure. Strong technical depth.
                    </p>
                  </div>
                </div>

                <div className="flex justify-between items-center px-1">
                  <div className="text-center">
                    <div className="text-[10px] font-bold text-ink-muted uppercase mb-1">Relevance</div>
                    <div className="text-sm font-bold text-ink">92%</div>
                  </div>
                  <div className="text-center">
                    <div className="text-[10px] font-bold text-ink-muted uppercase mb-1">Clarity</div>
                    <div className="text-sm font-bold text-ink">85%</div>
                  </div>
                  <div className="text-center">
                    <div className="text-[10px] font-bold text-ink-muted uppercase mb-1">Keywords</div>
                    <div className="text-sm font-bold text-ink">78%</div>
                  </div>
                </div>

                <div className="space-y-1 pt-2">
                  {[2, 3, 4, 5, 6, 7, 8].map(q => (
                    <div key={q} className="p-3 border-t border-ink/5 flex items-center justify-between group hover:bg-cream/20 cursor-pointer transition">
                      <span className="text-[11px] font-semibold text-ink-muted">Question {q}</span>
                      <ChevronRight className="h-3.5 w-3.5 text-ink-muted" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Assessment */}
            <div className="bg-white border border-ink/10 rounded-[24px] p-8 shadow-sm flex flex-col items-center justify-center text-center space-y-3">
              <div className="h-12 w-12 rounded-full bg-cream flex items-center justify-center text-ink-muted">
                <FileText className="h-6 w-6" />
              </div>
              <p className="text-sm font-semibold text-ink-muted">No assessment configured for this role</p>
            </div>

            {/* Audit Trail */}
            <div className="bg-white border border-ink/10 rounded-[24px] p-6 shadow-sm space-y-4">
              <h3 className="text-[10px] font-bold text-ink-muted uppercase tracking-widest">Audit trail</h3>
              <div className="space-y-4 relative before:absolute before:left-[5px] before:top-2 before:bottom-2 before:w-px before:bg-ink/5">
                <div className="flex gap-4 relative">
                  <div className="h-2.5 w-2.5 rounded-full bg-forest mt-1.5 shrink-0 z-10" />
                  <div className="space-y-1">
                    <p className="text-[12px] font-bold text-ink">AI analysis complete — SHORTLIST</p>
                    <p className="text-[10px] text-ink-muted flex items-center gap-1"><Clock className="h-3 w-3" /> 1 day ago</p>
                  </div>
                </div>
                <div className="flex gap-4 relative">
                  <div className="h-2.5 w-2.5 rounded-full bg-ink/20 mt-1.5 shrink-0 z-10" />
                  <div className="space-y-1">
                    <p className="text-[12px] text-ink">Video submitted (8 questions)</p>
                    <p className="text-[10px] text-ink-muted flex items-center gap-1"><Clock className="h-3 w-3" /> 1 day ago</p>
                  </div>
                </div>
                <div className="flex gap-4 relative">
                  <div className="h-2.5 w-2.5 rounded-full bg-ink/20 mt-1.5 shrink-0 z-10" />
                  <div className="space-y-1">
                    <p className="text-[12px] text-ink">AI screened resume — score 84/100</p>
                    <p className="text-[10px] text-ink-muted flex items-center gap-1"><Clock className="h-3 w-3" /> 2 days ago</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 space-y-3">
                <textarea placeholder="Add note…" className="w-full h-20 p-3 rounded-xl border border-ink/10 bg-cream/10 text-[12px] focus:outline-none focus:ring-1 focus:ring-forest transition resize-none" />
                <button className="px-4 py-1.5 rounded-lg bg-forest text-cream text-[11px] font-bold hover:bg-forest-deep transition">Save note</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </RecruiterLayout>
  );
};

export default CandidateProfile;
