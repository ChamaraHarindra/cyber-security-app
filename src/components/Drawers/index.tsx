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
  footer?: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

const DefaultDrawer = ({ isOpen, onClose, children, title, footer }: Props) => {
  return (
    <>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          {title && <DrawerHeader>{title}</DrawerHeader>}

          <DrawerBody>{children}</DrawerBody>

          {footer && <DrawerFooter>{footer}</DrawerFooter>}
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DefaultDrawer;
