import { Skeleton } from "@/components/ui/skeleton";

const loading = () => {
  return (
    <div>
      <Skeleton className="h-[400px] w-full rounded-xl" />
      <Skeleton className="h-[400px] w-full rounded-xl" />
      <div className="flex gap-2.5">
        <Skeleton className="h-[200px] w-full rounded-xl" />
        <Skeleton className="h-[200px] w-full rounded-xl" />
      </div>
    </div>
  );
};

export default loading;
