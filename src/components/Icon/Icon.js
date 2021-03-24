import styled from "styled-components";
import { Search, Menu, ShoppingBag, ChevronDown } from "react-feather";

const ICONS = {
  search: Search,
  menu: Menu,
  "shopping-bag": ShoppingBag,
  "chevron-down": ChevronDown,
};

const Icon = ({ id, size, colour, ...delegated }) => {
  const Component = ICONS[id];

  if (!Component) {
    throw new Error(`No icon found for ID: ${id}`);
  }

  return (
    <Wrapper {...delegated}>
      <Component size={size} color={colour} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  & > svg {
    display: block;
  }
`;

export default Icon;
