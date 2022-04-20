import React from "react";
import { css } from "@emotion/react";

export default function Footer() {
  return (
    <div css={Style.Container}>
      <div css={Style.InnerContainer}>
        <p style={{ margin: "2rem 0" }}>
          Copyright 2022 <br />
          <br /> All right Reserved.
        </p>
      </div>
    </div>
  );
}

const Style = {
  Container: css`
    width: 100%;
    height: 100px;
    text-align: center;
    margin-top: 1.6rem;
    background-color: #ffffff;
  `,
  InnerContainer: css`
    max-width: 1024px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    height: 100%;
    background-color: #ffffff;
  `,
};
