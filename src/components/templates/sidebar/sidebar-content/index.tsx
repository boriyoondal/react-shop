import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "src/store";
import { css, Theme } from "@emotion/react";
import CartList from "./CartList";

export default function SidebarContent() {
  const { totalAmount, pcs } = useSelector((store: RootState) => store.cart);
  const [price, setPrice] = useState(0);
  const [qty, setqty] = useState(0);

  useEffect(() => {
    setPrice(totalAmount);
    setqty(pcs);
  }, [totalAmount, pcs]);

  return (
    <div css={Style.Container}>
      <div css={Style.InnerContainer}>
        <CartList />
        <br />
        <div css={Style.CartCss}>
          ✔ 수량 : <span style={{ fontSize: "1.2rem" }}>{qty}</span>개 <br />
          <br />
          <div>
            ✔ 합계 : <span style={{ fontSize: "1.2rem" }}>{price}</span>원
          </div>
          <br />
          <Link to="/checkout">
            <button css={Style.btnStyle} style={{ padding: "15px", fontSize: "1.4rem" }}>
              {" "}
              CHECK OUT!{" "}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

const Style = {
  Container: (theme: Theme) => css`
    max-width: 768px;
    height: 100%;
    color: white;
    box-shadow: 2px 3px 3px 2px rgb(0 0 0 / 10%);
  `,

  InnerContainer: css`
    padding: 40px 20px;
    position: relative;
    width: 100%;
    height: 100%;
    color: #080808;
    background-color: #f0f0f0;
  `,

  CartCss: css`
    padding: 10px;
    background-color: #f0f0f0;
    color: black;
  `,
  btnStyle: css`
    margin: 0;
    border: none;
    cursor: pointer;
    font-family: "Noto Sans KR", sans-serif;
    font-size: var(--button-font-size, 1rem);
    padding: var(--button-padding, 12px 16px);
    border-radius: var(--button-radius, 8px);
    background: var(--button-bg-color, tomato);
    color: var(--button-color, #ffffff);

    &:active,
    &:hover,
    &:focus {
      background: var(--button-hover-bg-color, tomato);
    }

    &:disabled {
      cursor: default;
      opacity: 0.5;
      background: var(--button-bg-color, tomato);
    }

    --button-font-size: 0.875rem;
    --button-padding: 8px 12px;
    --button-radius: 4px;
  `,
};
