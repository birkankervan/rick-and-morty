import React from "react";

const Home = () => {
  return (
    <div className="container mx-auto px-6 md:px-12 relative flex items-center py-32 xl:py-40 ">
      <div className="lg:w-3/5 xl:w-2/5 flex flex-col items-start relative z-10">
        <img
          src="https://media.cdn.adultswim.com/uploads/20210428/21428161947-rick-and-morty-logo-png.png"
          alt="Rick and Morty"
        />

        <a
          href="https://www.adultswim.com/videos/rick-and-morty"
          className="block bg-white hover:bg-gray-100 py-3 px-4 rounded-lg text-lg text-gray-800 font-bold uppercase mt-10"
          target="_blank"
          rel="noreferrer"
        >
          Discover
        </a>
      </div>
    </div>
  );
};

export default Home;
