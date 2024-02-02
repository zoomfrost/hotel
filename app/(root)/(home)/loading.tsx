import { Skeleton } from "@/components/ui/skeleton";

const loading = () => {
  return (
    <div>
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
    </div>
  );
};

export default loading;
