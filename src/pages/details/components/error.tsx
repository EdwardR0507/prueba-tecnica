import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";

interface ErrorPokemonProps {
  handleBack: () => void;
  error: string | null;
}

export const ErrorPokemon = ({ handleBack, error }: ErrorPokemonProps) => {
  console.error("error", error);
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Pokemon Not Found</h1>
      <Button onClick={handleBack} variant={"ghost"}>
        <ArrowLeftIcon size={24} className="mr-2" />
        Back
      </Button>
    </div>
  );
};
