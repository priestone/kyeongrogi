import styled from "styled-components";
import { designFont } from "../../GlobalStyled";

const Container = styled.div`
  padding: 0 5%;

  h1 {
    font-size: 26px;
    font-family: ${designFont.styleFont};
    font-weight: 700;
    margin-top: 20px;
    margin-bottom: 40px;
  }
`;

const BoxWrap = styled.div`
  width: 90%;
  height: 100vh;

  display: grid;
  grid-template-columns: 300px 300px 300px 300px 300px;
  grid-template-rows: 150px 150px 150px 150px;

  gap: 20px;
  /* margin: 0 auto; */
`;

const Box = styled.div`
  width: 300px;
  height: 150px;
  border-radius: 10px;
  background-color: #d9d9d9;
`;

const PlusBox = styled.div`
  width: 300px;
  height: 150px;
  border-radius: 10px;
  background-color: #d9d9d9;
`;

const Words = () => {
  return (
    <Container>
      <h1>단어장</h1>
      <BoxWrap>
        <Box></Box>
        <PlusBox>플러스</PlusBox>
      </BoxWrap>
    </Container>
  );
};

export default Words;
