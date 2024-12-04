import styled from "styled-components";
import notice from "./imgs/notice.png";
import { designFont } from "../GlobalStyled";
import { Link } from "react-router-dom";

const Container = styled.div`
  padding: 0 5%;

  h2 {
    font-family: ${designFont.styleFont};
    font-size: 60px;
    text-align: center;
    margin: 100px 0;
  }

  a {
    margin: 50px auto;
    width: 600px;
    height: 80px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 50px;
  }
`;

const NoticeImg = styled.div`
  img {
    width: 100%;
  }
`;

const HomeButton = styled.div`
  width: 100%;
  height: 80px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Notice = () => {
  return (
    <Container>
      <h2>[경록이 사용 설명서]</h2>
      <NoticeImg>
        <img src={notice} alt="noticeIMG" />
      </NoticeImg>
      <Link to={`/#`}>
        <HomeButton>
          <p>홈으로</p>
        </HomeButton>
      </Link>
    </Container>
  );
};

export default Notice;
