import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Bookmark, Building2, Calendar, Clock, DollarSign, Globe, MapPin, Share2 } from "lucide-react"

// Sample job data
const job = {
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
  description: `
    <p>We are looking for a Senior Frontend Developer to join our team. You will be responsible for building and maintaining our web applications.</p>
    
    <h3>Responsibilities:</h3>
    <ul>
      <li>Develop new user-facing features using React.js</li>
      <li>Build reusable components and front-end libraries for future use</li>
      <li>Translate designs and wireframes into high-quality code</li>
      <li>Optimize components for maximum performance across a vast array of web-capable devices and browsers</li>
    </ul>
    
    <h3>Requirements:</h3>
    <ul>
      <li>3+ years of experience with React.js</li>
      <li>Strong proficiency in JavaScript, including DOM manipulation and the JavaScript object model</li>
      <li>Thorough understanding of React.js and its core principles</li>
      <li>Experience with popular React.js workflows (such as Flux or Redux)</li>
      <li>Familiarity with newer specifications of ECMAScript</li>
    </ul>
  `,
  benefits: [
    "Competitive salary",
    "Health, dental, and vision insurance",
    "401(k) matching",
    "Unlimited PTO",
    "Remote work options",
    "Professional development budget",
  ],
}

export default function JobDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="container px-4 py-6">
      <div className="mb-6">
        <Button variant="ghost" size="sm" asChild className="mb-4">
          <Link href="/home">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Jobs
          </Link>
        </Button>

        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="flex items-start gap-4">
            <Avatar className="h-16 w-16 rounded-md">
              <AvatarImage src={job.logo || "/placeholder.svg"} alt={job.company} />
              <AvatarFallback className="rounded-md">{job.company.substring(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-2xl font-bold">{job.title}</h1>
              <p className="text-lg text-muted-foreground">{job.company}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                <Badge variant="secondary">{job.type}</Badge>
                {job.featured && (
                  <Badge variant="outline" className="border-primary text-primary">
                    Featured
                  </Badge>
                )}
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <Share2 className="h-4 w-4" />
              <span className="sr-only">Share</span>
            </Button>
            <Button variant="outline" size="icon">
              <Bookmark className="h-4 w-4" />
              <span className="sr-only">Save</span>
            </Button>
            <Button>Apply Now</Button>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Job Description</CardTitle>
            </CardHeader>
            <CardContent>
              <div
                dangerouslySetInnerHTML={{ __html: job.description }}
                className="prose max-w-none dark:prose-invert"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Benefits</CardTitle>
              <CardDescription>What you'll get working at {job.company}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="grid gap-2 sm:grid-cols-2">
                {job.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Job Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <DollarSign className="mt-0.5 h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">Salary</p>
                  <p className="text-muted-foreground">{job.salary}</p>
                </div>
              </div>
              <Separator />
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-muted-foreground">{job.location}</p>
                </div>
              </div>
              <Separator />
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">Job Type</p>
                  <p className="text-muted-foreground">{job.type}</p>
                </div>
              </div>
              <Separator />
              <div className="flex items-start gap-3">
                <Calendar className="mt-0.5 h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">Posted</p>
                  <p className="text-muted-foreground">{job.posted.replace("Posted ", "")}</p>
                </div>
              </div>
              <Separator />
              <div className="flex items-start gap-3">
                <Building2 className="mt-0.5 h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">Company Size</p>
                  <p className="text-muted-foreground">201-500 employees</p>
                </div>
              </div>
              <Separator />
              <div className="flex items-start gap-3">
                <Globe className="mt-0.5 h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">Website</p>
                  <a href="#" className="text-primary hover:underline">
                    techcorp.com
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Similar Jobs</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <Avatar className="h-10 w-10 rounded-md">
                  <AvatarFallback className="rounded-md">DS</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-medium hover:text-primary hover:underline">
                    <Link href="/job/3">Frontend Developer</Link>
                  </h3>
                  <p className="text-sm text-muted-foreground">DataSystems • Remote</p>
                </div>
              </div>
              <Separator />
              <div className="flex items-start gap-3">
                <Avatar className="h-10 w-10 rounded-md">
                  <AvatarFallback className="rounded-md">DH</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-medium hover:text-primary hover:underline">
                    <Link href="/job/2">UI Developer</Link>
                  </h3>
                  <p className="text-sm text-muted-foreground">DesignHub • New York, NY</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <Button size="lg">Apply for this Position</Button>
      </div>
    </div>
  )
}
