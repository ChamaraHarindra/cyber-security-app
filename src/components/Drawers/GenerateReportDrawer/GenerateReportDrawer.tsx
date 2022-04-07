import { useState, useMemo } from "react";
import {
  Accordion,
  Checkbox,
  AccordionItem,
  AccordionPanel,
  AccordionButton,
  Box,
  Text,
  Icon,
  Radio,
  RadioGroup,
  SimpleGrid,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Select,
  Flex,
  Textarea,
  Button,
  Stack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import DefaultDrawer from "@/components/Drawers/";
import AccordionHeader from "@/components/Accordion/AccordionHeader";
import SimpleTable from "@/components/Table/SimpleTable";
import {
  RiArrowRightSFill,
  RiArrowDownSFill,
  RiMapPin2Line,
} from "react-icons/ri";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const GenerateReportDrawer = ({ isOpen, onClose }: Props) => {
  // const [index, setIndex] = useState([]);
  const [value, setValue] = useState("1");

  const data = useMemo(
    () => [
      {
        col1: <Checkbox />,
        col2: "09/23/2021 1:00 AM ",
        col3: "12",
        col4: "123",
        col5: "Completed Successfully",
        col6: "09/23/2021 1:00 AM",
      },
      {
        col1: <Checkbox />,
        col2: "09/23/2021 1:00 AM ",
        col3: "12",
        col4: "123",
        col5: "Completed Successfully",
        col6: "09/23/2021 1:00 AM",
      },
      {
        col1: <Checkbox />,
        col2: "09/23/2021 1:00 AM ",
        col3: "12",
        col4: "123",
        col5: "Completed Successfully",
        col6: "09/23/2021 1:00 AM",
      },
      {
        col1: <Checkbox />,
        col2: "09/23/2021 1:00 AM ",
        col3: "12",
        col4: "123",
        col5: "Completed Successfully",
        col6: "09/23/2021 1:00 AM",
      },
      {
        col1: <Checkbox />,
        col2: "09/23/2021 1:00 AM ",
        col3: "12",
        col4: "123",
        col5: "Completed Successfully",
        col6: "09/23/2021 1:00 AM",
      },
    ],
    []
  );

  const columns = useMemo(
    () => [
      {
        Header: <Checkbox />,
        accessor: "col1",
      },
      {
        Header: "Started",
        accessor: "col2",
      },
      {
        Header: "Assets",
        accessor: "col3",
      },
      {
        Header: "Vulnerabilities",
        accessor: "col4",
      },
      {
        Header: "Scan Status",
        accessor: "col5",
        Cell: (row: any) => {
          return (
            <Text fontWeight={"500"} color={"green"}>
              {row.value}
            </Text>
          );
        },
      },
      {
        Header: "Last Scan",
        accessor: "col6",
      },
    ],
    []
  );

  const dataScope = useMemo(
    () => [
      {
        col1: <Checkbox />,
        col2: "139.192.146.235",
        col3: "Kelly Cleark",
        col4: "123",
        col5: "09/23/2021 1:00 AM ",
      },
      {
        col1: <Checkbox />,
        col2: "107.77.253.6",
        col3: "John Stoff",
        col4: "311",
        col5: "08/21/2021 1:00 AM ",
      },
      {
        col1: <Checkbox />,
        col2: "5.189.165.142",
        col3: "Regina Hudson",
        col4: "32",
        col5: "08/11/2021 1:00 AM ",
      },
      {
        col1: <Checkbox />,
        col2: "160.152.51.66",
        col3: "John Hemitt",
        col4: "544",
        col5: "07/21/2021 1:00 AM ",
      },
    ],
    []
  );

  const columnsScope = useMemo(
    () => [
      {
        Header: <Checkbox />,
        accessor: "col1",
      },
      {
        Header: "IP Address",
        accessor: "col2",
      },
      {
        Header: "Machine Name",
        accessor: "col3",
      },
      {
        Header: "Vulnerabilities",
        accessor: "col4",
      },
      {
        Header: "Last Login",
        accessor: "col5",
      },
    ],
    []
  );

  return (
    <>
      <DefaultDrawer
        title={"Generate New Report"}
        isOpen={isOpen}
        onClose={onClose}
        size={"xl"}
      >
        <Accordion mb={10} defaultIndex={[0]}>
          <AccordionItem border={"none"}>
            <AccordionHeader
              completed
              title={"Report Details"}
              number={1}
              subTitle={
                "Report name, author,timezone and link to an existing ticket."
              }
            />
            <AccordionPanel pb={8} pt={8}>
              <Text mb={5}>
                Provide necessary details of the report you are trying to
                generate.
              </Text>
              <SimpleGrid columns={[1, 2]} spacing={5}>
                <FormControl isInvalid>
                  <FormLabel htmlFor="reportName">Report Name</FormLabel>
                  <Input
                    id="reportName"
                    type="text"
                    placeholder="Ex: My Vul Report"
                  />
                  <FormErrorMessage>Email is required.</FormErrorMessage>
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="timezone">Report Timezone</FormLabel>
                  <Select id="timezone" placeholder="Select country">
                    <option>United Arab Emirates</option>
                    <option>Nigeria</option>
                  </Select>
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="authorName">Author Name</FormLabel>
                  <Input
                    id="authorName"
                    type="text"
                    placeholder="Ex: John Doe"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="ticketNo">
                    Link Existing Ticket (Optional)
                  </FormLabel>
                  <Input id="ticketNo" type="text" />
                </FormControl>
              </SimpleGrid>
              <FormControl mt={5}>
                <FormLabel htmlFor="desc">
                  Link Existing Ticket (Optional)
                </FormLabel>
                <Textarea id={"desc"} />
              </FormControl>
              <Flex justifyContent={"flex-end"} mt={8}>
                <Button size="lg" colorScheme={"brandGreen"}>
                  Select Scope
                </Button>
              </Flex>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem mt={1} border={"none"}>
            <AccordionHeader
              title={"Select Scope"}
              number={2}
              subTitle={"Select scans, select report templates"}
            />
            <AccordionPanel pb={8} pt={8}>
              <Text mb={5}>You can select more than one scan.</Text>
              <SimpleTable size={"sm"} columns={columns} data={data} />
              <Text fontWeight={"bold"} mt={8}>
                Select Report Template
              </Text>
              <RadioGroup mt={5} onChange={setValue} value={value}>
                <Stack direction="column">
                  <Radio value="1">Executive Summary Report</Radio>
                  <Radio value="2">Custom Export</Radio>
                  <Radio value="3">XML Export</Radio>
                  <Radio value="4">XML Export 2.0</Radio>
                </Stack>
              </RadioGroup>
              <Flex justifyContent={"space-between"} mt={8}>
                <Button size="lg">Report Details</Button>
                <Button size="lg" colorScheme={"brandGreen"}>
                  Define Scope
                </Button>
              </Flex>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem mt={1} border={"none"}>
            <AccordionHeader
              title={"Define Scope"}
              number={3}
              subTitle={"Select scan sites, assets, asset groups and tags"}
            />
            <AccordionPanel pb={8} pt={8}>
              <Tabs>
                <TabList>
                  <Tab>Select Sites</Tab>
                  <Tab>Select Vulnerabilities</Tab>
                </TabList>

                <TabPanels>
                  <TabPanel>
                    <Text>
                      You can select multiple IP addresses from different sites.
                    </Text>
                    <Accordion allowMultiple mt={6}>
                      <AccordionItem>
                        {({ isExpanded }) => (
                          <>
                            <h2>
                              <AccordionButton>
                                <Box
                                  display="flex"
                                  alignItems="center"
                                  flex="1"
                                  textAlign="left"
                                  mr={4}
                                >
                                  {isExpanded ? (
                                    <RiArrowDownSFill />
                                  ) : (
                                    <RiArrowRightSFill />
                                  )}
                                  <Text fontWeight={500}>Headquarters</Text>
                                </Box>
                                <Stack direction={"row"}>
                                  <Box display={"flex"} mr={6}>
                                    <Text fontSize={"xs"}>
                                      IP Addresses: <strong>4</strong>
                                    </Text>
                                  </Box>
                                  <Box display={"flex"} alignItems={"center"}>
                                    <Icon as={RiMapPin2Line} mr={2} />
                                    <Text fontSize={"xs"}>
                                      <strong>New York, United States</strong>
                                    </Text>
                                  </Box>
                                </Stack>
                              </AccordionButton>
                            </h2>
                            <AccordionPanel pb={8} pt={8}>
                              <SimpleTable
                                size={"sm"}
                                columns={columnsScope}
                                data={dataScope}
                              />
                            </AccordionPanel>
                          </>
                        )}
                      </AccordionItem>
                      <AccordionItem>
                        {({ isExpanded }) => (
                          <>
                            <h2>
                              <AccordionButton>
                                <Box
                                  display="flex"
                                  alignItems="center"
                                  flex="1"
                                  textAlign="left"
                                  mr={4}
                                >
                                  {isExpanded ? (
                                    <RiArrowDownSFill />
                                  ) : (
                                    <RiArrowRightSFill />
                                  )}
                                  <Text fontWeight={500}>
                                    Development Department
                                  </Text>
                                </Box>
                                <Stack direction={"row"}>
                                  <Box display={"flex"} mr={6}>
                                    <Text fontSize={"xs"}>
                                      IP Addresses: <strong>12</strong>
                                    </Text>
                                  </Box>
                                  <Box display={"flex"} alignItems={"center"}>
                                    <Icon as={RiMapPin2Line} mr={2} />
                                    <Text fontSize={"xs"}>
                                      <strong>Colombo, Sri Lanka</strong>
                                    </Text>
                                  </Box>
                                </Stack>
                              </AccordionButton>
                            </h2>
                            <AccordionPanel pb={8} pt={8}>
                              <SimpleTable
                                size={"sm"}
                                columns={columnsScope}
                                data={dataScope}
                              />
                            </AccordionPanel>
                          </>
                        )}
                      </AccordionItem>
                      <AccordionItem>
                        {({ isExpanded }) => (
                          <>
                            <h2>
                              <AccordionButton>
                                <Box
                                  display="flex"
                                  alignItems="center"
                                  flex="1"
                                  textAlign="left"
                                  mr={4}
                                >
                                  {isExpanded ? (
                                    <RiArrowDownSFill />
                                  ) : (
                                    <RiArrowRightSFill />
                                  )}
                                  <Text fontWeight={500}>R&D Department</Text>
                                </Box>
                                <Stack direction={"row"}>
                                  <Box display={"flex"} mr={6}>
                                    <Text fontSize={"xs"}>
                                      IP Addresses: <strong>9</strong>
                                    </Text>
                                  </Box>
                                  <Box display={"flex"} alignItems={"center"}>
                                    <Icon as={RiMapPin2Line} mr={2} />
                                    <Text fontSize={"xs"}>
                                      <strong>Tokyo, Japan</strong>
                                    </Text>
                                  </Box>
                                </Stack>
                              </AccordionButton>
                            </h2>
                            <AccordionPanel pb={8} pt={8}>
                              <SimpleTable
                                size={"sm"}
                                columns={columnsScope}
                                data={dataScope}
                              />
                            </AccordionPanel>
                          </>
                        )}
                      </AccordionItem>
                    </Accordion>
                  </TabPanel>
                  <TabPanel>
                    <p>two!</p>
                  </TabPanel>
                </TabPanels>
              </Tabs>
              <Flex justifyContent={"space-between"} mt={8}>
                <Button size="lg">Select Scope</Button>
                <Button size="lg" colorScheme={"brandGreen"}>
                  Select Frequency
                </Button>
              </Flex>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem border={"none"}>
            <AccordionHeader
              // completed
              title={"Frequency"}
              number={4}
              subTitle={"How frequent do you need this report generated?"}
            />
            <AccordionPanel pb={8} pt={8}>
              <SimpleGrid columns={[1, 2]} spacing={5}>
                <FormControl>
                  <FormLabel htmlFor="reportFrequency">
                    Report Frequency
                  </FormLabel>
                  <Select id="reportFrequency" placeholder="Select Frequency">
                    <option>Do not run a recurring report</option>
                    <option>Recurring Report</option>
                  </Select>
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="startDate">Start Date</FormLabel>
                  <Input id="startDate" type="text" placeholder="22/05/2022" />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="email">Email Report to</FormLabel>
                  <Input
                    id="email"
                    type="text"
                    placeholder="support multiple emails"
                  />
                </FormControl>
              </SimpleGrid>
              <Flex justifyContent={"space-between"} mt={8}>
                <Button size="lg">Define Scope</Button>
                <Button size="lg" colorScheme={"brandGreen"} onClick={onClose}>
                  Generate Report
                </Button>
              </Flex>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </DefaultDrawer>
    </>
  );
};

export default GenerateReportDrawer;
