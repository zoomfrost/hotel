import { Skeleton } from "@/components/ui/skeleton";

const loading = () => {
  return (
    <div>
      <Skeleton className="h-3/4 w-full rounded-xl" />
    </div>
  );
};

export default loading;
