"use client";
import { FC, useState } from "react";

interface Props {}

const ErrorGenerator: FC<Props> = (props): JSX.Element => {
  const [isError, setIsError] = useState(false);
  if (isError) throw new Error("Ops, my custom error ");
  return (
    <button
      onClick={() => setIsError(true)}
      className="bg-red-400 p-2 text-white"
    >
      Generate Error{" "}
    </button>
  );
};

export default ErrorGenerator;
