import Header from "./components/Header";
import Item from "./components/Item";
import styled from "styled-components";

const AppWrapper = styled.div`
  background-color: #fdfdfd;
  width: 100%;
  height: 100vh;
`;

function App() {
  return (
    <AppWrapper>
      <Header />
      <Item />
    </AppWrapper>
  );
}

export default App;
