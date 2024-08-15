import { createContext, useContext, useReducer } from "react";

const AccountContext = createContext();

const initialState = {
  isShowName: false,
  query: "",
  isFocus: false,
  pathname: "0",
  entryType: "",
};
