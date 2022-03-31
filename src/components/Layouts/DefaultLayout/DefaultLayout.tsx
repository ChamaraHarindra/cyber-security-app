import { ReactNode, useState } from "react";
import { Box } from "@chakra-ui/react";
import Header from "@/components/Layouts/Partials/Header/Header";
import Sidebar from "@/components/Layouts/Partials/Sidebar/Sidebar";

interface Props {
  children?: ReactNode;
}

const DefaultLayout = ({ children }: Props) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle Sidebar
  const handleToggleClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Box>
      {/* sidebar */}
      <Sidebar
        collapsed={isSidebarOpen}
        display={isSidebarOpen ? "none" : "block"}
        maxWidth={isSidebarOpen ? "calc(0.25rem * 16)" : "calc(0.25rem * 64)"}
      />
      <Box
        as="section"
        transitionProperty={"padding"}
        transitionDuration={"0.25s"}
        transitionTimingFunction={"ease-in-out"}
        paddingLeft={
          isSidebarOpen ? "calc(0.25rem * 16)" : "calc(0.25rem * 64)"
        }
      >
        {/* Header */}
        <Header
          onClick={handleToggleClick}
          width={
            isSidebarOpen
              ? "calc(100% - (0.25rem * 16))"
              : "calc(100% - (0.25rem * 64))"
          }
        />
        {/* Content */}
        <Box as="main" pt={"65px"}>
          <Box p={"1rem"}>
            <Box>{children}</Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DefaultLayout;
