import React, { useMemo, useState } from "react";
import useCharacter from "../../hooks/useCharacter";

import Input from "../Input";
import Loading from "../Loading";
import Character from "./Character";
import cx from "classnames";

const Characters = () => {
  const [page, setPage] = useState(1);
  const [name, setName] = useState("");

  const { character, isLoading } = useCharacter({ page, name });

  let filledArray = useMemo(
    () =>
      [...new Array(character?.info?.pages)]?.map((item, i) => (
        <button
          key={i}
          type="button"
          className={cx(
            "w-full border px-4 py-2 text-base bg-white hover:bg-gray-100 ",
            {
              "text-blue-800 font-bold": i + 1 === page,
            }
          )}
          onClick={() => {
            document
              .getElementById("character")
              .scrollIntoView({ behavior: "smooth" });
            setPage(i + 1);
          }}
        >
          {i + 1}
        </button>
      )),
    [character, page, setPage]
  );

  return (
    <div className="container mx-auto px-4  ">
      <div className="py-8">
        <div className="flex justify-between">
          <div>
            <h2 className="text-2xl font-bold leading-7 text-gray-100 sm:text-3xl sm:truncate">
              All Characters
            </h2>
            <p className="mt-1 max-w-2xl text-sm text-gray-400 ">
              Character Count : {character?.info?.count}
            </p>
          </div>
          <Input setName={setName} />
        </div>
        <div
          id={"character"}
          className="shadow-lg rounded-2xl w-auto p-4 bg-white flex justify-between items-center flex-col "
        >
          <div className="flex justify-between items-center flex-col xl:flex-row">
            <div
              className={
                isLoading
                  ? "flex justify-center align-center"
                  : "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2"
              }
            >
              {isLoading && (
                <div className={"flex justify-center align-center"}>
                  <Loading />
                </div>
              )}

              {character?.results?.map((item) => (
                <Character key={item.id} character={item} />
              ))}
            </div>
          </div>
          <div className="grid sm:grid-cols-12  grid-cols-5">{filledArray}</div>
        </div>
      </div>
    </div>
  );
};

export default Characters;
