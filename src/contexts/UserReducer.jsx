import { createContext, useContext, useReducer } from "react";

const BasketContext = createContext();

const initialState = {
  basket: [],
  isLogin: false,
  isShowName: false,
  query: "",
  isFocus: false,
  pathname: "0",
  isShowModal: false,
  productId: null,
  userName: "",
  userInfo: {},
};

function reducer(state, action) {
  let item;
  let newBasket;
  switch (action.type) {
    case "add/product":
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };
    case "increase/product":
      item = state.basket.find((element) => element.id === action.payload);
      item.piece++;
      item.productPrice = item.piece * item.price;

      return { ...state };

    case "decrease/product":
      item = state.basket.find((element) => element.id === action.payload);
      if (item.piece === 1) {
        newBasket = state.basket.filter(
          (element) => element.id !== action.payload
        );
        return { ...state, basket: newBasket };
      } else {
        item.piece--;
        item.productPrice = item.piece * item.price;
      }

      return { ...state };
    case "delete/product":
      newBasket = state.basket.filter(
        (element) => element.id !== action.payload
      );
      return { ...state, basket: newBasket };
    case "resetBasket":
      return { ...state, basket: [] };

    case "login":
      return { ...state, isLogin: true };
    case "showName":
      return { ...state, isShowName: true };
    case "noShowName":
      return { ...state, isShowName: false };
    case "setPathname":
      return { ...state, pathname: action.payload };
    case "search":
      return { ...state, query: action.payload };
    case "setIsShowModal/True":
      return { ...state, isShowModal: true };
    case "setIsShowModal/False":
      return { ...state, isShowModal: false };
    case "setProductId":
      return { ...state, productId: action.payload };

    case "setUserName":
      return { ...state, userName: action.payload, isLogin: true };

    case "setUserInfo":
      console.log(action.payload);
      return { ...state, userInfo: action.payload, isLogin: true };
    default:
      throw new Error("Unknown action");
  }
}

function BasketProvider({ children }) {
  const [
    {
      basket,
      isLogin,
      isShowName,
      query,
      isFocus,
      pathname,
      isShowModal,
      productId,
      userName,
      userInfo,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  const getTotalQuantity = () => {
    const total = basket.reduce((sum, current) => sum + current.piece, 0);
    return total;
  };

  const getCurrQuantity = (id) =>
    basket.find((item) => item.id === id)?.piece ?? 0;

  const getTotalPrice = () => {
    const total = basket.reduce(
      (sum, current) => sum + current.productPrice,
      0
    );

    return total;
  };

  return (
    <BasketContext.Provider
      value={{
        basket,
        isLogin,
        isShowName,
        query,
        isFocus,
        pathname,
        isShowModal,
        productId,
        userName,
        userInfo,
        getTotalQuantity,
        getCurrQuantity,
        getTotalPrice,
        dispatch,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
}

function useBasket() {
  const context = useContext(BasketContext);
  if (context === undefined)
    throw new Error("BasketContext was used outside AuthProvider");
  return context;
}

export { BasketProvider, useBasket };
