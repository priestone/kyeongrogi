const baseURL = "https://api-v2.deepsearch.com/v1/";

const serviceKey = "ec22341d6a7f4901b8c60466f50c7e5a";

const url = (urlName) => {
  return baseURL + `${urlName}api_key=` + serviceKey;
};

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
  },
};

const getCurrentDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작하니까 +1
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

const getLastWeekDate = () => {
  const today = new Date();
  today.setDate(today.getDate() - 7); // 현재 날짜에서 7일을 뺌

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

export const KeywordArticles = (keyword, pageid) =>
  fetch(
    url(
      `articles?company_name=${keyword}&page=${pageid}&page_size=20&date_from=${getCurrentDate()}&date_to=${getCurrentDate()}&`
    ),
    options
  ).then((res) => res.json());

export const DefaultArticles = (pageid) =>
  fetch(
    url(
      `articles?keyword=title:(삼성전자 AND 구글)&page=${pageid}&page_size=52&`
    ),
    options
  ).then((res) => res.json());

export const SampleArticles = () =>
  fetch(
    url(
      `articles/economy?date_from=${getLastWeekDate()}&date_to=${getCurrentDate()}&page_size=51&`
    ),
    options
  ).then((res) => res.json());
