import { Loader2 } from "lucide-react";

import { cn } from "@/lib/utils";

interface LoaderProps {
  className?: string;
}

export const Loader = ({ className }: LoaderProps) => {
  return (
    <div className={cn("flex justify-center items-center", className)}>
      <Loader2 className="size-12 animate-spin" />
    </div>
  );
};
