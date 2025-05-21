"use client"

import type { ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface EmptyStateProps {
  icon: ReactNode
  title: string
  description: string
  action?: {
    label: string
    onClick: () => void
  }
  className?: string
}

export function EmptyState({ icon, title, description, action, className }: EmptyStateProps) {
  return (
    <div className={cn("flex flex-col items-center justify-center px-4 py-16 text-center", className)}>
      <div className="mb-4 rounded-full bg-muted p-6">{icon}</div>
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="mb-6 max-w-md text-muted-foreground">{description}</p>
      {action && <Button onClick={action.onClick}>{action.label}</Button>}
    </div>
  )
}
