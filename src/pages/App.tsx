import React, { useState } from "react";
import { css, Theme } from "@emotion/react";
import { useEffect } from "react";

// redux
import { useDispatch, useSelector } from "react-redux";

import { initCart, initPrice } from "src/store/cart/action";
import CheckoutPage from "src/pages/checkoutPage";

// route
import { Route, Routes } from "react-router-dom";
import Main from "./Main";
import Login from "./Login/login";

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
      </Routes>
    </>
  );
}
