import DefaultDrawer from "@/components/Drawers/";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}
const SettingsDrawer = ({ isOpen, onClose }: Props) => {
  return (
    <DefaultDrawer title={"Settings"} isOpen={isOpen} onClose={onClose}>
      Hello
    </DefaultDrawer>
  );
};

export default SettingsDrawer;
