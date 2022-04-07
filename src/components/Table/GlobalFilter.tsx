import { InputGroup, InputLeftElement, Input, Icon } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";

interface Props {
  filter: any;
  setFilter: any;
}

const GlobalFilter = ({ filter, setFilter }: Props) => {
  return (
    <InputGroup>
      <InputLeftElement
        pointerEvents="none"
        children={<Icon as={RiSearchLine} />}
      />
      <Input
        type="text"
        onChange={(e) => setFilter(e.target.value)}
        value={filter || ""}
        placeholder="Search"
      />
    </InputGroup>
  );
};

export default GlobalFilter;
