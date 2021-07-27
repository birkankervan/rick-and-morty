import React from "react";

const Loading = () => {
  return (
    <div className="animate-bounce h-screen m-auto flex">
      {" "}
      <img
        src="https://media.cdn.adultswim.com/uploads/20210428/21428161947-rick-and-morty-logo-png.png"
        alt="Rick and Morty"
        width={300}
        className="mx-auto my-auto"
      />
    </div>
  );
};

export default Loading;
