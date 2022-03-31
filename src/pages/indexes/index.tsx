import { NextPage } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout/DefaultLayout";
import Title from "@/components/Layouts/Partials/Title/Title";

const Indexes: NextPage = () => {
  return (
    <DefaultLayout>
      <Title title={"Indexes"} />
    </DefaultLayout>
  );
};

export default Indexes;
