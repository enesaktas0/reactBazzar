import { createContext, useContext, useReducer } from "react";

const BasketContext = createContext();

const initialState = {
  card: [],
  isLogin: false,
  isShowName: false,
  query: "",
  isFocus: false,
  isShowModal: false,
  productId: null,
};
