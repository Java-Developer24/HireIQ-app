import { Link } from "react-router-dom";
import { CandidateDashboardLayout } from "@/components/layout/CandidateDashboardLayout";
import { MapPin, Clock, Briefcase, ArrowRight } from "lucide-react";

export default function CandidateJobs() {
  const jobs = [
    { id: 1, title: "Senior Backend Engineer", location: "Remote", type: "Full-time", dept: "Engineering" },
    { id: 2, title: "Product Manager", location: "New York, NY", type: "Full-time", dept: "Product" },
    { id: 3, title: "Data Analyst", location: "London, UK", type: "Contract", dept: "Data" },
  ];

  return (
    <CandidateDashboardLayout title="Job Postings">
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-charcoal">Open Roles at HireIQ Partners</h2>
          <div className="text-sm text-charcoal-muted font-medium">3 available positions</div>
        </div>

        <div className="grid gap-4">
          {jobs.map((job) => (
            <div key={job.id} className="bg-white rounded-2xl border border-charcoal/10 p-6 flex items-center justify-between hover:shadow-md transition">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-bold text-charcoal">{job.title}</h3>
                  <span className="px-2.5 py-1 rounded-md bg-amber-soft text-amber text-[10px] font-bold uppercase tracking-wider">
                    {job.dept}
                  </span>
                </div>

                <div className="flex items-center gap-4 text-sm text-charcoal-muted">
                  <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4" /> {job.location}</span>
                  <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> {job.type}</span>
                  <span className="flex items-center gap-1.5"><Briefcase className="h-4 w-4" /> Entry to Mid</span>
                </div>
              </div>

              <Link
                to={`/apply/${job.id}`}
                className="h-11 px-6 rounded-xl bg-coral text-white font-bold text-sm flex items-center gap-2 hover:bg-coral-dark transition shadow-sm"
              >
                Apply Now <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </CandidateDashboardLayout>
  );
}
