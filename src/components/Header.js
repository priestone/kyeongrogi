import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.header`
  width: 100%;
  height: 100px;
  padding: 10px 4%;
  font-family: "RiaSans-ExtraBold";
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #dbdbdb;

  h1 {
    font-size: 30px;
    line-height: 60px;
  }

  h2 {
    font-size: 20px;
  }

  @media screen and (max-width: 800px) {
    h1 {
      font-size: 24px;
      line-height: 70px;
    }

    h2 {
      font-size: 18px;
    }
  }
`;

const MenuWrap = styled.div`
  display: flex;
  align-items: center;
  a {
    margin-left: 150px;
  }

  @media screen and (max-width: 800px) {
    a {
      margin-left: 50px;
    }
  }

  @media screen and (max-width: 500px) {
    a {
      margin-left: 20px;
    }
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
          <h2>내 경록</h2>
        </Link>
      </MenuWrap>
    </Container>
  );
};

export default Header;
