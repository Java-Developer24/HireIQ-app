import { CandidateLayout } from "@/components/layout/CandidateLayout";
import {
  Briefcase,
  MapPin,
  Clock,
  Upload,
  Check,
  X,
  ArrowRight,
  Camera,
  CheckCircle2,
  Lock,
  ArrowUpRight
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ApplyPage = () => {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <CandidateLayout>
        <div className="flex-1 flex items-center justify-center p-6 bg-white">
          <div className="max-w-md w-full text-center space-y-6 animate-in zoom-in duration-500">
            <div className="h-20 w-20 rounded-full bg-[#E5F9F1] flex items-center justify-center text-[#00CC88] mx-auto shadow-sm">
              <CheckCircle2 className="h-10 w-10" />
            </div>
            <div className="space-y-2">
              <h1 className="text-3xl font-display font-bold text-ink">Application received!</h1>
              <p className="text-sm text-ink-muted leading-relaxed">
                We've sent your video interview link to <span className="font-bold text-ink">priya@email.com</span>.
              </p>
            </div>
            <div className="pt-4 space-y-4">
              <Link to="/device-check" className="w-full h-12 bg-[#0D1829] text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-forest-deep transition shadow-lg shadow-[#0D1829]/10">
                Proceed to interview <ArrowRight className="h-4 w-4" />
              </Link>
              <p className="text-[11px] text-ink-muted/60">Check your inbox — including spam folder.</p>
            </div>
          </div>
        </div>
      </CandidateLayout>
    );
  }

  return (
    <CandidateLayout>
      <div className="flex-1 overflow-auto bg-white">
        <div className="max-w-[680px] mx-auto py-12 px-6 space-y-12">
          {/* Hero */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl font-display font-bold text-ink tracking-tight">Senior Backend Engineer</h1>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-cream border border-ink/10 text-xs font-semibold text-ink-muted">Engineering</span>
                <span className="px-3 py-1 rounded-full bg-[#E8EDFF] text-[#2D5BFF] text-xs font-bold uppercase tracking-wider">Senior</span>
                <span className="px-3 py-1 rounded-full bg-cream border border-ink/10 text-xs font-semibold text-ink-muted">Remote</span>
                <span className="px-3 py-1 rounded-full bg-cream border border-ink/10 text-xs font-semibold text-ink-muted">Full-time</span>
              </div>
              <p className="text-sm font-medium text-ink-muted flex items-center gap-4">
                <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4" /> Hyderabad, India</span>
                <span className="flex items-center gap-1.5">₹18–24 LPA</span>
              </p>
            </div>
            <div className="h-px bg-ink/5 w-full" />

            {/* Process overview */}
            <div className="bg-cream/30 border border-ink/5 rounded-[24px] p-6 space-y-6">
              <h3 className="text-[10px] font-bold text-ink-muted uppercase tracking-widest">How this works</h3>
              <div className="flex items-center justify-between relative px-2">
                <div className="absolute top-4 left-0 right-0 h-px bg-ink/10 -translate-y-1/2 z-0" />
                {[
                  { step: 1, label: "Apply", active: true },
                  { step: 2, label: "Video interview" },
                  { step: 3, label: "Assessment" },
                  { step: 4, label: "Result" }
                ].map((s) => (
                  <div key={s.step} className="relative z-10 flex flex-col items-center gap-2">
                    <div className={`h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                      s.active ? "bg-[#0D1829] text-white shadow-sm" : "bg-white border border-ink/10 text-ink-muted"
                    }`}>
                      {s.step}
                    </div>
                    <span className={`text-[10px] font-bold transition-colors ${s.active ? "text-ink" : "text-ink-muted"}`}>
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
              <div className="space-y-4 pt-2">
                <p className="text-xs text-ink-muted leading-relaxed font-medium">
                  Takes about 20–25 minutes total · Your interview link will be valid for 7 days
                </p>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-ink/5">
                  <div className="h-8 w-8 rounded-lg bg-forest/5 flex items-center justify-center text-forest shrink-0">
                    <Camera className="h-4 w-4" />
                  </div>
                  <p className="text-[11px] text-ink-muted font-medium">You'll need a camera and microphone for the video interview.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white border border-ink/10 rounded-[28px] p-8 shadow-sm space-y-8">
            <h2 className="text-xl font-display font-bold text-ink">Apply now</h2>

            <div className="space-y-6">
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-ink uppercase tracking-widest">Full name *</label>
                <input type="text" defaultValue="Jordan Mehta" className="w-full h-12 px-4 rounded-xl border border-ink/10 bg-white text-sm focus:outline-none focus:ring-1 focus:ring-forest transition shadow-sm" />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-ink uppercase tracking-widest">Email address *</label>
                <input type="email" defaultValue="priya@email.com" className="w-full h-12 px-4 rounded-xl border border-ink/10 bg-white text-sm focus:outline-none focus:ring-1 focus:ring-forest transition shadow-sm" />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-ink uppercase tracking-widest flex justify-between">
                  Phone number <span className="text-ink-muted lowercase italic font-medium tracking-normal">Optional</span>
                </label>
                <input type="tel" placeholder="+91 98765 43210" className="w-full h-12 px-4 rounded-xl border border-ink/10 bg-white text-sm focus:outline-none transition shadow-sm" />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-ink uppercase tracking-widest">Resume *</label>
                <div className="border-2 border-dashed border-ink/10 rounded-2xl p-6 bg-cream/10 flex items-center justify-between group hover:border-forest/40 transition cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center text-[#00CC88] shadow-sm">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <div className="space-y-0.5">
                      <span className="text-sm font-bold text-ink">resume_priya_mehta.pdf</span>
                      <p className="text-[10px] text-ink-muted">248KB · Ready to upload</p>
                    </div>
                  </div>
                  <X className="h-4 w-4 text-ink-muted hover:text-[#FF4D4D] transition" />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-ink uppercase tracking-widest flex justify-between">
                  LinkedIn profile URL <span className="text-ink-muted lowercase italic font-medium tracking-normal">Optional</span>
                </label>
                <input type="text" placeholder="linkedin.com/in/yourname" className="w-full h-12 px-4 rounded-xl border border-ink/10 bg-white text-sm focus:outline-none transition shadow-sm" />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-ink uppercase tracking-widest flex justify-between">
                  Cover note <span className="text-ink-muted lowercase italic font-medium tracking-normal">Optional</span>
                </label>
                <textarea placeholder="Tell us why you're a great fit…" className="w-full h-32 p-4 rounded-xl border border-ink/10 bg-white text-sm focus:outline-none focus:ring-1 focus:ring-forest transition shadow-sm resize-none" />
              </div>

              <div className="flex items-start gap-3 pt-2">
                <div className="h-5 w-5 rounded border border-ink/20 bg-[#0D1829] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="h-3.5 w-3.5 text-white" />
                </div>
                <p className="text-[12px] text-ink-muted leading-snug">
                  I agree to my data being processed for this application. <button className="text-ink font-bold hover:underline">Privacy policy</button>
                </p>
              </div>

              <button
                onClick={() => setSubmitted(true)}
                className="w-full h-14 bg-[#0D1829] text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-forest-deep transition shadow-xl shadow-[#0D1829]/10"
              >
                Submit application
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 text-[11px] text-ink-muted/60 pb-8">
            <div className="flex items-center gap-1.5">
              <Lock className="h-3 w-3" />
              <span>Your data is encrypted and stored securely</span>
            </div>
            <p>© 2024 Data Panther Solutions · Powered by HireIQ</p>
          </div>
        </div>
      </div>
    </CandidateLayout>
  );
};

export default ApplyPage;
