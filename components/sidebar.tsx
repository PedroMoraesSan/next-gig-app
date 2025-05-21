import Link from "next/link"
import { Bookmark, Home, LogOut, Search, Settings, User, Bell, Briefcase } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"

export function Sidebar({ className }: { className?: string }) {
  return (
    <aside className={cn("flex w-64 flex-col border-r", className)}>
      <div className="p-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold">NextGig</span>
        </Link>
      </div>
      <div className="flex flex-1 flex-col gap-2 px-3">
        <Link href="/home">
          <Button variant="ghost" className="w-full justify-start gap-2">
            <Home className="h-5 w-5" />
            Home
          </Button>
        </Link>
        <Link href="/search">
          <Button variant="ghost" className="w-full justify-start gap-2">
            <Search className="h-5 w-5" />
            Search
          </Button>
        </Link>
        <Link href="/saved">
          <Button variant="ghost" className="w-full justify-start gap-2">
            <Bookmark className="h-5 w-5" />
            Saved Jobs
          </Button>
        </Link>
        <Link href="/applications">
          <Button variant="ghost" className="w-full justify-start gap-2">
            <Briefcase className="h-5 w-5" />
            Applications
          </Button>
        </Link>
        <Link href="/notifications">
          <Button variant="ghost" className="w-full justify-start gap-2">
            <Bell className="h-5 w-5" />
            Notifications
          </Button>
        </Link>
        <Separator className="my-2" />
        <Link href="/profile">
          <Button variant="ghost" className="w-full justify-start gap-2">
            <User className="h-5 w-5" />
            Profile
          </Button>
        </Link>
        <Link href="/settings">
          <Button variant="ghost" className="w-full justify-start gap-2">
            <Settings className="h-5 w-5" />
            Settings
          </Button>
        </Link>
      </div>
      <div className="border-t p-4">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src="/placeholder.svg" alt="User" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <p className="text-sm font-medium">John Doe</p>
            <p className="text-xs text-muted-foreground">john.doe@example.com</p>
          </div>
          <Button variant="ghost" size="icon">
            <LogOut className="h-5 w-5" />
            <span className="sr-only">Log out</span>
          </Button>
        </div>
      </div>
    </aside>
  )
}
