"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import {
  ArrowLeft,
  Calendar,
  CheckCircle2,
  Clock,
  File,
  FileText,
  MapPin,
  MessageSquare,
  MoreHorizontal,
  Paperclip,
  Send,
  ThumbsUp,
  User,
  XCircle,
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample application data
const application = {
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
  salary: "$120,000 - $150,000",
  jobType: "Full-time",
  description: "We are looking for a Senior Frontend Developer to join our team...",
  timeline: [
    {
      id: "1",
      date: "May 15, 2023",
      time: "10:30 AM",
      title: "Application Submitted",
      description: "Your application was successfully submitted.",
      status: "completed",
    },
    {
      id: "2",
      date: "May 17, 2023",
      time: "2:45 PM",
      title: "Application Reviewed",
      description: "Your application was reviewed by the hiring team.",
      status: "completed",
    },
    {
      id: "3",
      date: "May 20, 2023",
      time: "11:00 AM",
      title: "Initial Screening",
      description: "You completed a 30-minute phone screening with Sarah from HR.",
      status: "completed",
    },
    {
      id: "4",
      date: "May 25, 2023",
      time: "1:00 PM",
      title: "Technical Interview",
      description: "Scheduled technical interview with the engineering team.",
      status: "current",
    },
    {
      id: "5",
      date: "TBD",
      time: "",
      title: "Final Interview",
      description: "Final interview with the hiring manager.",
      status: "upcoming",
    },
    {
      id: "6",
      date: "TBD",
      time: "",
      title: "Decision",
      description: "Final hiring decision.",
      status: "upcoming",
    },
  ],
  contacts: [
    {
      id: "1",
      name: "Sarah Johnson",
      title: "HR Manager",
      email: "sarah.johnson@techcorp.com",
      phone: "(555) 123-4567",
      avatar: "/placeholder.svg",
    },
    {
      id: "2",
      name: "Michael Chen",
      title: "Engineering Manager",
      email: "michael.chen@techcorp.com",
      phone: "(555) 987-6543",
      avatar: "/placeholder.svg",
    },
  ],
  messages: [
    {
      id: "1",
      sender: "Sarah Johnson",
      senderTitle: "HR Manager",
      senderAvatar: "/placeholder.svg",
      date: "May 17, 2023",
      time: "2:45 PM",
      content:
        "Hi John, thank you for applying to the Senior Frontend Developer position. We've reviewed your application and would like to schedule an initial phone screening. Are you available this Friday?",
      isUser: false,
    },
    {
      id: "2",
      sender: "John Doe",
      senderTitle: "Applicant",
      senderAvatar: "/placeholder.svg",
      date: "May 17, 2023",
      time: "3:30 PM",
      content:
        "Hi Sarah, thank you for considering my application. I'm available this Friday between 10 AM and 2 PM. Would any of those times work for you?",
      isUser: true,
    },
    {
      id: "3",
      sender: "Sarah Johnson",
      senderTitle: "HR Manager",
      senderAvatar: "/placeholder.svg",
      date: "May 18, 2023",
      time: "9:15 AM",
      content:
        "Great! Let's schedule the call for 11 AM on Friday. I'll send you a calendar invite with the details. Looking forward to speaking with you!",
      isUser: false,
    },
    {
      id: "4",
      sender: "John Doe",
      senderTitle: "Applicant",
      senderAvatar: "/placeholder.svg",
      date: "May 18, 2023",
      time: "9:45 AM",
      content: "Perfect, I've received the calendar invite. Looking forward to our conversation on Friday!",
      isUser: true,
    },
  ],
  documents: [
    {
      id: "1",
      name: "John_Doe_Resume.pdf",
      type: "resume",
      size: "1.2 MB",
      date: "May 15, 2023",
    },
    {
      id: "2",
      name: "Cover_Letter_TechCorp.pdf",
      type: "cover_letter",
      size: "0.8 MB",
      date: "May 15, 2023",
    },
    {
      id: "3",
      name: "Portfolio_2023.pdf",
      type: "portfolio",
      size: "3.5 MB",
      date: "May 15, 2023",
    },
  ],
  notes: [
    {
      id: "1",
      date: "May 20, 2023",
      content:
        "Phone screening went well. Interviewer seemed impressed with my React experience. Need to prepare for technical questions about state management and performance optimization for the next round.",
    },
    {
      id: "2",
      date: "May 18, 2023",
      content:
        "Researched the company more. They recently launched a new product in the fintech space. Should mention my experience with financial applications during the interview.",
    },
  ],
}

