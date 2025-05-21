import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { BottomNav } from "@/components/bottom-nav"
import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "NextGig - Find Your Next Job",
  description: "Discover and apply to the best jobs in your field",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col md:flex-row">
            <Sidebar className="hidden md:flex" />
            <div className="flex flex-1 flex-col">
              <Header />
              <main className="flex-1 pb-16 md:pb-0">{children}</main>
              <BottomNav className="fixed bottom-0 left-0 right-0 md:hidden" />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
