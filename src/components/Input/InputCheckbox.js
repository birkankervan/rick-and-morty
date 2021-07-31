import React from "react";

const InputCheckbox = React.memo(({ title, options, onChange }) => {
  return (
    <div className="flex flex-col justify-center items-center pb-2">
      <h2 className="text-center mb-2 text-xl font-normal text-gray-500 dark:text-gray-200">
        {title}
      </h2>
      <div className="flex xl:flex-row flex-col ">
        {options.map((item) => (
          <label
            key={item.value}
            className="flex xl:inline-flex items-center mx-2"
          >
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 "
              value={item.value}
              checked={item.checked}
              onChange={() =>
                onChange(title.toLowerCase(), !item.checked, item.value)
              }
            />
            <span className="ml-2 text-gray-700">{item.value}</span>
          </label>
        ))}
      </div>
    </div>
  );
});

export default InputCheckbox;
