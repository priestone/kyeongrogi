import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.header`
  width: 100%;
  padding: 10px 5%;
  font-family: "RiaSans-ExtraBold";
  display: flex;
  justify-content: space-between;

  h1 {
    font-size: 30px;
  }

  h2 {
    font-size: 20px;
  }
`;

const MenuWrap = styled.div`
  display: flex;
  align-items: end;
  a {
    margin-left: 150px;
  }
`;

const Header = () => {
  return (
    <Container>
      <Link to={"/"}>
        <h1>경록이</h1>
      </Link>
      <MenuWrap>
        <Link to={"/words"}>
          <h2>단어장</h2>
        </Link>
        <Link to={"/list"}>
          <h2>내 목록</h2>
        </Link>
      </MenuWrap>
    </Container>
  );
};

export default Header;
