import type { NextPage } from "next";
import {
  Box,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Image,
  InputGroup,
  Input,
  InputRightElement,
  Button,
  SimpleGrid,
  LinkBox,
  LinkOverlay,
  useColorMode,
} from "@chakra-ui/react";
import { RiSearch2Line, RiStarFill } from "react-icons/ri";
import DefaultLayout from "@/components/Layouts/DefaultLayout/DefaultLayout";
import Title from "@/components/Layouts/Partials/Title/Title";

const IntegrationsPage: NextPage = () => {
  const { colorMode } = useColorMode();
  const integrations = [
    {
      id: 1,
      name: "Slack",
      img: "slack-logo.png",
      reviews: 28,
    },
    {
      id: 2,
      name: "Jira",
      img: "jira-logo.png",
      reviews: 28,
    },
    {
      id: 3,
      name: "Asana",
      img: "asana-logo.png",
      reviews: 28,
    },
    {
      id: 4,
      name: "Servicenow",
      img: "service-now-logo.png",
      reviews: 28,
    },
    {
      id: 5,
      name: "Zendesk",
      img: "zendesk-logo.png",
      reviews: 28,
    },
  ];
  return (
    <DefaultLayout>
      <Title title={"Integrations"} />

      <Box
        borderRadius="xl"
        borderBottomRadius={"none"}
        pt={"100px"}
        bg={colorMode === "light" ? "white" : "gray.700"}
      >
        <Box
          display={"flex"}
          flexDir={"column"}
          alignItems={"center"}
          pb="50px"
        >
          <Text
            fontWeight={"bold"}
            fontSize={"3xl"}
            mb={1}
            color={colorMode === "light" ? "gray.700" : "white"}
          >
            Welcome to Our integration Module
          </Text>
          <Text color={colorMode === "light" ? "gray.500" : "gray.200"}>
            Explore the applications and install
          </Text>
          <InputGroup size="lg" maxWidth={"70%"} mt={8}>
            <Input
              pr="4.5rem"
              type={"text"}
              placeholder="Search"
              borderRadius={"full"}
            />
            <InputRightElement width="4.5rem">
              <Button
                colorScheme={"brandBlue"}
                h="2.5rem"
                px={"1.4rem"}
                size="lg"
                borderRadius={"full"}
                onClick={() => {}}
              >
                <RiSearch2Line />
              </Button>
            </InputRightElement>
          </InputGroup>
        </Box>
      </Box>
      <Tabs colorScheme="brandBlue">
        <TabList
          justifyContent={"center"}
          bg={colorMode === "light" ? "white" : "gray.700"}
        >
          <Tab flexDir={"column"} px={10}>
            <Text fontWeight={"bold"}>Endpoint Detection & Response</Text>
            <Text color={colorMode === "light" ? "gray.500" : "brandBlue.200"}>
              Apps for EDR Support
            </Text>
          </Tab>
          <Tab flexDir={"column"} px={10}>
            <Text fontWeight={"bold"}>Firewall</Text>
            <Text color={colorMode === "light" ? "gray.500" : "brandBlue.200"}>
              Apps for Firewall Support
            </Text>
          </Tab>
          <Tab flexDir={"column"} px={10}>
            <Text fontWeight={"bold"}>Identity Mgmt.</Text>
            <Text color={colorMode === "light" ? "gray.500" : "brandBlue.200"}>
              Apps for Single Signin Support
            </Text>
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <SimpleGrid mt={5} columns={[1, 3]} spacing={10}>
              {integrations.map((integration) => (
                <LinkBox key={integration.id}>
                  <Box
                    bg={colorMode === "light" ? "white" : "gray.700"}
                    display="flex"
                    borderRadius={"xl"}
                    p={4}
                  >
                    <Image
                      src={`/images/${integration.img}`}
                      alt={integration.name}
                      height={"44px"}
                    />
                    <Box flexDir={"column"} ml={4}>
                      <LinkOverlay href="#">
                        <Text fontWeight={"bold"} fontSize="md">
                          {integration.name}
                        </Text>
                      </LinkOverlay>

                      <Box display={"flex"} alignItems={"center"}>
                        <RiStarFill color="teal" />
                        <RiStarFill color="teal" />
                        <RiStarFill color="teal" />
                        <RiStarFill color="teal" />
                        <RiStarFill color="teal" />
                        <Text
                          ml={3}
                          fontSize={"sm"}
                          color={
                            colorMode === "light" ? "gray.500" : "gray.200"
                          }
                        >
                          {integration.reviews}
                        </Text>
                      </Box>
                      <Text
                        fontSize={"sm"}
                        color={colorMode === "light" ? "gray.500" : "gray.200"}
                      >
                        Free
                      </Text>
                    </Box>
                  </Box>
                </LinkBox>
              ))}
            </SimpleGrid>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </DefaultLayout>
  );
};

export default IntegrationsPage;
