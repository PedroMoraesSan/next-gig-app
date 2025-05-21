"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { ArrowDown, ArrowUp, CalendarIcon, Edit, Plus, Trash, X } from "lucide-react"

// Sample resume data
const initialResume = {
  personalInfo: {
    name: "John Doe",
    title: "Senior Frontend Developer",
    email: "john.doe@example.com",
    phone: "(555) 123-4567",
    location: "San Francisco, CA",
    website: "johndoe.com",
    summary:
      "Passionate frontend developer with 5+ years of experience building responsive and accessible web applications. Specialized in React, TypeScript, and modern frontend frameworks.",
  },
  experience: [
    {
      id: "exp1",
      title: "Senior Frontend Developer",
      company: "TechCorp",
      location: "San Francisco, CA",
      startDate: new Date(2021, 0, 1),
      endDate: null,
      current: true,
      description:
        "Lead frontend development for multiple projects, mentored junior developers, and implemented best practices for accessibility and performance.",
      highlights: [
        "Reduced page load time by 40% through code optimization and lazy loading",
        "Implemented a component library used across 5 different projects",
        "Led a team of 3 frontend developers for a major product launch",
      ],
    },
    {
      id: "exp2",
      title: "Frontend Developer",
      company: "DesignHub",
      location: "New York, NY",
      startDate: new Date(2018, 2, 1),
      endDate: new Date(2020, 11, 31),
      current: false,
      description:
        "Developed responsive web applications using React and collaborated with designers to implement pixel-perfect UIs.",
      highlights: [
        "Built and maintained the company's main product dashboard",
        "Implemented responsive designs for mobile and tablet devices",
        "Collaborated with UX team to improve user experience",
      ],
    },
  ],
  education: [
    {
      id: "edu1",
      degree: "Master of Computer Science",
      institution: "Stanford University",
      location: "Stanford, CA",
      startDate: new Date(2014, 8, 1),
      endDate: new Date(2016, 5, 1),
      description: "Focused on Human-Computer Interaction and Web Technologies.",
    },
    {
      id: "edu2",
      degree: "Bachelor of Science in Computer Science",
      institution: "University of California, Berkeley",
      location: "Berkeley, CA",
      startDate: new Date(2010, 8, 1),
      endDate: new Date(2014, 5, 1),
      description: "Graduated with honors. Participated in web development club and hackathons.",
    },
  ],
  skills: [
    { id: "skill1", name: "JavaScript", level: "Expert" },
    { id: "skill2", name: "TypeScript", level: "Expert" },
    { id: "skill3", name: "React", level: "Expert" },
    { id: "skill4", name: "Next.js", level: "Advanced" },
    { id: "skill5", name: "HTML/CSS", level: "Expert" },
    { id: "skill6", name: "Tailwind CSS", level: "Advanced" },
    { id: "skill7", name: "Node.js", level: "Intermediate" },
    { id: "skill8", name: "GraphQL", level: "Intermediate" },
    { id: "skill9", name: "Git", level: "Advanced" },
    { id: "skill10", name: "UI/UX Design", level: "Intermediate" },
  ],
  certifications: [
    {
      id: "cert1",
      name: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      date: new Date(2022, 5, 15),
      expires: new Date(2025, 5, 15),
      hasExpiration: true,
    },
    {
      id: "cert2",
      name: "Professional Frontend Developer",
      issuer: "Frontend Masters",
      date: new Date(2020, 3, 10),
      expires: null,
      hasExpiration: false,
    },
  ],
  projects: [
    {
      id: "proj1",
      name: "E-commerce Platform",
      description: "Built a full-featured e-commerce platform with React, Next.js, and Stripe integration.",
      url: "https://example-ecommerce.com",
      highlights: [
        "Implemented shopping cart functionality with local storage",
        "Integrated Stripe payment processing",
        "Built responsive product catalog with filtering and search",
      ],
    },
    {
      id: "proj2",
      name: "Task Management App",
      description:
        "Developed a task management application with drag-and-drop functionality and team collaboration features.",
      url: "https://example-tasks.com",
      highlights: [
        "Implemented drag-and-drop using React DnD",
        "Added real-time updates with WebSockets",
        "Created team permission system with role-based access",
      ],
    },
  ],
}

// Resume templates
const templates = [
  { id: "modern", name: "Modern", description: "Clean and professional design with a modern touch" },
  { id: "classic", name: "Classic", description: "Traditional resume format with a timeless design" },
  { id: "creative", name: "Creative", description: "Stand out with a unique and eye-catching layout" },
  { id: "minimal", name: "Minimal", description: "Simple and straightforward design focusing on content" },
]

