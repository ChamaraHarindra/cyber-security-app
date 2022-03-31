import { NextPage } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout/DefaultLayout";
import Title from "@/components/Layouts/Partials/Title/Title";

const Dashboard: NextPage = () => {
  return (
    <DefaultLayout>
      <Title title={"Dashboard"} />
    </DefaultLayout>
  );
};

export default Dashboard;
