import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="space-y-6">
      <Skeleton className="h-12 w-72" />
      <Skeleton className="h-24 w-full rounded-[2rem]" />
      <div className="grid gap-6 xl:grid-cols-2">
        <Skeleton className="h-80 w-full rounded-[2rem]" />
        <Skeleton className="h-80 w-full rounded-[2rem]" />
      </div>
    </div>
  );
}
