import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Home from "./pages/Home";
import Products from "./pages/Products";
import PageNotFound from "./ui/PageNotFound";
import AppLayout from "./ui/AppLayout";
import Login from "./pages/Login";
import GlobalStyles from "./styles/GlobalStyles";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Categories from "./pages/Categories";
import BasketPage from "./pages/BasketPage";
import Order from "./pages/Order";
import ScrollToTop from "./ui/ScroolToTop";
import { getSearchProducts } from "./services/apiSearchBar";
import SelectedProducts from "./features/product/SelectedProducts";
import { Toaster } from "react-hot-toast";
import OrderDetail from "./features/order/OrderDetail";
import Signup from "./pages/Signup";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

export default function App() {
  const filterValue = "basic";

  getSearchProducts({ filterValue });
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyles />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Home replace to="home" />} />
            <Route path="home" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:id" element={<SelectedProducts />} />
            <Route path="categories" element={<Categories />} />
            <Route path="cart" element={<BasketPage />} />

            <Route path="order/new" element={<Order />} />
            <Route path="order/:id" element={<OrderDetail />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: { duration: 5000 },
          error: { duration: 5000 },
          style: {
            fontSize: "16px",
            maxHeight: "100px",
            maxWidth: "1000px",
            padding: "16px 24px",
            backgroundColor: "var(--color-grey-0)",
            color: "var(--color-grey-700)",
          },
        }}
      />
    </QueryClientProvider>
  );
}
