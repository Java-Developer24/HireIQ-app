import { CandidateLayout } from "@/components/layout/CandidateLayout";
import {
  CheckCircle2,
  Mail,
  Clock,
  Lock,
  Check,
  ExternalLink,
  Sparkles
} from "lucide-react";

const SubmissionDone = () => {
  return (
    <CandidateLayout className="bg-[#F5F7FA]">
      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="max-w-[520px] w-full animate-in zoom-in duration-700">
          <div className="bg-white border border-ink/10 rounded-[32px] overflow-hidden shadow-sm relative">
            <div className="absolute top-0 inset-x-0 h-1.5 bg-[#00CC88]" />

            <div className="p-10 text-center space-y-8">
              <div className="space-y-6">
                <div className="h-20 w-20 rounded-full bg-[#E5F9F1] flex items-center justify-center text-[#00CC88] mx-auto shadow-sm relative">
                  <div className="absolute inset-0 bg-[#00CC88]/10 rounded-full animate-ping duration-[3s]" />
                  <CheckCircle2 className="h-10 w-10 relative z-10" />
                </div>
                <div className="space-y-2">
                  <h1 className="text-3xl font-display font-bold text-ink tracking-tight">You're all done, Priya!</h1>
                  <p className="text-sm text-ink-muted leading-relaxed max-w-[380px] mx-auto">
                    Your responses have been submitted for <span className="font-bold text-ink">Senior Backend Engineer</span> at <span className="font-bold text-ink">Data Panther Solutions</span>.
                  </p>
                </div>
              </div>

              <div className="bg-cream/30 rounded-2xl p-6 text-left space-y-4 border border-ink/5">
                <h4 className="text-[10px] font-bold text-ink-muted uppercase tracking-widest">What you completed</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="h-5 w-5 rounded-full bg-[#00CC88]/10 text-[#00CC88] flex items-center justify-center shrink-0">
                      <Check className="h-3 w-3" />
                    </div>
                    <span className="text-[13px] font-semibold text-ink">Video interview — 8 questions answered</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-5 w-5 rounded-full bg-[#00CC88]/10 text-[#00CC88] flex items-center justify-center shrink-0">
                      <Check className="h-3 w-3" />
                    </div>
                    <span className="text-[13px] font-semibold text-ink">Skills assessment — 20 questions · 1 coding problem</span>
                  </div>
                </div>
              </div>

              <div className="text-left space-y-6 pt-2">
                <h4 className="text-[10px] font-bold text-ink-muted uppercase tracking-widest">What happens next</h4>
                <div className="space-y-5">
                   <div className="flex gap-4">
                      <div className="h-10 w-10 rounded-xl bg-forest/5 flex items-center justify-center text-forest shrink-0">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-[13px] font-bold text-ink">Results sent to priya@email.com</p>
                        <p className="text-[11px] text-ink-muted">Check your inbox (and spam folder)</p>
                      </div>
                   </div>
                   <div className="flex gap-4">
                      <div className="h-10 w-10 rounded-xl bg-forest/5 flex items-center justify-center text-forest shrink-0">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-[13px] font-bold text-ink">Expected response within 5 business days</p>
                        <p className="text-[11px] text-ink-muted">The team is reviewing candidates now</p>
                      </div>
                   </div>
                   <div className="flex gap-4">
                      <div className="h-10 w-10 rounded-xl bg-forest/5 flex items-center justify-center text-forest shrink-0">
                        <Lock className="h-5 w-5" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-[13px] font-bold text-ink">Your data is stored securely</p>
                        <p className="text-[11px] text-ink-muted">Can be deleted on request at any time</p>
                      </div>
                   </div>
                </div>
              </div>

              <div className="pt-6 border-t border-ink/5">
                <button className="text-[11px] font-bold text-ink-muted hover:text-ink flex items-center gap-1.5 mx-auto transition">
                  Privacy policy & data deletion <ExternalLink className="h-3 w-3" />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center gap-2 animate-pulse">
            <div className="flex items-center gap-2 text-[11px] font-bold text-ink-muted/40 uppercase tracking-widest">
              Powered by HireIQ <Sparkles className="h-3 w-3" />
            </div>
            <p className="text-[10px] text-ink-muted/30">AI-powered autonomous hiring</p>
          </div>
        </div>
      </div>
    </CandidateLayout>
  );
};

export default SubmissionDone;
