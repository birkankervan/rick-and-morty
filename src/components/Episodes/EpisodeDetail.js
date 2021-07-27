import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Input from "./../Input/index";
import useEpisode from "./../../hooks/useEpisodes";
import useCharacter from "./../../hooks/useCharacter";
import cx from "classnames";
import Loading from "./../Loading";

const EpisodeDetail = () => {
  const { id } = useParams();
  const { episode } = useEpisode({ id });
  const { character, isLoading } = useCharacter({
    characters: episode?.characters?.map(
      (characterNo) => +characterNo.split("/")[5]
    ),
  });
  console.log({ character });
  return (
    <div className="container mx-auto px-4 ">
      <div className="py-8">
        <div className="flex justify-between">
          <div>
            <h2 className="text-2xl font-bold leading-7 text-gray-100 sm:text-3xl sm:truncate">
              {episode?.name}
            </h2>
            <p className="mt-1 max-w-2xl text-sm text-gray-400 dark:text-gray-200">
              {episode?.episode}
            </p>
          </div>
          <p className="mt-1 max-w-2xl font-light text-gray-300 dark:text-gray-200">
            {episode?.air_date}
          </p>
        </div>
      </div>
      <div className="p-8 bg-white dark:bg-gray-800 rounded-lg shadow pb-16 ">
        <p className="text-center text-3xl font-bold text-gray-800 dark:text-white">
          All Characters in this Episode
        </p>
        <p className="text-center mb-12 text-xl font-normal text-gray-500 dark:text-gray-200">
          Meat the all characters in this Episode
        </p>
        <div
          className={
            isLoading
              ? "flex justify-center align-center"
              : "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2"
          }
        >
          {isLoading && (
            <div>
              <Loading />
            </div>
          )}
          {character?.map((item) => (
            <div key={item.id} className="p-4 ">
              <div className="text-center mb-4 opacity-90">
                <a href="#" className="block relative">
                  <img
                    alt={item.name}
                    src={item.image}
                    className="mx-auto object-cover rounded-full h-40 w-40 "
                    loading="lazy"
                  />
                </a>
              </div>
              <div className="text-center">
                <p className="text-2xl text-gray-800 dark:text-white">
                  {item.name}
                </p>
                <p className="text-xl text-gray-500 dark:text-gray-200 font-light">
                  {item.species}
                </p>
                <p className="text-md text-gray-500 dark:text-gray-400 max-w-xs pt-4 pb-1 font-light">
                  Status:{" "}
                  <span
                    className={cx("font-semibold", {
                      "text-green-600": item.status === "Alive",
                      "text-red-600": item.status === "Dead",
                    })}
                  >
                    {item.status}
                  </span>
                </p>
                <p className="text-md text-gray-500 dark:text-gray-400 max-w-xs font-light">
                  Location:{" "}
                  <span className="font-semibold">{item.location.name}</span>
                </p>
                <p className="text-md text-gray-500 dark:text-gray-400 max-w-xs font-light">
                  Origin:{" "}
                  <span className="font-semibold">{item.origin.name}</span>
                </p>
                <p className="text-md text-gray-500 dark:text-gray-400 max-w-xs font-light">
                  Type:{" "}
                  <span className="font-semibold">
                    {item.type ? item.type : "-"}
                  </span>
                </p>
                <p className="text-md text-gray-500 dark:text-gray-400 max-w-xs font-light">
                  Gender: <span className="font-semibold">{item.gender}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EpisodeDetail;
