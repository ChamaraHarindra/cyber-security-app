import { NextPage } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout/DefaultLayout";
import Title from "@/components/Layouts/Partials/Title/Title";

const Reports: NextPage = () => {
  return (
    <DefaultLayout>
      <Title title={"Reports"} />
    </DefaultLayout>
  );
};

export default Reports;
