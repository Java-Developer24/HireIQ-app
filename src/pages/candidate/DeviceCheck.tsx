import { CandidateLayout } from "@/components/layout/CandidateLayout";
import {
  CheckCircle2,
  Monitor,
  Mic,
  Wifi,
  Video,
  ArrowRight,
  Info,
  AlertCircle
} from "lucide-react";
import { Link } from "react-router-dom";

const CheckRow = ({ status, label, sublabel }: { status: "success" | "error"; label: string; sublabel: string }) => (
  <div className="flex items-center gap-4 group">
    <div className={`h-10 w-10 rounded-full flex items-center justify-center shrink-0 transition-colors ${
      status === "success" ? "bg-[#E5F9F1] text-[#00CC88]" : "bg-[#FFE5E5] text-[#FF4D4D]"
    }`}>
      {status === "success" ? <CheckCircle2 className="h-5 w-5" /> : <AlertCircle className="h-5 w-5" />}
    </div>
    <div className="space-y-0.5">
      <p className="text-sm font-bold text-ink">{label}</p>
      <p className="text-[11px] text-ink-muted font-medium">{sublabel}</p>
    </div>
  </div>
);

const DeviceCheck = () => {
  return (
    <CandidateLayout className="bg-[#F5F7FA]">
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="max-w-[620px] w-full bg-white border border-ink/10 rounded-[28px] p-10 shadow-sm space-y-8 animate-in slide-in-from-bottom-4 duration-500">
          <div className="space-y-6">
            <div className="flex items-center gap-1">
              {[
                { label: "Device check", active: true },
                { label: "Practice" },
                { label: "Interview" },
                { label: "Done" }
              ].map((s, i) => (
                <div key={s.label} className="flex items-center">
                  <div className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                    s.active ? "bg-[#0D1829] text-white" : "bg-ink/5 text-ink-muted"
                  }`}>
                    {s.label}
                  </div>
                  {i < 3 && <div className="w-4 h-px bg-ink/10 mx-1" />}
                </div>
              ))}
            </div>

            <div className="space-y-2">
              <h1 className="text-2xl font-display font-bold text-ink leading-tight">Let's check your setup</h1>
              <p className="text-sm text-ink-muted leading-relaxed">
                Make sure your camera and microphone are working before you start. Nothing is recorded on this screen.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <CheckRow status="success" label="Camera detected" sublabel="Logitech HD Webcam · Working" />
              <CheckRow status="success" label="Microphone detected" sublabel="Built-in Microphone · Capturing audio" />
              <CheckRow status="success" label="Browser supported" sublabel="Chrome 120 · Fully supported" />
              <CheckRow status="success" label="Internet speed" sublabel="12.4 Mbps upload · Good connection" />
            </div>

            <div className="space-y-4">
              <div className="aspect-[4/3] bg-ink rounded-2xl flex items-center justify-center relative overflow-hidden group shadow-inner">
                <Video className="h-10 w-10 text-white/20 group-hover:scale-110 transition duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Your camera preview</p>
                </div>
                {/* Audio meter */}
                <div className="absolute bottom-4 left-4 flex gap-1 items-end h-4">
                  {[30, 60, 45, 80, 55].map((h, i) => (
                    <div
                      key={i}
                      className="w-1 bg-[#00CC88] rounded-full animate-pulse"
                      style={{ height: `${h}%`, animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>
              </div>
              <button className="text-[11px] font-bold text-ink-muted hover:text-ink flex items-center gap-1.5 transition">
                Adjust camera settings
              </button>
            </div>
          </div>

          <div className="bg-cream/30 rounded-2xl p-5 space-y-4 border border-ink/5">
            <h4 className="text-[10px] font-bold text-ink-muted uppercase tracking-widest">Tips for a great interview</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
              {[
                "Find a quiet, well-lit space",
                "Position camera at eye level",
                "Speak clearly — no rush",
                "Don't close browser tab"
              ].map(tip => (
                <div key={tip} className="flex items-center gap-2.5 text-[11px] font-medium text-ink">
                  <div className="h-1.5 w-1.5 rounded-full bg-forest shrink-0" />
                  {tip}
                </div>
              ))}
            </div>
            <div className="pt-2 border-t border-ink/5 flex items-center gap-2">
              <Info className="h-3.5 w-3.5 text-ink-muted/60" />
              <p className="text-[10px] text-ink-muted italic leading-normal">
                This interview is AI-evaluated. No human will be watching in real time.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <Link to="/practice" className="w-full h-14 bg-[#0D1829] text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-forest-deep transition shadow-xl shadow-[#0D1829]/10">
              Continue to practice question <ArrowRight className="h-4 w-4" />
            </Link>
            <button className="w-full text-xs font-bold text-ink-muted hover:text-ink transition">
              Having trouble? Contact support
            </button>
          </div>
        </div>
      </div>
    </CandidateLayout>
  );
};

export default DeviceCheck;