export default function ApplicationDetailPage({ params }: { params: { id: string } }) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "text-green-500 bg-green-500/10"
      case "current":
        return "text-blue-500 bg-blue-500/10"
      case "upcoming":
        return "text-muted-foreground bg-muted"
      default:
        return "text-muted-foreground bg-muted"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle2 className="h-5 w-5 text-green-500" />
      case "current":
        return <Clock className="h-5 w-5 text-blue-500" />
      case "upcoming":
        return <Clock className="h-5 w-5 text-muted-foreground" />
      default:
        return <Clock className="h-5 w-5 text-muted-foreground" />
    }
  }

  return (
    <div className="container px-4 py-6">
      <Button variant="ghost" size="sm" asChild className="mb-4">
        <Link href="/applications">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Applications
        </Link>
      </Button>

      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-start gap-4">
          <Avatar className="h-16 w-16 rounded-md">
            <AvatarImage src={application.logo || "/placeholder.svg"} alt={application.company} />
            <AvatarFallback className="rounded-md">{application.company.substring(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-2xl font-bold">{application.jobTitle}</h1>
            <p className="text-lg text-muted-foreground">{application.company}</p>
            <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                <span>{application.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                <span>Applied {application.appliedDate}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <MessageSquare className="h-4 w-4" />
            Contact
          </Button>
          <Button variant="outline" className="gap-2">
            <MoreHorizontal className="h-4 w-4" />
            Actions
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="space-y-6 md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Application Timeline</CardTitle>
              <CardDescription>Track your application progress</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative space-y-4 pl-6 before:absolute before:left-2 before:top-0 before:h-full before:w-[2px] before:bg-muted">
                {application.timeline.map((event, index) => (
                  <div key={event.id} className="relative">
                    <div
                      className={`absolute -left-6 flex h-4 w-4 items-center justify-center rounded-full ${getStatusColor(event.status)}`}
                    >
                      <div
                        className={`h-2 w-2 rounded-full ${event.status === "upcoming" ? "bg-muted-foreground" : "bg-current"}`}
                      ></div>
                    </div>
                    <div className="flex flex-col gap-1 pb-4 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="font-medium">{event.title}</h3>
                        <p className="text-sm text-muted-foreground">{event.description}</p>
                      </div>
                      <div className="text-right text-sm text-muted-foreground">
                        <p>{event.date}</p>
                        {event.time && <p>{event.time}</p>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="messages" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="messages">Messages</TabsTrigger>
              <TabsTrigger value="notes">Notes</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
            </TabsList>
            <TabsContent value="messages" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Messages</CardTitle>
                  <CardDescription>Communication with the hiring team</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    {application.messages.map((message) => (
                      <div key={message.id} className={`flex gap-4 ${message.isUser ? "flex-row-reverse" : ""}`}>
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={message.senderAvatar || "/placeholder.svg"} alt={message.sender} />
                          <AvatarFallback>{message.sender.substring(0, 2).toUpperCase()}</AvatarFallback>
                        </Avatar>
                        <div
                          className={`max-w-[80%] space-y-1 rounded-lg p-3 ${
                            message.isUser ? "bg-primary text-primary-foreground" : "bg-muted"
                          }`}
                        >
                          <div className="flex items-center justify-between gap-2">
                            <p className="text-sm font-medium">{message.sender}</p>
                            <p className="text-xs text-muted-foreground">
                              {message.date} at {message.time}
                            </p>
                          </div>
                          <p className="text-sm">{message.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="flex w-full items-center gap-2">
                    <Textarea placeholder="Type your message..." className="min-h-10" />
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon">
                        <Paperclip className="h-4 w-4" />
                        <span className="sr-only">Attach file</span>
                      </Button>
                      <Button size="icon">
                        <Send className="h-4 w-4" />
                        <span className="sr-only">Send message</span>
                      </Button>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="notes" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Notes</CardTitle>
                  <CardDescription>Keep track of important information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    {application.notes.map((note) => (
                      <div key={note.id} className="rounded-lg border p-4">
                        <div className="mb-2 flex items-center justify-between">
                          <p className="text-sm font-medium">{note.date}</p>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Actions</span>
                          </Button>
                        </div>
                        <p className="text-sm text-muted-foreground">{note.content}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="flex w-full items-center gap-2">
                    <Textarea placeholder="Add a new note..." className="min-h-10" />
                    <Button>Add Note</Button>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="documents" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Documents</CardTitle>
                  <CardDescription>Files submitted with your application</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    {application.documents.map((doc) => (
                      <div key={doc.id} className="flex items-center justify-between rounded-lg border p-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-muted">
                            <FileText className="h-5 w-5 text-muted-foreground" />
                          </div>
                          <div>
                            <p className="font-medium">{doc.name}</p>
                            <p className="text-xs text-muted-foreground">
                              {doc.size} • Uploaded on {doc.date}
                            </p>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          Download
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="gap-2">
                    <File className="h-4 w-4" />
                    Upload Document
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Application Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg bg-muted p-4">
                <div className="mb-2 flex items-center gap-2">
                  {application.status === "interview" ? (
                    <Clock className="h-5 w-5 text-blue-500" />
                  ) : application.status === "offer" ? (
                    <ThumbsUp className="h-5 w-5 text-green-500" />
                  ) : application.status === "rejected" ? (
                    <XCircle className="h-5 w-5 text-red-500" />
                  ) : (
                    <Clock className="h-5 w-5 text-yellow-500" />
                  )}
                  <h3 className="font-medium">{application.stage}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{application.nextStep}</p>
              </div>

              <Separator />

              <div className="space-y-2">
                <h3 className="font-medium">Job Details</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="text-muted-foreground">Job Type</div>
                  <div>{application.jobType}</div>
                  <div className="text-muted-foreground">Salary</div>
                  <div>{application.salary}</div>
                  <div className="text-muted-foreground">Location</div>
                  <div>{application.location}</div>
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <h3 className="font-medium">Key Contacts</h3>
                <div className="space-y-3">
                  {application.contacts.map((contact) => (
                    <div key={contact.id} className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={contact.avatar || "/placeholder.svg"} alt={contact.name} />
                        <AvatarFallback>{contact.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">{contact.name}</p>
                        <p className="text-xs text-muted-foreground">{contact.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Upcoming Tasks</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg border p-3">
                <div className="mb-2 flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  <p className="text-sm font-medium">Technical Interview</p>
                </div>
                <p className="text-xs text-muted-foreground">May 25, 2023 at 1:00 PM</p>
                <div className="mt-2 flex gap-2">
                  <Badge variant="outline" className="text-xs">
                    Google Meet
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    1 hour
                  </Badge>
                </div>
              </div>

              <div className="rounded-lg border p-3">
                <div className="mb-2 flex items-center gap-2">
                  <User className="h-4 w-4 text-primary" />
                  <p className="text-sm font-medium">Prepare for Interview</p>
                </div>
                <p className="text-xs text-muted-foreground">
                  Research common technical questions and prepare examples of your work
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
