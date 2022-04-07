import React, { useState } from "react";
import { css, Theme } from "@emotion/react";
import { useEffect } from "react";

// redux
import { useDispatch, useSelector } from "react-redux";

import { initCart } from "src/store/cart/action";

// route
import { Route, Routes } from "react-router-dom";
import Main from "./Main";
import Pagination from "src/components/pagination";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initCart());
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />/
      </Routes>
    </>
  );
}
