import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeToggle from "./ColorModeToggle";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => (
  <HStack padding="10px">
    <Image src={logo} boxSize="60px" />
    <SearchInput onSearch={onSearch} />
    <ColorModeToggle />
  </HStack>
);

export default NavBar;
