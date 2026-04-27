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
import { Link, useSearchParams, useNavigate } from "react-router-dom";

const CheckRow = ({ status, label, sublabel }: { status: "success" | "error"; label: string; sublabel: string }) => (
  <div className="flex items-center gap-4 group">
    <div className={`h-10 w-10 rounded-full flex items-center justify-center shrink-0 transition-colors ${
      status === "success" ? "bg-[#E5F9F1] text-[#00CC88]" : "bg-coral/10 text-[hsl(var(--coral))]"
    }`}>
      {status === "success" ? <CheckCircle2 className="h-5 w-5" /> : <AlertCircle className="h-5 w-5" />}
    </div>
    <div className="space-y-0.5">
      <p className="text-sm font-bold text-charcoal">{label}</p>
      <p className="text-[11px] text-charcoal-muted font-medium">{sublabel}</p>
    </div>
  </div>
);

const DeviceCheck = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const type = searchParams.get('type') || 'mcq';

  const handleContinue = () => {
    if (type === 'coding') {
      navigate('/candidate/assessment-coding');
    } else if (type === 'video') {
      navigate('/candidate/video-interview');
    } else {
      navigate('/candidate/assessment-mcq');
    }
  };

  return (
    <CandidateLayout className="bg-[#F5F7FA]">
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="max-w-[620px] w-full bg-white border border-charcoal/10 rounded-[28px] p-10 shadow-sm space-y-8 animate-in slide-in-from-bottom-4 duration-500">
          <div className="space-y-6">
            <div className="flex items-center gap-1">
              {[
                { label: "Device check", active: true },
                { label: "Assessment" },
                { label: "Interview" },
                { label: "Done" }
              ].map((s, i) => (
                <div key={s.label} className="flex items-center">
                  <div className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                    s.active ? "bg-[hsl(var(--charcoal))] text-white" : "bg-charcoal/5 text-charcoal-muted"
                  }`}>
                    {s.label}
                  </div>
                  {i < 3 && <div className="w-4 h-px bg-charcoal/10 mx-1" />}
                </div>
              ))}
            </div>

            <div className="space-y-2">
              <h1 className="text-2xl font-display font-bold text-charcoal leading-tight">Let's check your setup</h1>
              <p className="text-sm text-charcoal-muted leading-relaxed">
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
              <div className="aspect-[4/3] bg-charcoal rounded-2xl flex items-center justify-center relative overflow-hidden group shadow-inner">
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
              <button className="text-[11px] font-bold text-charcoal-muted hover:text-charcoal flex items-center gap-1.5 transition">
                Adjust camera settings
              </button>
            </div>
          </div>

          <div className="bg-cream/30 rounded-2xl p-5 space-y-4 border border-charcoal/5">
            <h4 className="text-[10px] font-bold text-charcoal-muted uppercase tracking-widest">Tips for a great interview</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
              {[
                "Find a quiet, well-lit space",
                "Position camera at eye level",
                "Speak clearly — no rush",
                "Don't close browser tab"
              ].map(tip => (
                <div key={tip} className="flex items-center gap-2.5 text-[11px] font-medium text-charcoal">
                  <div className="h-1.5 w-1.5 rounded-full bg-coral shrink-0" />
                  {tip}
                </div>
              ))}
            </div>
            <div className="pt-2 border-t border-charcoal/5 flex items-center gap-2">
              <Info className="h-3.5 w-3.5 text-charcoal-muted/60" />
              <p className="text-[10px] text-charcoal-muted italic leading-normal">
                This interview is AI-evaluated. No human will be watching in real time.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <button onClick={handleContinue} className="w-full h-12 bg-[hsl(var(--charcoal))] text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-charcoal transition shadow-lg shadow-[hsl(var(--charcoal))]/10">
              Continue to practice round <ArrowRight className="h-4 w-4" />
            </button>
            <button className="w-full text-xs font-bold text-charcoal-muted hover:text-charcoal transition">
              Having trouble? Contact support
            </button>
          </div>
        </div>
      </div>
    </CandidateLayout>
  );
};

export default DeviceCheck;
