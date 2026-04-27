import { CandidateDashboardLayout } from "@/components/layout/CandidateDashboardLayout";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Mail, ArrowRight, User, Clock, Briefcase, ChevronRight } from "lucide-react";

export default function CandidateMailbox() {
  const [stage, setStage] = useState("applied");
  const [selectedMail, setSelectedMail] = useState<any>(null);

  useEffect(() => {
    const saved = localStorage.getItem("candidate_stage");
    if (saved) setStage(saved);
  }, []);

  const emails = [
    {
      id: "coding",
      sender: "HireIQ Recruiting",
      subject: "Invitation: Machine Coding Round - Senior Backend Engineer",
      preview: "Congratulations on passing the video interview. The next step is a machine coding round.",
      date: "Today, 10:30 AM",
      visible: stage === "video_done",
      link: "/candidate/device-check?type=coding",
      content: `Hi John,

Congratulations on successfully completing the video interview round! We were impressed with your responses.

The next step in our process is a Machine Coding round. This will test your ability to translate requirements into working code in a realistic environment.

You will be asked to build a small feature or solve a practical problem.

Please complete this assessment within the next 48 hours. Ensure you are in a quiet environment with a stable internet connection before beginning.

Best regards,
The HireIQ Recruiting Team`,
      buttonText: "Start Machine Coding Round"
    },
    {
      id: "video",
      sender: "HireIQ Recruiting",
      subject: "Invitation: Video Interview - Senior Backend Engineer",
      preview: "We'd like to invite you to a video interview for the Senior Backend Engineer role.",
      date: "Yesterday, 2:15 PM",
      visible: stage === "mcq_done" || stage === "video_done",
      link: "/candidate/device-check?type=video",
      content: `Hi John,

Thank you for completing the skills assessment! We are excited to move you forward to the Video Interview stage.

In this round, you will be presented with a series of questions, and you will record your answers via video. This gives us a chance to hear more about your experience and how you communicate.

Please find a quiet place and ensure your camera and microphone are working. You will have a chance to test them before the interview starts.

Good luck!

Best regards,
The HireIQ Recruiting Team`,
      buttonText: "Start Video Interview"
    },
    {
      id: "mcq",
      sender: "HireIQ Recruiting",
      subject: "Action Required: Skills Assessment - Senior Backend Engineer",
      preview: "Thank you for applying. Please complete this skills assessment to proceed.",
      date: "Oct 24, 9:00 AM",
      visible: true,
      link: "/candidate/device-check?type=mcq",
      content: `Hi John,

Thank you for applying for the Senior Backend Engineer role at HireIQ Partner Solutions.

To help us evaluate your foundational knowledge, we invite you to complete a brief Skills Assessment (Multiple Choice Questions).

This assessment should take approximately 20 minutes. Please ensure you have a stable internet connection before starting.

Click the button below to check your setup and begin the assessment.

Best regards,
The HireIQ Recruiting Team`,
      buttonText: "Start Skills Assessment"
    }
  ];

  const visibleEmails = emails.filter(e => e.visible);

  return (
    <CandidateDashboardLayout title="Mailbox">
      <div className="bg-white rounded-3xl border border-charcoal/10 shadow-sm overflow-hidden h-[calc(100vh-8rem)] flex">
        {/* Email List */}
        <div className="w-1/3 border-r border-charcoal/10 flex flex-col bg-cream/10">
          <div className="p-4 border-b border-charcoal/10 bg-white">
            <div className="relative">
              <input
                type="text"
                placeholder="Search mail"
                className="w-full h-10 pl-10 pr-4 rounded-xl bg-charcoal/5 border-none text-sm focus:ring-2 focus:ring-coral/20 outline-none transition"
              />
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-charcoal-muted" />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto">
            {visibleEmails.map(email => (
              <button
                key={email.id}
                onClick={() => setSelectedMail(email)}
                className={`w-full text-left p-4 border-b border-charcoal/5 hover:bg-charcoal/5 transition flex flex-col gap-1 relative ${selectedMail?.id === email.id ? 'bg-coral/5 border-l-4 border-l-coral' : 'border-l-4 border-l-transparent'}`}
              >
                <div className="flex justify-between items-baseline w-full">
                  <span className={`text-sm font-bold truncate ${selectedMail?.id === email.id ? 'text-coral' : 'text-charcoal'}`}>{email.sender}</span>
                  <span className="text-[10px] font-medium text-charcoal-muted whitespace-nowrap ml-2">{email.date}</span>
                </div>
                <span className="text-xs font-bold text-charcoal truncate">{email.subject}</span>
                <span className="text-xs text-charcoal-muted line-clamp-1">{email.preview}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Email Content */}
        <div className="flex-1 flex flex-col bg-white">
          {selectedMail ? (
            <>
              <div className="p-6 border-b border-charcoal/10 flex items-start justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-charcoal mb-4">{selectedMail.subject}</h2>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-coral/10 text-coral flex items-center justify-center font-bold">HR</div>
                    <div>
                      <p className="text-sm font-bold text-charcoal">{selectedMail.sender}</p>
                      <p className="text-[11px] text-charcoal-muted">to me • {selectedMail.date}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-8 flex-1 overflow-y-auto">
                <div className="prose prose-sm max-w-none text-charcoal whitespace-pre-wrap leading-relaxed">
                  {selectedMail.content}
                </div>

                <div className="mt-10 p-6 rounded-2xl bg-cream/30 border border-charcoal/10 flex flex-col items-center justify-center text-center max-w-md mx-auto">
                  <div className="h-12 w-12 rounded-full bg-coral/10 text-coral flex items-center justify-center mb-4">
                    <Briefcase className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-charcoal mb-2">Ready to begin?</h3>
                  <p className="text-sm text-charcoal-muted mb-6">Make sure you are in a quiet environment before starting the assessment.</p>
                  <Link
                    to={selectedMail.link}
                    className="h-12 px-8 rounded-xl bg-coral text-white font-bold text-sm flex items-center justify-center gap-2 hover:bg-coral-dark transition shadow-md w-full"
                  >
                    {selectedMail.buttonText} <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-charcoal-muted">
              <Mail className="h-16 w-16 mb-4 text-charcoal/20" />
              <p className="text-lg font-medium">Select an item to read</p>
              <p className="text-sm">Nothing is selected</p>
            </div>
          )}
        </div>
      </div>
    </CandidateDashboardLayout>
  );
}
