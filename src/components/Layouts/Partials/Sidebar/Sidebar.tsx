import { Box, Image, Text, Link, useColorMode } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import {
  RiDashboard2Line,
  RiAlarmWarningLine,
  RiBugLine,
  RiClipboardLine,
  RiFilePaperLine,
  RiDatabase2Line,
  RiLinksLine,
} from "react-icons/ri";

interface Props {
  maxWidth: string;
  display: string;
  collapsed: boolean;
}

const Sidebar = ({ maxWidth, display, collapsed }: Props) => {
  const router = useRouter();
  const { colorMode } = useColorMode();

  const nav = [
    {
      icon: <RiDashboard2Line size={"1.2rem"} color={"gray"} />,
      title: "Dashboard",
      href: "/dashboard",
    },
    {
      icon: <RiAlarmWarningLine size={"1.2rem"} color={"gray"} />,
      title: "Event Tracker",
      href: "/event-tracker",
    },
    {
      icon: <RiBugLine size={"1.2rem"} color={"gray"} />,
      title: "Vulnerabilities",
      href: "/vulnerabilities",
    },
    {
      icon: <RiClipboardLine size={"1.2rem"} color={"gray"} />,
      title: "Reports",
      href: "/reports",
    },
    {
      icon: <RiFilePaperLine size={"1.2rem"} color={"gray"} />,
      title: "Indexes",
      href: "/indexes",
    },
    {
      icon: <RiDatabase2Line size={"1.2rem"} color={"gray"} />,
      title: "Data Sources",
      href: "/data-sources",
    },
    {
      icon: <RiLinksLine size={"1.2rem"} color={"gray"} />,
      title: "Integrations",
      href: "/integrations",
    },
  ];
  return (
    <Box
      as="aside"
      maxWidth={maxWidth}
      width="100%"
      height="100vh"
      transitionProperty={"max-width"}
      transitionDuration={"0.25s"}
      transitionTimingFunction={"ease-in-out"}
      position="fixed"
      bg={colorMode === "light" ? "white" : "gray.900"}
      borderRightWidth="1px"
      borderRightStyle={"solid"}
      borderRightColor={colorMode === "light" ? "gray.200" : "transparent"}
      padding={"1rem"}
    >
      <Box d="flex" alignItems={"center"} justifyContent="center">
        <Image
          src={
            colorMode === "light"
              ? "/images/logo-small.svg"
              : "/images/logo-small-white.svg"
          }
          width={"34px"}
        />
        <Text
          color={colorMode === "light" ? "brandBlue.900" : "white"}
          fontWeight="bold"
          ml="1rem"
          display={display}
        >
          Cyber Security
        </Text>
      </Box>
      <Box mt={10}>
        {nav.map((item) => (
          <NextLink href={item.href} passHref key={item.title}>
            <Link
              className={`navItem ${
                router.pathname == item.href ? "navItem__selected" : ""
              } ${collapsed ? "collapsed" : ""}`}
            >
              {item.icon}
              <Text ml="1rem" display={display}>
                {item.title}
              </Text>
            </Link>
          </NextLink>
        ))}
      </Box>
    </Box>
  );
};

export default Sidebar;
