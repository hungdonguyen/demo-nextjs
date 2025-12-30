"use client";

import dynamic from "next/dynamic";

// Dynamically import the map component to avoid SSR issues
const DynamicMap = dynamic(() => import("../Map/MapContent"), {
  ssr: false,
  loading: () => <div className="h-[500px] w-full rounded-md bg-gray-200 flex items-center justify-center">Loading map...</div>
});

export function MapComponent() {
  return <DynamicMap />;
}