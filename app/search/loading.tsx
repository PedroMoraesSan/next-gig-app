import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent } from "@/components/ui/card"

export default function SearchLoading() {
  return (
    <div className="container px-4 py-6">
      <div className="mb-6">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="mt-2 h-4 w-64" />
      </div>

      <div className="mb-6 flex flex-col gap-4">
        <div className="flex flex-col gap-4 sm:flex-row">
          <Skeleton className="h-10 flex-1" />
          <Skeleton className="h-10 w-[180px]" />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <Card className="h-fit md:block">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <Skeleton className="h-6 w-20" />
              <Skeleton className="h-6 w-16" />
            </div>
            <div className="my-4 h-[1px] bg-border" />
            <div className="space-y-6">
              <div className="space-y-4">
                <Skeleton className="h-5 w-24" />
                <div className="space-y-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <Skeleton className="h-4 w-4" />
                      <Skeleton className="h-4 w-24" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="h-[1px] bg-border" />
              <div className="space-y-4">
                <Skeleton className="h-5 w-32" />
                <div className="flex items-center space-x-2">
                  <Skeleton className="h-5 w-10" />
                  <Skeleton className="h-4 w-24" />
                </div>
              </div>
              <div className="h-[1px] bg-border" />
              <div className="space-y-4">
                <Skeleton className="h-5 w-36" />
                <div className="space-y-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <Skeleton className="h-4 w-4" />
                      <Skeleton className="h-4 w-28" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="md:col-span-3">
          <div className="mb-4 flex items-center justify-between">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-4 w-40" />
          </div>

          <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2">
            {Array.from({ length: 6 }).map((_, i) => (
              <Card key={i}>
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <Skeleton className="h-12 w-12 rounded-md" />
                    <div className="flex-1 space-y-2">
                      <Skeleton className="h-5 w-3/4" />
                      <Skeleton className="h-4 w-1/2" />
                      <div className="flex items-center gap-2 pt-2">
                        <Skeleton className="h-4 w-4" />
                        <Skeleton className="h-4 w-32" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
