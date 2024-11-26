import { KoreaArticles } from "./api";

function App() {
  const { results: koreaData } = KoreaArticles();

  console.log(koreaData);

  return <></>;
}

export default App;
