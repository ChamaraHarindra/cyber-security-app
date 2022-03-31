import { ReactNode } from "react";
import { Box, Text, HStack } from "@chakra-ui/react";
import Breadcrumbs from "nextjs-breadcrumbs";

interface Props {
  title: string;
  children?: ReactNode;
}

const Title = ({ title, children }: Props) => {
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      mb={6}
    >
      <Box>
        <Text fontSize={"2xl"} fontWeight="bold" mb={1}>
          {title}
        </Text>
        <Breadcrumbs useDefaultStyle rootLabel="Home" />
      </Box>
      <HStack>{children}</HStack>
    </Box>
  );
};

export default Title;
