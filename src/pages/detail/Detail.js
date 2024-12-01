import { useLocation } from "react-router-dom";

const Detail = () => {
  const location = useLocation();
  const { news } = location.state || {}; // 전달받은 데이터 접근

  console.log(news);

  if (!news) {
    return <div>데이터가 없습니다. 홈으로 돌아가주세요.</div>;
  }

  return (
    <div>
      <h1>{news.title}</h1>
      <img src={news.image_url} alt="news" />
      <p>{news.summary}</p>
      <p>{news.content}</p> {/* 상세 내용이 있다면 렌더링 */}
    </div>
  );
};

export default Detail;
