# NextGig - Job Search Platform

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/pedrohmsan1-gmailcoms-projects/v0-next-gig)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.dev-black?style=for-the-badge)](https://v0.dev/chat/projects/QBrIryEwi0N)

## Overview

NextGig is a modern job search platform built with Next.js that connects job seekers with employers. The application provides a seamless experience for users to find, save, and apply for jobs, as well as manage their professional profiles and track their applications.

## Live Demo

The project is live at: [https://vercel.com/pedrohmsan1-gmailcoms-projects/v0-next-gig](https://vercel.com/pedrohmsan1-gmailcoms-projects/v0-next-gig)

## Features

- **User Authentication**: Login and registration system
- **Job Search & Filtering**: Find jobs based on various criteria
- **Job Applications**: Apply to jobs with resume and cover letter
- **Profile Management**: Create and update professional profiles
- **Resume Builder**: Create and manage professional resumes
- **Job Alerts**: Set up notifications for new job postings
- **Application Tracking**: Monitor the status of job applications
- **Saved Jobs**: Bookmark jobs for later review

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components
- **Form Handling**: React Hook Form, Zod validation
- **UI Components**: Radix UI primitives
- **Date Handling**: date-fns
- **Charts**: Recharts
- **Notifications**: Sonner

## Dependencies

### Core Dependencies

```json
"dependencies": {
  "@hookform/resolvers": "^3.9.1",
  "next": "15.2.4",
  "react": "^19",
  "react-dom": "^19",
  "react-hook-form": "^7.54.1",
  "zod": "^3.24.1"
}
```

### UI Components

```json
"dependencies": {
  "@radix-ui/react-accordion": "1.2.2",
  "@radix-ui/react-alert-dialog": "1.1.4",
  "@radix-ui/react-aspect-ratio": "1.1.1",
  "@radix-ui/react-avatar": "1.1.2",
  "@radix-ui/react-checkbox": "1.1.3",
  "@radix-ui/react-collapsible": "1.1.2",
  "@radix-ui/react-context-menu": "2.2.4",
  "@radix-ui/react-dialog": "1.1.4",
  "@radix-ui/react-dropdown-menu": "2.1.4",
  "@radix-ui/react-hover-card": "1.1.4",
  "@radix-ui/react-label": "2.1.1",
  "@radix-ui/react-menubar": "1.1.4",
  "@radix-ui/react-navigation-menu": "1.2.3",
  "@radix-ui/react-popover": "1.1.4",
  "@radix-ui/react-progress": "1.1.1",
  "@radix-ui/react-radio-group": "1.2.2",
  "@radix-ui/react-scroll-area": "1.2.2",
  "@radix-ui/react-select": "2.1.4",
  "@radix-ui/react-separator": "1.1.1",
  "@radix-ui/react-slider": "1.2.2",
  "@radix-ui/react-slot": "1.1.1",
  "@radix-ui/react-switch": "1.1.2",
  "@radix-ui/react-tabs": "1.1.2",
  "@radix-ui/react-toast": "1.2.4",
  "@radix-ui/react-toggle": "1.1.1",
  "@radix-ui/react-toggle-group": "1.1.1",
  "@radix-ui/react-tooltip": "1.1.6"
}
```

### Styling and Utilities

```json
"dependencies": {
  "autoprefixer": "^10.4.20",
  "class-variance-authority": "^0.7.1",
  "clsx": "^2.1.1",
  "cmdk": "1.0.4",
  "date-fns": "latest",
  "embla-carousel-react": "8.5.1",
  "input-otp": "1.4.1",
  "lucide-react": "^0.454.0",
  "next-themes": "latest",
  "react-day-picker": "8.10.1",
  "react-resizable-panels": "^2.1.7",
  "recharts": "2.15.0",
  "sonner": "^1.7.1",
  "tailwind-merge": "^2.5.5",
  "tailwindcss-animate": "^1.0.7",
  "vaul": "^0.9.6"
}
```

## Pages and Functionality

### Landing Page (`/`)
- Introduction to the platform
- Features overview
- Testimonials
- Call-to-action buttons for registration and login

### Authentication
- **Login Page** (`/login`): User authentication
- **Onboarding** (`/onboarding`): New user registration
- **Profile Setup** (`/profile-setup`): Complete profile after registration

### Job Search
- **Home Page** (`/home`): Dashboard with job recommendations
  - Tabs for Recommended, Recent, and Remote jobs
  - Featured jobs section
  - Job filtering options
- **Search Page** (`/search`): Advanced job search with filters
- **Job Details** (`/job/[id]`): Detailed view of a specific job
  - Job description
  - Company information
  - Application button
  - Similar jobs recommendations

### User Profile
- **Profile Page** (`/profile`): User's professional profile
  - About section
  - Skills
  - Experience
  - Education
  - Certifications
  - Resume management
  - Job recommendations
- **Resume Builder** (`/resume-builder`): Create and edit resumes

### Job Applications
- **Apply Page** (`/apply`): Multi-step job application form
  - Personal information
  - Resume upload
  - Cover letter
  - Additional questions
- **Applications** (`/applications`): Track submitted applications
- **Saved Jobs** (`/saved`): Bookmarked job listings

### Notifications
- **Job Alerts** (`/job-alerts`): Manage job notification preferences
- **Notifications** (`/notifications`): View system notifications

### Settings
- **Settings** (`/settings`): Account preferences and settings

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/PedroMoraesSan/next-gig-app.git
cd next-gig-app
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

- `/app`: Next.js app router pages
- `/components`: Reusable UI components
- `/hooks`: Custom React hooks
- `/lib`: Utility functions
- `/public`: Static assets
- `/styles`: Global styles

## Contributing

This repository is automatically synced with deployments from [v0.dev](https://v0.dev). To contribute, make changes through the v0.dev interface at:

**[https://v0.dev/chat/projects/QBrIryEwi0N](https://v0.dev/chat/projects/QBrIryEwi0N)**

## License

This project is licensed under the MIT License.
