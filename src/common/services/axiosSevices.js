import axios from "axios";
import { TIME_OUT } from "../../Constants";

export const fetch = ({ url, headers, ...options }) => {
  return axios({
    method: "GET",
    timeout: TIME_OUT,
    url,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    ...options,
  })
    .then((response) => {
      //response { data {accessToken, expireTime}, status}
      return response;
    })
    .catch((error) => {
      const { response = {} } = error;
      if (response) {
        throw response.data;
      }
      throw error;
    });
};

export function fetchAuth({ url, headers, token, ...options }) {
  return axios({
    method: "GET",
    timeout: TIME_OUT,
    url,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      ...headers,
    },
    ...options,
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      const { response = {} } = error;
      if (response) {
        throw response.data;
      }
      throw error;
    });
}
