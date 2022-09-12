import styled from "styled-components";

const ItemWrapper = styled.div`
  width: 100%;
  height: 50px;
  border: 1px solid black;
`;

function Item() {
  return <ItemWrapper>Hello!</ItemWrapper>;
}

export default Item;
