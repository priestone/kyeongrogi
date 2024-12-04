import { useEffect, useState } from "react";
import {
  DefaultArticles,
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
import InfiniteScroll from "react-infinite-scroll-component";

const Container = styled.div`
  padding: 0 5%;

  /* width: 90%;
  height: 100vh; */

  display: grid;
  grid-template-columns: 300px 300px 300px 300px 300px;
  grid-template-rows: 260px 260px 260px 260px;

  gap: 20px;
  margin: 0 auto;
`;

const Box = styled.div`
  width: 300px;
`;

const ThemeWrap = styled.div`
  width: 90%;
  height: 50px;
  /* background-color: yellow; */
  margin: 10px auto;
  /* padding: 0 5%; */
  display: flex;

  :first-child {
    div {
      background-color: cornflowerblue;
      color: white;
    }
  }
`;

const Theme = styled.div`
  width: 150px;
  height: 50px;
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
  const [resultData, setResultData] = useState();
  const [defaultData, setDefaultData] = useState();

  useEffect(() => {
    (async () => {
      try {
        const KWData = await KeywordArticles("삼성전자", 1);

        setDefaultData(KWData.data);
        setResultData(KWData);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const fetchData = async () => {
    try {
      let page = (resultData.page += 1);
      if (resultData.page <= resultData.total_pages) {
        const { data } = await KeywordArticles("삼성전자", page);

        setDefaultData(defaultData.concat(data));
        console.log(data);
      }

      console.log(page);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {defaultData ? (
        <>
          <ThemeWrap>
            <Link to={`/samsung`}>
              <Theme>삼성전자</Theme>
            </Link>
            <Link to={`/sk`}>
              <Theme>SK하이닉스</Theme>
            </Link>
            <Link to={`/kakao`}>
              <Theme>카카오</Theme>
            </Link>
            <Link to={`/naver`}>
              <Theme>네이버</Theme>
            </Link>
            <Link to={`/hanwha`}>
              <Theme>한화</Theme>
            </Link>
            <Link to={`/gs`}>
              <Theme>GS</Theme>
            </Link>
          </ThemeWrap>
          {
            <InfiniteScroll
              dataLength={defaultData.length}
              next={fetchData}
              hasMore={true}
            >
              <Container>
                {defaultData.map((news) => (
                  <Box key={news.id}>
                    <Link to={`/detail`} state={{ news }}>
                      <Card
                        variant="soft"
                        sx={{
                          bgcolor: "#f0f0f0",
                          maxHeight: 260,
                          width: 300,
                          borderRadius: 4,
                        }}
                      >
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
                      </Card>
                    </Link>
                  </Box>
                ))}
              </Container>
            </InfiniteScroll>
          }
        </>
      ) : (
        <Loading></Loading>
      )}
    </div>
  );
};

export default Samsung;
