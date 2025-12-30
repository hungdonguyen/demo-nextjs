export default function Loading() {
  return (
    <div className="min-h-screen p-4">
      <div className="max-w-4xl mx-auto">
        {/* Page title skeleton */}
        <div className="mb-6">
          <div className="h-8 bg-gray-200 rounded-lg w-48 animate-pulse"></div>
        </div>

        {/* Description skeleton */}
        <div className="mb-8">
          <div className="h-4 bg-gray-200 rounded w-64 animate-pulse"></div>
        </div>

        {/* Map skeleton */}
        <div className="bg-gray-100 rounded-lg overflow-hidden">
          <div className="h-[500px] w-full bg-gray-200 animate-pulse relative">
            {/* Map-like skeleton elements */}
            <div className="absolute inset-4 bg-gray-300 rounded opacity-50"></div>
            <div className="absolute top-8 left-8 w-16 h-16 bg-gray-400 rounded-full animate-pulse"></div>
            <div className="absolute top-12 right-12 w-12 h-12 bg-gray-400 rounded animate-pulse"></div>
            <div className="absolute bottom-16 left-16 w-20 h-8 bg-gray-400 rounded animate-pulse"></div>

            {/* Grid lines simulation */}
            <div className="absolute inset-0 opacity-20">
              <div className="w-full h-px bg-gray-400 absolute top-1/4"></div>
              <div className="w-full h-px bg-gray-400 absolute top-1/2"></div>
              <div className="w-full h-px bg-gray-400 absolute top-3/4"></div>
              <div className="h-full w-px bg-gray-400 absolute left-1/4"></div>
              <div className="h-full w-px bg-gray-400 absolute left-1/2"></div>
              <div className="h-full w-px bg-gray-400 absolute left-3/4"></div>
            </div>
          </div>
        </div>

        {/* Loading text */}
        <div className="mt-4 text-center">
          <div className="h-4 bg-gray-200 rounded w-32 animate-pulse mx-auto"></div>
        </div>
      </div>
    </div>
  );
}