import { NextPage } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout/DefaultLayout";
import Title from "@/components/Layouts/Partials/Title/Title";

const Vulnerabilities: NextPage = () => {
  return (
    <DefaultLayout>
      <Title title={"Vulnerabilities"} />
    </DefaultLayout>
  );
};

export default Vulnerabilities;
