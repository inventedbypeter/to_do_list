import Header from "./components/Header";
import Item from "./components/Item";
import Plus from "./components/Plus";
import styled from "styled-components";

const AppWrapper = styled.div`
  background-color: #fdfdfd;
  width: 100%;
  height: 100vh;
`;

const itemList = [
  { name: "peter", checked: false },
  { name: "jack", checked: true },
  { name: "marry", checked: true },
  { name: "john", checked: false },
  { name: "tom", checked: false },
  { name: "kim", checked: false },
  { name: "phan", checked: true },
  { name: "martin", checked: false },
];

// const itemCollection = [];
// for (let i = 0; i < itemList.length; i++) {
//   const item = (
//     <Item text={itemList[i].name} checked={itemList[i].checked}></Item>
//   );
//   itemCollection.push(item);
// }

const itemCollection = itemList.map((item) => {
  return <Item text={item.name} checked={item.checked} />;
});

function App() {
  return (
    <AppWrapper>
      <Header />
      {itemCollection}
      <Plus></Plus>
    </AppWrapper>
  );
}

export default App;
