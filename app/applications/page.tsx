"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { EmptyState } from "@/components/empty-state"
import { ArrowUpDown, Briefcase, Calendar, Clock, Filter, HelpCircle, MapPin, ThumbsDown, ThumbsUp } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Sample applications data
const applications = [
  {
    id: "1",
    jobTitle: "Senior Frontend Developer",
    company: "TechCorp",
    location: "San Francisco, CA (Remote)",
    logo: "/placeholder.svg",
    appliedDate: "May 15, 2023",
    status: "interview",
    stage: "Technical Interview",
    nextStep: "Scheduled for May 25, 2023",
    lastUpdated: "2 days ago",
    hasUnreadMessages: true,
  },
  {
    id: "2",
    jobTitle: "UX Designer",
    company: "DesignHub",
    location: "New York, NY",
    logo: "/placeholder.svg",
    appliedDate: "May 10, 2023",
    status: "review",
    stage: "Application Review",
    nextStep: "Waiting for feedback",
    lastUpdated: "5 days ago",
    hasUnreadMessages: false,
  },
  {
    id: "3",
    jobTitle: "Backend Engineer",
    company: "DataSystems",
    location: "Austin, TX (Remote)",
    logo: "/placeholder.svg",
    appliedDate: "May 5, 2023",
    status: "offer",
    stage: "Offer Received",
    nextStep: "Respond by May 20, 2023",
    lastUpdated: "1 day ago",
    hasUnreadMessages: true,
  },
  {
    id: "4",
    jobTitle: "Product Manager",
    company: "ProductLabs",
    location: "Seattle, WA",
    logo: "/placeholder.svg",
    appliedDate: "April 28, 2023",
    status: "rejected",
    stage: "Application Rejected",
    nextStep: "N/A",
    lastUpdated: "1 week ago",
    hasUnreadMessages: false,
  },
  {
    id: "5",
    jobTitle: "DevOps Engineer",
    company: "CloudTech",
    location: "Remote",
    logo: "/placeholder.svg",
    appliedDate: "May 12, 2023",
    status: "review",
    stage: "Application Review",
    nextStep: "Waiting for feedback",
    lastUpdated: "3 days ago",
    hasUnreadMessages: false,
  },
]

export default function ApplicationsPage() {
  const [activeTab, setActiveTab] = useState("all")
  const [sort, setSort] = useState("newest")

  // Filter applications based on active tab
  const filteredApplications = applications.filter((app) => {
    if (activeTab === "all") return true
    if (activeTab === "review" && app.status === "review") return true
    if (activeTab === "interview" && app.status === "interview") return true
    if (activeTab === "offer" && app.status === "offer") return true
    if (activeTab === "rejected" && app.status === "rejected") return true
    return false
  })

  // Sort applications
  const sortedApplications = [...filteredApplications].sort((a, b) => {
    if (sort === "newest") {
      return new Date(b.appliedDate).getTime() - new Date(a.appliedDate).getTime()
    } else if (sort === "oldest") {
      return new Date(a.appliedDate).getTime() - new Date(b.appliedDate).getTime()
    } else if (sort === "updated") {
      // This is a simplification - in a real app, you'd use actual timestamps
      const aTime = a.lastUpdated.includes("day") ? Number.parseInt(a.lastUpdated) : 30
      const bTime = b.lastUpdated.includes("day") ? Number.parseInt(b.lastUpdated) : 30
      return aTime - bTime
    }
    return 0
  })

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "review":
        return <HelpCircle className="h-5 w-5 text-yellow-500" />
      case "interview":
        return <Clock className="h-5 w-5 text-blue-500" />
      case "offer":
        return <ThumbsUp className="h-5 w-5 text-green-500" />
      case "rejected":
        return <ThumbsDown className="h-5 w-5 text-red-500" />
      default:
        return <HelpCircle className="h-5 w-5 text-muted-foreground" />
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "review":
        return (
          <Badge variant="outline" className="border-yellow-500 text-yellow-500">
            Under Review
          </Badge>
        )
      case "interview":
        return (
          <Badge variant="outline" className="border-blue-500 text-blue-500">
            Interview
          </Badge>
        )
      case "offer":
        return (
          <Badge variant="outline" className="border-green-500 text-green-500">
            Offer
          </Badge>
        )
      case "rejected":
        return (
          <Badge variant="outline" className="border-red-500 text-red-500">
            Rejected
          </Badge>
        )
      default:
        return <Badge variant="outline">Unknown</Badge>
    }
  }

  return (
    <div className="container px-4 py-6">
      <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold">My Applications</h1>
          <p className="text-muted-foreground">Track and manage your job applications</p>
        </div>
        <div className="flex gap-2">
          <Select value={sort} onValueChange={setSort}>
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="oldest">Oldest First</SelectItem>
              <SelectItem value="updated">Recently Updated</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="gap-2">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="review">Under Review</TabsTrigger>
          <TabsTrigger value="interview">Interviews</TabsTrigger>
          <TabsTrigger value="offer">Offers</TabsTrigger>
          <TabsTrigger value="rejected">Rejected</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="space-y-4">
          {sortedApplications.length > 0 ? (
            sortedApplications.map((application) => (
              <Link href={`/applications/${application.id}`} key={application.id}>
                <Card className="hover:bg-muted/50 transition-colors">
                  <CardContent className="p-4">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                      <Avatar className="h-12 w-12 rounded-md">
                        <AvatarImage src={application.logo || "/placeholder.svg"} alt={application.company} />
                        <AvatarFallback className="rounded-md">
                          {application.company.substring(0, 2).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-semibold">{application.jobTitle}</h3>
                            <p className="text-sm text-muted-foreground">{application.company}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            {getStatusBadge(application.status)}
                            {application.hasUnreadMessages && <div className="h-2 w-2 rounded-full bg-primary"></div>}
                          </div>
                        </div>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            <span>{application.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            <span>Applied {application.appliedDate}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            <span>Updated {application.lastUpdated}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="hidden flex-col items-center sm:flex">
                          {getStatusIcon(application.status)}
                          <span className="mt-1 text-xs">{application.stage}</span>
                        </div>
                        <Button variant="ghost" size="icon" className="ml-auto sm:ml-0">
                          <ArrowUpDown className="h-4 w-4 rotate-90" />
                          <span className="sr-only">View Details</span>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))
          ) : (
            <EmptyState
              icon={<Briefcase className="h-10 w-10 text-muted-foreground" />}
              title="No applications found"
              description={
                activeTab === "all"
                  ? "You haven't applied to any jobs yet. Start your job search to find opportunities."
                  : `You don't have any applications in the "${activeTab}" status.`
              }
              action={{
                label: "Find Jobs",
                onClick: () => (window.location.href = "/home"),
              }}
            />
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
