const baseURL = "https://api-v2.deepsearch.com/v1/";

const serviceKey = "0ba2f3d837b844b08190b1b456250f4a";

const url = (urlName) => {
  return baseURL + `${urlName}api_key=` + serviceKey;
};

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    // Authorization: "Bearer 0ba2f3d837b844b08190b1b456250f4a",
  },
};

export const KoreaArticles = () =>
  fetch(
    url(
      `global-articles/topics/trending?company_name=Apple&order=published_at&`
    ),
    options
  ).then((res) => res.json());

// global-articles/topics/trending?company_name=Apple&order=published_at&
