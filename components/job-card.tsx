import { Bookmark, BookmarkCheck, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"
import Link from "next/link"

export interface JobCardProps {
  id: string
  title: string
  company: string
  location: string
  salary: string
  type: string
  logo?: string
  posted: string
  saved?: boolean
  featured?: boolean
  className?: string
}

export function JobCard({
  id,
  title,
  company,
  location,
  salary,
  type,
  logo,
  posted,
  saved = false,
  featured = false,
  className,
}: JobCardProps) {
  return (
    <Card className={cn(featured && "border-primary", className)}>
      <CardHeader className="flex flex-row items-start gap-4 space-y-0 pb-2">
        <Avatar className="h-12 w-12 rounded-md">
          <AvatarImage src={logo || "/placeholder.svg"} alt={company} />
          <AvatarFallback className="rounded-md">{company.substring(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
        <div className="flex-1 space-y-1">
          <div className="flex items-center justify-between">
            <Link href={`/job/${id}`}>
              <h3 className="font-semibold hover:text-primary hover:underline">{title}</h3>
            </Link>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              {saved ? <BookmarkCheck className="h-5 w-5 text-primary" /> : <Bookmark className="h-5 w-5" />}
              <span className="sr-only">{saved ? "Unsave" : "Save"} job</span>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">{company}</p>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span>{location}</span>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          <Badge variant="secondary">{type}</Badge>
          {featured && (
            <Badge variant="outline" className="border-primary text-primary">
              Featured
            </Badge>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between border-t pt-4">
        <p className="text-sm font-medium">{salary}</p>
        <p className="text-xs text-muted-foreground">{posted}</p>
      </CardFooter>
    </Card>
  )
}
