import { useEffect, useState } from "react";
import {
  GlobalArticles,
  KeywordArticles,
  SamsungArticles,
  TrendArticles,
} from "../../api";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { designFont } from "../../GlobalStyled";
import Loading from "../../components/Loading";

const Container = styled.div`
  padding: 0 5%;

  width: 90%;
  height: 100vh;

  display: grid;
  grid-template-columns: 300px 300px 300px 300px 300px;
  grid-template-rows: 260px 260px 260px 260px;

  gap: 20px;
  margin: 0 auto;
`;

const NoticeWrap = styled.div`
  width: 620px;
  height: 540px;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.2);

  border-radius: 20px;

  grid-column: span 2;
  grid-row: span 2;

  font-family: ${designFont.styleFont};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  span {
    display: flex;
    align-items: end;
    line-height: 300px;
  }
  h1 {
    font-size: 230px;
  }
  h2 {
    font-size: 100px;
    line-height: 200px;
  }
  h3 {
    font-size: 80px;
  }
`;

const Box = styled.div`
  width: 300px;
`;

const ThemeWrap = styled.div`
  width: 90%;
  height: 50px;
  /* background-color: yellow; */
  margin: 0 auto 10px auto;
  padding: 0 5%;
  display: flex;
`;

const Theme = styled.div`
  width: 150px;
  height: 50px;
  /* background-color: cornflowerblue; */
  border-radius: 50px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  text-align: center;
  line-height: 50px;
  font-size: 20px;
  font-weight: 700;
  margin-right: 10px;
  cursor: pointer;
`;

const Samsung = () => {
  const [samsungData, setSamsungData] = useState();
  const [keywordData, setKeywordData] = useState();
  const [trendData, setTrendData] = useState();

  useEffect(() => {
    (async () => {
      try {
        const SSdata = await SamsungArticles();
        const KWdData = await KeywordArticles("SK하이닉스");
        // const TRData = await TrendArticles();

        setSamsungData(SSdata);
        setKeywordData(KWdData);
        // setTrendData(TRData);

        // console.log(trendData);
        // console.log(KRdata.data[0].summary);
        // console.log(KWdData);
        // console.log(KRdata.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const clickHandler = async (title) => {
    try {
      const updateKeyword = await KeywordArticles(title);
      setKeywordData(updateKeyword);
      console.log(updateKeyword); // 최신 데이터 출력
    } catch (error) {
      console.error("Error fetching keyword data:", error);
    }
  };

  return (
    <div>
      {keywordData && keywordData.data ? (
        <>
          <ThemeWrap>
            <Theme onClick={() => clickHandler("삼성전자")}>삼성전자</Theme>
            <Theme onClick={() => clickHandler("SK하이닉스")}>
              SK 하이닉스
            </Theme>
            <Theme onClick={() => clickHandler("오리온")}>애플</Theme>
          </ThemeWrap>
          <Container>
            <NoticeWrap>
              <span>
                <h1>경</h1>
                <h2>록이</h2>
              </span>
              <h3>사용 설명서</h3>
            </NoticeWrap>
            {keywordData.data.map((news) => (
              <Box key={news.id}>
                <Card
                  variant="soft"
                  sx={{
                    bgcolor: "#f0f0f0",
                    maxHeight: 260,
                    width: 300,
                    borderRadius: 4,
                  }}
                >
                  <Link to={"/detail"}>
                    <CardMedia
                      sx={{ height: 140 }}
                      image={
                        news.image_url
                          ? news.image_url
                          : "https://www.shoshinsha-design.com/wp-content/uploads/2020/05/noimage-1-760x460.png"
                      }
                      title="news"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {news.title.slice(0, 13)}..
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                      >
                        {news.summary.slice(0, 46)}...
                      </Typography>
                    </CardContent>
                  </Link>
                </Card>
              </Box>
            ))}
          </Container>
        </>
      ) : (
        <Loading></Loading>
      )}
    </div>
  );
};

export default Samsung;
