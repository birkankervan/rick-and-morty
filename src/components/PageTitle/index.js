import React from "react";
import Input from "../Input";

const PageTitle = React.memo(({ title, count, counTitle, setName }) => {
  return (
    <div className="flex justify-between">
      <div>
        <h2 className="text-2xl font-bold leading-7 text-gray-100 sm:text-3xl sm:truncate">
          All {title}
        </h2>
        <p className="mt-1 max-w-2xl text-sm text-gray-400 dark:text-gray-200">
          {counTitle} Count : {count}
        </p>
      </div>
      <Input setName={setName} />
    </div>
  );
});

export default PageTitle;
