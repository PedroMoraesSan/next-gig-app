"use client"

import { useState } from "react"
import { JobCard } from "@/components/job-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { EmptyState } from "@/components/empty-state"
import { ArrowDownAZ, ArrowUpAZ, Calendar, Clock, Filter, SearchIcon, X } from "lucide-react"

// Sample job data
const allJobs = [
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
    experience: "Senior",
    remote: true,
    category: "Engineering",
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
    experience: "Mid",
    remote: false,
    category: "Design",
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
    experience: "Senior",
    remote: true,
    category: "Engineering",
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
    experience: "Mid",
    remote: false,
    category: "Product",
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
    experience: "Senior",
    remote: true,
    category: "Engineering",
  },
  {
    id: "6",
    title: "Junior Frontend Developer",
    company: "WebSolutions",
    location: "Chicago, IL",
    salary: "$70,000 - $90,000",
    type: "Full-time",
    logo: "/placeholder.svg",
    posted: "Posted 4 days ago",
    saved: false,
    featured: false,
    experience: "Entry",
    remote: false,
    category: "Engineering",
  },
  {
    id: "7",
    title: "Content Writer",
    company: "ContentCo",
    location: "Remote",
    salary: "$60,000 - $80,000",
    type: "Part-time",
    logo: "/placeholder.svg",
    posted: "Posted 1 week ago",
    saved: false,
    featured: false,
    experience: "Mid",
    remote: true,
    category: "Marketing",
  },
  {
    id: "8",
    title: "Data Scientist",
    company: "AnalyticsPro",
    location: "Boston, MA (Hybrid)",
    salary: "$140,000 - $170,000",
    type: "Full-time",
    logo: "/placeholder.svg",
    posted: "Posted 3 days ago",
    saved: false,
    featured: true,
    experience: "Senior",
    remote: true,
    category: "Data",
  },
]

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filters, setFilters] = useState({
    jobType: [],
    remote: false,
    experience: [],
    salary: [50, 150],
    category: [],
    postedWithin: "",
  })
  const [sort, setSort] = useState("relevance")
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [activeFilters, setActiveFilters] = useState<string[]>([])

  // Apply filters and search
  const filteredJobs = allJobs.filter((job) => {
    // Search term filter
    if (
      searchTerm &&
      !job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !job.company.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return false
    }

    // Job type filter
    if (filters.jobType.length > 0 && !filters.jobType.includes(job.type)) {
      return false
    }

    // Remote filter
    if (filters.remote && !job.remote) {
      return false
    }

    // Experience filter
    if (filters.experience.length > 0 && !filters.experience.includes(job.experience)) {
      return false
    }

    // Category filter
    if (filters.category.length > 0 && !filters.category.includes(job.category)) {
      return false
    }

    // Posted within filter
    if (filters.postedWithin) {
      const days = Number.parseInt(job.posted.split(" ")[1])
      if (filters.postedWithin === "1day" && days > 1) return false
      if (filters.postedWithin === "3days" && days > 3) return false
      if (filters.postedWithin === "1week" && days > 7) return false
      if (filters.postedWithin === "2weeks" && days > 14) return false
    }

    return true
  })

  // Sort jobs
  const sortedJobs = [...filteredJobs].sort((a, b) => {
    if (sort === "newest") {
      return Number.parseInt(a.posted.split(" ")[1]) - Number.parseInt(b.posted.split(" ")[1])
    } else if (sort === "oldest") {
      return Number.parseInt(b.posted.split(" ")[1]) - Number.parseInt(a.posted.split(" ")[1])
    } else if (sort === "az") {
      return a.title.localeCompare(b.title)
    } else if (sort === "za") {
      return b.title.localeCompare(a.title)
    }
    // Default: relevance (featured first)
    return b.featured ? 1 : -1
  })

  const updateFilter = (key: string, value: any) => {
    setFilters({ ...filters, [key]: value })
    updateActiveFilters(key, value)
  }

  const updateActiveFilters = (key: string, value: any) => {
    let newActiveFilters = [...activeFilters]

    // Remove existing filters for this key
    newActiveFilters = newActiveFilters.filter((filter) => !filter.startsWith(`${key}:`))

    // Add new filters
    if (Array.isArray(value) && value.length > 0) {
      value.forEach((v: string) => {
        newActiveFilters.push(`${key}:${v}`)
      })
    } else if (key === "remote" && value) {
      newActiveFilters.push(`${key}:true`)
    } else if (key === "salary") {
      newActiveFilters.push(`${key}:$${value[0]}k-$${value[1]}k`)
    } else if (key === "postedWithin" && value) {
      const labels: Record<string, string> = {
        "1day": "Last 24 hours",
        "3days": "Last 3 days",
        "1week": "Last week",
        "2weeks": "Last 2 weeks",
      }
      newActiveFilters.push(`${key}:${labels[value]}`)
    }

    setActiveFilters(newActiveFilters)
  }

  const removeFilter = (filter: string) => {
    const [key, value] = filter.split(":")
    const newFilters = { ...filters }

    if (key === "jobType" || key === "experience" || key === "category") {
      newFilters[key] = (newFilters[key] as string[]).filter((v) => v !== value)
    } else if (key === "remote") {
      newFilters.remote = false
    } else if (key === "postedWithin") {
      newFilters.postedWithin = ""
    }

    setFilters(newFilters)
    setActiveFilters(activeFilters.filter((f) => f !== filter))
  }

  const clearAllFilters = () => {
    setFilters({
      jobType: [],
      remote: false,
      experience: [],
      salary: [50, 150],
      category: [],
      postedWithin: "",
    })
    setActiveFilters([])
    setSearchTerm("")
  }

  return (
    <div className="container px-4 py-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Search Jobs</h1>
        <p className="text-muted-foreground">Find the perfect job opportunity for your career</p>
      </div>

      <div className="mb-6 flex flex-col gap-4">
        <div className="flex flex-col gap-4 sm:flex-row">
          <div className="relative flex-1">
            <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Job title, company, or keyword"
              className="pl-9"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <Select value={sort} onValueChange={setSort}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="relevance">Relevance</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="oldest">Oldest</SelectItem>
                <SelectItem value="az">A-Z</SelectItem>
                <SelectItem value="za">Z-A</SelectItem>
              </SelectContent>
            </Select>
            <Button
              variant={isFilterOpen ? "default" : "outline"}
              className="gap-2 sm:hidden"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <Filter className="h-4 w-4" />
              Filters
            </Button>
          </div>
        </div>

        {activeFilters.length > 0 && (
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm text-muted-foreground">Active filters:</span>
            {activeFilters.map((filter) => (
              <Badge key={filter} variant="outline" className="gap-1">
                {filter.split(":")[1]}
                <button onClick={() => removeFilter(filter)}>
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            ))}
            <Button variant="ghost" size="sm" onClick={clearAllFilters}>
              Clear all
            </Button>
          </div>
        )}
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <Card
          className={`md:block ${isFilterOpen ? "block" : "hidden"} h-fit sticky top-20 overflow-auto max-h-[calc(100vh-8rem)]`}
        >
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Filters</h2>
              <Button variant="ghost" size="sm" onClick={clearAllFilters}>
                Reset
              </Button>
            </div>
            <Separator className="my-4" />

            <div className="space-y-6">
              {/* Job Type Filter */}
              <div className="space-y-4">
                <h3 className="font-medium">Job Type</h3>
                <div className="space-y-2">
                  {["Full-time", "Part-time", "Contract", "Freelance", "Internship"].map((type) => (
                    <div key={type} className="flex items-center space-x-2">
                      <Checkbox
                        id={`job-type-${type}`}
                        checked={filters.jobType.includes(type)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            updateFilter("jobType", [...filters.jobType, type])
                          } else {
                            updateFilter(
                              "jobType",
                              filters.jobType.filter((t) => t !== type),
                            )
                          }
                        }}
                      />
                      <Label htmlFor={`job-type-${type}`}>{type}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Remote Filter */}
              <div className="space-y-4">
                <h3 className="font-medium">Remote Options</h3>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="remote"
                    checked={filters.remote}
                    onCheckedChange={(checked) => updateFilter("remote", checked)}
                  />
                  <Label htmlFor="remote">Remote only</Label>
                </div>
              </div>

              <Separator />

              {/* Experience Level Filter */}
              <div className="space-y-4">
                <h3 className="font-medium">Experience Level</h3>
                <div className="space-y-2">
                  {["Entry", "Mid", "Senior", "Lead"].map((level) => (
                    <div key={level} className="flex items-center space-x-2">
                      <Checkbox
                        id={`experience-${level}`}
                        checked={filters.experience.includes(level)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            updateFilter("experience", [...filters.experience, level])
                          } else {
                            updateFilter(
                              "experience",
                              filters.experience.filter((e) => e !== level),
                            )
                          }
                        }}
                      />
                      <Label htmlFor={`experience-${level}`}>{level} Level</Label>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Salary Range Filter */}
              <div className="space-y-4">
                <h3 className="font-medium">Salary Range (in thousands)</h3>
                <div className="space-y-4">
                  <Slider
                    value={filters.salary}
                    min={0}
                    max={300}
                    step={10}
                    onValueChange={(value) => updateFilter("salary", value)}
                  />
                  <div className="flex items-center justify-between">
                    <span className="text-sm">${filters.salary[0]}k</span>
                    <span className="text-sm">${filters.salary[1]}k</span>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Job Category Filter */}
              <div className="space-y-4">
                <h3 className="font-medium">Job Category</h3>
                <div className="space-y-2">
                  {["Engineering", "Design", "Product", "Marketing", "Sales", "Data", "HR"].map((category) => (
                    <div key={category} className="flex items-center space-x-2">
                      <Checkbox
                        id={`category-${category}`}
                        checked={filters.category.includes(category)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            updateFilter("category", [...filters.category, category])
                          } else {
                            updateFilter(
                              "category",
                              filters.category.filter((c) => c !== category),
                            )
                          }
                        }}
                      />
                      <Label htmlFor={`category-${category}`}>{category}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Date Posted Filter */}
              <div className="space-y-4">
                <h3 className="font-medium">Date Posted</h3>
                <Select value={filters.postedWithin} onValueChange={(value) => updateFilter("postedWithin", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Any time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any time</SelectItem>
                    <SelectItem value="1day">Last 24 hours</SelectItem>
                    <SelectItem value="3days">Last 3 days</SelectItem>
                    <SelectItem value="1week">Last week</SelectItem>
                    <SelectItem value="2weeks">Last 2 weeks</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="md:col-span-3">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              {sortedJobs.length} {sortedJobs.length === 1 ? "job" : "jobs"} found
            </p>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground hidden sm:inline-block">Sort by:</span>
              <Select value={sort} onValueChange={setSort} className="hidden sm:inline-flex">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">
                    <div className="flex items-center gap-2">Relevance</div>
                  </SelectItem>
                  <SelectItem value="newest">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      Newest
                    </div>
                  </SelectItem>
                  <SelectItem value="oldest">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      Oldest
                    </div>
                  </SelectItem>
                  <SelectItem value="az">
                    <div className="flex items-center gap-2">
                      <ArrowDownAZ className="h-4 w-4" />
                      A-Z
                    </div>
                  </SelectItem>
                  <SelectItem value="za">
                    <div className="flex items-center gap-2">
                      <ArrowUpAZ className="h-4 w-4" />
                      Z-A
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {sortedJobs.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2">
              {sortedJobs.map((job) => (
                <JobCard key={job.id} {...job} />
              ))}
            </div>
          ) : (
            <EmptyState
              icon={<SearchIcon className="h-10 w-10 text-muted-foreground" />}
              title="No jobs found"
              description="Try adjusting your search or filters to find what you're looking for."
              action={{
                label: "Clear Filters",
                onClick: clearAllFilters,
              }}
            />
          )}

          {sortedJobs.length > 0 && (
            <div className="mt-8 flex justify-center">
              <Button variant="outline">Load More Jobs</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
