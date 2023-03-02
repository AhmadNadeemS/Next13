"use client";
import { FC } from "react";

interface Props {
  error: Error;
  reset(): void;
}

const Error: FC<Props> = ({ error, reset }): JSX.Element => {
  return (
    <div className="text-500-red">
      {error.message}
      <button onClick={reset} className="text-black hover:underline">
        Retry...
      </button>
    </div>
  );
};

export default Error;
