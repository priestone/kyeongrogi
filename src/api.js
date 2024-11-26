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

export const KoreaArticles = () =>
  fetch(
    url(
      `articles?company_name=삼성전자&date_from=2024-04-25&date_to=2024-04-25&`
    ),
    options
  ).then((res) => res.json());

// global-articles/topics/trending?company_name=Apple&order=published_at&
