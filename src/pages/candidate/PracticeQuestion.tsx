import { CandidateLayout } from "@/components/layout/CandidateLayout";
import {
  Volume2,
  Lightbulb,
  Play,
  ArrowRight,
  RefreshCw,
  Video,
  StopCircle
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const PracticeQuestion = () => {
  const [state, setState] = useState<"prep" | "recording" | "playback">("prep");
  const [countdown, setCountdown] = useState(30);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (state === "recording" && videoRef.current) {
      navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        .then(stream => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        })
        .catch(err => console.error("Camera error:", err));
    }
  }, [state]);

  useEffect(() => {
    let timer: any;
    if (state === "prep" && countdown > 0) {
      timer = setInterval(() => setCountdown(c => c - 1), 1000);
    } else if (state === "prep" && countdown === 0) {
      setState("recording");
    }
    return () => clearInterval(timer);
  }, [state, countdown]);

  return (
    <CandidateLayout className="bg-white">
      {/* Top Progress Bar */}
      <div className="h-14 border-b border-ink/5 px-8 flex items-center justify-between flex-none">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-xs font-bold text-ink-muted">
            <span className="text-[#00CC88]">Device check ✓</span>
            <div className="h-4 w-px bg-ink/10" />
            <div className="px-2 py-1 bg-[#0D1829] text-white rounded-md text-[10px]">Practice</div>
            <div className="h-4 w-px bg-ink/10" />
            <span>Interview (8 questions)</span>
          </div>
        </div>
        <div className="text-xs font-bold text-ink-muted">
          Senior Backend Engineer — Data Panther Solutions
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-6 bg-[#F5F7FA]">
        <div className="max-w-[660px] w-full bg-white border border-ink/10 rounded-[32px] p-10 shadow-sm relative overflow-hidden">
          {/* Banner */}
          <div className="absolute top-0 inset-x-0 h-12 bg-amber-soft/50 border-b border-amber-warm/5 flex items-center justify-center gap-2">
            <span className="h-2 w-2 rounded-full bg-amber-warm animate-pulse" />
            <p className="text-[11px] font-bold text-amber-warm uppercase tracking-wider">Practice round · Not scored or submitted</p>
          </div>

          <div className="mt-8 space-y-8 text-center">
            <div className="space-y-4 pt-4">
              <span className="text-[10px] font-bold text-ink-muted uppercase tracking-widest block">Practice question</span>
              <h2 className="text-2xl font-display font-bold text-ink max-w-md mx-auto leading-tight">
                Tell us something you enjoy doing outside of work.
              </h2>
              <button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-ink/10 text-[11px] font-bold text-ink-muted hover:bg-cream transition">
                <Volume2 className="h-3.5 w-3.5" /> Replay question audio
              </button>
            </div>

            <div className="min-h-[260px] flex flex-col items-center justify-center">
              {state === "prep" && (
                <div className="space-y-8 animate-in fade-in duration-500">
                  <div className="relative h-36 w-36 mx-auto flex items-center justify-center">
                    <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 144 144">
                      <circle
                        cx="72" cy="72" r="64"
                        fill="transparent"
                        stroke="currentColor"
                        strokeWidth="8"
                        className="text-ink/5"
                      />
                      <circle
                        cx="72" cy="72" r="64"
                        fill="transparent"
                        stroke="currentColor"
                        strokeWidth="8"
                        className="text-[#0D1829] transition-all duration-1000"
                        strokeDasharray={402}
                        strokeDashoffset={402 - (402 * countdown / 30)}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="text-center">
                      <span className="text-4xl font-display font-bold text-ink block">{countdown}</span>
                      <span className="text-[9px] font-bold text-ink-muted uppercase">seconds</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-[#E8EDFF] text-[#2D5BFF]">
                      <Lightbulb className="h-4 w-4" />
                      <p className="text-[11px] font-bold">Tip: Speak naturally. This is just for warmup — nothing is recorded.</p>
                    </div>
                    <button
                      onClick={() => setState("recording")}
                      className="block mx-auto text-sm font-bold text-ink-muted hover:text-ink transition"
                    >
                      Start recording now
                    </button>
                  </div>
                </div>
              )}

              {state === "recording" && (
                <div className="w-full space-y-6 animate-in zoom-in-95 duration-300">
                  <div className="aspect-video w-full bg-ink rounded-2xl relative overflow-hidden shadow-2xl border border-white/10">
                    <video
                      ref={videoRef}
                      autoPlay
                      muted
                      className="absolute inset-0 w-full h-full object-cover mirror"
                    />
                    <style>{`.mirror { transform: scaleX(-1); }`}</style>
                    <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full z-10">
                      <div className="h-2 w-2 rounded-full bg-[#FF4D4D] animate-pulse" />
                      <span className="text-[10px] font-bold text-white uppercase tracking-wider">REC</span>
                    </div>
                    <div className="absolute top-4 right-4 text-[10px] font-mono font-bold text-white bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full z-10">
                      0:23 / 1:30
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      if (videoRef.current && videoRef.current.srcObject) {
                        (videoRef.current.srcObject as MediaStream).getTracks().forEach(track => track.stop());
                      }
                      setState("playback");
                    }}
                    className="h-14 px-8 bg-white border border-[#FF4D4D] text-[#FF4D4D] font-bold rounded-2xl flex items-center justify-center gap-2 hover:bg-[#FFE5E5] transition mx-auto"
                  >
                    <StopCircle className="h-5 w-5" /> Stop recording
                  </button>
                </div>
              )}

              {state === "playback" && (
                <div className="w-full space-y-8 animate-in slide-in-from-bottom-4 duration-500">
                  <div className="aspect-video w-full bg-ink/5 border border-ink/10 rounded-2xl flex items-center justify-center relative group cursor-pointer shadow-sm">
                    <div className="h-14 w-14 rounded-full bg-white flex items-center justify-center text-ink shadow-lg group-hover:scale-110 transition">
                      <Play className="h-6 w-6 fill-current" />
                    </div>
                    <div className="absolute bottom-4 left-6 text-[10px] font-bold text-ink-muted uppercase tracking-widest">
                      Review your practice attempt
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-3">
                      <button
                        onClick={() => { setState("prep"); setCountdown(30); }}
                        className="h-14 px-8 rounded-2xl border border-ink/10 bg-white text-ink font-bold flex items-center gap-2 hover:bg-cream transition w-full md:w-auto"
                      >
                        <RefreshCw className="h-4 w-4" /> Re-record
                      </button>
                      <Link
                        to="/assessment-mcq"
                        className="h-14 px-10 rounded-2xl bg-[#0D1829] text-white font-bold flex items-center gap-2 hover:bg-forest-deep transition shadow-xl shadow-[#0D1829]/10 w-full md:w-auto justify-center"
                      >
                        I'm ready — start assessment <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                    <p className="text-[11px] text-ink-muted italic">
                      Once you start, you cannot return to previous questions.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </CandidateLayout>
  );
};

export default PracticeQuestion;
