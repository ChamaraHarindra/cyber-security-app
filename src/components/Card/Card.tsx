import { ReactNode } from "react";
import { Box, HStack, Text, useColorMode } from "@chakra-ui/react";

interface Props {
  children?: ReactNode;
  title?: string;
}

const Card = ({ children }: Props) => {
  const { colorMode } = useColorMode();

  return (
    <Box
      borderRadius="xl"
      borderBottomRadius={"none"}
      bg={colorMode === "light" ? "white" : "gray.700"}
    >
      <Box>{children}</Box>
    </Box>
  );
};

Card.Title = ({ children, title }: Props) => {
  return (
    <Box
      p={"1rem"}
      display={"flex"}
      alignItems="center"
      justifyContent="space-between"
    >
      <Text fontSize={"xl"} fontWeight="bold">
        {title}
      </Text>
      <HStack spacing={2}>{children}</HStack>
    </Box>
  );
};
Card.Body = ({ children }: Props) => {
  return <Box padding={"1rem"}>{children}</Box>;
};

export default Card;
