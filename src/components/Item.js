import styled from "styled-components";
import React, { useState } from "react";

const ItemWrapper = styled.div`
  width: 100%;
  height: 50px;
  border: 1px solid black;
  border-radius: 999px;
  display: flex;
  align-items: center;
  box-shadow: 0px 5px 2px 2px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;

  .text {
    margin-left: 30px;
  }

  .box {
    width: 15px;
    height: 15px;
    border: 1px solid black;
    margin-right: 25px;
    border-radius: 999px;
    background-color: ${({ boxColor }) => boxColor};
  }
`;

function Item() {
  const [check, setCheck] = useState(false);

  const clickBox = () => {
    if (check === false) {
      setCheck(true);
    } else {
      setCheck(false);
    }
  };
  console.log(check);

  const boxColor = check === true ? "black" : "white";

  return (
    <ItemWrapper boxColor={boxColor}>
      <div className="text">Hello!</div>
      <div
        className="box"
        onClick={() => {
          clickBox();
        }}
      />
    </ItemWrapper>
  );
}

export default Item;
