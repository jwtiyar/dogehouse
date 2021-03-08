import React from "react";
import { SmSolidSearch } from "../icons";

export interface SearchBarProps
  extends React.ComponentPropsWithoutRef<"input"> {
  inputClassName?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  className,
  inputClassName,
  ...props
}) => {
  return (
    <div
      className={`relative text-gray-300 focus-within:text-gray-100 w-full ${className}`}
    >
      <div className="h-full absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <SmSolidSearch />
      </div>
      <input
        className={`w-full pl-7 pr-4 py-2 bg-gray-700 text-gray-100 placeholder-gray-300 rounded-lg focus:outline-none ${inputClassName}`}
        {...props}
      />
    </div>
  );
};
