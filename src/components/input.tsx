import React, { HtmlHTMLAttributes } from "react";

type TProps = {
  title: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ title, name, ...props }: TProps) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {title}
      </label>
      <div className="mt-2">
        <input
          name={name}
          {...props}
          className="block px-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
};
