import styled from "styled-components";

const ItemWrapper = styled.div`
  width: 100%;
  height: 50px;
  border: 1px solid black;
  border-radius: 999px;
  display: flex;
  align-items: center;
  box-shadow: 0px 5px 2px 2px rgba(0, 0, 0, 0.1);

  .text {
    margin-left: 30px;
  }
`;

function Item() {
  return (
    <ItemWrapper>
      <div className="text">Hello!</div>
    </ItemWrapper>
  );
}

export default Item;
