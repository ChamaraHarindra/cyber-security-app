import { useMemo } from "react";
import { NextPage } from "next";
import { Flex, Text, useDisclosure, Image } from "@chakra-ui/react";
import DefaultLayout from "@/components/Layouts/DefaultLayout/DefaultLayout";
import Title from "@/components/Layouts/Partials/Title/Title";
import Card from "@/components/Card/Card";
import ReportTable from "@/components/Table/ReportTable";

import Lottie from "react-lottie";
import animationData from "../../../public/lottie/loading.json";
import GenerateReportDrawer from "@/components/Drawers/GenerateReportDrawer/GenerateReportDrawer";

const Reports: NextPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const data = useMemo(
    () => [
      {
        col1: "pdf",
        col2: "SQL tag test",
        col3: {
          status: "In Progress",
          time: "4h 32m",
          loading: true,
        },
        col4: "June 28th, 2021 12:01:34 AM",
      },
      {
        col1: "pdf",
        col2: "AC test",
        col3: {
          status: "Completed",
          time: "2h 23m",
          loading: false,
        },
        col4: "June 29th, 2021 12:01:34 AM",
      },
      {
        col1: "pdf",
        col2: "Gen 01",
        col3: {
          status: "Failed",
          time: "1h 23m",
          loading: false,
        },
        col4: "June 29th, 2021 12:01:34 AM",
      },
    ],
    []
  );

  const columns = useMemo(
    () => [
      {
        Header: "Report Type",
        accessor: "col1",
        Cell: (row: any) => {
          return <Image src={`/images/${row.value}.png`} />;
        },
      },
      {
        Header: "Report Name",
        accessor: "col2",
      },
      {
        Header: "Status",
        accessor: "col3",
        Cell: (row: any) => {
          let Status;
          if (row.value.status === "In Progress") {
            Status = (
              <Flex align="center">
                <Text mr={3} fontWeight={600} color={"orange.500"}>
                  {row.value.status}
                </Text>
                <Lottie
                  style={{ margin: 0 }}
                  options={defaultOptions}
                  height={40}
                  width={40}
                />
              </Flex>
            );
          } else if (row.value.status === "Failed") {
            Status = (
              <Text fontWeight={600} color={"red.500"}>
                {row.value.status}
              </Text>
            );
          } else if (row.value.status === "Completed") {
            Status = (
              <Text fontWeight={600} color={"green.500"}>
                {row.value.status}
              </Text>
            );
          }

          return (
            <>
              {Status}
              <Text>
                {row.value.status === "Completed" ? (
                  <Text fontSize={"sm"}>Elapsed Time {row.value.time}</Text>
                ) : (
                  <Text fontSize={"sm"}>Duration Time {row.value.time}</Text>
                )}
              </Text>
            </>
          );
        },
      },
      {
        Header: "Date Created",
        accessor: "col4",
      },
    ],
    []
  );

  return (
    <DefaultLayout>
      <Title title={"Reports"} />
      <Card>
        <Card.Title title={"Report List"} />
        <Card.Body>
          <ReportTable onClick={onOpen} columns={columns} data={data} />
        </Card.Body>
      </Card>
      <GenerateReportDrawer isOpen={isOpen} onClose={onClose} />
    </DefaultLayout>
  );
};

export default Reports;
