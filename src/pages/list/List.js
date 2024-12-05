import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  padding: 10px 4%;
  width: 90%;
  height: 100vh;
  display: grid;
  grid-template-columns: 300px 300px 300px 300px 300px;
  grid-template-rows: 260px 260px 260px 260px;
  gap: 20px;

  @media screen and (max-width: 800px) {
    width: 100%;
    grid-template-columns: 48% 48%;
    grid-template-rows: 320px 320px;
    margin: unset;
  }

  @media screen and (max-width: 500px) {
    width: 100%;
    grid-template-columns: 100%;
    grid-template-rows: 260px 260px 260px 260px;
  }
`;

const Box = styled.div`
  width: 300px;

  @media screen and (max-width: 800px) {
    width: 100%;
    a {
      height: 100%;
    }
  }
`;

const List = () => {
  const [savedData, setSavedData] = useState([]);

  useEffect(() => {
    const loadData = JSON.parse(localStorage.getItem("savedArticles")) || [];
    setSavedData(loadData);
  }, []);

  return (
    <Container>
      {savedData.length > 0 ? (
        savedData.map((news) => (
          <Box key={news.id}>
            <Link to={`/listDetail`} state={{ news }}>
              <Card
                variant="soft"
                sx={{
                  bgcolor: "#f0f0f0",
                  maxHeight: 260,
                  width: "100%",
                  height: "100%",
                  borderRadius: 4,
                }}
              >
                <CardMedia
                  sx={{ height: 140 }}
                  image={
                    news.imgURL
                      ? news.imgURL
                      : "https://www.shoshinsha-design.com/wp-content/uploads/2020/05/noimage-1-760x460.png"
                  }
                  title="news"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    fontFamily={"Noto Sans KR"}
                    fontWeight={700}
                    fontSize={"1.3rem"}
                  >
                    {news.title.slice(0, 14)}...
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {news.summary.slice(0, 46)}...
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Box>
        ))
      ) : (
        <Typography
          variant="h6"
          sx={{ textAlign: "center", marginTop: "20px" }}
        >
          저장된 데이터가 없습니다.
        </Typography>
      )}
    </Container>
  );
};

export default List;
