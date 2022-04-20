import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Product } from "src/@types/types";
import { RootState } from "src/store";
import { css } from "@emotion/react";
import { addCart } from "src/store/cart/action";
import { GoPlus } from "react-icons/go";
import API from "src/API";
import Footer from "src/components/templates/footer";
import Header from "src/components/templates/header";

type Params = {
  id: string;
};
export default function DetailPage() {
  const dispatch = useDispatch();
  const [product, setProduct] = useState<Product[]>([]);
  const { id } = useParams<Params>();
  const { loading, products } = useSelector((store: RootState) => store.cart);
  const prod_list = product;
  const prod_idx = prod_list.findIndex((i) => i.id == id);
  const prod = prod_list[prod_idx];

  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(API);
    }, 100);
  }).then((res) => {
    setProduct(res as any);
  });

  useEffect(() => {
    if (prod) {
      return;
    }
  }, []);

  return (
    <div>
      <Header />
      {prod && (
        <div>
          <div css={Style.Container}>
            <div css={Style.InnerContainer}>
              <img src={prod.image} height="400px" />
              <div css={Style.DetailContainer}>
                <br />
                제품번호 : {prod.id}
                <br />
                제품명 : {prod.title}
                <br />
                가격 : {prod.price}
                <br />
                <button css={Style.Btn} onClick={() => dispatch(addCart(prod))}>
                  {" "}
                  장바구니 추가 <GoPlus />{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

const Style = {
  Container: css`
    padding: 60px 0 0 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  `,
  InnerContainer: css`
    align-items: flex-start;
    margin: 1rem 1rem;
    max-width: 1024px;
    border: 1px solid black;
    margin: auto;
    display: flex;
    justify-content: center;
    height: 100%;
    background-color: #ffffff;
    z-index: -1;
  `,
  DetailContainer: css`
    text-align: center;
    font-size: 1.6rem;
    display: inline-block;
    margin: 6rem 2rem;
    width: 400px;
  `,
  Btn: css`
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
  `,
};
