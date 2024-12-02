import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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

const Box = styled.div`
  width: 300px;
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
                  width: 300,
                  borderRadius: 4,
                }}
              >
                {console.log(news)}
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
                  <Typography gutterBottom variant="h5" component="div">
                    {news.title.slice(0, 13)}...
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
