import styled from "styled-components";
import React, { useState } from "react";

const PersonWrapper = styled.div`
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
`;

function Person({ name, age }) {
  return (
    <PersonWrapper>
      <div>{name}</div>
      <div>{age}</div>
    </PersonWrapper>
  );
}

export default Person;