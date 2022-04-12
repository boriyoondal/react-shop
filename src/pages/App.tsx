import React, { useState } from "react";
import { css, Theme } from "@emotion/react";
import { useEffect } from "react";

// redux
import { useDispatch, useSelector } from "react-redux";

import { initCart, initPrice } from "src/store/cart/action";
import CheckoutPage from "src/components/checkoutPage";

// route
import { Route, Routes } from "react-router-dom";
import Main from "./Main";
import Pagination from "src/components/pagination";

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
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </>
  );
}
