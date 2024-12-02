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

export const SamsungArticles = () =>
  fetch(
    url(
      `articles?company_name=삼성전자&page_size=99&date_from=2024-04-25&date_to=2024-04-25&`
    ),
    options
  ).then((res) => res.json());

export const KeywordArticles = (keyword) =>
  fetch(
    url(
      `articles?company_name=${keyword}&page_size=99&date_from=2024-04-25&date_to=2024-04-25&`
    ),
    options
  ).then((res) => res.json());

export const DefaultArticles = (pageid) =>
  fetch(
    url(
      `articles?keyword=title:(삼성전자 AND 구글)&page=${pageid}&page_size=10&`
    ),
    options
  ).then((res) => res.json());

export const GlobalArticles = (keyword) =>
  fetch(
    url(
      `global-articles?symbols=NYSE:${keyword}&date_from=2024-04-25&date_to=2024-04-25&`
    ),
    options
  ).then((res) => res.json());

// export const TrendArticles = () =>
//   fetch(
//     url(`articles/topics/trending?date_from=2024-04-25&date_to=2024-04-28&`),
//     options
//   ).then((res) => res.json());

// global-articles/topics/trending?company_name=Apple&order=published_at&

// keyword=title:(삼성전자 AND 구글)

// company_name = 삼성전자;

// AAPL,MSFT
