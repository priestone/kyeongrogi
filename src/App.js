import { useEffect, useState } from "react";
import { KoreaArticles } from "./api";

function App() {
  // const { results: koreaData } = KoreaArticles();
  const [koreaData, setKoreaData] = useState();

  useEffect(() => {
    (async () => {
      try {
        const KRdata = await KoreaArticles();
        setKoreaData(KRdata);
        console.log(KRdata.data[0].summary);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      <p>{document.write(`${koreaData.data[0].summary}`)}</p>
    </>
  );
}

export default App;
