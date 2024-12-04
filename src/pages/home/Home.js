import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import styled from "styled-components";
import { designFont } from "../../GlobalStyled";
import { useEffect, useState } from "react";
import {
  DefaultArticles,
  KeywordArticles,
  KoreaArticles,
  SampleArticles,
} from "../../api";
import Loading from "../../components/Loading";
import InfiniteScroll from "react-infinite-scroll-component";
import { prettyFormat } from "@testing-library/react";

const Container = styled.div`
  padding: 0 5%;

  display: grid;
  grid-template-columns: 300px 300px 300px 300px 300px;
  grid-template-rows: 260px 260px 260px 260px;
  gap: 20px;
  margin: 0 auto;

  @media screen and (max-width: 600px) {
    width: 50%;
    grid-template-columns: 300px 300px;
    grid-template-rows: 200px 200px 260px 260px;
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

  @media screen and (max-width: 600px) {
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
      line-height: 1.2; /* 텍스트 높이를 조정 */
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
`;

const ThemeWrap = styled.div`
  width: 90%;
  height: 50px;
  /* background-color: yellow; */
  margin: 10px auto 10px auto;
  /* padding: 0 5%; */
  display: flex;
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
`;

const Home = () => {
  // const [koreaData, setKoreaData] = useState();
  const [defaultData, setDefaultData] = useState();
  // const [keywordData, setKeywordData] = useState();
  // const [selectedTheme, setSelectedTheme] = useState("default");
  // const [resultData, setResultData] = useState();

  // const themes = [
  //   "삼성전자",
  //   "SK하이닉스",
  //   "카카오",
  //   "한화",
  //   "GS",
  //   "KT",
  //   "오리온",
  // ];

  useEffect(() => {
    (async () => {
      try {
        const DFdata = await SampleArticles();
        // const KWdData = await KeywordArticles("SK하이닉스");

        setDefaultData(DFdata);
        // setKeywordData(KWdData);
        // setResultData(DFdata);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  console.log(defaultData);
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
                      maxHeight: 260,
                      width: 300,
                      borderRadius: 4,
                    }}
                  >
                    {/* {console.log(news)} */}
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

    // <div>
    //   {defaultData ? (
    //     <>
    //       <ThemeWrap>
    //         <Link to={`/samsung`}>
    //           <Theme>삼성전자</Theme>
    //         </Link>
    //         <Link to={`/sk`}>
    //           <Theme>SK하이닉스</Theme>
    //         </Link>
    //         <Link to={`/kakao`}>
    //           <Theme>카카오</Theme>
    //         </Link>
    //         <Link to={`/hanwha`}>
    //           <Theme>한화</Theme>
    //         </Link>
    //         <Link to={`/gs`}>
    //           <Theme>GS</Theme>
    //         </Link>
    //       </ThemeWrap>
    //       {
    //         <InfiniteScroll
    //           dataLength={defaultData.length}
    //           next={fetchData}
    //           hasMore={true}
    //         >
    //           <Container>
    //             <NoticeWrap>
    //               <span>
    //                 <h1>경</h1>
    //                 <h2>록이</h2>
    //               </span>
    //               <h3>사용 설명서</h3>
    //             </NoticeWrap>
    //             {defaultData.map((news) => (
    //               <Box key={news.id}>
    //                 <Link to={`/detail`} state={{ news }}>
    //                   <Card
    //                     variant="soft"
    //                     sx={{
    //                       bgcolor: "#f0f0f0",
    //                       maxHeight: 260,
    //                       width: 300,
    //                       borderRadius: 4,
    //                     }}
    //                   >
    //                     <CardMedia
    //                       sx={{ height: 140 }}
    //                       image={
    //                         news.image_url
    //                           ? news.image_url
    //                           : "https://www.shoshinsha-design.com/wp-content/uploads/2020/05/noimage-1-760x460.png"
    //                       }
    //                       title="news"
    //                     />
    //                     <CardContent>
    //                       <Typography gutterBottom variant="h5" component="div">
    //                         {news.title.slice(0, 13)}..
    //                       </Typography>
    //                       <Typography
    //                         variant="body2"
    //                         sx={{ color: "text.secondary" }}
    //                       >
    //                         {news.summary.slice(0, 46)}...
    //                       </Typography>
    //                     </CardContent>
    //                   </Card>
    //                 </Link>
    //               </Box>
    //             ))}
    //           </Container>
    //         </InfiniteScroll>
    //       }
    //     </>
    //   ) : (
    //     <Loading></Loading>
    //   )}
    // </div>
  );
};

export default Home;

// {defaultData.data.map((news) => (
//   <Box key={news.id}>
//     <Link to={`/detail`} state={{ news }}>
//       <Card
//         variant="soft"
//         sx={{
//           bgcolor: "#f0f0f0",
//           maxHeight: 260,
//           width: 300,
//           borderRadius: 4,
//         }}
//       >
//         {/* {console.log(news)} */}
//         <CardMedia
//           sx={{ height: 140 }}
//           image={
//             news.image_url
//               ? news.image_url
//               : "https://www.shoshinsha-design.com/wp-content/uploads/2020/05/noimage-1-760x460.png"
//           }
//           title="news"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="div">
//             {news.title.slice(0, 13)}..
//           </Typography>
//           <Typography
//             variant="body2"
//             sx={{ color: "text.secondary" }}
//           >
//             {news.summary.slice(0, 46)}...
//           </Typography>
//         </CardContent>
//       </Card>
//     </Link>
//   </Box>
// ))}

{
  /* <InfiniteScroll
dataLength={defaultData.length}
next={fetchData}
hasMore={true}
>
<Container>
  <NoticeWrap>
    <span>
      <h1>경</h1>
      <h2>록이</h2>
    </span>
    <h3>사용 설명서</h3>
  </NoticeWrap>
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
</InfiniteScroll> */
}
