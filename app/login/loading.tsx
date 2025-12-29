import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function LoginLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="space-y-3">
          {/* Skeleton cho Title */}
          <Skeleton className="h-8 w-40 mx-auto" />
          {/* Skeleton cho Description */}
          <Skeleton className="h-4 w-64 mx-auto" />
        </CardHeader>
        
        <CardContent className="space-y-6">
          {/* Skeleton cho Email Field */}
          <div className="space-y-2">
            <Skeleton className="h-4 w-16" /> {/* Label */}
            <Skeleton className="h-10 w-full" /> {/* Input */}
          </div>
          
          {/* Skeleton cho Password Field */}
          <div className="space-y-2">
            <Skeleton className="h-4 w-20" /> {/* Label */}
            <Skeleton className="h-10 w-full" /> {/* Input */}
          </div>
          
          {/* Skeleton cho Submit Button */}
          <Skeleton className="h-10 w-full" />
          
          {/* Skeleton cho Footer links */}
          <div className="flex justify-between">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-4 w-24" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
