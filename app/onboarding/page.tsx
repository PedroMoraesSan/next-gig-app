"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, Building2, ChevronRight, GraduationCapIcon as Graduation, User } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(0)

  const steps = [
    {
      title: "Welcome to NextGig",
      description: "Find your dream job with our personalized job recommendations.",
      icon: <Briefcase className="h-12 w-12 text-primary" />,
    },
    {
      title: "Discover Opportunities",
      description: "Browse thousands of jobs from top companies around the world.",
      icon: <Building2 className="h-12 w-12 text-primary" />,
    },
    {
      title: "Track Applications",
      description: "Keep track of your job applications and never miss a deadline.",
      icon: <Graduation className="h-12 w-12 text-primary" />,
    },
    {
      title: "Build Your Profile",
      description: "Create a professional profile to stand out to employers.",
      icon: <User className="h-12 w-12 text-primary" />,
    },
  ]

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-accent to-background p-4">
      <Card className="mx-auto w-full max-w-md">
        <CardContent className="pt-6">
          <div className="mb-8 flex justify-center">
            {steps.map((_, index) => (
              <div
                key={index}
                className={cn("mx-1 h-2 w-2 rounded-full", index === currentStep ? "bg-primary" : "bg-muted")}
              />
            ))}
          </div>

          <div className="flex flex-col items-center text-center">
            {steps[currentStep].icon}
            <h1 className="mt-6 text-2xl font-bold">{steps[currentStep].title}</h1>
            <p className="mt-2 text-muted-foreground">{steps[currentStep].description}</p>
          </div>

          <div className="mt-8 flex flex-col gap-4">
            {currentStep < steps.length - 1 ? (
              <>
                <Button onClick={handleNext} className="w-full">
                  Next
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/login">Skip</Link>
                </Button>
              </>
            ) : (
              <>
                <Button asChild>
                  <Link href="/login">Get Started</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/login">I already have an account</Link>
                </Button>
              </>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
