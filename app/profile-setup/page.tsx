"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2, Upload } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export default function ProfileSetupPage() {
  const [step, setStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)

  const handleNext = () => {
    setStep(step + 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      window.location.href = "/home"
    }, 1500)
  }

  return (
    <div className="container flex min-h-screen items-center justify-center py-8">
      <Card className="mx-auto w-full max-w-2xl">
        <CardHeader>
          <CardTitle>Complete Your Profile</CardTitle>
          <CardDescription>Help us personalize your job search experience</CardDescription>
          <Progress value={step * 33.33} className="mt-2" />
        </CardHeader>
        <CardContent>
          {step === 1 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="headline">Professional Headline</Label>
                <Input id="headline" placeholder="e.g. Senior Frontend Developer" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="summary">Professional Summary</Label>
                <Textarea id="summary" placeholder="Brief overview of your experience and skills" rows={4} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input id="location" placeholder="City, Country" />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Experience Level</Label>
                <Select defaultValue="mid">
                  <SelectTrigger>
                    <SelectValue placeholder="Select experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="entry">Entry Level</SelectItem>
                    <SelectItem value="mid">Mid Level</SelectItem>
                    <SelectItem value="senior">Senior Level</SelectItem>
                    <SelectItem value="lead">Lead / Manager</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Job Type</Label>
                <Select defaultValue="fulltime">
                  <SelectTrigger>
                    <SelectValue placeholder="Select job type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fulltime">Full-time</SelectItem>
                    <SelectItem value="parttime">Part-time</SelectItem>
                    <SelectItem value="contract">Contract</SelectItem>
                    <SelectItem value="freelance">Freelance</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Desired Salary Range</Label>
                <Select defaultValue="range2">
                  <SelectTrigger>
                    <SelectValue placeholder="Select salary range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="range1">$40,000 - $60,000</SelectItem>
                    <SelectItem value="range2">$60,000 - $80,000</SelectItem>
                    <SelectItem value="range3">$80,000 - $100,000</SelectItem>
                    <SelectItem value="range4">$100,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Upload Resume</Label>
                <div className="flex flex-col items-center justify-center rounded-md border border-dashed p-8">
                  <Upload className="mb-4 h-10 w-10 text-muted-foreground" />
                  <p className="mb-2 text-sm font-medium">Drag and drop your resume here</p>
                  <p className="mb-4 text-xs text-muted-foreground">Supports PDF, DOCX (Max 5MB)</p>
                  <Button variant="outline" size="sm">
                    Browse Files
                  </Button>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Skills</Label>
                <Textarea
                  placeholder="Enter your skills separated by commas (e.g. JavaScript, React, Node.js)"
                  rows={3}
                />
              </div>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-between">
          {step > 1 && (
            <Button variant="outline" onClick={() => setStep(step - 1)}>
              Back
            </Button>
          )}
          {step < 3 ? (
            <Button onClick={handleNext} className={step === 1 ? "ml-auto" : ""}>
              Next
            </Button>
          ) : (
            <Button onClick={handleSubmit} disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                "Complete Setup"
              )}
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}
