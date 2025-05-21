"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Briefcase,
  Building2,
  Calendar,
  Edit,
  ExternalLink,
  GraduationCap,
  Mail,
  MapPin,
  Share2,
  User,
} from "lucide-react"

// Sample user data
const userData = {
  name: "John Doe",
  title: "Senior Frontend Developer",
  location: "San Francisco, CA",
  about:
    "Passionate frontend developer with 5+ years of experience building responsive and accessible web applications. Specialized in React, TypeScript, and modern frontend frameworks.",
  email: "john.doe@example.com",
  avatar: "/placeholder.svg",
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Node.js",
    "GraphQL",
    "REST APIs",
    "Git",
    "UI/UX Design",
  ],
  experience: [
    {
      id: "1",
      title: "Senior Frontend Developer",
      company: "TechCorp",
      location: "San Francisco, CA (Remote)",
      startDate: "Jan 2021",
      endDate: "Present",
      description:
        "Lead frontend development for multiple projects, mentored junior developers, and implemented best practices for accessibility and performance.",
    },
    {
      id: "2",
      title: "Frontend Developer",
      company: "DesignHub",
      location: "New York, NY",
      startDate: "Mar 2018",
      endDate: "Dec 2020",
      description:
        "Developed responsive web applications using React and collaborated with designers to implement pixel-perfect UIs.",
    },
    {
      id: "3",
      title: "Junior Web Developer",
      company: "WebSolutions",
      location: "Boston, MA",
      startDate: "Jun 2016",
      endDate: "Feb 2018",
      description:
        "Built and maintained client websites, implemented responsive designs, and worked with various CMS platforms.",
    },
  ],
  education: [
    {
      id: "1",
      degree: "Master of Computer Science",
      institution: "Stanford University",
      location: "Stanford, CA",
      startDate: "2014",
      endDate: "2016",
      description: "Focused on Human-Computer Interaction and Web Technologies.",
    },
    {
      id: "2",
      degree: "Bachelor of Science in Computer Science",
      institution: "University of California, Berkeley",
      location: "Berkeley, CA",
      startDate: "2010",
      endDate: "2014",
      description: "Graduated with honors. Participated in web development club and hackathons.",
    },
  ],
  certifications: [
    {
      id: "1",
      name: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      date: "2022",
      expires: "2025",
    },
    {
      id: "2",
      name: "Professional Frontend Developer",
      issuer: "Frontend Masters",
      date: "2020",
      expires: null,
    },
  ],
}

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div className="container px-4 py-6">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-start gap-4">
          <Avatar className="h-20 w-20 border-4 border-background">
            <AvatarImage src={userData.avatar || "/placeholder.svg"} alt={userData.name} />
            <AvatarFallback>{userData.name.substring(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-2xl font-bold">{userData.name}</h1>
            <p className="text-lg text-muted-foreground">{userData.title}</p>
            <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{userData.location}</span>
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          <Button variant="outline" size="icon">
            <Share2 className="h-4 w-4" />
            <span className="sr-only">Share Profile</span>
          </Button>
          <Button variant="outline" className="gap-2" onClick={() => setIsEditing(!isEditing)}>
            <Edit className="h-4 w-4" />
            {isEditing ? "Cancel Editing" : "Edit Profile"}
          </Button>
          {isEditing && <Button className="gap-2">Save Changes</Button>}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="space-y-6 md:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>About</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{userData.about}</p>
              <div className="mt-4 flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <a href={`mailto:${userData.email}`} className="text-sm text-primary hover:underline">
                  {userData.email}
                </a>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {userData.skills.map((skill, index) => (
                  <Badge key={index} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Certifications</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {userData.certifications.map((cert) => (
                <div key={cert.id} className="space-y-1">
                  <h3 className="font-medium">{cert.name}</h3>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  <p className="text-xs text-muted-foreground">
                    Issued: {cert.date} {cert.expires ? `• Expires: ${cert.expires}` : "• No Expiration"}
                  </p>
                  <Separator className="mt-2" />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2 space-y-6">
          <Tabs defaultValue="experience" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
            </TabsList>
            <TabsContent value="experience" className="mt-4 space-y-4">
              {userData.experience.map((exp) => (
                <Card key={exp.id}>
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <Briefcase className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                          <h3 className="font-semibold">{exp.title}</h3>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Calendar className="h-3 w-3" />
                            <span>
                              {exp.startDate} - {exp.endDate}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-sm">
                          <Building2 className="h-3 w-3 text-muted-foreground" />
                          <span>{exp.company}</span>
                          <span className="text-muted-foreground">•</span>
                          <span className="text-muted-foreground">{exp.location}</span>
                        </div>
                        <p className="mt-2 text-sm text-muted-foreground">{exp.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
            <TabsContent value="education" className="mt-4 space-y-4">
              {userData.education.map((edu) => (
                <Card key={edu.id}>
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <GraduationCap className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                          <h3 className="font-semibold">{edu.degree}</h3>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Calendar className="h-3 w-3" />
                            <span>
                              {edu.startDate} - {edu.endDate}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-sm">
                          <Building2 className="h-3 w-3 text-muted-foreground" />
                          <span>{edu.institution}</span>
                          <span className="text-muted-foreground">•</span>
                          <span className="text-muted-foreground">{edu.location}</span>
                        </div>
                        <p className="mt-2 text-sm text-muted-foreground">{edu.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>

          <Card>
            <CardHeader>
              <CardTitle>Resume</CardTitle>
              <CardDescription>Download or view your resume</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4 sm:flex-row">
              <Button variant="outline" className="gap-2">
                <User className="h-4 w-4" />
                View Resume
              </Button>
              <Button variant="outline" className="gap-2">
                <ExternalLink className="h-4 w-4" />
                Download PDF
              </Button>
              <Button className="gap-2">
                <Edit className="h-4 w-4" />
                Update Resume
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="mb-4 text-xl font-semibold">Recommended Jobs</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Job recommendations would go here */}
          <Card>
            <CardContent className="p-4">
              <div className="flex items-start gap-4">
                <Avatar className="h-10 w-10 rounded-md">
                  <AvatarFallback className="rounded-md">TC</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-medium hover:text-primary hover:underline">
                    <Link href="/job/1">Senior Frontend Developer</Link>
                  </h3>
                  <p className="text-sm text-muted-foreground">TechCorp • San Francisco, CA</p>
                  <p className="mt-1 text-xs text-muted-foreground">Posted 2 days ago</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-start gap-4">
                <Avatar className="h-10 w-10 rounded-md">
                  <AvatarFallback className="rounded-md">DH</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-medium hover:text-primary hover:underline">
                    <Link href="/job/2">UI Developer</Link>
                  </h3>
                  <p className="text-sm text-muted-foreground">DesignHub • New York, NY</p>
                  <p className="mt-1 text-xs text-muted-foreground">Posted 3 days ago</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-start gap-4">
                <Avatar className="h-10 w-10 rounded-md">
                  <AvatarFallback className="rounded-md">DS</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-medium hover:text-primary hover:underline">
                    <Link href="/job/3">Frontend Engineer</Link>
                  </h3>
                  <p className="text-sm text-muted-foreground">DataSystems • Remote</p>
                  <p className="mt-1 text-xs text-muted-foreground">Posted 1 day ago</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
