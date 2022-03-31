import { NextPage } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout/DefaultLayout";
import Title from "@/components/Layouts/Partials/Title/Title";

const EventTracker: NextPage = () => {
  return (
    <DefaultLayout>
      <Title title={"Event Tracker"} />
    </DefaultLayout>
  );
};

export default EventTracker;
