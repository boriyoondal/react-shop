import React, { useState } from "react";
import {css, Theme} from "@emotion/react";
// App

// redux
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { plusAction, minusAction, changeNameAction } from "../store/demo/action";

import { useEffect } from "react";

// API
import API from "src/API";

// Layout
import Header from "src/components/templates/header";
import Footer from "../components/templates/footer";
import Body from "src/components/templates/body";


export default function App() {

  return (
    <>
    <Header />
    <Body/>
    <Footer />
    </>

  );
}
