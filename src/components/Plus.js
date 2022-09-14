import styled from "styled-components";

const PlusWrapper = styled.div`
  border: 1px solid skyblue;
  background-color: skyblue;
  width: 100px;
  height: 100px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 10px;
  left: calc(-50px + 50%);
`;

const ModalWrapper = styled.div`
  width: 200px;
  height: 200px;
  background-color: gray;
  position: fixed;
  left: calc(-100px + 50%);
  top: calc(-100px + 50%);
`;

const PlusWrapper2 = false ? <ModalWrapper></ModalWrapper> : null;

function Plus() {
  return (
    <>
      <PlusWrapper>+</PlusWrapper>
      {PlusWrapper2}
    </>
  );
}

export default Plus;
