import { NextPage } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout/DefaultLayout";
import Title from "@/components/Layouts/Partials/Title/Title";

const DataSources: NextPage = () => {
  return (
    <DefaultLayout>
      <Title title={"Data Sources"} />
    </DefaultLayout>
  );
};

export default DataSources;
