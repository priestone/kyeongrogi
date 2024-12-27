import axios from "axios";
import { useState } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [articles, setArticles] = useState([]);

  const handleSearch = async () => {
    if (!query) return;
    try {
      const response = await axios.get(
        // Render 서버 URL + 프록시 라우트
        `https://naver-news-proxy.onrender.com/api/news`,
        {
          params: { query },
        }
      );
      setArticles(response.data.items || []);
    } catch (error) {
      console.error(error);
    }
  };

  console.log(articles);

  return (
    <div>
      <h1>네이버 뉴스 검색(프록시 서버 연동)</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="검색어 입력"
      />
      <button onClick={handleSearch}>검색</button>

      <ul>
        {articles.map((item, idx) => (
          <li key={idx}>
            <a href={item.link} target="_blank" rel="noreferrer">
              <h3 dangerouslySetInnerHTML={{ __html: item.title }} />
            </a>
            <p dangerouslySetInnerHTML={{ __html: item.description }} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
