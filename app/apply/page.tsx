"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, CheckCircle2, Loader2, Upload } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function ApplyPage() {
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  const handleNext = () => {
    setStep(step + 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsComplete(true)
    }, 1500)
  }

  return (
    <div className="container max-w-3xl px-4 py-6">
      <Button variant="ghost" size="sm" asChild className="mb-4">
        <Link href="/job/1">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Job
        </Link>
      </Button>

      {!isComplete ? (
        <Card>
          <CardHeader>
            <div className="flex items-start gap-4">
              <Avatar className="h-12 w-12 rounded-md">
                <AvatarImage src="/placeholder.svg" alt="TechCorp" />
                <AvatarFallback className="rounded-md">TC</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>Apply for Senior Frontend Developer</CardTitle>
                <CardDescription>TechCorp • San Francisco, CA (Remote)</CardDescription>
              </div>
            </div>
            <div className="mt-4 flex justify-between">
              <div className="flex items-center gap-2">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full ${step >= 1 ? "bg-primary text-primary-foreground" : "border border-muted-foreground text-muted-foreground"}`}
                >
                  1
                </div>
                <Separator className="w-8" />
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full ${step >= 2 ? "bg-primary text-primary-foreground" : "border border-muted-foreground text-muted-foreground"}`}
                >
                  2
                </div>
                <Separator className="w-8" />
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full ${step >= 3 ? "bg-primary text-primary-foreground" : "border border-muted-foreground text-muted-foreground"}`}
                >
                  3
                </div>
              </div>
              <p className="text-sm text-muted-foreground">Step {step} of 3</p>
            </div>
          </CardHeader>
          <CardContent>
            {step === 1 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" defaultValue="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="john.doe@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="(123) 456-7890" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Current Location</Label>
                  <Input id="location" placeholder="City, Country" />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Resume</Label>
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
                  <Label htmlFor="linkedin">LinkedIn Profile (Optional)</Label>
                  <Input id="linkedin" placeholder="https://linkedin.com/in/username" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="portfolio">Portfolio/Website (Optional)</Label>
                  <Input id="portfolio" placeholder="https://yourwebsite.com" />
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="cover">Cover Letter (Optional)</Label>
                  <Textarea id="cover" placeholder="Tell us why you're a good fit for this position..." rows={6} />
                </div>
                <div className="space-y-2">
                  <Label>Additional Questions</Label>
                  <div className="space-y-4 rounded-md border p-4">
                    <div className="space-y-2">
                      <Label htmlFor="experience">How many years of React experience do you have?</Label>
                      <Input id="experience" placeholder="Enter your answer" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="salary">What are your salary expectations?</Label>
                      <Input id="salary" placeholder="Enter your answer" />
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <Checkbox id="terms" />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I agree to the terms and conditions
                    </label>
                    <p className="text-sm text-muted-foreground">
                      By applying, you agree to our privacy policy and terms of service.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex justify-between">
            {step > 1 ? (
              <Button variant="outline" onClick={() => setStep(step - 1)}>
                Previous
              </Button>
            ) : (
              <Button variant="outline" asChild>
                <Link href="/job/1">Cancel</Link>
              </Button>
            )}

            {step < 3 ? (
              <Button onClick={handleNext}>Next</Button>
            ) : (
              <Button onClick={handleSubmit} disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit Application"
                )}
              </Button>
            )}
          </CardFooter>
        </Card>
      ) : (
        <Card className="text-center">
          <CardHeader>
            <div className="flex justify-center">
              <CheckCircle2 className="h-16 w-16 text-primary" />
            </div>
            <CardTitle className="text-2xl">Application Submitted!</CardTitle>
            <CardDescription>
              Your application for Senior Frontend Developer at TechCorp has been successfully submitted.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              We've sent a confirmation email to your inbox. The hiring team will review your application and get back
              to you soon.
            </p>
            <div className="rounded-md bg-muted p-4">
              <p className="font-medium">Application Reference</p>
              <p className="text-muted-foreground">APP-2023-05678</p>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center gap-4">
            <Button variant="outline" asChild>
              <Link href="/job/1">View Job</Link>
            </Button>
            <Button asChild>
              <Link href="/home">Browse More Jobs</Link>
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  )
}
