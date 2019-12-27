import productReducer from "../reducers/productsReducer";
import React, { useReducer } from "react";
let emptyProduct = {
  id: -1,
  title: "",
  img: "",
  price: 0,
  company: "",
  info: "",
  inCart: false,
  count: 0,
  total: 0
};
const [products, dispatchCartProducts] = useReducer(productReducer, [
  emptyProduct
]);
