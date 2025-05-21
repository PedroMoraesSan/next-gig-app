"use client"

import { Bell, Menu, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ModeToggle } from "@/components/mode-toggle"
import { Sidebar } from "@/components/sidebar"
import { useState } from "react"
import { cn } from "@/lib/utils"

export function Header({ className }: { className?: string }) {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false)

  return (
    <header className={cn("sticky top-0 z-10 border-b bg-background", className)}>
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0">
              <Sidebar />
            </SheetContent>
          </Sheet>

          {!isSearchExpanded && (
            <a href="/" className="flex items-center gap-2">
              <span className="hidden text-xl font-bold sm:inline-block">NextGig</span>
            </a>
          )}
        </div>

        <div className={cn("transition-all duration-200 ease-in-out", isSearchExpanded ? "w-full" : "w-auto")}>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search jobs..."
              className="w-full pl-9 md:w-[300px]"
              onFocus={() => setIsSearchExpanded(true)}
              onBlur={() => setIsSearchExpanded(false)}
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-primary"></span>
            <span className="sr-only">Notifications</span>
          </Button>
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}
