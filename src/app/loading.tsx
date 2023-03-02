import { FC } from "react";

interface Props {}

const loading: FC<Props> = (props): JSX.Element => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-4xl gap-5">
      {Array(4)
        .fill("")
        .map((_, index) => {
          return (
            <div className="space-y-4" key={index}>
              <div className="h-28 bg-gray-200" />
              <div className="h-4 bg-gray-200" />
              <div className="h-4 bg-gray-200" />
            </div>
          );
        })}
    </div>
  );
};

export default loading;
