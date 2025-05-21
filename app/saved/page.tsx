import { JobCard } from "@/components/job-card"
import { EmptyState } from "@/components/empty-state"
import { Bookmark } from "lucide-react"

// Sample saved jobs data
const savedJobs = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    company: "TechCorp",
    location: "San Francisco, CA (Remote)",
    salary: "$120,000 - $150,000",
    type: "Full-time",
    logo: "/placeholder.svg",
    posted: "Posted 2 days ago",
    saved: true,
    featured: true,
  },
  {
    id: "5",
    title: "DevOps Engineer",
    company: "CloudTech",
    location: "Remote",
    salary: "$125,000 - $155,000",
    type: "Contract",
    logo: "/placeholder.svg",
    posted: "Posted 2 days ago",
    saved: true,
    featured: false,
  },
]

export default function SavedJobsPage() {
  // Toggle this to show empty state
  const hasSavedJobs = savedJobs.length > 0

  return (
    <div className="container px-4 py-6">
      <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold">Saved Jobs</h1>
          <p className="text-muted-foreground">
            {hasSavedJobs
              ? `You have ${savedJobs.length} saved job${savedJobs.length !== 1 ? "s" : ""}`
              : "You haven't saved any jobs yet"}
          </p>
        </div>
      </div>

      {hasSavedJobs ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {savedJobs.map((job) => (
            <JobCard key={job.id} {...job} />
          ))}
        </div>
      ) : (
        <EmptyState
          icon={<Bookmark className="h-10 w-10 text-muted-foreground" />}
          title="No saved jobs yet"
          description="Jobs you save will appear here. Save jobs to compare them later or apply when you're ready."
          action={{
            label: "Find Jobs",
            onClick: () => (window.location.href = "/home"),
          }}
        />
      )}
    </div>
  )
}
