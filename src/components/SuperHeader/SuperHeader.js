import styled from "styled-components";
import { COLORS } from "../../constants";
import IconInput from "../IconInput";
import Icon from "../Icon";
import UnstyledButton from "../UnstyledButton";

const SuperHeader = ({ message }) => {
  return (
    <Wrapper>
      <Message>{message}</Message>
      <IconInput
        icon="search"
        placeholder="Search..."
        label="Search"
        size="mini"
        width={175}
      />
      <Help href="/help">Help</Help>
      <UnstyledButton>
        <Icon id="shopping-bag" size={20} />
      </UnstyledButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 24px;
  padding: 0px 32px;
  align-items: center;
  height: 40px;
  font-size: ${14 / 16}rem;
  color: ${COLORS.white};
  background-color: ${COLORS.gray[900]};
`;

const Message = styled.p`
  margin-right: auto;
`;

const Help = styled.a`
  color: inherit;
  text-decoration: none;

  &:focus {
    outline-offset: 2px;
  }
`;

export default SuperHeader;
