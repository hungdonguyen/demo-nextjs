import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

export default function NextjsModuleLoading() {
    
  return (
    <div className="min-h-screen p-8 max-w-7xl mx-auto space-y-6">
      {/* Skeleton cho Title */}
      <Skeleton className="h-10 w-96" />
      
      {/* Skeleton cho Subtitle */}
      <Skeleton className="h-5 w-80" />
      
      {/* Skeleton cho 3 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="transition-shadow">
            <CardContent className="pt-6 space-y-3">
              {/* Card Title */}
              <Skeleton className="h-7 w-3/4" />
              
              {/* Card Description - 4 lines */}
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Skeleton cho Chart Section */}
      <div className="mt-10 bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-lg border space-y-4">
        {/* Chart Title */}
        <Skeleton className="h-6 w-64 mx-auto" />
        
        {/* Chart Bars - 3 rows */}
        <div className="space-y-4 pt-8">
          <div className="flex items-center gap-4">
            <Skeleton className="h-5 w-24" /> {/* Label */}
            <Skeleton className="h-8 flex-1" /> {/* Bar */}
          </div>
          <div className="flex items-center gap-4">
            <Skeleton className="h-5 w-24" />
            <Skeleton className="h-8 flex-1" />
          </div>
          <div className="flex items-center gap-4">
            <Skeleton className="h-5 w-24" />
            <Skeleton className="h-8 flex-1" />
          </div>
        </div>
      </div>
    </div>
  );
}
