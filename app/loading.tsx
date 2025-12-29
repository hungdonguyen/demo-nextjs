import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

export default function Loading() {
  return (
    <nav>
      <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Skeleton cho 2 Cards */}
        {[1, 2].map((i) => (
          <Card key={i} className="flex flex-col h-full rounded-[2rem] overflow-hidden">
            {/* Skeleton cho Image */}
            <Skeleton className="h-64 w-full rounded-none" />
            
            <CardContent className="flex flex-col flex-grow p-8 space-y-4">
              {/* Skeleton cho Title */}
              <Skeleton className="h-8 w-3/4" />
              
              {/* Skeleton cho Description - 3 dòng */}
              <div className="space-y-2 flex-grow">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-4/5" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Skeleton cho Comparison Table */}
      <div className="container mx-auto p-6 mt-8">
        <Skeleton className="h-12 w-64 mx-auto mb-6" /> {/* Table Title */}
        <div className="space-y-3">
          <Skeleton className="h-16 w-full" /> {/* Header Row */}
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-12 w-full" />
        </div>
      </div>
    </nav>
  );
}
