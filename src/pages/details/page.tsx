import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeftIcon } from "lucide-react";

import { Loader } from "@/components/loader/loader";
import { Button } from "@/components/ui/button";
import { usePokemon } from "@/hooks/use-pokemon";
import { useUserStore } from "@/stores/user/user.store";
import { ErrorPokemon } from "./components/error";

export default function DetailsPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { pokemon, loading, error } = usePokemon(id!);
  const { loggedIn, capturePokemon, isAlreadyCaptured } = useUserStore();

  const handleBack = () => {
    navigate(-1);
  };

  const handleCatch = () => {
    if (!pokemon) return;
    if (!isAlreadyCaptured(pokemon?.name)) {
      capturePokemon(pokemon);
    }
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader />
      </div>
    );
  if (error) return <ErrorPokemon handleBack={handleBack} error={error} />;

  return (
    <>
      {pokemon ? (
        <section className="container mx-auto p-4 w-full">
          <Button onClick={handleBack} variant={"ghost"}>
            <ArrowLeftIcon size={24} className="mr-2" />
            Back
          </Button>
          <h1 className="text-2xl font-bold capitalize my-4">{pokemon.name}</h1>
          <div className="flex flex-col md:flex-row md:justify-evenly">
            <div>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                alt={pokemon.name}
                className="mx-auto mb-4"
              />
            </div>
            <div className="flex flex-col gap-6">
              <p>
                <strong>Type:</strong>{" "}
                {pokemon.types.map((typeInfo) => typeInfo.type.name).join(", ")}
              </p>
              <p>
                <strong>Ability:</strong>{" "}
                {pokemon.abilities
                  .map((abilityInfo) => abilityInfo.ability.name)
                  .join(", ")}
              </p>
              <p>
                <strong>Base Experience:</strong> {pokemon.base_experience}
              </p>

              {loggedIn &&
                (isAlreadyCaptured(pokemon.name!) ? (
                  <p className="text-green-500">Pokemon Captured</p>
                ) : (
                  <Button
                    onClick={handleCatch}
                    className="bg-green-500 text-white mt-4"
                  >
                    Catch Pokemon
                  </Button>
                ))}
            </div>
          </div>
        </section>
      ) : (
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold">Pokemon Not Found</h1>
        </div>
      )}
    </>
  );
}
