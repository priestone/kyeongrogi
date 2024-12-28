import axios from "axios";
import { useState } from "react";

function App() {
  const [keyword, setKeyword] = useState(""); // 유저가 입력하는 검색어
  const [images, setImages] = useState([]); // 이미지 검색 결과
  const [news, setNews] = useState([]); // 뉴스 검색 결과

  // (1) 사용자가 입력한 keyword로 이미지 검색
  const handleImageSearch = async () => {
    if (!keyword) return;
    try {
      const res = await axios.get(
        "https://naver-news-proxy.onrender.com/api/images",
        {
          params: { query: keyword },
        }
      );
      setImages(res.data.items || []);
      console.log(res.data);
      // images[].title, images[].thumbnail, images[].link 등
    } catch (error) {
      console.error(error);
    }
  };

  // (2) 특정 이미지의 title을 사용해서 뉴스 검색
  const searchNewsByTitle = async (title) => {
    try {
      const res = await axios.get(
        "https://naver-news-proxy.onrender.com/api/news",
        {
          params: { query: title },
        }
      );
      console.log("뉴스 검색 결과:", res.data); // 실제 API 응답
      setNews(res.data.items || []);
      console.log(res.data);
      // 뉴스 결과는 news[].title, news[].description 등
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>이미지와 해당 이미지 관련 뉴스 보기</h1>

      {/* 키워드 입력 후 "이미지 검색" 버튼을 누르면 images에 데이터가 들어옴 */}
      <div>
        <input
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="키워드 입력"
        />
        <button onClick={handleImageSearch}>이미지 검색</button>
      </div>

      {/* 이미지 목록 */}
      <section style={{ marginTop: "20px" }}>
        <h2>이미지 결과</h2>
        <ul style={{ display: "flex", flexWrap: "wrap" }}>
          {images.map((img, idx) => (
            <li key={idx} style={{ margin: "10px" }}>
              {/* 원본 이미지 링크 */}
              <a href={img.link} target="_blank" rel="noreferrer">
                <img src={img.thumbnail} alt={img.title} />
              </a>
              {/* 이미지 제목 (HTML 태그 있을 수 있으므로 dangerouslySetInnerHTML) */}
              <p dangerouslySetInnerHTML={{ __html: img.title }} />

              {/* (3) 이 이미지의 title로 뉴스 검색 버튼 */}
              <button onClick={() => searchNewsByTitle(img.title)}>
                이 이미지와 연관된 뉴스 보기
              </button>
            </li>
          ))}
        </ul>
      </section>

      {/* 뉴스 결과 */}
      <section style={{ marginTop: "20px" }}>
        <h2>뉴스 결과</h2>
        <ul>
          {news.map((item, idx) => (
            <li key={idx} style={{ marginBottom: "10px" }}>
              <a href={item.link} target="_blank" rel="noreferrer">
                <h3 dangerouslySetInnerHTML={{ __html: item.title }} />
              </a>
              <p dangerouslySetInnerHTML={{ __html: item.description }} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;

// import axios from "axios";
// import { useState } from "react";

// function App() {
//   const [query, setQuery] = useState("");
//   const [articles, setArticles] = useState([]);
//   const [images, setImages] = useState([]);
//   const [allData, setAllData] = useState({ news: [], images: [] });

//   const handleNewsSearch = async () => {
//     if (!query) return;
//     try {
//       const response = await axios.get(
//         "https://naver-news-proxy.onrender.com/api/news",
//         { params: { query } }
//       );
//       setArticles(response.data.items || []);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleImageSearch = async () => {
//     if (!query) return;
//     try {
//       const res = await axios.get(
//         "https://naver-news-proxy.onrender.com/api/images",
//         { params: { query } }
//       );
//       setImages(res.data.items || []);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   // "모두 검색" 버튼 클릭 시, /api/searchAll 호출
//   const handleAllData = async () => {
//     if (!query) return;
//     try {
//       const res = await axios.get(
//         "https://naver-news-proxy.onrender.com/api/searchAll",
//         { params: { query } }
//       );
//       // res.data는 { news: [...], images: [...] }
//       setAllData(res.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   console.log(allData);

//   return (
//     <div>
//       <h1>뉴스 + 이미지 검색</h1>
//       <input
//         type="text"
//         placeholder="검색어 입력"
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//       />
//       <div>
//         <button onClick={handleNewsSearch}>뉴스 검색</button>
//         <button onClick={handleImageSearch}>이미지 검색</button>
//         <button onClick={handleAllData}>모두 검색</button>
//       </div>

//       {/* 뉴스 별도 검색 결과 */}
//       <section>
//         <h2>뉴스 결과 (단일 라우트 /api/news)</h2>
//         <ul>
//           {articles.map((item, idx) => (
//             <li key={idx}>
//               <a href={item.link} target="_blank" rel="noreferrer">
//                 <h3 dangerouslySetInnerHTML={{ __html: item.title }} />
//               </a>
//               <p dangerouslySetInnerHTML={{ __html: item.description }} />
//             </li>
//           ))}
//         </ul>
//       </section>

//       {/* 이미지 별도 검색 결과 */}
//       <section>
//         <h2>이미지 결과 (단일 라우트 /api/images)</h2>
//         <ul style={{ display: "flex", flexWrap: "wrap" }}>
//           {images.map((img, idx) => (
//             <li key={idx} style={{ margin: "10px" }}>
//               <a href={img.link} target="_blank" rel="noreferrer">
//                 <img src={img.thumbnail} alt={img.title} />
//               </a>
//               <p dangerouslySetInnerHTML={{ __html: img.title }} />
//             </li>
//           ))}
//         </ul>
//       </section>

//       {/* 뉴스 + 이미지 한 번에 검색 결과 */}
//       <section>
//         <h2>모두 검색 결과 (/api/searchAll)</h2>
//         <h3>뉴스 파트</h3>
//         <ul>
//           {allData.news &&
//             allData.news.map((item, idx) => (
//               <li key={idx}>
//                 <a href={item.link} target="_blank" rel="noreferrer">
//                   <h3 dangerouslySetInnerHTML={{ __html: item.title }} />
//                 </a>
//                 <p dangerouslySetInnerHTML={{ __html: item.description }} />
//               </li>
//             ))}
//         </ul>

//         <h3>이미지 파트</h3>
//         <ul style={{ display: "flex", flexWrap: "wrap" }}>
//           {allData.images &&
//             allData.images.map((img, idx) => (
//               <li key={idx} style={{ margin: "10px" }}>
//                 <a href={img.link} target="_blank" rel="noreferrer">
//                   <img src={img.thumbnail} alt={img.title} />
//                 </a>
//                 <p dangerouslySetInnerHTML={{ __html: img.title }} />
//               </li>
//             ))}
//         </ul>
//       </section>
//     </div>
//   );
// }

// export default App;
