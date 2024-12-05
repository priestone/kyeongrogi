import { Button, Stack } from "@mui/material";
import { green, red } from "@mui/material/colors";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  padding: 0 5% 3% 5%;
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 30px;

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
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

  p {
    letter-spacing: 2px;
    line-height: 20px;
  }

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

const TextWrap = styled.div`
  width: 44%;
  height: 100%;
  border-radius: 10px;
  padding: 10px;
  position: sticky;
  top: 8%;
  right: 10px;
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
    width: 100%;
    padding: 10px;
    margin-top: 20px;

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

const MemoWrap = styled.textarea`
  all: unset;
  width: 100%;
  height: 200px;
  border-radius: 10px;
  background-color: #f0f0f0;
  padding: 10px;
  box-sizing: border-box;
`;

const MemoWrap2 = styled.textarea`
  all: unset;
  width: 100%;
  height: 100px;
  border-radius: 10px;
  background-color: #f0f0f0;
  padding: 10px;
  margin-bottom: 50px;
  box-sizing: border-box;
`;

const Detail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { news } = location.state || {}; // 전달받은 데이터 접근
  const [summary, setSummary] = useState("");
  const [comment, setComment] = useState("");

  console.log(news);

  if (!news) {
    return <div>데이터가 없습니다. 홈으로 돌아가주세요.</div>;
  }

  const handleSave = () => {
    const savedData = JSON.parse(localStorage.getItem("savedArticles")) || [];
    const newEntry = {
      id: news.id,
      title: news.title,
      summary,
      comment,
      data: new Date().toLocaleString(),
      imgURL: news.image_url,
    };
    const updatedData = [...savedData, newEntry];
    localStorage.setItem("savedArticles", JSON.stringify(updatedData));
    alert("저장되었습니다!");
    navigate(-1);
  };

  const handleBack = () => {
    navigate(-1);
  };
  console.log(news);

  return (
    <Container>
      <NewsContainer>
        <img
          src={
            news.image_url
              ? news.image_url
              : "https://www.shoshinsha-design.com/wp-content/uploads/2020/05/noimage-1-760x460.png"
          }
          alt="news"
        />
        <h1>{news.title}</h1>
        <p>{news.summary}</p>
      </NewsContainer>
      <TextWrap>
        <h1>요약하기</h1>
        <MemoWrap
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          placeholder="기사 내용을 간단하게 요약해보세요"
        ></MemoWrap>
        <h2>코멘트</h2>
        <MemoWrap2
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="자신의 감상 또는 메모를 적어주세요"
        ></MemoWrap2>
        <Stack
          sx={{ display: "flex", justifyContent: "center" }}
          direction="row"
          spacing={1}
        >
          <Button
            variant="contained"
            sx={{ width: 170, height: 50, backgroundColor: green[400] }}
            onClick={handleSave}
          >
            저장하기
          </Button>
          <Button
            variant="contained"
            sx={{ width: 170, height: 50, backgroundColor: red[400] }}
            onClick={handleBack}
          >
            뒤로기기
          </Button>
        </Stack>
      </TextWrap>
    </Container>
  );
};

export default Detail;
