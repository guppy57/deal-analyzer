import { Button } from "@/components/ui/button";

export default function Properties() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight py-4">Properties</h1>
        <Button size="sm">New property</Button>
      </div>
    </div>
  )
}