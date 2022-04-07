import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/store";
import { clearCart, deleteCart } from "src/store/cart/action";
import { Product } from "src/@types/types";
import { css } from "@emotion/react";

export default function CartItem() {
  //@redux
  const dispatch = useDispatch();
  const { products } = useSelector((store: RootState) => store.cart);

  // let sum = 0;
  // const cartSum = products.length >= 1 ? products.map((v,i) => {
  //     sum += v.price;
  // })

  return (
    <div>
      {products.length >= 1 ? (
        products.map((v, i) => (
          <div key={i}>
            <img src={v.image} style={{ width: 50, height: 50 }} alt={"prod-img"} />
            <br />
            {v.title}
            <br />
            {v.price}
            <br />
            <br />
            <button css={Style.btnStyle} onClick={() => dispatch(deleteCart(v))}>
              삭제
            </button>{" "}
          </div>
        ))
      ) : (
        <div> 장바구니가 비어있습니다 </div>
      )}
      <br />
      <button css={Style.btnStyle} onClick={() => dispatch(clearCart())}>
        비우기
      </button>
      {/* <div> 합계 : {sum} </div> */}
    </div>
  );
}

const Style = {
  btnStyle: css`
    margin: 0;
    border: none;
    cursor: pointer;
    font-family: "Noto Sans KR", sans-serif;
    font-size: var(--button-font-size, 1rem);
    padding: var(--button-padding, 12px 16px);
    border-radius: var(--button-radius, 8px);
    background: var(--button-bg-color, #0d6efd);
    color: var(--button-color, #ffffff);

    &:active,
    &:hover,
    &:focus {
      background: var(--button-hover-bg-color, #025ce2);
    }

    &:disabled {
      cursor: default;
      opacity: 0.5;
      background: var(--button-bg-color, #025ce2);
    }

    --button-font-size: 0.875rem;
    --button-padding: 8px 12px;
    --button-radius: 4px;
  `,
};
