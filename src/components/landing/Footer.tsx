import { Twitter, Linkedin, Github } from "lucide-react";
import { HireIqLogo } from "@/components/HireIqLogo";

export const Footer = () => (
  <footer className="bg-cream-warm border-t border-ink/10">
    <div className="container py-16">
      <div className="grid md:grid-cols-4 gap-10">
        <div>
          <HireIqLogo />
          <p className="mt-4 text-sm text-ink-muted max-w-[220px]">
            Autonomous hiring for teams who'd rather build than screen.
          </p>
          <div className="mt-5 flex gap-3">
            {[Twitter, Linkedin, Github].map((Icon, i) => (
              <a key={i} href="#" className="h-9 w-9 rounded-full border border-ink/15 flex items-center justify-center text-ink-muted hover:bg-forest hover:text-cream hover:border-forest transition">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <FooterCol title="Product" links={["Resume scoring", "Video interviews", "Coding tests", "Integrations"]} />
        <FooterCol title="Company" links={["About", "Customers", "Careers", "Blog"]} />
        <FooterCol title="Legal" links={["Privacy", "Terms", "DPA", "Security"]} />
      </div>
      <div className="mt-14 pt-6 border-t border-ink/10 text-xs text-ink-muted text-center">
        © 2025 HireIQ · Built by Data Panther Solutions · Hyderabad, India
      </div>
    </div>
  </footer>
);

const FooterCol = ({ title, links }: { title: string; links: string[] }) => (
  <div>
    <div className="text-sm font-semibold text-ink mb-4">{title}</div>
    <ul className="space-y-2.5">
      {links.map((l) => (
        <li key={l}><a href="#" className="text-sm text-ink-muted hover:text-ink transition">{l}</a></li>
      ))}
    </ul>
  </div>
);