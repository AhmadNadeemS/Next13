import { FC } from "react";

interface Props {
  title?: string;
  desc?: string;
}

export const APP_NAME = "Review App";
const defaultDesc = "Place to get all kind of reviews";

const AppHead: FC<Props> = ({ title, desc }): JSX.Element => {
  const appTitle = title ? title + " | " + APP_NAME : APP_NAME;
  return (
    <>
      <title>{appTitle}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content={desc || defaultDesc} />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
};

export default AppHead;
