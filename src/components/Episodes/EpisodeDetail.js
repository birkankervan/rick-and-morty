import React, { useState } from "react";
import { useParams } from "react-router-dom";

import useEpisode from "./../../hooks/useEpisodes";
import useCharacter from "./../../hooks/useCharacter";

import Loading from "./../Loading";
import Character from "../Characters/Character";
import Input from "../Input";
import InputCheckbox from "./../Input/InputCheckbox";
import cx from "classnames";

const EpisodeDetail = () => {
  const { id } = useParams();
  const [filter, setFilter] = useState({
    name: null,
    status: [
      { value: "Alive", checked: false },
      { value: "Dead", checked: false },
      { value: "Unknown", checked: false },
    ],
    gender: [
      { value: "Female", checked: false },
      { value: "Male", checked: false },
      { value: "Genderless", checked: false },
      { value: "Unknown", checked: false },
    ],
  });
  const { status, gender } = filter;

  const { episode } = useEpisode({ id });
  const { character, filtered, isLoading } = useCharacter({
    characters: episode?.characters?.map(
      (characterNo) => +characterNo.split("/")[5]
    ),
    filter,
  });

  const [filterToggle, setfilterToggle] = useState(false);

  const filterWithText = (text) => {
    setFilter({ ...filter, name: text.length ? text.toLowerCase() : null });
  };
  const filterWithCheck = (filteredSection, checked, value) => {
    if (filteredSection === "status") {
      setFilter({
        ...filter,
        [filteredSection]: status.map((item) => {
          if (item.value === value) {
            return { value, checked };
          }
          return item;
        }),
      });
    }
    if (filteredSection === "gender") {
      setFilter({
        ...filter,
        [filteredSection]: gender.map((item) => {
          if (item.value === value) {
            return { value, checked };
          }
          return item;
        }),
      });
    }
  };

  return (
    <div className="container mx-auto px-4 ">
      <div className="py-8">
        <div className="flex justify-between">
          <div>
            <h2 className="text-2xl font-bold leading-7 text-gray-100 sm:text-3xl sm:truncate">
              {episode?.name}
            </h2>
            <p className="mt-1 max-w-2xl text-sm text-gray-400 ">
              {episode?.episode}
            </p>
          </div>
          <p className="mt-1 max-w-2xl font-light text-gray-300 ">
            {episode?.air_date}
          </p>
        </div>
      </div>
      <div className="p-8 bg-white  rounded-lg shadow pb-16 ">
        <p className="text-center text-3xl font-bold text-gray-800 ">
          All Characters in this Episode
        </p>
        <p className="text-center mb-2 text-xl font-normal text-gray-500 ">
          Meat the all characters in this Episode
        </p>
        <div className="shadow-lg rounded-2xl w-auto p-4 bg-white flex justify-between items-center flex-col xl:flex-row">
          <div
            className={cx(
              "xl:w-4/12 w-full  xl:block  my-2 order-4 xl:order-3",
              { "hidden ": filterToggle }
            )}
          >
            <div className="bg-gray-200 rounded-2xl  ">
              <InputCheckbox
                onChange={filterWithCheck}
                title={"Status"}
                options={status}
              />
            </div>
          </div>
          <div
            className={cx(
              "xl:w-4/12 w-full flex mx-auto xl:flex justify-center my-2 order-2 xl:order-3",
              { "hidden  ": filterToggle }
            )}
          >
            <Input
              setName={filterWithText}
              placeHolder="Search Name, Species, Type"
            />
          </div>
          <div
            className={cx(
              "xl:w-4/12 w-full  xl:block  my-2 order-4 xl:order-3",
              { "hidden xl:block ": filterToggle }
            )}
          >
            <div className="bg-gray-200 rounded-2xl ">
              <InputCheckbox
                title={"Gender"}
                options={gender}
                onChange={filterWithCheck}
              />
            </div>
          </div>
          <div
            className="w-full xl:hidden flex justify-center  order-1 items-center text-center my-2 cursor-pointer"
            onClick={() => setfilterToggle(!filterToggle)}
          >
            <svg
              width={20}
              height={20}
              fill="currentColor"
              className="mr-2 w-10 h-10 text-gray-700 "
              viewBox="0 0 2048 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M960 896q0-106-75-181t-181-75-181 75-75 181 75 181 181 75 181-75 75-181zm768 512q0-52-38-90t-90-38-90 38-38 90q0 53 37.5 90.5t90.5 37.5 90.5-37.5 37.5-90.5zm0-1024q0-52-38-90t-90-38-90 38-38 90q0 53 37.5 90.5t90.5 37.5 90.5-37.5 37.5-90.5zm-384 421v185q0 10-7 19.5t-16 10.5l-155 24q-11 35-32 76 34 48 90 115 7 11 7 20 0 12-7 19-23 30-82.5 89.5t-78.5 59.5q-11 0-21-7l-115-90q-37 19-77 31-11 108-23 155-7 24-30 24h-186q-11 0-20-7.5t-10-17.5l-23-153q-34-10-75-31l-118 89q-7 7-20 7-11 0-21-8-144-133-144-160 0-9 7-19 10-14 41-53t47-61q-23-44-35-82l-152-24q-10-1-17-9.5t-7-19.5v-185q0-10 7-19.5t16-10.5l155-24q11-35 32-76-34-48-90-115-7-11-7-20 0-12 7-20 22-30 82-89t79-59q11 0 21 7l115 90q34-18 77-32 11-108 23-154 7-24 30-24h186q11 0 20 7.5t10 17.5l23 153q34 10 75 31l118-89q8-7 20-7 11 0 21 8 144 133 144 160 0 8-7 19-12 16-42 54t-45 60q23 48 34 82l152 23q10 2 17 10.5t7 19.5zm640 533v140q0 16-149 31-12 27-30 52 51 113 51 138 0 4-4 7-122 71-124 71-8 0-46-47t-52-68q-20 2-30 2t-30-2q-14 21-52 68t-46 47q-2 0-124-71-4-3-4-7 0-25 51-138-18-25-30-52-149-15-149-31v-140q0-16 149-31 13-29 30-52-51-113-51-138 0-4 4-7 4-2 35-20t59-34 30-16q8 0 46 46.5t52 67.5q20-2 30-2t30 2q51-71 92-112l6-2q4 0 124 70 4 3 4 7 0 25-51 138 17 23 30 52 149 15 149 31zm0-1024v140q0 16-149 31-12 27-30 52 51 113 51 138 0 4-4 7-122 71-124 71-8 0-46-47t-52-68q-20 2-30 2t-30-2q-14 21-52 68t-46 47q-2 0-124-71-4-3-4-7 0-25 51-138-18-25-30-52-149-15-149-31v-140q0-16 149-31 13-29 30-52-51-113-51-138 0-4 4-7 4-2 35-20t59-34 30-16q8 0 46 46.5t52 67.5q20-2 30-2t30 2q51-71 92-112l6-2q4 0 124 70 4 3 4 7 0 25-51 138 17 23 30 52 149 15 149 31z" />
            </svg>
            <p className="font-semibold">Character Filter</p>
          </div>
        </div>
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

          {(filtered ? filtered : character)?.map((item) => (
            <Character key={item.id} character={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EpisodeDetail;
