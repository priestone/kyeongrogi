import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

import styled from "styled-components";

const Container = styled.div`
  padding: 0 5%;
  height: 100vh;
  background-color: lightgray;
  display: flex;

  h2 {
    font-family: "RiaSans-ExtraBold";
    margin-bottom: 30px;
  }
`;

const NoticeWrap = styled.div`
  width: 600px;
  height: 600px;
  background-color: white;
  border-radius: 50px;
`;

const Home = () => {
  return (
    <Container>
      {/* <h2>홈입니다</h2> */}
      <NoticeWrap></NoticeWrap>
      <Card variant="soft" sx={{ maxWidth: 300, maxHeight: 300 }}>
        <Link to={"/detail"}>
          <CardMedia
            sx={{ height: 140 }}
            image="https://cdn.deepsearch.com/news/2024-04-25/678e5a53f0f02d75f732c70d5b21bddb17455b8730c780e17ee649dd36f0fea6.jpeg"
            title="news"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              뉴스 타이틀
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              이것은 뉴스 내용입니다. 이것은 뉴스 내용입니다. 이것은 뉴스
              내용입니다. 이것은 뉴스 내용입니다.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">자세히 보기</Button>
            {/* <Button size="small">Learn More</Button> */}
          </CardActions>
        </Link>
      </Card>
    </Container>
  );
};

export default Home;
