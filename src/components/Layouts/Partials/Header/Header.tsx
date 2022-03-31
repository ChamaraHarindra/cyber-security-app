import {
  Box,
  Button,
  InputGroup,
  InputLeftElement,
  Input,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  useDisclosure,
  Avatar,
  useColorMode,
} from "@chakra-ui/react";
import {
  RiMenuFill,
  RiSearch2Line,
  RiNotification4Line,
  RiSettings2Line,
  RiUser2Line,
  RiLogoutCircleLine,
  RiMoonClearLine,
  RiSunLine,
} from "react-icons/ri";
import SettingsDrawer from "@/components/Drawers/SettingsDrawer/SettingsDrawer";

interface Props {
  onClick: () => void;
  width: string;
}

const Header = ({ onClick, width }: Props) => {
  const notifications = [
    {
      id: 1,
      title: "Ingest Volume threshold passed. Need attention ASAP. ",
      date: "5 hours ago",
    },
    {
      id: 2,
      title: "Risk vulnerabilities passed its threshold.",
      date: "2 days ago",
    },
    {
      id: 3,
      title: "Youtube is taking too much bandwidth.",
      date: "05-31-2022 05:45:56",
    },
  ];

  const { isOpen, onOpen, onClose } = useDisclosure();

  const { colorMode, toggleColorMode } = useColorMode();

  const handleClickSettings = () => {
    onOpen();
  };

  return (
    <Box
      as="header"
      bg={colorMode === "light" ? "white" : "gray.800"}
      minH={"65px"}
      display="flex"
      alignItems={"center"}
      px={"1rem"}
      justifyContent={"space-between"}
      pos={"fixed"}
      width={width}
      zIndex={3}
      borderBottomColor={colorMode === "light" ? "gray.200" : "gray.700"}
      borderBottomWidth={"1px"}
      borderBottomStyle={"solid"}
    >
      <Box display="flex" alignItems={"center"}>
        <Button onClick={onClick} variant="ghost" mr={5}>
          <RiMenuFill size={"1.4rem"} />
        </Button>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<RiSearch2Line color="gray.500" />}
          />
          <Input
            minW={"300px"}
            borderRadius={"full"}
            type="text"
            bg={colorMode === "light" ? "gray.100" : "gray.700"}
            placeholder="Search"
            border={"none"}
          />
        </InputGroup>
      </Box>
      <HStack>
        <Button variant="ghost" borderRadius={"full"} onClick={toggleColorMode}>
          {colorMode === "light" ? (
            <RiMoonClearLine size={"1.2rem"} />
          ) : (
            <RiSunLine size={"1.2rem"} />
          )}
        </Button>
        <Menu>
          <MenuButton as={Button} variant="ghost" borderRadius={"full"}>
            <RiNotification4Line size={"1.2rem"} />
          </MenuButton>
          <MenuList minWidth="400px">
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
              p={3}
            >
              <Text fontSize={"xl"} fontWeight="bold">
                Notifications
              </Text>
              <Button size={"xs"} variant={"ghost"}>
                Mark All as Read
              </Button>
            </Box>
            {notifications.map((notification) => (
              <MenuItem key={notification.id}>
                <Box>
                  <Text color={"gray.700"}>{notification.title}</Text>
                  <Text fontSize="small" color={"gray.500"}>
                    {notification.date}
                  </Text>
                </Box>
              </MenuItem>
            ))}
          </MenuList>
        </Menu>

        <Button
          variant="ghost"
          borderRadius={"full"}
          onClick={handleClickSettings}
        >
          <RiSettings2Line size={"1.2rem"} />
        </Button>
        <Menu>
          <MenuButton
            as={Button}
            colorScheme={"transparent"}
            borderRadius={"full"}
            px={0}
          >
            <Avatar size="sm" />
          </MenuButton>
          <MenuList>
            <MenuItem>
              <RiUser2Line /> <Text ml={3}>Profile</Text>
            </MenuItem>
            <MenuItem>
              <RiLogoutCircleLine /> <Text ml={3}>Logout</Text>
            </MenuItem>
          </MenuList>
        </Menu>
      </HStack>
      <SettingsDrawer isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default Header;
