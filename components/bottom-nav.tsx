import Link from "next/link"
import { Bookmark, Home, Search, Settings, User } from "lucide-react"
import { cn } from "@/lib/utils"

export function BottomNav({ className }: { className?: string }) {
  return (
    <nav className={cn("border-t bg-background", className)}>
      <div className="container flex h-16 items-center justify-around px-4">
        <Link href="/home" className="flex flex-col items-center gap-1">
          <Home className="h-5 w-5" />
          <span className="text-xs">Home</span>
        </Link>
        <Link href="/search" className="flex flex-col items-center gap-1">
          <Search className="h-5 w-5" />
          <span className="text-xs">Search</span>
        </Link>
        <Link href="/saved" className="flex flex-col items-center gap-1">
          <Bookmark className="h-5 w-5" />
          <span className="text-xs">Saved</span>
        </Link>
        <Link href="/profile" className="flex flex-col items-center gap-1">
          <User className="h-5 w-5" />
          <span className="text-xs">Profile</span>
        </Link>
        <Link href="/settings" className="flex flex-col items-center gap-1">
          <Settings className="h-5 w-5" />
          <span className="text-xs">Settings</span>
        </Link>
      </div>
    </nav>
  )
}
