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
        console.log(koreaData);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      <img
        src="https://cdn.deepsearch.com/news/2024-04-25/678e5a53f0f02d75f732c70d5b21bddb17455b8730c780e17ee649dd36f0fea6.jpeg"
        alt=""
      />
      <img
        src="https://ddi-cdn.deepsearch.com/news/society/2024/04/25/1435135121345876212/000-86f4af1f58466feb4877b217508aeb8b10699837.jpg"
        alt=""
      />
      <img
        src="https://ddi-cdn.deepsearch.com/news/economy/2024/04/25/1435115537154838903/000-e76328c80565fcd97ab5f2c1ede6cb81f01ddb76.jpg"
        alt=""
      />
      <img
        src="https://ddi-cdn.deepsearch.com/news/world/2024/04/25/1435115912268222930/000-4f4e089cd97e2f9dbb9ae0d646999b56ecda85ee.jpg"
        alt=""
      />
      <img
        src="https://ddi-cdn.deepsearch.com/news/entertainment/2024/04/25/1435096743367807516/000-5b67203b7c334f3e92238b3e8046fff994a50bba.jpg"
        alt=""
      />
    </>
  );
}

export default App;
