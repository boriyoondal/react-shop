import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Product } from "src/@types/types";
import { RootState } from "src/store";
import { css } from "@emotion/react";
import { addCart } from "src/store/cart/action";
import { GoPlus } from "react-icons/go";
import { IoIosHeart } from "react-icons/io";
import API from "src/API";
import Footer from "src/components/templates/footer";
import Header from "src/components/templates/header";

type Params = {
  id: string;
};

export default function DetailPage() {
  const dispatch = useDispatch();
  const { id } = useParams<Params>();
  const [product, setProduct] = useState<Product[]>([]);
  const { products } = useSelector((store: RootState) => store.cart);
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
                <span style={{ fontSize: "3rem", fontWeight: "bold" }}>{prod.id}</span>
                <br />
                <br />
                <span style={{ fontSize: "2rem", fontWeight: "300", boxSizing: "border-box" }}>{prod.title}</span>
                <br />
                <br />
                가격 : {prod.price}
                <br />
                <br />
                사이즈
                <select></select>
                <br />
                <br />
                <button css={Style.Btn} onClick={() => dispatch(addCart(prod))}>
                  {" "}
                  장바구니 추가 <GoPlus />{" "}
                </button>{" "}
                <button css={Style.Btn}>
                  {" "}
                  <IoIosHeart />{" "}
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
    padding: 3rem 0 0 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  `,
  InnerContainer: css`
    align-items: flex-start;
    margin: 1rem 1rem;
    max-width: 1024px;
    margin: auto;
    display: flex;
    justify-content: center;
    height: 100%;
    background-color: #ffffff;
    z-index: -1;
  `,
  DetailContainer: css`
    text-align: center;
    font-size: 1.2rem;
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
    background: var(--button-bg-color, #78c2ad);
    color: var(--button-color, #ffffff);
    &:active,
    &:hover,
    &:focus {
      background: var(--button-hover-bg-color, #78c2ad);
    }

    &:disabled {
      cursor: default;
      opacity: 0.5;
      background: var(--button-bg-color, #78c2ad);
    }
  `,
};
