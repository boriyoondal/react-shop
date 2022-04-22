import React from "react";
import { css } from "@emotion/react";
import ProductList from "../../productList";

export default function Body() {
  return (
    <div css={Style.Container}>
      <div css={Style.InnerContainer}>
        <ProductList />
      </div>
    </div>
  );
}

const Style = {
  Container: css`
    width: 100%;
    height: 100%;
    z-index: 1;
  `,
  InnerContainer: css`
    max-width: 1024px;
    margin: auto;
    display: flex;
    justify-content: center;
    height: 100%;
    background-color: #ffffff;
    z-index: -1;
  `,
};
