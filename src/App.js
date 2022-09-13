import Header from "./components/Header";
import Item from "./components/Item";
import Person from "./components/Person";
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
      {/* <Item text="abc" checked={false} /> */}
      <Person name="Peter" age={36} />
      <Person name="Jackson" age={20} />
      <Person name="Bauer" age={16} />
      <Person name="Kim" age={6} />
    </AppWrapper>
  );
}

export default App;
