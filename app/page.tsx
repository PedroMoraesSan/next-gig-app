import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Briefcase, Building2, Search } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-accent to-background py-20">
        <div className="container px-4 text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Find Your <span className="text-primary">Next Gig</span> Today
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Discover thousands of job opportunities with the top companies around the world. Your dream job is just a
            click away.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="gap-2">
              <Link href="/onboarding">
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/login">I already have an account</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Why Choose NextGig</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              We've built a platform that connects talented professionals with the best opportunities.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border p-6">
              <Search className="mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 text-xl font-semibold">Smart Job Matching</h3>
              <p className="text-muted-foreground">
                Our AI-powered algorithm matches you with jobs that fit your skills and preferences.
              </p>
            </div>
            <div className="rounded-lg border p-6">
              <Building2 className="mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 text-xl font-semibold">Top Companies</h3>
              <p className="text-muted-foreground">
                Connect with thousands of top companies looking for talent like you.
              </p>
            </div>
            <div className="rounded-lg border p-6">
              <Briefcase className="mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 text-xl font-semibold">Application Tracking</h3>
              <p className="text-muted-foreground">
                Keep track of all your job applications in one place and never miss an update.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-muted py-20">
        <div className="container px-4">
          <div className="grid gap-8 text-center sm:grid-cols-3">
            <div>
              <p className="text-4xl font-bold text-primary">10,000+</p>
              <p className="text-lg font-medium">Active Jobs</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary">5,000+</p>
              <p className="text-lg font-medium">Companies</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary">1M+</p>
              <p className="text-lg font-medium">Happy Users</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Success Stories</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Hear from professionals who found their dream jobs through NextGig.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border p-6">
              <div className="mb-4 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/20" />
                <div>
                  <p className="font-medium">Sarah Johnson</p>
                  <p className="text-sm text-muted-foreground">UX Designer at DesignHub</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                "NextGig made it incredibly easy to find and apply for jobs that matched my skills. I landed my dream
                job within two weeks!"
              </p>
            </div>
            <div className="rounded-lg border p-6">
              <div className="mb-4 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/20" />
                <div>
                  <p className="font-medium">Michael Chen</p>
                  <p className="text-sm text-muted-foreground">Software Engineer at TechCorp</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                "The job matching algorithm is spot on. I received notifications for positions that perfectly matched my
                experience and preferences."
              </p>
            </div>
            <div className="rounded-lg border p-6">
              <div className="mb-4 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/20" />
                <div>
                  <p className="font-medium">Emily Rodriguez</p>
                  <p className="text-sm text-muted-foreground">Product Manager at ProductLabs</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                "The application tracking feature helped me stay organized during my job search. I highly recommend
                NextGig to anyone looking for a new opportunity."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-accent py-20">
        <div className="container px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Ready to Find Your Next Gig?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
            Join thousands of professionals who have already found their dream jobs through NextGig.
          </p>
          <Button asChild size="lg" className="gap-2">
            <Link href="/onboarding">
              Get Started Now
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="container px-4">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div>
              <p className="text-xl font-bold">NextGig</p>
              <p className="text-sm text-muted-foreground">Find your next opportunity</p>
            </div>
            <div className="flex gap-6">
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                About
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Terms
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Contact
              </Link>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} NextGig. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
