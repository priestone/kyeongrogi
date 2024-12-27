import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { designFont } from "../../GlobalStyled";
import { useEffect, useState } from "react";
import { NaverArticles, SampleArticles } from "../../api";
import Loading from "../../components/Loading";

const Container = styled.div`
  padding: 0 4%;

  display: grid;
  grid-template-columns: 300px 300px 300px 300px 300px;
  grid-template-rows: 260px 260px 260px 260px;
  gap: 20px;
  margin: 0 auto;

  @media screen and (max-width: 800px) {
    width: 100%;
    grid-template-columns: 48% 48%;
    grid-template-rows: 320px 320px;
    margin: unset;
  }

  @media screen and (max-width: 500px) {
    width: 100%;
    grid-template-columns: 100%;
    grid-template-rows: 160px 260px 260px 260px;
  }
`;

const NoticeWrap = styled.div`
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

  a {
    width: 620px;
    height: 540px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

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

  @media screen and (max-width: 800px) {
    grid-column: span 1;
    grid-row: span 1;

    a {
      justify-content: center;
      align-items: center;
      padding: 10px;
    }

    span {
      gap: 5px;
    }

    h1 {
      font-size: 4rem;
      line-height: 1.2;
    }

    h2 {
      font-size: 2.5rem;
      line-height: 1.2;
    }

    h3 {
      font-size: 1.8rem;
      line-height: 1.5;
      margin-top: 5px;
    }
  }
`;

const Box = styled.div`
  width: 300px;

  a {
    height: 100%;
  }

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

const ThemeWrap = styled.div`
  width: 90%;
  height: 50px;
  margin: 10px auto 10px auto;
  display: flex;

  @media screen and (max-width: 800px) {
    justify-content: space-between;
    a {
      width: 16%;
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
  margin-right: 30px;
  cursor: pointer;
  background-color: ${(props) =>
    props.isActive ? "cornflowerblue" : "transparent"};
  color: ${(props) => (props.isActive ? "white" : "black")};
  transition: background-color 0.3s, color 0.3s;

  @media screen and (max-width: 800px) {
    width: 100%;
    font-size: 10px;
    border-radius: 20px;
    margin-right: 0px;
  }

  @media screen and (max-width: 500px) {
    font-size: 10px;
    border-radius: 20px;
  }
`;

const Home = () => {
  const [defaultData, setDefaultData] = useState();

  useEffect(() => {
    (async () => {
      try {
        const DFdata = await SampleArticles();

        setDefaultData(DFdata);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  // console.log(defaultData);
  return (
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
      <Container>
        <NoticeWrap>
          <Link to={`/notice`}>
            <span>
              <h1>경</h1>
              <h2>록이</h2>
            </span>
            <h3>사용 설명서</h3>
          </Link>
        </NoticeWrap>
        {defaultData ? (
          <>
            {defaultData.data.map((news) => (
              <Box key={news.id}>
                <Link to={`/detail`} state={{ news }}>
                  <Card
                    variant="soft"
                    sx={{
                      bgcolor: "#f0f0f0",
                      width: "100%",
                      borderRadius: 4,
                      height: "100%",
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
                        {news.title.slice(0, 12)}..
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
          </>
        ) : (
          <Loading></Loading>
        )}
      </Container>
    </>
  );
};

export default Home;