export default function ResumeBuilderPage() {
  const [resume, setResume] = useState(initialResume)
  const [activeTab, setActiveTab] = useState("personal")
  const [selectedTemplate, setSelectedTemplate] = useState("modern")
  const [isGenerating, setIsGenerating] = useState(false)
  const [editingItem, setEditingItem] = useState<any>(null)
  const [editingSection, setEditingSection] = useState<string | null>(null)

  const handlePersonalInfoChange = (field: string, value: string) => {
    setResume({
      ...resume,
      personalInfo: {
        ...resume.personalInfo,
        [field]: value,
      },
    })
  }

  const handleAddExperience = () => {
    const newExperience = {
      id: `exp${Date.now()}`,
      title: "",
      company: "",
      location: "",
      startDate: new Date(),
      endDate: null,
      current: true,
      description: "",
      highlights: [],
    }
    setResume({
      ...resume,
      experience: [...resume.experience, newExperience],
    })
    setEditingItem(newExperience)
    setEditingSection("experience")
  }

  const handleUpdateExperience = (updatedExp: any) => {
    setResume({
      ...resume,
      experience: resume.experience.map((exp) => (exp.id === updatedExp.id ? updatedExp : exp)),
    })
    setEditingItem(null)
    setEditingSection(null)
  }

  const handleDeleteExperience = (id: string) => {
    setResume({
      ...resume,
      experience: resume.experience.filter((exp) => exp.id !== id),
    })
  }

  const handleAddEducation = () => {
    const newEducation = {
      id: `edu${Date.now()}`,
      degree: "",
      institution: "",
      location: "",
      startDate: new Date(),
      endDate: new Date(),
      description: "",
    }
    setResume({
      ...resume,
      education: [...resume.education, newEducation],
    })
    setEditingItem(newEducation)
    setEditingSection("education")
  }

  const handleUpdateEducation = (updatedEdu: any) => {
    setResume({
      ...resume,
      education: resume.education.map((edu) => (edu.id === updatedEdu.id ? updatedEdu : edu)),
    })
    setEditingItem(null)
    setEditingSection(null)
  }

  const handleDeleteEducation = (id: string) => {
    setResume({
      ...resume,
      education: resume.education.filter((edu) => edu.id !== id),
    })
  }

  const handleAddSkill = () => {
    const newSkill = {
      id: `skill${Date.now()}`,
      name: "",
      level: "Intermediate",
    }
    setResume({
      ...resume,
      skills: [...resume.skills, newSkill],
    })
    setEditingItem(newSkill)
    setEditingSection("skills")
  }

  const handleUpdateSkill = (updatedSkill: any) => {
    setResume({
      ...resume,
      skills: resume.skills.map((skill) => (skill.id === updatedSkill.id ? updatedSkill : skill)),
    })
    setEditingItem(null)
    setEditingSection(null)
  }

  const handleDeleteSkill = (id: string) => {
    setResume({
      ...resume,
      skills: resume.skills.filter((skill) => skill.id !== id),
    })
  }

  const handleAddCertification = () => {
    const newCertification = {
      id: `cert${Date.now()}`,
      name: "",
      issuer: "",
      date: new Date(),
      expires: null,
      hasExpiration: false,
    }
    setResume({
      ...resume,
      certifications: [...resume.certifications, newCertification],
    })
    setEditingItem(newCertification)
    setEditingSection("certifications")
  }

  const handleUpdateCertification = (updatedCert: any) => {
    setResume({
      ...resume,
      certifications: resume.certifications.map((cert) => (cert.id === updatedCert.id ? updatedCert : cert)),
    })
    setEditingItem(null)
    setEditingSection(null)
  }

  const handleDeleteCertification = (id: string) => {
    setResume({
      ...resume,
      certifications: resume.certifications.filter((cert) => cert.id !== id),
    })
  }

  const handleAddProject = () => {
    const newProject = {
      id: `proj${Date.now()}`,
      name: "",
      description: "",
      url: "",
      highlights: [],
    }
    setResume({
      ...resume,
      projects: [...resume.projects, newProject],
    })
    setEditingItem(newProject)
    setEditingSection("projects")
  }

  const handleUpdateProject = (updatedProj: any) => {
    setResume({
      ...resume,
      projects: resume.projects.map((proj) => (proj.id === updatedProj.id ? updatedProj : proj)),
    })
    setEditingItem(null)
    setEditingSection(null)
  }

  const handleDeleteProject = (id: string) => {
    setResume({
      ...resume,
      projects: resume.projects.filter((proj) => proj.id !== id),
    })
  }

  const handleGenerateResume = () => {
    setIsGenerating(true)
    // Simulate PDF generation
    setTimeout(() => {
      setIsGenerating(false)
    }, 2000)
  }

  const handleMoveItem = (section: string, id: string, direction: "up" | "down") => {
    const items = [...resume[section as keyof typeof resume]] as any[]
    const index = items.findIndex((item) => item.id === id)

    if (direction === "up" && index > 0) {
      const newItems = [...items]
      const temp = newItems[index]
      newItems[index] = newItems[index - 1]
      newItems[index - 1] = temp
      setResume({
        ...resume,
        [section]: newItems,
      })
    } else if (direction === "down" && index < items.length - 1) {
      const newItems = [...items]
      const temp = newItems[index]
      newItems[index] = newItems[index + 1]
      newItems[index + 1] = temp
      setResume({
        ...resume,
        [section]: newItems,
      })
    }
  }

  return (
    <div className="container px-4 py-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Resume Builder</h1>
        <p className="text-muted-foreground">Create and customize your professional resume</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Resume Editor</CardTitle>
              <CardDescription>Build your resume section by section</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-6">
                  <TabsTrigger value="personal">Personal</TabsTrigger>
                  <TabsTrigger value="experience">Experience</TabsTrigger>
                  <TabsTrigger value="education">Education</TabsTrigger>
                  <TabsTrigger value="skills">Skills</TabsTrigger>
                  <TabsTrigger value="certifications">Certifications</TabsTrigger>
                  <TabsTrigger value="projects">Projects</TabsTrigger>
                </TabsList>

                {/* Personal Information Tab */}
                <TabsContent value="personal" className="space-y-4 pt-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={resume.personalInfo.name}
                        onChange={(e) => handlePersonalInfoChange("name", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="title">Professional Title</Label>
                      <Input
                        id="title"
                        value={resume.personalInfo.title}
                        onChange={(e) => handlePersonalInfoChange("title", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={resume.personalInfo.email}
                        onChange={(e) => handlePersonalInfoChange("email", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        value={resume.personalInfo.phone}
                        onChange={(e) => handlePersonalInfoChange("phone", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Input
                        id="location"
                        value={resume.personalInfo.location}
                        onChange={(e) => handlePersonalInfoChange("location", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="website">Website (Optional)</Label>
                      <Input
                        id="website"
                        value={resume.personalInfo.website}
                        onChange={(e) => handlePersonalInfoChange("website", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="summary">Professional Summary</Label>
                    <Textarea
                      id="summary"
                      rows={4}
                      value={resume.personalInfo.summary}
                      onChange={(e) => handlePersonalInfoChange("summary", e.target.value)}
                    />
                  </div>
                </TabsContent>

                {/* Experience Tab */}
                <TabsContent value="experience" className="space-y-4 pt-4">
                  <div className="flex justify-between">
                    <h3 className="text-lg font-medium">Work Experience</h3>
                    <Button size="sm" onClick={handleAddExperience}>
                      <Plus className="mr-2 h-4 w-4" />
                      Add Experience
                    </Button>
                  </div>

                  {resume.experience.length === 0 ? (
                    <div className="rounded-md border border-dashed p-6 text-center">
                      <h4 className="mb-2 font-medium">No work experience added</h4>
                      <p className="mb-4 text-sm text-muted-foreground">
                        Add your work experience to make your resume stand out
                      </p>
                      <Button size="sm" onClick={handleAddExperience}>
                        <Plus className="mr-2 h-4 w-4" />
                        Add Experience
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {resume.experience.map((exp, index) => (
                        <Card key={exp.id} className={editingItem?.id === exp.id ? "border-primary" : ""}>
                          <CardContent className="p-4">
                            {editingItem?.id === exp.id && editingSection === "experience" ? (
                              <div className="space-y-4">
                                <div className="grid gap-4 sm:grid-cols-2">
                                  <div className="space-y-2">
                                    <Label htmlFor={`exp-title-${exp.id}`}>Job Title</Label>
                                    <Input
                                      id={`exp-title-${exp.id}`}
                                      value={editingItem.title}
                                      onChange={(e) => setEditingItem({ ...editingItem, title: e.target.value })}
                                    />
                                  </div>
                                  <div className="space-y-2">
                                    <Label htmlFor={`exp-company-${exp.id}`}>Company</Label>
                                    <Input
                                      id={`exp-company-${exp.id}`}
                                      value={editingItem.company}
                                      onChange={(e) => setEditingItem({ ...editingItem, company: e.target.value })}
                                    />
                                  </div>
                                </div>

                                <div className="grid gap-4 sm:grid-cols-2">
                                  <div className="space-y-2">
                                    <Label htmlFor={`exp-location-${exp.id}`}>Location</Label>
                                    <Input
                                      id={`exp-location-${exp.id}`}
                                      value={editingItem.location}
                                      onChange={(e) => setEditingItem({ ...editingItem, location: e.target.value })}
                                    />
                                  </div>
                                  <div className="flex items-center space-x-2 pt-8">
                                    <Switch
                                      id={`exp-current-${exp.id}`}
                                      checked={editingItem.current}
                                      onCheckedChange={(checked) =>
                                        setEditingItem({
                                          ...editingItem,
                                          current: checked,
                                          endDate: checked ? null : new Date(),
                                        })
                                      }
                                    />
                                    <Label htmlFor={`exp-current-${exp.id}`}>Current Position</Label>
                                  </div>
                                </div>

                                <div className="grid gap-4 sm:grid-cols-2">
                                  <div className="space-y-2">
                                    <Label>Start Date</Label>
                                    <Popover>
                                      <PopoverTrigger asChild>
                                        <Button
                                          variant="outline"
                                          className="w-full justify-start text-left font-normal"
                                        >
                                          <CalendarIcon className="mr-2 h-4 w-4" />
                                          {editingItem.startDate
                                            ? format(editingItem.startDate, "MMMM yyyy")
                                            : "Select date"}
                                        </Button>
                                      </PopoverTrigger>
                                      <PopoverContent className="w-auto p-0">
                                        <Calendar
                                          mode="single"
                                          selected={editingItem.startDate}
                                          onSelect={(date) => setEditingItem({ ...editingItem, startDate: date })}
                                          initialFocus
                                        />
                                      </PopoverContent>
                                    </Popover>
                                  </div>
                                  {!editingItem.current && (
                                    <div className="space-y-2">
                                      <Label>End Date</Label>
                                      <Popover>
                                        <PopoverTrigger asChild>
                                          <Button
                                            variant="outline"
                                            className="w-full justify-start text-left font-normal"
                                          >
                                            <CalendarIcon className="mr-2 h-4 w-4" />
                                            {editingItem.endDate
                                              ? format(editingItem.endDate, "MMMM yyyy")
                                              : "Select date"}
                                          </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0">
                                          <Calendar
                                            mode="single"
                                            selected={editingItem.endDate}
                                            onSelect={(date) => setEditingItem({ ...editingItem, endDate: date })}
                                            initialFocus
                                          />
                                        </PopoverContent>
                                      </Popover>
                                    </div>
                                  )}
                                </div>

                                <div className="space-y-2">
                                  <Label htmlFor={`exp-description-${exp.id}`}>Description</Label>
                                  <Textarea
                                    id={`exp-description-${exp.id}`}
                                    rows={3}
                                    value={editingItem.description}
                                    onChange={(e) => setEditingItem({ ...editingItem, description: e.target.value })}
                                  />
                                </div>

                                <div className="space-y-2">
                                  <Label>Key Achievements/Responsibilities</Label>
                                  <div className="space-y-2">
                                    {editingItem.highlights.map((highlight: string, i: number) => (
                                      <div key={i} className="flex items-center gap-2">
                                        <Input
                                          value={highlight}
                                          onChange={(e) => {
                                            const newHighlights = [...editingItem.highlights]
                                            newHighlights[i] = e.target.value
                                            setEditingItem({ ...editingItem, highlights: newHighlights })
                                          }}
                                        />
                                        <Button
                                          variant="ghost"
                                          size="icon"
                                          onClick={() => {
                                            const newHighlights = [...editingItem.highlights]
                                            newHighlights.splice(i, 1)
                                            setEditingItem({ ...editingItem, highlights: newHighlights })
                                          }}
                                        >
                                          <X className="h-4 w-4" />
                                        </Button>
                                      </div>
                                    ))}
                                    <Button
                                      variant="outline"
                                      size="sm"
                                      onClick={() =>
                                        setEditingItem({
                                          ...editingItem,
                                          highlights: [...editingItem.highlights, ""],
                                        })
                                      }
                                    >
                                      <Plus className="mr-2 h-4 w-4" />
                                      Add Highlight
                                    </Button>
                                  </div>
                                </div>

                                <div className="flex justify-end gap-2">
                                  <Button
                                    variant="outline"
                                    onClick={() => {
                                      setEditingItem(null)
                                      setEditingSection(null)
                                    }}
                                  >
                                    Cancel
                                  </Button>
                                  <Button onClick={() => handleUpdateExperience(editingItem)}>Save</Button>
                                </div>
                              </div>
                            ) : (
                              <div>
                                <div className="mb-2 flex items-start justify-between">
                                  <div>
                                    <h4 className="font-medium">{exp.title}</h4>
                                    <p className="text-sm text-muted-foreground">
                                      {exp.company} • {exp.location}
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                      {exp.startDate ? format(exp.startDate, "MMMM yyyy") : ""} -{" "}
                                      {exp.current ? "Present" : exp.endDate ? format(exp.endDate, "MMMM yyyy") : ""}
                                    </p>
                                  </div>
                                  <div className="flex gap-1">
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      onClick={() => handleMoveItem("experience", exp.id, "up")}
                                      disabled={index === 0}
                                      className="h-8 w-8"
                                    >
                                      <ArrowUp className="h-4 w-4" />
                                    </Button>
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      onClick={() => handleMoveItem("experience", exp.id, "down")}
                                      disabled={index === resume.experience.length - 1}
                                      className="h-8 w-8"
                                    >
                                      <ArrowDown className="h-4 w-4" />
                                    </Button>
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      onClick={() => {
                                        setEditingItem(exp)
                                        setEditingSection("experience")
                                      }}
                                      className="h-8 w-8"
                                    >
                                      <Edit className="h-4 w-4" />
                                    </Button>
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      onClick={() => handleDeleteExperience(exp.id)}
                                      className="h-8 w-8 text-destructive"
                                    >
                                      <Trash className="h-4 w-4" />
                                    </Button>
                                  </div>
                                </div>
                                <p className="mt-2 text-sm">{exp.description}</p>
                                {exp.highlights.length > 0 && (
                                  <div className="mt-2">
                                    <ul className="ml-5 list-disc space-y-1 text-sm">
                                      {exp.highlights.map((highlight, i) => (
                                        <li key={i}>{highlight}</li>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}
                </TabsContent>

                {/* Education Tab */}
                <TabsContent value="education" className="space-y-4 pt-4">
                  <div className="flex justify-between">
                    <h3 className="text-lg font-medium">Education</h3>
                    <Button size="sm" onClick={handleAddEducation}>
                      <Plus className="mr-2 h-4 w-4" />
                      Add Education
                    </Button>
                  </div>

                  {resume.education.length === 0 ? (
                    <div className="rounded-md border border-dashed p-6 text-center">
                      <h4 className="mb-2 font-medium">No education added</h4>
                      <p className="mb-4 text-sm text-muted-foreground">
                        Add your educational background to enhance your resume
                      </p>
                      <Button size="sm" onClick={handleAddEducation}>
                        <Plus className="mr-2 h-4 w-4" />
                        Add Education
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {resume.education.map((edu, index) => (
                        <Card key={edu.id} className={editingItem?.id === edu.id ? "border-primary" : ""}>
                          <CardContent className="p-4">
                            {editingItem?.id === edu.id && editingSection === "education" ? (
                              <div className="space-y-4">
                                <div className="grid gap-4 sm:grid-cols-2">
                                  <div className="space-y-2">
                                    <Label htmlFor={`edu-degree-${edu.id}`}>Degree</Label>
                                    <Input
                                      id={`edu-degree-${edu.id}`}
                                      value={editingItem.degree}
                                      onChange={(e) => setEditingItem({ ...editingItem, degree: e.target.value })}
                                    />
                                  </div>
                                  <div className="space-y-2">
                                    <Label htmlFor={`edu-institution-${edu.id}`}>Institution</Label>
                                    <Input
                                      id={`edu-institution-${edu.id}`}
                                      value={editingItem.institution}
                                      onChange={(e) => setEditingItem({ ...editingItem, institution: e.target.value })}
                                    />
                                  </div>
                                </div>

                                <div className="space-y-2">
                                  <Label htmlFor={`edu-location-${edu.id}`}>Location</Label>
                                  <Input
                                    id={`edu-location-${edu.id}`}
                                    value={editingItem.location}
                                    onChange={(e) => setEditingItem({ ...editingItem, location: e.target.value })}
                                  />
                                </div>

                                <div className="grid gap-4 sm:grid-cols-2">
                                  <div className="space-y-2">
                                    <Label>Start Date</Label>
                                    <Popover>
                                      <PopoverTrigger asChild>
                                        <Button
                                          variant="outline"
                                          className="w-full justify-start text-left font-normal"
                                        >
                                          <CalendarIcon className="mr-2 h-4 w-4" />
                                          {editingItem.startDate
                                            ? format(editingItem.startDate, "MMMM yyyy")
                                            : "Select date"}
                                        </Button>
                                      </PopoverTrigger>
                                      <PopoverContent className="w-auto p-0">
                                        <Calendar
                                          mode="single"
                                          selected={editingItem.startDate}
                                          onSelect={(date) => setEditingItem({ ...editingItem, startDate: date })}
                                          initialFocus
                                        />
                                      </PopoverContent>
                                    </Popover>
                                  </div>
                                  <div className="space-y-2">
                                    <Label>End Date</Label>
                                    <Popover>
                                      <PopoverTrigger asChild>
                                        <Button
                                          variant="outline"
                                          className="w-full justify-start text-left font-normal"
                                        >
                                          <CalendarIcon className="mr-2 h-4 w-4" />
                                          {editingItem.endDate
                                            ? format(editingItem.endDate, "MMMM yyyy")
                                            : "Select date"}
                                        </Button>
                                      </PopoverTrigger>
                                      <PopoverContent className="w-auto p-0">
                                        <Calendar
                                          mode="single"
                                          selected={editingItem.endDate}
                                          onSelect={(date) => setEditingItem({ ...editingItem, endDate: date })}
                                          initialFocus
                                        />
                                      </PopoverContent>
                                    </Popover>
                                  </div>
                                </div>

                                <div className="space-y-2">
                                  <Label htmlFor={`edu-description-${edu.id}`}>Description</Label>
                                  <Textarea
                                    id={`edu-description-${edu.id}`}
                                    rows={3}
                                    value={editingItem.description}
                                    onChange={(e) => setEditingItem({ ...editingItem, description: e.target.value })}
                                  />
                                </div>

                                <div className="flex justify-end gap-2">
                                  <Button
                                    variant="outline"
                                    onClick={() => {
                                      setEditingItem(null)
                                      setEditingSection(null)
                                    }}
                                  >
                                    Cancel
                                  </Button>
                                  <Button onClick={() => handleUpdateEducation(editingItem)}>Save</Button>
                                </div>
                              </div>
                            ) : (
                              <div>
                                <div className="mb-2 flex items-start justify-between">
                                  <div>
                                    <h4 className="font-medium">{edu.degree}</h4>
                                    <p className="text-sm text-muted-foreground">
                                      {edu.institution} • {edu.location}
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                      {edu.startDate ? format(edu.startDate, "MMMM yyyy") : ""} -{" "}
                                      {edu.endDate ? format(edu.endDate, "MMMM yyyy") : ""}
                                    </p>
                                  </div>
                                  <div className="flex gap-1">
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      onClick={() => handleMoveItem("education", edu.id, "up")}
                                      disabled={index === 0}
                                      className="h-8 w-8"
                                    >
                                      <ArrowUp className="h-4 w-4" />
                                    </Button>
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      onClick={() => handleMoveItem("education", edu.id, "down")}
                                      disabled={index === resume.education.length - 1}
                                      className="h-8 w-8"
                                    >
                                      <ArrowDown className="h-4 w-4" />
                                    </Button>
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      onClick={() => {
                                        setEditingItem(edu)
                                        setEditingSection("education")
                                      }}
                                      className="h-8 w-8"
                                    >
                                      <Edit className="h-4 w-4" />
                                    </Button>
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      onClick={() => handleDeleteEducation(edu.id)}
                                      className="h-8 w-8 text-destructive"
                                    >
                                      <Trash className="h-4 w-4" />
                                    </Button>
                                  </div>
                                </div>
                                <p className="mt-2 text-sm">{edu.description}</p>
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}
                </TabsContent>

                {/* Skills Tab */}
                <TabsContent value="skills" className="space-y-4 pt-4">
                  <div className="flex justify-between">
                    <h3 className="text-lg font-medium">Skills</h3>
                    <Button size="sm" onClick={handleAddSkill}>
                      <Plus className="mr-2 h-4 w-4" />
                      Add Skill
                    </Button>
                  </div>

                  {resume.skills.length === 0 ? (
                    <div className="rounded-md border border-dashed p-6 text-center">
                      <h4 className="mb-2 font-medium">No skills added</h4>
                      <p className="mb-4 text-sm text-muted-foreground">Add your skills to showcase your expertise</p>
                      <Button size="sm" onClick={handleAddSkill}>
                        <Plus className="mr-2 h-4 w-4" />
                        Add Skill
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {editingSection === "skills" && editingItem ? (
                        <Card className="border-primary">
                          <CardContent className="p-4">
                            <div className="space-y-4">
                              <div className="grid gap-4 sm:grid-cols-2">
                                <div className="space-y-2">
                                  <Label htmlFor="skill-name">Skill Name</Label>
                                  <Input
                                    id="skill-name"
                                    value={editingItem.name}
                                    onChange={(e) => setEditingItem({ ...editingItem, name: e.target.value })}
                                  />
                                </div>
                                <div className="space-y-2">
                                  <Label htmlFor="skill-level">Proficiency Level</Label>
                                  <Select
                                    value={editingItem.level}
                                    onValueChange={(value) => setEditingItem({ ...editingItem, level: value })}
                                  >
                                    <SelectTrigger id="skill-level">
                                      <SelectValue placeholder="Select level" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="Beginner">Beginner</SelectItem>
                                      <SelectItem value="Intermediate">Intermediate</SelectItem>
                                      <SelectItem value="Advanced">Advanced</SelectItem>
                                      <SelectItem value="Expert">Expert</SelectItem>
                                    </SelectContent>
                                  </Select>
                                </div>
                              </div>

                              <div className="flex justify-end gap-2">
                                <Button
                                  variant="outline"
                                  onClick={() => {
                                    setEditingItem(null)
                                    setEditingSection(null)
                                  }}
                                >
                                  Cancel
                                </Button>
                                <Button onClick={() => handleUpdateSkill(editingItem)}>Save</Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ) : (
                        <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
                          {resume.skills.map((skill) => (
                            <div key={skill.id} className="flex items-center justify-between rounded-md border p-3">
                              <div className="flex items-center gap-2">
                                <Badge
                                  variant="outline"
                                  className={cn(
                                    "capitalize",
                                    skill.level === "Expert" && "border-green-500 text-green-500",
                                    skill.level === "Advanced" && "border-blue-500 text-blue-500",
                                    skill.level === "Intermediate" && "border-yellow-500 text-yellow-500",
                                    skill.level === "Beginner" && "border-gray-500 text-gray-500",
                                  )}
                                >
                                  {skill.level}
                                </Badge>
                                <span>{skill.name}</span>
                              </div>
                              <div className="flex gap-1">
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  onClick={() => {
                                    setEditingItem(skill)
                                    setEditingSection("skills")
                                  }}
                                  className="h-8 w-8"
                                >
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  onClick={() => handleDeleteSkill(skill.id)}
                                  className="h-8 w-8 text-destructive"
                                >
                                  <Trash className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </TabsContent>

                {/* Certifications Tab */}
                <TabsContent value="certifications" className="space-y-4 pt-4">
                  <div className="flex justify-between">
                    <h3 className="text-lg font-medium">Certifications</h3>
                    <Button size="sm" onClick={handleAddCertification}>
                      <Plus className="mr-2 h-4 w-4" />
                      Add Certification
                    </Button>
                  </div>

                  {resume.certifications.length === 0 ? (
                    <div className="rounded-md border border-dashed p-6 text-center">
                      <h4 className="mb-2 font-medium">No certifications added</h4>
                      <p className="mb-4 text-sm text-muted-foreground">
                        Add your certifications to highlight your qualifications
                      </p>
                      <Button size="sm" onClick={handleAddCertification}>
                        <Plus className="mr-2 h-4 w-4" />
                        Add Certification
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {resume.certifications.map((cert, index) => (
                        <Card key={cert.id} className={editingItem?.id === cert.id ? "border-primary" : ""}>
                          <CardContent className="p-4">
                            {editingItem?.id === cert.id && editingSection === "certifications" ? (
                              <div className="space-y-4">
                                <div className="grid gap-4 sm:grid-cols-2">
                                  <div className="space-y-2">
                                    <Label htmlFor={`cert-name-${cert.id}`}>Certification Name</Label>
                                    <Input
                                      id={`cert-name-${cert.id}`}
                                      value={editingItem.name}
                                      onChange={(e) => setEditingItem({ ...editingItem, name: e.target.value })}
                                    />
                                  </div>
                                  <div className="space-y-2">
                                    <Label htmlFor={`cert-issuer-${cert.id}`}>Issuing Organization</Label>
                                    <Input
                                      id={`cert-issuer-${cert.id}`}
                                      value={editingItem.issuer}
                                      onChange={(e) => setEditingItem({ ...editingItem, issuer: e.target.value })}
                                    />
                                  </div>
                                </div>

                                <div className="grid gap-4 sm:grid-cols-2">
                                  <div className="space-y-2">
                                    <Label>Issue Date</Label>
                                    <Popover>
                                      <PopoverTrigger asChild>
                                        <Button
                                          variant="outline"
                                          className="w-full justify-start text-left font-normal"
                                        >
                                          <CalendarIcon className="mr-2 h-4 w-4" />
                                          {editingItem.date ? format(editingItem.date, "MMMM yyyy") : "Select date"}
                                        </Button>
                                      </PopoverTrigger>
                                      <PopoverContent className="w-auto p-0">
                                        <Calendar
                                          mode="single"
                                          selected={editingItem.date}
                                          onSelect={(date) => setEditingItem({ ...editingItem, date: date })}
                                          initialFocus
                                        />
                                      </PopoverContent>
                                    </Popover>
                                  </div>
                                  <div className="flex items-center space-x-2 pt-8">
                                    <Switch
                                      id={`cert-expiration-${cert.id}`}
                                      checked={editingItem.hasExpiration}
                                      onCheckedChange={(checked) =>
                                        setEditingItem({
                                          ...editingItem,
                                          hasExpiration: checked,
                                          expires: checked ? editingItem.expires || new Date() : null,
                                        })
                                      }
                                    />
                                    <Label htmlFor={`cert-expiration-${cert.id}`}>Has Expiration Date</Label>
                                  </div>
                                </div>

                                {editingItem.hasExpiration && (
                                  <div className="space-y-2">
                                    <Label>Expiration Date</Label>
                                    <Popover>
                                      <PopoverTrigger asChild>
                                        <Button
                                          variant="outline"
                                          className="w-full justify-start text-left font-normal"
                                        >
                                          <CalendarIcon className="mr-2 h-4 w-4" />
                                          {editingItem.expires
                                            ? format(editingItem.expires, "MMMM yyyy")
                                            : "Select date"}
                                        </Button>
                                      </PopoverTrigger>
                                      <PopoverContent className="w-auto p-0">
                                        <Calendar
                                          mode="single"
                                          selected={editingItem.expires}
                                          onSelect={(date) => setEditingItem({ ...editingItem, expires: date })}
                                          initialFocus
                                        />
                                      </PopoverContent>
                                    </Popover>
                                  </div>
                                )}

                                <div className="flex justify-end gap-2">
                                  <Button
                                    variant="outline"
                                    onClick={() => {
                                      setEditingItem(null)
                                      setEditingSection(null)
                                    }}
                                  >
                                    Cancel
                                  </Button>
                                  <Button onClick={() => handleUpdateCertification(editingItem)}>Save</Button>
                                </div>
                              </div>
                            ) : (
                              <div>
                                <div className="mb-2 flex items-start justify-between">
                                  <div>
                                    <h4 className="font-medium">{cert.name}</h4>
                                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                                    <p className="text-xs text-muted-foreground">
                                      Issued: {cert.date ? format(cert.date, "MMMM yyyy") : ""}
                                      {cert.hasExpiration && cert.expires
                                        ? ` • Expires: ${format(cert.expires, "MMMM yyyy")}`
                                        : ""}
                                    </p>
                                  </div>
                                  <div className="flex gap-1">
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      onClick={() => handleMoveItem("certifications", cert.id, "up")}
                                      disabled={index === 0}
                                      className="h-8 w-8"
                                    >
                                      <ArrowUp className="h-4 w-4" />
                                    </Button>
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      onClick={() => handleMoveItem("certifications", cert.id, "down")}
                                      disabled={index === resume.certifications.length - 1}
                                      className="h-8 w-8"
                                    >
                                      <ArrowDown className="h-4 w-4" />
                                    </Button>
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      onClick={() => {
                                        setEditingItem(cert)
                                        setEditingSection("certifications")
                                      }}
                                      className="h-8 w-8"
                                    >
                                      <Edit className="h-4 w-4" />
                                    </Button>
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      onClick={() => handleDeleteCertification(cert.id)}
                                      className="h-8 w-8 text-destructive"
                                    >
                                      <Trash className="h-4 w-4" />
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}
                </TabsContent>

                {/* Projects Tab */}
                <TabsContent value="projects" className="space-y-4 pt-4">
                  <div className="flex justify-between">
                    <h3 className="text-lg font-medium">Projects</h3>
                    <Button size="sm" onClick={handleAddProject}>
                      <Plus className="mr-2 h-4 w-4" />
                      Add Project
                    </Button>
                  </div>

                  {resume.projects.length === 0 ? (
                    <div className="rounded-md border border-dashed p-6 text-center">
                      <h4 className="mb-2 font-medium">No projects added</h4>
                      <p className="mb-4 text-sm text-muted-foreground">
                        Add your projects to showcase your practical experience
                      </p>
                      <Button size="sm" onClick={handleAddProject}>
                        <Plus className="mr-2 h-4 w-4" />
                        Add Project
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {resume.projects.map((project, index) => (
                        <Card key={project.id} className={editingItem?.id === project.id ? "border-primary" : ""}>
                          <CardContent className="p-4">
                            {editingItem?.id === project.id && editingSection === "projects" ? (
                              <div className="space-y-4">
                                <div className="space-y-2">
                                  <Label htmlFor={`project-name-${project.id}`}>Project Name</Label>
                                  <Input
                                    id={`project-name-${project.id}`}
                                    value={editingItem.name}
                                    onChange={(e) => setEditingItem({ ...editingItem, name: e.target.value })}
                                  />
                                </div>

                                <div className="space-y-2">
                                  <Label htmlFor={`project-url-${project.id}`}>Project URL (Optional)</Label>
                                  <Input
                                    id={`project-url-${project.id}`}
                                    value={editingItem.url}
                                    onChange={(e) => setEditingItem({ ...editingItem, url: e.target.value })}
                                  />
                                </div>

                                <div className="space-y-2">
                                  <Label htmlFor={`project-description-${project.id}`}>Description</Label>
                                  <Textarea
                                    id={`project-description-${project.id}`}
                                    rows={3}
                                    value={editingItem.description}
                                    onChange={(e) => setEditingItem({ ...editingItem, description: e.target.value })}
                                  />
                                </div>

                                <div className="space-y-2">
                                  <Label>Key Features/Highlights</Label>
                                  <div className="space-y-2">
                                    {editingItem.highlights.map((highlight: string, i: number) => (
                                      <div key={i} className="flex items-center gap-2">
                                        <Input
                                          value={highlight}
                                          onChange={(e) => {
                                            const newHighlights = [...editingItem.highlights]
                                            newHighlights[i] = e.target.value
                                            setEditingItem({ ...editingItem, highlights: newHighlights })
                                          }}
                                        />
                                        <Button
                                          variant="ghost"
                                          size="icon"
                                          onClick={() => {
                                            const newHighlights = [...editingItem.highlights]
                                            newHighlights.splice(i, 1)
                                            setEditingItem({ ...editingItem, highlights: newHighlights })
                                          }}
                                        >
                                          <X className="h-4 w-4" />
                                        </Button>
                                      </div>
                                    ))}
                                    <Button
                                      variant="outline"
                                      size="sm"
                                      onClick={() =>
                                        setEditingItem({
                                          ...editingItem,
                                          highlights: [...editingItem.highlights, ""],
                                        })
                                      }
                                    >
                                      <Plus className="mr-2 h-4 w-4" />
                                      Add Highlight
                                    </Button>
                                  </div>
                                </div>

                                <div className="flex justify-end gap-2">
                                  <Button
                                    variant="outline"
                                    onClick={() => {
                                      setEditingItem(null)
                                      setEditingSection(null)
                                    }}
                                  >
                                    Cancel
                                  </Button>
                                  <Button onClick={() => handleUpdateProject(editingItem)}>Save</Button>
                                </div>
                              </div>
                            ) : (
                              <div>
                                <div className="mb-2 flex items-start justify-between">
                                  <div>
                                    <h4 className="font-medium">{project.name}</h4>
                                    {project.url && (
                                      <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-primary hover:underline"
                                      >
                                        {project.url}
                                      </a>
                                    )}
                                  </div>
                                  <div className="flex gap-1">
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      onClick={() => handleMoveItem("projects", project.id, "up")}
                                      disabled={index === 0}
                                      className="h-8 w-8"
                                    >
                                      <ArrowUp className="h-4 w-4" />
                                    </Button>
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      onClick={() => handleMoveItem("projects", project.id, "down")}
                                      disabled={index === resume.projects.length - 1}
                                      className="h-8 w-8"
                                    >
                                      <ArrowDown className="h-4 w-4" />
                                    </Button>
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      onClick={() => {
                                        setEditingItem(project)
                                        setEditingSection("projects")
                                      }}
                                      className="h-8 w-8"
                                    >
                                      <Edit className="h-4 w-4" />
                                    </Button>
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      onClick={() => handleDeleteProject(project.id)}
                                      className="h-8 w-8 text-destructive"
                                    >
                                      <Trash className="h-4 w-4" />
                                    </Button>
                                  </div>
                                </div>
                                <p className="mt-2 text-sm">{project.description}</p>
                                {project.highlights.length > 0 && (
                                  <div className="mt-2">
                                    <ul className="ml-5 list-disc space-y-1 text-sm">
                                      {project.highlights.map((highlight, i) => (
                                        <li key={i}>{highlight}</li>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Resume Preview</CardTitle>
              <CardDescription>See how your resume will look</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="aspect-[8.5/11] w-full border-b bg-white p-6">
                <div className="space-y-4">
                  <div className="text-center">
                    <h2 className="text-2xl font-bold">{resume.personalInfo.name}</h2>
                    <p className="text-muted-foreground">{resume.personalInfo.title}</p>
                    <div className="mt-1 flex flex-wrap justify-center gap-2 text-xs text-muted-foreground">
                      <span>{resume.personalInfo.email}</span>
                      <span>•</span>
                      <span>{resume.personalInfo.phone}</span>
                      <span>•</span>
                      <span>{resume.personalInfo.location}</span>
                      {resume.personalInfo.website && (
                        <>
                          <span>•</span>
                          <span>{resume.personalInfo.website}</span>
                        </>
                      )}
                    </div>
                  </div>

                  {resume.personalInfo.summary && (
                    <div>
                      <h3 className="mb-1 text-sm font-semibold uppercase">Summary</h3>
                      <Separator className="mb-2" />
                      <p className="text-xs">{resume.personalInfo.summary}</p>
                    </div>
                  )}

                  {resume.experience.length > 0 && (
                    <div>
                      <h3 className="mb-1 text-sm font-semibold uppercase">Experience</h3>
                      <Separator className="mb-2" />
                      <div className="space-y-3">
                        {resume.experience.map((exp) => (
                          <div key={exp.id} className="text-xs">
                            <div className="flex justify-between">
                              <div>
                                <p className="font-medium">{exp.title}</p>
                                <p>
                                  {exp.company} • {exp.location}
                                </p>
                              </div>
                              <p className="text-right text-muted-foreground">
                                {exp.startDate ? format(exp.startDate, "MMM yyyy") : ""} -{" "}
                                {exp.current ? "Present" : exp.endDate ? format(exp.endDate, "MMM yyyy") : ""}
                              </p>
                            </div>
                            <p className="mt-1">{exp.description}</p>
                            {exp.highlights.length > 0 && (
                              <ul className="mt-1 list-disc pl-5">
                                {exp.highlights.map((highlight, i) => (
                                  <li key={i}>{highlight}</li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {resume.education.length > 0 && (
                    <div>
                      <h3 className="mb-1 text-sm font-semibold uppercase">Education</h3>
                      <Separator className="mb-2" />
                      <div className="space-y-3">
                        {resume.education.map((edu) => (
                          <div key={edu.id} className="text-xs">
                            <div className="flex justify-between">
                              <div>
                                <p className="font-medium">{edu.degree}</p>
                                <p>
                                  {edu.institution} • {edu.location}
                                </p>
                              </div>
                              <p className="text-right text-muted-foreground">
                                {edu.startDate ? format(edu.startDate, "MMM yyyy") : ""} -{" "}
                                {edu.endDate ? format(edu.endDate, "MMM yyyy") : ""}
                              </p>
                            </div>
                            <p className="mt-1">{edu.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {resume.skills.length > 0 && (
                    <div>
                      <h3 className="mb-1 text-sm font-semibold uppercase">Skills</h3>
                      <Separator className="mb-2" />
                      <div className="flex flex-wrap gap-1.5">
                        {resume.skills.map((skill) => (
                          <Badge key={skill.id} variant="outline" className="text-xs">
                            {skill.name}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {resume.certifications.length > 0 && (
                    <div>
                      <h3 className="mb-1 text-sm font-semibold uppercase">Certifications</h3>
                      <Separator className="mb-2" />
                      <div className="space-y-2">
                        {resume.certifications.map((cert) => (
                          <div key={cert.id} className="text-xs">
                            <div className="flex justify-between">
                              <div>
                                <p className="font-medium">{cert.name}</p>
                                <p>{cert.issuer}</p>
                              </div>
                              <p className="text-right text-muted-foreground">
                                {cert.date ? format(cert.date, "MMM yyyy") : ""}
                                {cert.hasExpiration && cert.expires ? ` - ${format(cert.expires, "MMM yyyy")}` : ""}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {resume.projects.length > 0 && (
                    <div>
                      <h3 className="mb-1 text-sm font-semibold uppercase">Projects</h3>
                      <Separator className="mb-2" />
                      <div className="space-y-3">
                        {resume.projects.map((project) => (
                          <div key={project.id} className="text-xs">
                            <div className="flex justify-between">
                              <div>
                                <p className="font-medium">{project.name}</p>
                                {project.url && (
                                  <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary hover:underline"
                                  >
                                    {project.url}
                                  </a>
                                )}
                              </div>
                            </div>
                            <p className="mt-1">{project.description}</p>
                            {project.highlights.length > 0 && (
                              <ul className="mt-1 list-disc pl-5">
                                {project.highlights.map((highlight, i) => (
                                  <li key={i}>{highlight}</li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Resume Template</CardTitle>
              <CardDescription>Choose a template for your resume</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-2 sm:grid-cols-2">
                {templates.map((template) => (
                  <div
                    key={template.id}
                    className={cn(
                      "flex cursor-pointer flex-col rounded-lg border p-3 hover:border-primary",
                      selectedTemplate === template.id && "border-primary bg-primary/5",
                    )}
                    onClick={() => setSelectedTemplate(template.id)}
                  >
                    <div className="mb-1 font-medium">{template.name}</div>
                    <div className="text-xs text-muted-foreground">{template.description}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Export Options</CardTitle>
              <CardDescription>Download your resume in different formats</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4">
                <Button onClick={handleGenerateResume} disabled={isGenerating}>
                  {isGenerating ? "Generating PDF..." : "Download PDF"}
                </Button>
                <Button variant="outline">Download as Word Document</Button>
                <Button variant="outline">Download as Plain Text</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
