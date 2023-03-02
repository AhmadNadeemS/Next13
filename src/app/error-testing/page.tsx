import ErrorGenerator from "@/components/ErrorGenerator";

const page = (): JSX.Element => {
  return (
    <div>
      This page is going to show us next js 13 error!
      <div>
        <ErrorGenerator />
      </div>
    </div>
  );
};

export default page;
