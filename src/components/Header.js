import styled from "styled-components";

const ToDoWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  .square {
    width: 30px;
    height: 30px;
    border: 1px solid black;
  }
`;

function Header() {
  return (
    <ToDoWrapper className="App">
      <div className="square"></div>
      All Tasks
      <div></div>
    </ToDoWrapper>
  );
}

export default Header;
