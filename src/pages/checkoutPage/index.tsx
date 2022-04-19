import React from "react";
import Header from "../../components/templates/header";
import Footer from "../../components/templates/footer";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/store";
import { deleteCart } from "src/store/cart/action";
import { css } from "@emotion/react";

export default function CheckoutPage() {
  const dispatch = useDispatch();
  const { products, pcs, totalAmount } = useSelector((store: RootState) => store.cart);

  const onClickCheckOut = () => {
    alert("결제하기");
  };
  return (
    <div>
      <Header />
      <br />
      <div style={{ textAlign: "center", fontSize: "2.4rem" }}> CHECK OUT </div>
      <br />
      {products.map((v, i) => (
        <div key={i} style={{ textAlign: "center", width: "100%" }}>
          <div
            style={{
              backgroundColor: "#ffffff",
              width: "1024px",
              margin: "0 auto",
              // border: "1px solid #808080",
            }}
          >
            <img src={v.image} style={{ width: 100, height: 100 }} alt={"prod-img"} />
            <br />
            상품명 : {v.title}
            <br />
            가격 : {v.price} <button onClick={() => dispatch(deleteCart(v))}>X</button>{" "}
          </div>
        </div>
      ))}
      <br />
      <div style={{ textAlign: "center", width: "100%" }}>
        <div
          style={{ backgroundColor: "#080808", width: "1024px", margin: "0 auto", padding: "10px", color: "#f8f8f8" }}
        >
          ✔ 총 수량 : <span style={{ fontSize: "1.2rem" }}>{pcs}</span>개 <br />
          <br />
          <div>
            합계 : <span style={{ fontSize: "1.2rem" }}>{totalAmount}</span>원
          </div>
          <br />
          <button css={Style.btnStyle} onClick={onClickCheckOut}>
            결제하기
          </button>
        </div>
      </div>
      <Footer />
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
