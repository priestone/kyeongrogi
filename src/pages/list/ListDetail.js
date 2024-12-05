import { Button, Stack } from "@mui/material";
import { green, red } from "@mui/material/colors";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  padding: 0 5% 3% 5%;
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const NewsContainer = styled.div`
  width: 54%;
  border-radius: 10px;
  img {
    border-radius: 10px;
  }
  h1 {
    font-size: 30px;
    font-weight: 800;
    margin-top: 26px;
    margin-bottom: 10px;
    line-height: 40px;
  }

  @media screen and (max-width: 800px) {
    h1 {
      font-size: 20px;
      line-height: 30px;
    }
  }
`;

const TextWrap = styled.div`
  width: 44%;
  border-radius: 10px;
  background-color: #f0f0f0;
  padding: 25px 35px;

  h1 {
    font-size: 30px;
    font-weight: 900;
    margin-bottom: 20px;
    margin-top: 10px;
  }

  h2 {
    font-size: 30px;
    font-weight: 900;
    margin-bottom: 20px;
    margin-top: 50px;
  }

  @media screen and (max-width: 800px) {
    padding: 10px;

    h1 {
      font-size: 20px;
    }

    h2 {
      margin-top: 30px;
      margin-bottom: 10px;
      font-size: 20px;
    }
  }
`;

const Text1 = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 10px;
  background-color: #dbdbdb;
  padding: 10px;
  p {
    letter-spacing: 2px;
    line-height: 20px;
  }
`;

const Text2 = styled.div`
  width: 100%;
  height: 100px;
  border-radius: 10px;
  background-color: #dbdbdb;
  padding: 10px;
  margin-bottom: 50px;
  p {
    letter-spacing: 2px;
    line-height: 20px;
  }
`;

const ListDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { news } = location.state || {};

  console.log(news);

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Container>
      <NewsContainer>
        <img
          src={
            news.imgURL
              ? news.imgURL
              : "https://www.shoshinsha-design.com/wp-content/uploads/2020/05/noimage-1-760x460.png"
          }
          alt="news"
        />
        <h1>{news.title}</h1>
      </NewsContainer>
      <TextWrap>
        <h1>요약하기</h1>
        <Text1>
          <p>{news.summary}</p>
        </Text1>
        <h2>코멘트</h2>
        <Text2>
          <p>{news.comment}</p>
        </Text2>
        <Stack
          sx={{ display: "flex", justifyContent: "center" }}
          direction="row"
          spacing={1}
        >
          <Button
            variant="contained"
            sx={{ width: 170, height: 50, backgroundColor: green[400] }}
            onClick={handleBack}
          >
            뒤로가기
          </Button>
          <Button
            variant="contained"
            sx={{ width: 170, height: 50, backgroundColor: red[400] }}
          >
            삭제하기
          </Button>
        </Stack>
      </TextWrap>
    </Container>
  );
};

export default ListDetail;
