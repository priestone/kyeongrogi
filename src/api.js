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

// export const SamsungArticles = () =>
//   fetch(
//     url(
//       `articles?company_name=삼성전자&page_size=99&date_from=2024-04-25&date_to=2024-04-25&`
//     ),
//     options
//   ).then((res) => res.json());

export const KeywordArticles = (keyword, pageid) =>
  fetch(
    url(
      `articles?company_name=${keyword}&page=${pageid}&page_size=20&date_from=${getCurrentDate}&date_to=${getCurrentDate}&`
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
      `articles/economy?date_from=${getLastWeekDate}&date_to=${getCurrentDate}&page_size=51&`
    ),
    options
  ).then((res) => res.json());

// export const GlobalArticles = (keyword) =>
//   fetch(
//     url(
//       `global-articles?symbols=NYSE:${keyword}&date_from=2024-04-25&date_to=2024-04-25&`
//     ),
//     options
//   ).then((res) => res.json());

// export const TrendArticles = () =>
//   fetch(
//     url(`articles/topics/trending?date_from=2024-04-25&date_to=2024-04-28&`),
//     options
//   ).then((res) => res.json());

// global-articles/topics/trending?company_name=Apple&order=published_at&

// keyword=title:(삼성전자 AND 구글)

// company_name = 삼성전자;

// AAPL,MSFT
