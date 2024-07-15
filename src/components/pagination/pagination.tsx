import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onNext: () => void;
  onPrevious: () => void;
}

export const Pagination = ({
  currentPage,
  totalPages,
  onNext,
  onPrevious,
}: PaginationProps) => {
  return (
    <>
      {totalPages > 1 && (
        <section className="flex justify-center mt-4">
          <Button
            className={cn("px-4 py-2 mx-2", {
              "bg-gray-300": currentPage === 1,
              "bg-blue-500 text-white": currentPage !== 1,
            })}
            onClick={onPrevious}
            disabled={currentPage === 1}
          >
            Previous
          </Button>

          <span className="px-4 py-2">
            Page {currentPage} of {totalPages}
          </span>

          <Button
            className={cn("px-4 py-2 mx-2", {
              "bg-gray-300": currentPage === totalPages,
              "bg-blue-500 text-white": currentPage !== totalPages,
            })}
            onClick={onNext}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </section>
      )}
    </>
  );
};
