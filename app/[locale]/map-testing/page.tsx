import { MapComponent } from "@/components/Map/MapComponent";

export default function MapTestingPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent p-4 dark:text-gray-300">Map Testing Page</h1>
      <p className="p-4 text-2xl text-gray-700 dark:text-gray-300">This is the Map Testing page.</p>
      <MapComponent />
    </div>
  );
}