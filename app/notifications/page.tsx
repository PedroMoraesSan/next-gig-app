import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { EmptyState } from "@/components/empty-state"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bell, CheckCheck, Clock, Mail } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

// Sample notifications data
const notifications = [
  {
    id: "1",
    type: "application",
    title: "Application Viewed",
    message: "TechCorp has viewed your application for Senior Frontend Developer",
    time: "2 hours ago",
    read: false,
    company: "TechCorp",
    logo: "/placeholder.svg",
  },
  {
    id: "2",
    type: "message",
    title: "New Message",
    message: "You have a new message from Sarah at DesignHub regarding your application",
    time: "1 day ago",
    read: true,
    company: "DesignHub",
    logo: "/placeholder.svg",
  },
  {
    id: "3",
    type: "job",
    title: "New Job Match",
    message: "We found a new job that matches your profile: UI Developer at CreativeLabs",
    time: "2 days ago",
    read: true,
    company: "CreativeLabs",
    logo: "/placeholder.svg",
  },
]

export default function NotificationsPage() {
  // Toggle this to show empty state
  const hasNotifications = notifications.length > 0

  return (
    <div className="container px-4 py-6">
      <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold">Notifications</h1>
          <p className="text-muted-foreground">
            {hasNotifications
              ? `You have ${notifications.filter((n) => !n.read).length} unread notification${notifications.filter((n) => !n.read).length !== 1 ? "s" : ""}`
              : "You have no notifications"}
          </p>
        </div>
        {hasNotifications && (
          <Button variant="outline" size="sm" className="gap-2">
            <CheckCheck className="h-4 w-4" />
            Mark all as read
          </Button>
        )}
      </div>

      {hasNotifications ? (
        <Tabs defaultValue="all" className="space-y-4">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="unread">Unread</TabsTrigger>
            <TabsTrigger value="applications">Applications</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            {notifications.map((notification) => (
              <NotificationCard key={notification.id} notification={notification} />
            ))}
          </TabsContent>

          <TabsContent value="unread" className="space-y-4">
            {notifications
              .filter((notification) => !notification.read)
              .map((notification) => (
                <NotificationCard key={notification.id} notification={notification} />
              ))}
          </TabsContent>

          <TabsContent value="applications" className="space-y-4">
            {notifications
              .filter((notification) => notification.type === "application")
              .map((notification) => (
                <NotificationCard key={notification.id} notification={notification} />
              ))}
          </TabsContent>

          <TabsContent value="messages" className="space-y-4">
            {notifications
              .filter((notification) => notification.type === "message")
              .map((notification) => (
                <NotificationCard key={notification.id} notification={notification} />
              ))}
          </TabsContent>
        </Tabs>
      ) : (
        <EmptyState
          icon={<Bell className="h-10 w-10 text-muted-foreground" />}
          title="No notifications yet"
          description="When you receive notifications about your applications, messages, or job matches, they'll appear here."
          action={{
            label: "Browse Jobs",
            onClick: () => (window.location.href = "/home"),
          }}
        />
      )}
    </div>
  )
}

function NotificationCard({ notification }: { notification: any }) {
  const getIcon = (type: string) => {
    switch (type) {
      case "application":
        return <Clock className="h-5 w-5 text-primary" />
      case "message":
        return <Mail className="h-5 w-5 text-primary" />
      case "job":
        return <Bell className="h-5 w-5 text-primary" />
      default:
        return <Bell className="h-5 w-5 text-primary" />
    }
  }

  return (
    <Card className={notification.read ? "" : "border-primary bg-accent/20"}>
      <CardContent className="p-4">
        <div className="flex gap-4">
          <Avatar className="h-10 w-10">
            <AvatarImage src={notification.logo || "/placeholder.svg"} alt={notification.company} />
            <AvatarFallback>{notification.company.substring(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-1">
            <div className="flex items-center justify-between">
              <p className="font-medium">{notification.title}</p>
              <span className="text-xs text-muted-foreground">{notification.time}</span>
            </div>
            <p className="text-sm text-muted-foreground">{notification.message}</p>
            <div className="flex items-center gap-4 pt-2">
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                {getIcon(notification.type)}
                <span>{notification.type.charAt(0).toUpperCase() + notification.type.slice(1)}</span>
              </div>
              <Separator orientation="vertical" className="h-4" />
              <Link href="#" className="text-xs text-primary hover:underline">
                View Details
              </Link>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
