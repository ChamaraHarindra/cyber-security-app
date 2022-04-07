import {
  AccordionButton,
  AccordionIcon,
  Box,
  Flex,
  Icon,
  useColorMode,
} from "@chakra-ui/react";
import { RiCheckFill } from "react-icons/ri";

interface Props {
  number: number;
  title: string;
  subTitle: string;
  completed?: boolean;
}
const AccordionHeader = ({ number, title, subTitle, completed }: Props) => {
  const { colorMode } = useColorMode();

  return (
    <AccordionButton
      paddingTop={5}
      paddingBottom={5}
      borderTopRightRadius={"md"}
      borderTopLeftRadius={"md"}
      border={"1px"}
      borderColor={completed ? "green.200" : "gray.300"}
      bg={completed ? "green.50" : "white"}
    >
      <Box flex="1" textAlign="left">
        <Flex alignItems={"center"}>
          <Box
            width={"32px"}
            height={"32px"}
            borderRadius={"full"}
            display="flex"
            alignItems={"center"}
            justifyContent={"center"}
            borderWidth={"1px"}
            borderColor={"brandBlue.700"}
            fontWeight={"bold"}
            mr={4}
            color={colorMode === "light" ? "gray.700" : "gray.500"}
          >
            {number}
          </Box>
          <Box>
            <Box
              fontSize={"lg"}
              fontWeight={"bold"}
              color={
                colorMode === "light" || completed === true
                  ? "gray.700"
                  : "white"
              }
            >
              {title}
            </Box>
            <Box
              fontSize={"sm"}
              color={
                colorMode === "light" || completed === true
                  ? "gray.500"
                  : "gray.300"
              }
            >
              {subTitle}
            </Box>
          </Box>
        </Flex>
      </Box>
      <Flex alignItems={"center"}>
        {completed && (
          <Box
            width={"30px"}
            height={"30px"}
            borderRadius={"full"}
            mr={5}
            bg={"green.500"}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Icon as={RiCheckFill} width={5} height={5} color={"white"} />
          </Box>
        )}

        <AccordionIcon />
      </Flex>
    </AccordionButton>
  );
};

export default AccordionHeader;
