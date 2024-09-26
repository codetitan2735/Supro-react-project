import axios from "axios";
const baseDomain = "http://localhost:13370";
export const wp = "https://wp.nouhtml5.com";
export const baseUrlProduct = "http://localhost:13370";

export const customHeaders = {
  Accept: "application/json",
};

export const baseUrl = `${baseDomain}`;

export default axios.create({
  baseUrl,
  headers: customHeaders,
});

export const serializeQuery = (query) => {
  return Object.keys(query)
    .map(
      (key) => `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`
    )
    .join("&");
};
