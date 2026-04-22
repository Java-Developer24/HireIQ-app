import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Eye, EyeOff, AlertCircle } from "lucide-react";
import { HireIqLogo } from "@/components/HireIqLogo";

const LoginCard = ({ error = false }: { error?: boolean }) => {
  const [showPwd, setShowPwd] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-[420px] bg-white rounded-2xl border border-ink/10 p-10 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.08)]">
      <div className="flex justify-center"><HireIqLogo /></div>
      <h1 className="mt-6 text-center font-display font-bold text-xl text-ink">Sign in to your account</h1>
      <p className="mt-1 text-center text-[13px] text-ink-muted">AI-powered hiring, fully automated</p>

      <form
        className="mt-7 space-y-4"
        onSubmit={(e) => { e.preventDefault(); if (!error) navigate("/dashboard"); }}
      >
        <div>
          <label className="text-xs font-medium text-ink mb-1.5 block">Work email</label>
          <input
            type="email"
            placeholder="you@company.com"
            defaultValue={error ? "azeem@" : ""}
            className={`w-full h-11 px-3.5 rounded-xl bg-cream/60 border text-sm text-ink placeholder:text-ink-muted/60 focus:outline-none focus:ring-2 focus:ring-forest/20 transition ${error ? "border-destructive" : "border-ink/15"}`}
          />
        </div>
        <div>
          <label className="text-xs font-medium text-ink mb-1.5 block">Password</label>
          <div className="relative">
            <input
              type={showPwd ? "text" : "password"}
              defaultValue={error ? "wrong" : ""}
              className={`w-full h-11 pl-3.5 pr-10 rounded-xl bg-cream/60 border border-ink/15 text-sm text-ink placeholder:text-ink-muted/60 focus:outline-none focus:ring-2 focus:ring-forest/20 transition`}
            />
            <button type="button" onClick={() => setShowPwd(!showPwd)} className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-muted hover:text-ink">
              {showPwd ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
          {error && (
            <div className="mt-2 flex items-center gap-1.5 text-xs text-destructive">
              <AlertCircle className="h-3.5 w-3.5" /> Invalid email or password
            </div>
          )}
          <div className="mt-2 text-right">
            <button type="button" className="text-xs text-forest hover:underline">Forgot password?</button>
          </div>
        </div>

        <button
          type="submit"
          className="w-full h-11 rounded-xl bg-forest text-cream font-semibold text-sm hover:bg-forest-deep transition"
        >
          Sign in
        </button>
      </form>

      <div className="my-5 flex items-center gap-3">
        <div className="flex-1 h-px bg-ink/10" />
        <span className="text-xs text-ink-muted">or</span>
        <div className="flex-1 h-px bg-ink/10" />
      </div>

      <button className="w-full h-11 rounded-xl bg-white border border-ink/15 text-sm font-medium text-ink hover:bg-cream/60 transition flex items-center justify-center gap-2.5">
        <svg className="h-4 w-4" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
        Continue with Google
      </button>

      <div className="mt-6 text-center text-xs text-ink-muted">
        New to HireIQ?{" "}
        <Link to="/onboarding" className="text-forest font-semibold hover:underline">Create organisation account</Link>
      </div>
    </div>
  );
};

const Login = () => {
  return (
    <div className="min-h-screen bg-cream grid-bg">
      <div className="container py-12">
        <Link to="/" className="inline-block mb-10"><HireIqLogo /></Link>
        <div className="flex justify-center">
          <LoginCard />
        </div>
        <p className="mt-10 text-center text-xs text-ink-muted">Trusted by 500+ recruiting teams</p>
      </div>
    </div>
  );
};

export default Login;