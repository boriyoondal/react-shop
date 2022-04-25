import React, { useEffect, useState } from "react";
//redux
import { Product } from "src/@types/types";
import { useSelector } from "react-redux";
import { RootState } from "src/store";

import { Link } from "react-router-dom";
import { css, Theme } from "@emotion/react";
import CartItem from "./sidebar-cartItem";

export default function SidebarContent() {
  const { totalAmount, pcs, products } = useSelector((store: RootState) => store.cart);
  const [price, setPrice] = useState(0);
  const [qty, setqty] = useState(0);
  const [item, setItem] = useState<Product[]>([]);

  useEffect(() => {
    setPrice(totalAmount);
    setqty(pcs);
    setItem(products);
  }, [totalAmount, pcs, products]);

  return (
    <div css={Style.Container}>
      <div css={Style.InnerContainer}>
        <CartItem />
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
  `,

  InnerContainer: css`
    padding: 40px 20px;
    position: relative;
    width: 100%;
    height: 100%;
    color: #080808;
    background-color: #f0f0f0;
    z-index: 9999;
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
    background: var(--button-bg-color, #ff7851);
    color: var(--button-color, #ffffff);

    &:active,
    &:hover,
    &:focus {
      background: var(--button-hover-bg-color, #ff7851);
    }

    &:disabled {
      cursor: default;
      opacity: 0.5;
      background: var(--button-bg-color, #ff7851);
    }

    --button-font-size: 0.875rem;
    --button-padding: 8px 12px;
    --button-radius: 4px;
  `,
};
