import { useState } from "react";
import Header from "../Header";
import ShoeIndex from "../ShoeIndex";
import styled from "styled-components";

const App = () => {
  const [sortId, setSortId] = useState("newest");

  return (
    <>
      <Header />
      <Main>
        <ShoeIndex sortId={sortId} setSortId={setSortId} />
      </Main>
    </>
  );
};

const Main = styled.main`
  padding: 64px 32px;
`;

export default App;
