import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/store";
import { css, Theme } from "@emotion/react";
import CartList from "./CartList";
import { addCart } from "src/store/cart/action";

export default function SidebarContent() {
  const dispatch = useDispatch();
  const { products, totalAmount } = useSelector((store: RootState) => store.cart);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    setPrice(totalAmount);
    console.log(price);
  }, [totalAmount]);

  return (
    <div css={Style.Container}>
      <div css={Style.InnerContainer}>
        CART
        <div>
          <br />
        </div>
        <CartList />
        <br />
        <div>합계 : {price} 원</div>
      </div>
    </div>
  );
}

const Style = {
  Container: (theme: Theme) => css`
    background-color: #000000;
    max-width: 768px;
    height: 100%;
    color: white;
  `,

  InnerContainer: css`
    padding: 40px 20px;
    position: relative;
    width: 100%;
    height: 100%;
    color: white;
  `,
};
