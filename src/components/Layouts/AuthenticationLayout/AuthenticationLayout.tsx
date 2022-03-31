import { ReactNode } from "react";
import { Box, Image, Text } from "@chakra-ui/react";

type Props = {
  children?: ReactNode;
  title?: string;
  desc?: string;
};

const AuthenticationLayout = ({ children, title, desc }: Props) => {
  return (
    <>
      <Box
        display={"flex"}
        alignItems={"center"}
        w={"100%"}
        h={"100%"}
        minH={"100vh"}
        justifyContent={"center"}
        backgroundImage={"/images/authentication-bg.jpg"}
        backgroundPosition={"center center"}
        backgroundSize={"cover"}
      >
        <Box
          w={"100%"}
          h={"100%"}
          position={"absolute"}
          zIndex={1}
          bg={"rgba(0,0,0,0.8)"}
        />
        <Box
          bg={"white"}
          minW={["320px", "520px"]}
          maxW={["320px", "520px"]}
          borderRadius={"lg"}
          boxShadow={"lg"}
          px={5}
          py={10}
          pos={"relative"}
          zIndex={2}
        >
          <Image
            src={"/images/logo.svg"}
            alt={"eLife America - Cyber Security Solution"}
            mb={4}
          />
          <Text
            as={"h1"}
            fontSize={["2xl", "4xl"]}
            fontWeight={"800"}
            color={"gray.700"}
          >
            {title}
          </Text>
          <Text mb={10} fontSize={"md"} color={"gray.500"}>
            {desc}
          </Text>
          <Box mt={5}>{children}</Box>
        </Box>
      </Box>
    </>
  );
};

export default AuthenticationLayout;
