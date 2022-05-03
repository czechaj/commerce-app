import axios from "axios";

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
