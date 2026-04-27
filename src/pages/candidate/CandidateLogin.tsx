import { Link, useNavigate } from "react-router-dom";
import { HireIqLogo } from "@/components/HireIqLogo";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function CandidateLogin() {
  const [showPwd, setShowPwd] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Set mock state to start the journey
    localStorage.setItem("candidate_stage", "applied");
    navigate("/candidate/dashboard");
  };

  return (
    <div className="min-h-screen bg-login-bg flex flex-col items-center justify-center p-6">
      <Link to="/candidate/landing" className="mb-8 hover:scale-105 transition-transform"><HireIqLogo variant="light" /></Link>

      <div className="w-full max-w-[420px] bg-login-panel border border-charcoal/10 rounded-[24px] p-8 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-coral via-amber to-coral opacity-80" />

        <div className="text-center mb-8">
          <h1 className="font-display font-bold text-2xl text-white">Candidate Portal</h1>
          <p className="text-[13px] text-white/60 mt-2">Sign in to view jobs and track applications</p>
        </div>

        <form className="space-y-5" onSubmit={handleLogin}>
          <div className="space-y-1.5">
            <label className="text-[11px] font-bold text-white/80 uppercase tracking-wider">Email address</label>
            <input
              type="email"
              defaultValue="candidate@hireiq.com"
              className="w-full h-11 px-4 rounded-xl bg-login-bg/50 border border-white/10 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-coral/50 transition"
              required
            />
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="text-[11px] font-bold text-white/80 uppercase tracking-wider">Password</label>
              <button type="button" className="text-[10px] text-amber font-bold hover:underline">Forgot?</button>
            </div>
            <div className="relative">
              <input
                type={showPwd ? "text" : "password"}
                defaultValue="hireiq123"
                className="w-full h-11 pl-4 pr-10 rounded-xl bg-login-bg/50 border border-white/10 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-coral/50 transition"
                required
              />
              <button type="button" onClick={() => setShowPwd(!showPwd)} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition">
                {showPwd ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          <button type="submit" className="w-full h-11 mt-2 rounded-xl bg-coral text-white font-bold text-sm hover:bg-coral-dark transition-all shadow-lg shadow-coral/20 active:scale-[0.98]">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}
