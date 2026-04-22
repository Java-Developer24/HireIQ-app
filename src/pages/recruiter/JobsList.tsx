import { RecruiterLayout } from "@/components/layout/RecruiterLayout";
import { Search, MapPin, Clock, Briefcase, MoreHorizontal, Link as LinkIcon, Plus, Grid, List as ListIcon } from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

const StatusBadge = ({ status, pending }: { status: string; pending?: number }) => {
  if (status === "Active") {
    return (
      <div className="flex items-center gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold bg-lime/20 text-forest">
          <span className="h-1.5 w-1.5 rounded-full bg-lime" />
          Active
        </span>
        {pending && pending > 0 && (
          <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-amber-soft text-amber-warm text-[10px] font-bold">
            {pending} pending review
          </span>
        )}
      </div>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold bg-ink/10 text-ink-muted">
      <span className="h-1.5 w-1.5 rounded-full bg-ink-muted" />
      {status}
    </span>
  );
};

const JobCard = ({ job }: { job: any }) => (
  <div className={`bg-white border border-ink/10 rounded-2xl p-5 hover:shadow-sm transition group ${job.status === "Paused" ? "opacity-75" : ""}`}>
    <div className="flex justify-between items-start mb-4">
      <div>
        <div className="flex items-center gap-2">
          <h3 className="font-display font-bold text-lg text-ink">{job.title}</h3>
          <span className="px-2 py-0.5 rounded-md bg-[#E8EDFF] text-[#2D5BFF] text-[10px] font-bold uppercase tracking-wider">Senior</span>
        </div>
        <div className="flex items-center gap-3 mt-1.5 text-xs text-ink-muted">
          <div className="flex items-center gap-1">
            <Briefcase className="h-3.5 w-3.5" />
            <span>Engineering · Remote · Full-time</span>
          </div>
        </div>
        <div className="flex items-center gap-1 mt-1 text-[11px] text-ink-muted/70">
          <MapPin className="h-3 w-3" />
          <span>Hyderabad, India · Posted 5 days ago</span>
        </div>
      </div>
      <div className="flex items-center gap-1">
        <button className="p-1.5 rounded-lg hover:bg-cream/60 text-ink-muted hover:text-ink transition">
          <LinkIcon className="h-4 w-4" />
        </button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="p-1.5 rounded-lg hover:bg-cream/60 text-ink-muted hover:text-ink transition">
              <MoreHorizontal className="h-4 w-4" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-40">
            <DropdownMenuItem asChild>
              <Link to={`/jobs/edit/${job.id}`}>Edit</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>Pause</DropdownMenuItem>
            <DropdownMenuItem>Duplicate</DropdownMenuItem>
            <DropdownMenuItem className="text-destructive">Close job</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>

    <div className="h-px bg-ink/5 w-full my-4" />

    <div className="flex items-center justify-between">
      <div className="flex gap-4">
        <div>
          <div className="text-[11px] text-ink-muted">Applied</div>
          <div className="text-sm font-bold text-ink">{job.applied}</div>
        </div>
        <div>
          <div className="text-[11px] text-ink-muted">In progress</div>
          <div className="text-sm font-bold text-ink">{job.inProgress}</div>
        </div>
        <div>
          <div className="text-[11px] text-ink-muted">Shortlisted</div>
          <div className="text-sm font-bold text-forest">{job.shortlisted}</div>
        </div>
      </div>
      <Link to={`/jobs/${job.id}/pipeline`} className="block">
        <StatusBadge status={job.status} pending={job.pending} />
      </Link>
    </div>
  </div>
);

const JobsList = () => {
  const jobs = [
    { id: 1, title: "Senior Backend Engineer", applied: 24, inProgress: 18, shortlisted: 3, pending: 2, status: "Active" },
    { id: 2, title: "Product Manager", applied: 31, inProgress: 20, shortlisted: 5, pending: 5, status: "Active" },
    { id: 3, title: "Data Analyst", applied: 12, inProgress: 8, shortlisted: 2, pending: 0, status: "Active" },
    { id: 4, title: "Sales Executive", applied: 19, inProgress: 14, shortlisted: 4, pending: 0, status: "Paused" },
  ];

  return (
    <RecruiterLayout title="Jobs">
      <div className="p-6 space-y-5">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
             <button
                onClick={() => navigate("/dashboard")}
                className="h-8 w-8 rounded-lg border border-ink/10 flex items-center justify-center text-ink-muted hover:text-ink hover:bg-white transition shadow-sm"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
            <div className="flex items-center gap-2">
              <h1 className="font-display font-bold text-xl text-ink">Jobs</h1>
              <span className="text-xs text-ink-muted mt-1">(14)</span>
            </div>
          </div>
          <Link to="/jobs/new" className="inline-flex items-center gap-1.5 h-9 px-3 rounded-lg bg-forest text-cream text-xs font-bold hover:bg-forest-deep transition shadow-sm">
            <Plus className="h-3.5 w-3.5" /> Create new job
          </Link>
        </div>

        {/* Filter bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div className="flex items-center gap-3 flex-1">
            <div className="relative w-full max-w-[280px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-ink-muted" />
              <input
                type="text"
                placeholder="Search by title or department"
                className="w-full h-9 pl-9 pr-4 rounded-lg border border-ink/10 bg-white text-xs focus:outline-none focus:ring-2 focus:ring-forest/10 transition shadow-sm"
              />
            </div>
            <div className="flex bg-white border border-ink/10 rounded-lg p-0.5 shadow-sm">
              {["All (14)", "Active (6)", "Paused (2)", "Closed (6)"].map((tab, i) => (
                <button
                  key={tab}
                  className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition ${
                    i === 1 ? "bg-forest text-cream" : "text-ink-muted hover:text-ink"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <select className="h-9 px-3 pr-8 rounded-lg border border-ink/10 bg-white text-xs font-bold focus:outline-none transition appearance-none relative shadow-sm">
              <option>Department</option>
              <option>Engineering</option>
              <option>Product</option>
              <option>Sales</option>
            </select>
            <div className="flex border border-ink/10 rounded-lg overflow-hidden shadow-sm">
              <button className="p-2 bg-white border-r border-ink/10 text-forest transition">
                <Grid className="h-3.5 w-3.5" />
              </button>
              <button className="p-2 bg-white text-ink-muted hover:text-ink transition">
                <ListIcon className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
          {/* Duplicate cards for demo if needed */}
          {jobs.slice(0, 2).map((job) => (
            <JobCard key={`dup-${job.id}`} job={job} />
          ))}
        </div>

        <div className="pt-4 flex flex-col items-center gap-3">
          <p className="text-xs text-ink-muted">Showing 6 of 14 jobs</p>
          <button className="px-6 py-2 rounded-xl border border-ink/10 bg-white text-xs font-bold text-ink hover:bg-cream/40 transition">
            Load more
          </button>
        </div>
      </div>
    </RecruiterLayout>
  );
};

export default JobsList;
