import axios from "axios";
const baseURL = "http://localhost:3006/";

const Http = (
  url,
  { params, data, method, headers = {}, token, body, ...res }
) => {
  return axios({
    baseURL,
    url,
    headers: {
      // Authorization: `Bearer ${Cookies.get("token")}`,
      ...headers,
      "Accept-Language": "en",
    },
    params,
    data,
    body,
    method,
    ...res,
  })
    .then((res) => {
      return res;
    })
    .catch((e) => {
      if (e?.response?.status === 401 && typeof window !== "undefined") {
        return e;
      }
      if (e?.response?.status === 422) {
        return e;
      }
      if (e?.response?.status === 403 && typeof window !== "undefined") {
        return e;
      }
      if (e?.response?.status === 500 && typeof window !== "undefined") {
      }
      return e;
    });
};

export default Http;
