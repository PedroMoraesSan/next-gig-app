import { JobCard } from "@/components/job-card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Filter } from "lucide-react"

// Sample job data
const jobs = [
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
    id: "2",
    title: "UX Designer",
    company: "DesignHub",
    location: "New York, NY",
    salary: "$90,000 - $110,000",
    type: "Full-time",
    logo: "/placeholder.svg",
    posted: "Posted 3 days ago",
    saved: false,
    featured: false,
  },
  {
    id: "3",
    title: "Backend Engineer",
    company: "DataSystems",
    location: "Austin, TX (Remote)",
    salary: "$130,000 - $160,000",
    type: "Full-time",
    logo: "/placeholder.svg",
    posted: "Posted 1 day ago",
    saved: false,
    featured: true,
  },
  {
    id: "4",
    title: "Product Manager",
    company: "ProductLabs",
    location: "Seattle, WA",
    salary: "$110,000 - $140,000",
    type: "Full-time",
    logo: "/placeholder.svg",
    posted: "Posted 5 days ago",
    saved: false,
    featured: false,
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

export default function HomePage() {
  return (
    <div className="container px-4 py-6">
      <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold">Find Your Next Job</h1>
          <p className="text-muted-foreground">Discover opportunities tailored for you</p>
        </div>
        <Button variant="outline" className="gap-2">
          <Filter className="h-4 w-4" />
          Filters
        </Button>
      </div>

      <Tabs defaultValue="recommended" className="mb-6">
        <TabsList>
          <TabsTrigger value="recommended">Recommended</TabsTrigger>
          <TabsTrigger value="recent">Recent</TabsTrigger>
          <TabsTrigger value="remote" className="gap-2">
            Remote
            <Badge variant="secondary" className="ml-1">
              New
            </Badge>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="recommended" className="mt-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {jobs.map((job) => (
              <JobCard key={job.id} {...job} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="recent" className="mt-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {jobs
              .sort((a, b) => Number.parseInt(a.posted.split(" ")[1]) - Number.parseInt(b.posted.split(" ")[1]))
              .map((job) => (
                <JobCard key={job.id} {...job} />
              ))}
          </div>
        </TabsContent>
        <TabsContent value="remote" className="mt-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {jobs
              .filter((job) => job.location.toLowerCase().includes("remote"))
              .map((job) => (
                <JobCard key={job.id} {...job} />
              ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-8">
        <h2 className="mb-4 text-xl font-semibold">Featured Jobs</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {jobs
            .filter((job) => job.featured)
            .map((job) => (
              <JobCard key={job.id} {...job} />
            ))}
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <Button variant="outline" className="gap-2">
          <Briefcase className="h-4 w-4" />
          Load More Jobs
        </Button>
      </div>
    </div>
  )
}
