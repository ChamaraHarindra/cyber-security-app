import { ReactNode } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

interface Props {
  children?: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  title: string;
  size?: string;
}

const DefaultDrawer = ({ isOpen, onClose, children, title, size }: Props) => {
  return (
    <>
      <Drawer
        isOpen={isOpen}
        size={size ? size : "md"}
        placement="right"
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          {title && <DrawerHeader>{title}</DrawerHeader>}

          <DrawerBody>{children}</DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
DefaultDrawer.Footer = ({ children }: Props) => {
  return <DrawerFooter>{children}</DrawerFooter>;
};

export default DefaultDrawer;
