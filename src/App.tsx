import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import Login from "./pages/Login.tsx";
import Onboarding from "./pages/Onboarding.tsx";
import Dashboard from "./pages/Dashboard.tsx";

// Recruiter Pages
import JobsList from "./pages/recruiter/JobsList.tsx";
import CreateJobWizard from "./pages/recruiter/CreateJobWizard.tsx";
import PipelineView from "./pages/recruiter/PipelineView.tsx";
import CandidateProfile from "./pages/recruiter/CandidateProfile.tsx";
import ReviewQueue from "./pages/recruiter/ReviewQueue.tsx";
import Settings from "./pages/recruiter/Settings.tsx";

// Candidate Pages
import ApplyPage from "./pages/candidate/ApplyPage.tsx";
import DeviceCheck from "./pages/candidate/DeviceCheck.tsx";
import PracticeQuestion from "./pages/candidate/PracticeQuestion.tsx";
import VideoInterview from "./pages/candidate/VideoInterview.tsx";
import AssessmentMCQ from "./pages/candidate/AssessmentMCQ.tsx";
import AssessmentCoding from "./pages/candidate/AssessmentCoding.tsx";
import SubmissionDone from "./pages/candidate/SubmissionDone.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Recruiter Routes */}
          <Route path="/jobs" element={<JobsList />} />
          <Route path="/jobs/new" element={<CreateJobWizard />} />
          <Route path="/jobs/edit/:id" element={<CreateJobWizard />} />
          <Route path="/jobs/:id/pipeline" element={<PipelineView />} />
          <Route path="/candidates/:id" element={<CandidateProfile />} />
          <Route path="/review" element={<ReviewQueue />} />
          <Route path="/settings" element={<Settings />} />

          {/* Candidate Routes */}
          <Route path="/apply/:jobId" element={<ApplyPage />} />
          <Route path="/device-check" element={<DeviceCheck />} />
          <Route path="/practice" element={<PracticeQuestion />} />
          <Route path="/interview" element={<VideoInterview />} />
          <Route path="/assessment-mcq" element={<AssessmentMCQ />} />
          <Route path="/assessment-coding" element={<AssessmentCoding />} />
          <Route path="/submission-done" element={<SubmissionDone />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
