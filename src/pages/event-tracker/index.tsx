import { useMemo } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import {
  SimpleGrid,
  Flex,
  Box,
  Text,
  Progress,
  useColorMode,
  VStack,
  Icon,
  Avatar,
  Button,
  Badge,
} from "@chakra-ui/react";
import { Tooltip as ChakraTooltip } from "@chakra-ui/react";
import { RiEye2Fill } from "react-icons/ri";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Legend, Tooltip } from "chart.js";
import DefaultLayout from "@/components/Layouts/DefaultLayout/DefaultLayout";
import Title from "@/components/Layouts/Partials/Title/Title";
import Card from "@/components/Card/Card";
import IssuesTable from "@/components/Table/IssuesTable";

interface HeadingProps {
  heading: string;
  subHeading: string;
  count: number;
}

interface PriorityBoxProps {
  children: React.ReactNode;
  bg: string;
  color: string;
  mb?: string;
  name?: string;
}

const EventTracker: NextPage = () => {
  ChartJS.register(ArcElement, Legend, Tooltip);

  // chart data
  const chartData = {
    labels: [
      "Resolved",
      "Closed",
      "In Progress",
      "Open",
      "Assigned",
      "On Hold",
      "Reopened",
    ],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "#66C083",
          "#EC524A",
          "#DCB63D",
          "#A1A3F4",
          "#466DD1",
          "#DAA478",
          "#BB7027",
        ],
        borderColor: [
          "#66C083",
          "#EC524A",
          "#DCB63D",
          "#A1A3F4",
          "#466DD1",
          "#DAA478",
          "#BB7027",
        ],
        borderWidth: 1,
      },
    ],
  };

  const router = useRouter();

  const { colorMode } = useColorMode();

  const priorities = [
    {
      name: "Low",
      color: "green.500",
      bg: "green.50",
      darkColor: "green.50",
      darkBg: "green.500",
    },
    {
      name: "Medium",
      color: "yellow.700",
      bg: "yellow.50",
      darkColor: "yellow.50",
      darkBg: "yellow.500",
    },
    {
      name: "High",
      color: "orange.500",
      bg: "orange.50",
      darkColor: "orange.50",
      darkBg: "orange.500",
    },
    {
      name: "Critical",
      color: "red.500",
      bg: "red.50",
      darkColor: "red.50",
      darkBg: "red.500",
    },
  ];

  const issues = [
    {
      name: "Assigned Issues",
      count: 1,
      percentage: 100,
      priority: {
        low: 0,
        medium: 1,
        high: 0,
        critical: 0,
      },
    },
    {
      name: "Resolved Issues",
      count: 0,
      percentage: 0,
      priority: {
        low: 0,
        medium: 0,
        high: 0,
        critical: 0,
      },
    },
    {
      name: "In Progress Issues",
      count: 0,
      percentage: 0,
      priority: {
        low: 0,
        medium: 0,
        high: 0,
        critical: 0,
      },
    },
    {
      name: "On Hold Issues",
      count: 0,
      percentage: 0,
      priority: {
        low: 0,
        medium: 0,
        high: 0,
        critical: 0,
      },
    },
    {
      name: "Closed Issues",
      count: 0,
      percentage: 0,
      priority: {
        low: 0,
        medium: 0,
        high: 0,
        critical: 0,
      },
    },
    {
      name: "Zero Days",
      count: 12,
    },
  ];

  const activity = [
    {
      content: "James Dunn was assigned a new issue #559",
      time: "On Jan 12 2021 04:34:56",
    },
    {
      content:
        "Rick Flair changed the status from ASSIGNED to CLOSED on issue #347",
      time: "On Jan 12 2021 04:34:56",
    },
    {
      content: "Malcom Reynolds added a comment on issue #559",
      time: "On Jan 12 2021 04:34:56",
    },
    {
      content: "Ronald Jacobson added an attachment to the issue #559",
      time: "On Jan 12 2021 04:34:56",
    },
    {
      content:
        "Charles Steven changed the status from ASSIGNED to IN PROGRESS on issue #559",
      time: "On Jan 12 2021 04:34:56",
    },
  ];

  const handleClickView = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    router.push("/event");
  };

  const ViewButton = () => {
    return (
      <Button variant={"ghost"} onClick={handleClickView}>
        <Icon as={RiEye2Fill} size="20px" />
      </Button>
    );
  };

  const data = useMemo(
    () => [
      {
        col1: "1007",
        col2: "Rebecca Smith",
        col3: "Windows server stopped working after malware attack",
        col4: "Assigned",
        col5: "High",
        col6: "Manny Guy",
        col7: ["DAE-857", "DAE-345"],
        col8: "June 29th, 2021 12:01:34 AM",
        col9: <ViewButton />,
      },
      {
        col1: "1008",
        col2: "Damien Jacobs",
        col3: "Detach unauthorized USB drivers/devices",
        col4: "In Progress",
        col5: "High",
        col6: "Manny Guy",
        col7: ["DAE-857", "DAE-345"],
        col8: "June 29th, 2021 12:01:34 AM",
        col9: <ViewButton />,
      },
      {
        col1: "1009",
        col2: "Joseph Hancock",
        col3: "MSSQL database change effort",
        col4: "Open",
        col5: "High",
        col6: "Manny Guy",
        col7: ["DAE-857"],
        col8: "June 29th, 2021 12:01:34 AM",
        col9: <ViewButton />,
      },
    ],
    []
  );

  const columns = useMemo(
    () => [
      {
        Header: "",
        accessor: "col9",
      },
      {
        Header: "#",
        accessor: "col1",
      },
      {
        Header: "Requester",
        accessor: "col2",
      },
      {
        Header: "Issue",
        accessor: "col3",
      },
      {
        Header: "Status",
        accessor: "col4",
        Cell: (row: any) => {
          let Status;
          if (row.value === "In Progress") {
            Status = (
              <Badge bg={"resolved.500"} color={"white"}>
                In Progress
              </Badge>
            );
          } else if (row.value === "Assigned") {
            Status = (
              <Badge bg={"assigned.500"} color={"white"}>
                Assigned
              </Badge>
            );
          } else if (row.value === "Open") {
            Status = (
              <Badge bg={"open.500"} color={"white"}>
                Open
              </Badge>
            );
          }

          return <>{Status}</>;
        },
      },
      {
        Header: "Priority",
        accessor: "col5",
        Cell: (row: any) => {
          return (
            <Badge bg={"#F7F0E6"} variant={"subtle"} color={"#EB3628"}>
              {row.value}
            </Badge>
          );
        },
      },
      {
        Header: "Assigned Agent",
        accessor: "col6",
      },
      {
        Header: "Linked Action Plans",
        accessor: "col7",
      },
      {
        Header: "Created On",
        accessor: "col8",
      },
    ],
    []
  );

  // Card heading text component
  const CardHeading = ({ heading, subHeading, count }: HeadingProps) => {
    return (
      <Flex mb={5} justify={"space-between"} align={"center"}>
        <Box>
          <Text fontWeight={"bold"}>{heading}</Text>
          <Text color={"gray.500"} fontSize={"14px"}>
            {subHeading}
          </Text>
        </Box>
        <Text fontSize={"24px"} fontWeight="bold">
          {count}
        </Text>
      </Flex>
    );
  };

  // Colorful priority box component
  const PriorityBox = ({ children, bg, color, mb, name }: PriorityBoxProps) => {
    return (
      <ChakraTooltip label={name} aria-label={name}>
        <Box
          bg={bg}
          flexDir={"column"}
          color={color}
          display="flex"
          alignItems={"center"}
          py={2}
          width={"100%"}
          px={3}
          mb={mb ? mb : 3}
          borderRadius={"xl"}
        >
          {children}
        </Box>
      </ChakraTooltip>
    );
  };

  return (
    <DefaultLayout>
      <Title title={"Event Tracker"} />
      <Flex flexDir={{ base: "column", md: "row" }} width={"100%"} mb={5}>
        <Box width={{ base: "100%", md: "25%" }}>
          <Card>
            <Card.Body>
              <CardHeading
                heading={"Total Issues"}
                subHeading={"This Month"}
                count={1}
              />
              <VStack spacing={2}>
                {priorities.map((item) => (
                  <PriorityBox
                    key={item.name}
                    mb={"0px"}
                    bg={colorMode === "light" ? item.bg : item.darkBg}
                    color={colorMode === "light" ? item.color : item.darkColor}
                  >
                    <Text fontSize={"24px"} fontWeight={"bold"}>
                      0
                    </Text>
                    <Text fontSize={"12px"} fontWeight="bold">
                      {item.name}
                    </Text>
                  </PriorityBox>
                ))}
              </VStack>
            </Card.Body>
          </Card>
        </Box>
        <Flex flexWrap="wrap" width={{ base: "100%", md: "75%" }}>
          {issues.map((item) => (
            <Box
              width={{ base: "100%", md: "30%" }}
              ml={{ base: "0", md: "3%" }}
              mb={5}
              key={item.name}
            >
              <Card style={{ height: "100%" }}>
                <Card.Body>
                  <CardHeading
                    heading={item.name}
                    subHeading={"This Month"}
                    count={item.count}
                  />
                  {item?.percentage || item?.percentage === 0 ? (
                    <Box>
                      <Progress
                        colorScheme={"brandGreen"}
                        borderRadius={"xl"}
                        value={item.percentage}
                        size="sm"
                      />
                      <Text
                        textAlign={"right"}
                        fontSize="14px"
                        color={colorMode === "light" ? "gray.600" : "gray.200"}
                        mt={2}
                      >
                        {item.percentage}%
                      </Text>
                    </Box>
                  ) : null}
                  {item?.priority && (
                    <Flex mt={3} justify={"space-between"} align={"center"}>
                      <Text fontSize={"14px"}>Priority</Text>
                      <SimpleGrid columns={4} gap={2}>
                        {priorities.map((number) => (
                          <PriorityBox
                            name={number.name}
                            mb={"0px"}
                            key={number.name}
                            bg={
                              colorMode === "light" ? number.bg : number.darkBg
                            }
                            color={
                              colorMode === "light"
                                ? number.color
                                : number.darkColor
                            }
                          >
                            <Text fontSize={"18px"} fontWeight={"bold"}>
                              0
                            </Text>
                          </PriorityBox>
                        ))}
                      </SimpleGrid>
                    </Flex>
                  )}
                </Card.Body>
              </Card>
            </Box>
          ))}
        </Flex>
      </Flex>
      <Card>
        <Card.Title title={"Total Issues"} />
        <Card.Body>
          <IssuesTable columns={columns} data={data} />
        </Card.Body>
      </Card>
      <SimpleGrid mt={10} columns={{ base: 1, md: 2 }} gap={10}>
        <Card>
          <Card.Title title={"Recent Team Activity"} />
          <Card.Body>
            {activity.map((item) => (
              <Flex key={item.content} mb={5}>
                <Avatar size="sm" mr={5} alignItems={"center"} />
                <Box>
                  <Text fontWeight={"500"}>{item.content}</Text>
                  <Text color={"gray.500"} fontSize={"12px"}>
                    {item.time}
                  </Text>
                </Box>
              </Flex>
            ))}
          </Card.Body>
        </Card>

        <Card>
          <Card.Title title={"Recent Team Activity"} />
          <Card.Body>
            <Doughnut data={chartData} height={"100px"} width={"100px"} />
          </Card.Body>
        </Card>
      </SimpleGrid>
    </DefaultLayout>
  );
};

export default EventTracker;
