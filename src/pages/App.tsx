import React, { useState } from "react";
import { css, Theme } from "@emotion/react";
// App

// redux
import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";

// API
import API from "src/API";

// Layout
import Header from "src/components/templates/header";
import Footer from "../components/templates/footer";
import Body from "src/components/templates/body";
import { initCart } from "src/store/cart/action";

// route
import { Route, Routes } from "react-router-dom";
import Pagination from "src/components/pagination";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initCart());
  }, []);

  return (
    <>
      <Header />
      <Body />
      <Footer />

      {/* <Routes>
        <Route path="/pages/*" element={</>}/>
      </Routes> */}
    </>
  );
}
