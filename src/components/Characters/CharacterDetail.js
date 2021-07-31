import React from "react";
import useCharacter from "../../hooks/useCharacter";
import Loading from "../Loading";
import { useParams } from "react-router-dom";
import cx from "classnames";
import useEpisode from "../../hooks/useEpisodes";
import Table from "../Table";

const CharacterDetail = () => {
  const { id } = useParams();
  const { character, isLoading } = useCharacter({
    characters: id,
  });

  const { episode } = useEpisode({
    id: character?.episode?.map((characterNo) => +characterNo.split("/")[5]),
  });

  if (isLoading) return <Loading />;

  return (
    <div className="container mx-auto px-4 ">
      <div className="py-8">
        <div className="flex justify-between">
          <div className="flex ">
            <img
              src={character.image}
              className="w-40 h-40 rounded-lg"
              alt={character.name}
            />
            <div className="ml-5">
              <h2 className="text-2xl font-bold leading-7 text-gray-100 sm:text-3xl sm:truncate">
                {character.name}
              </h2>
              <p className="mt-1 max-w-2xl text-sm text-gray-400 dark:text-gray-200">
                <span className="font-bold">Gender:</span> {character?.gender}
              </p>
              <p className="mt-1 max-w-2xl text-sm text-gray-400 dark:text-gray-200">
                <span className="font-bold">Species:</span> {character?.species}
              </p>
              <p className="mt-1 max-w-2xl text-sm text-gray-400 dark:text-gray-200">
                <span className="font-bold">Location:</span>{" "}
                {character?.location?.name}
              </p>
              <p className="mt-1 max-w-2xl text-sm text-gray-400 dark:text-gray-200">
                <span className="font-bold">Origin:</span>{" "}
                {character?.origin?.name}
              </p>
              <p className="mt-1 max-w-2xl text-sm text-gray-400 dark:text-gray-200">
                <span className="font-bold">Type:</span>{" "}
                {character?.type !== "" ? character?.type : "-"}
              </p>
            </div>
          </div>
          <p
            className={cx("font-semibold", {
              "text-green-600": character?.status === "Alive",
              "text-red-600": character?.status === "Dead",
            })}
          >
            {character?.status}
          </p>
        </div>
      </div>
      <div className="p-8 bg-white dark:bg-gray-800 rounded-lg shadow pb-16 ">
        <p className="text-center text-3xl font-bold text-gray-800 dark:text-white">
          All Episodes with This Character
        </p>

        <div className={"flex justify-center align-center"}>
          {isLoading && (
            <div>
              <Loading />
            </div>
          )}

          <Table
            titles={{
              name: "Episode Name",
              air_date: "Air Date",
              episode: "Episode",
              characters: "Character Count",
            }}
            pagination={false}
            episode={episode}
          />
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
