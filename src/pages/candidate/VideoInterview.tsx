import { useState, useEffect } from "react";
import { CandidateLayout } from "@/components/layout/CandidateLayout";
import {
  Volume2,
  Lightbulb,
  Play,
  ArrowRight,
  CheckCircle2,
  Mic,
  Camera,
  Loader2
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const VideoInterview = () => {
  const [state, setState] = useState<"prep" | "recording" | "uploading" | "complete">("prep");
  const [currentQuestion, setCurrentQuestion] = useState(3);
  const [countdown, setCountdown] = useState(24);
  const navigate = useNavigate();

  useEffect(() => {
    let timer: any;
    if (state === "prep" && countdown > 0) {
      timer = setInterval(() => setCountdown(c => c - 1), 1000);
    } else if (state === "prep" && countdown === 0) {
      setState("recording");
    }
    return () => clearInterval(timer);
  }, [state, countdown]);

  const handleNext = () => {
    if (state === "recording") {
      setState("uploading");
      setTimeout(() => {
        if (currentQuestion < 8) {
          // Loop back for next question (mock)
          setState("complete"); // Just go to complete for this demo flow
        } else {
          setState("complete");
        }
      }, 2000);
    }
  };

  return (
    <CandidateLayout className="bg-[#0f1117]" showLogo={false}>
      {/* Dark Immersive Header */}
      <header className="h-14 bg-[#1a1d25] border-b border-white/5 flex items-center justify-between px-8 flex-none">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4">
            <span className="text-xs font-bold text-white/80">Question {currentQuestion} of 8</span>
            <div className="flex gap-1.5">
              {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                <div key={i} className={`h-1.5 w-1.5 rounded-full ${
                  i < currentQuestion ? "bg-[#00CC88]" : i === currentQuestion ? "bg-[#2D5BFF]" : "bg-white/10"
                }`} />
              ))}
            </div>
          </div>
          <div className="h-4 w-px bg-white/5" />
          <span className="px-2 py-0.5 rounded bg-amber-soft/10 text-amber-warm text-[9px] font-black tracking-widest uppercase">
            BEHAVIOURAL
          </span>
        </div>
        <div className="text-[11px] font-mono font-bold text-white/40 flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-white/20" />
          Session time remaining: 18:42
        </div>
      </header>

      <div className="flex-1 flex flex-col items-center justify-center p-6 relative overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] bg-forest/10 blur-[120px] rounded-full pointer-events-none" />

        {state === "prep" && (
          <div className="max-w-[600px] w-full space-y-12 text-center animate-in fade-in zoom-in-95 duration-700 relative z-10">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white leading-tight">
                Describe a time you had to debug a critical production issue under pressure. What was your approach?
              </h2>
              <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-xs font-bold text-white/60 hover:text-white hover:bg-white/5 transition">
                <Volume2 className="h-4 w-4" /> Replay question
              </button>
            </div>

            <div className="space-y-8">
              <div className="relative h-36 w-36 mx-auto flex items-center justify-center">
                <svg className="absolute inset-0 h-full w-full -rotate-90">
                  <circle cx="72" cy="72" r="68" fill="transparent" stroke="currentColor" strokeWidth="4" className="text-white/5" />
                  <circle
                    cx="72" cy="72" r="68"
                    fill="transparent" stroke="currentColor" strokeWidth="4"
                    className="text-white transition-all duration-1000"
                    strokeDasharray={427}
                    strokeDashoffset={427 - (427 * countdown / 24)}
                  />
                </svg>
                <div className="text-center">
                  <span className="text-5xl font-display font-bold text-white block">{countdown}</span>
                  <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">seconds</span>
                </div>
              </div>
              <p className="text-xs font-bold text-white/40 uppercase tracking-widest">to prepare</p>
            </div>

            <div className="max-w-[400px] mx-auto p-4 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-md space-y-2">
              <p className="text-[11px] font-bold text-white/80 flex items-center justify-center gap-2">
                <Lightbulb className="h-3.5 w-3.5 text-lime" /> STAR method: Situation → Task → Action → Result
              </p>
            </div>

            <button
              onClick={() => setState("recording")}
              className="text-sm font-bold text-white/60 hover:text-white transition underline underline-offset-4"
            >
              Start recording now
            </button>

            <p className="text-[10px] text-white/20 italic">Recording will start automatically when the timer ends.</p>
          </div>
        )}

        {state === "recording" && (
          <div className="w-full max-w-4xl space-y-8 animate-in fade-in duration-500">
             <div className="text-center space-y-2">
                <p className="text-sm font-medium text-white/60 line-clamp-1 max-w-xl mx-auto">
                  Describe a time you had to debug a critical production issue...
                </p>
             </div>

             <div className="aspect-video w-full bg-black rounded-[32px] border border-white/10 relative overflow-hidden shadow-2xl group">
                {/* Camera feed placeholder */}
                <div className="absolute inset-0 bg-[#0f1117] flex items-center justify-center">
                   <div className="relative">
                      <div className="h-64 w-64 rounded-full bg-white/5 blur-3xl" />
                      <img
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] max-w-none opacity-40 grayscale"
                        alt="Candidate feed"
                      />
                   </div>
                </div>

                <div className="absolute top-6 left-6 flex items-center gap-2.5 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                  <div className="h-2 w-2 rounded-full bg-[#FF4D4D] animate-pulse" />
                  <span className="text-[11px] font-bold text-white uppercase tracking-wider">Recording</span>
                </div>

                <div className="absolute top-6 right-6 flex items-center gap-4">
                  <div className="px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[11px] font-mono font-bold text-white">
                    1:24 / 1:30
                  </div>
                </div>

                {/* Progress bar at bottom of camera */}
                <div className="absolute bottom-0 inset-x-0 h-1.5 bg-white/10">
                   <div className="h-full bg-[#FF4D4D] w-[90%] transition-all duration-1000" />
                </div>
             </div>

             <div className="flex flex-col items-center gap-6">
                <button
                  onClick={handleNext}
                  className="h-14 px-10 bg-white text-ink font-bold rounded-2xl flex items-center justify-center gap-2 hover:bg-cream transition shadow-xl"
                >
                  Done answering
                </button>
                <p className="text-[11px] text-white/40 font-medium">Speak clearly and naturally. The AI will analyse your full answer.</p>
             </div>
          </div>
        )}

        {state === "uploading" && (
          <div className="max-w-[480px] w-full text-center space-y-8 animate-in fade-in zoom-in-95 duration-500">
            <div className="h-20 w-20 rounded-full bg-[#00CC88]/20 flex items-center justify-center text-[#00CC88] mx-auto">
              <CheckCircle2 className="h-10 w-10" />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-display font-bold text-white">Answer saved</h2>
              <p className="text-sm text-white/40">Preparing your next question…</p>
            </div>
            <div className="space-y-3">
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-[#00CC88] w-[90%] rounded-full animate-pulse" />
              </div>
              <p className="text-[10px] font-mono text-white/20 uppercase tracking-widest">Uploading to secure storage · 248KB of 276KB</p>
            </div>
          </div>
        )}

        {state === "complete" && (
          <div className="max-w-[520px] w-full text-center space-y-10 animate-in fade-in zoom-in-95 duration-700">
            <div className="h-24 w-24 rounded-full bg-[#2D5BFF]/10 flex items-center justify-center text-[#2D5BFF] mx-auto border border-[#2D5BFF]/20 relative">
               <div className="absolute inset-0 bg-[#2D5BFF]/20 rounded-full blur-2xl animate-pulse" />
               <CheckCircle2 className="h-12 w-12 relative z-10" />
            </div>
            <div className="space-y-3">
              <h2 className="text-4xl font-display font-bold text-white tracking-tight">Interview complete</h2>
              <p className="text-base text-white/60">Thanks, Priya. The AI is now analysing your answers.</p>
            </div>

            <div className="space-y-6 pt-4">
              <div className="flex items-center justify-center gap-3 text-sm font-bold text-white/40">
                <Loader2 className="h-4 w-4 animate-spin" /> Processing…
              </div>

              <div className="p-6 rounded-[24px] bg-white/5 border border-white/5 backdrop-blur-sm space-y-6">
                <div className="space-y-1.5">
                  <p className="text-xs font-bold text-white/80 uppercase tracking-widest">Next step</p>
                  <p className="text-base font-semibold text-white">Skills assessment (takes about 15 minutes)</p>
                </div>
                <button
                  onClick={() => navigate("/assessment-mcq")}
                  className="h-14 w-full bg-[#2D5BFF] text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-[#2D5BFF]/80 transition shadow-xl shadow-[#2D5BFF]/20"
                >
                  Continue to assessment <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </CandidateLayout>
  );
};

export default VideoInterview;
