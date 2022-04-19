import React from "react";
import { useEffect } from "react";

// redux
import { useDispatch } from "react-redux";

import { initCart, initPrice } from "src/store/cart/action";
import CheckoutPage from "src/pages/checkoutPage";

// route
import { Route, Routes } from "react-router-dom";
import Main from "./Main/Main";
import Login from "./Login/login";
import DetailPage from "./detailPage";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initCart());
  }, []);

  useEffect(() => {
    dispatch(initPrice());
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />/
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/product/:id" element={<DetailPage />} />
      </Routes>
    </>
  );
}
