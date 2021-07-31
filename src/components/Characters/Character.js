import React from "react";

import cx from "classnames";
import { Link } from "react-router-dom";

const Character = React.memo(({ character }) => {
  return (
    <div className="p-4 ">
      <div className="text-center mb-4 opacity-90">
        <Link to={`/character/${character.id}`} className="block relative">
          <img
            alt={character.name}
            src={character.image}
            className="mx-auto object-cover rounded-full h-40 w-40 "
            loading="lazy"
          />
        </Link>
      </div>
      <div className="text-center">
        <p className="text-2xl text-gray-800 ">{character.name}</p>
        <p className="text-xl text-gray-500  font-light">{character.species}</p>
        <p className="text-md text-gray-500  max-w-xs pt-4 pb-1 font-light">
          Status:{" "}
          <span
            className={cx("font-semibold", {
              "text-green-600": character.status === "Alive",
              "text-red-600": character.status === "Dead",
            })}
          >
            {character.status}
          </span>
        </p>
        <p className="text-md text-gray-500  max-w-xs font-light">
          Location:{" "}
          <span className="font-semibold">{character.location.name}</span>
        </p>
        <p className="text-md text-gray-500  max-w-xs font-light">
          Origin: <span className="font-semibold">{character.origin.name}</span>
        </p>
        <p className="text-md text-gray-500  max-w-xs font-light">
          Type:{" "}
          <span className="font-semibold">
            {character.type ? character.type : "-"}
          </span>
        </p>
        <p className="text-md text-gray-500  max-w-xs font-light">
          Gender: <span className="font-semibold">{character.gender}</span>
        </p>
      </div>
    </div>
  );
});

export default Character;
