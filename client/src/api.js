import axios from "axios";

axios.interceptors.request.use(
  function (config) {
    const { origin } = new URL(config.url);
    const allowedOrigins = ["http://localhost:4000"];
    const token = localStorage.getItem("access_token");

    if (allowedOrigins.includes(origin)) {
      config.headers.authorization = token;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export const getProductList = async () => {
  const { data } = await axios.get(`http://localhost:4000/product`);
  return data;
};
export const getProductDetail = async (id) => {
  const { data } = await axios.get(`http://localhost:4000/product/${id}`);
  return data;
};
export const signUserUp = async (values) => {
  const body = values;
  const { data } = await axios.post(
    `http://localhost:4000/auth/register`,
    body
  );
  return data;
};
export const signUserIn = async (values) => {
  const body = values;
  const { data } = await axios.post(`http://localhost:4000/auth/login`, body);
  return data;
};

export const signUserOut = async (values) => {
  const { data } = await axios.post(`http://localhost:4000/auth/logout`, {
    refresh_token: localStorage.getItem("refresh_token"),
  });
  return data;
};

export const isUser = async () => {
  const { data } = await axios.get(`http://localhost:4000/auth/me`);
  return data;
};
