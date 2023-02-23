import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "src/API";
//redux
// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "src/store";
// import { addCart } from "src/store/cart/action";
import { RootState } from "src/store";
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import { addItem } from "src/store/cart/cartSlice";
//type
import { Product } from "src/@types/types";
//css
import { css, Theme } from "@emotion/react";
import { GoPlus } from "react-icons/go";
import { IoIosHeart } from "react-icons/io";
//import components
import Footer from "src/components/templates/footer";
import Header from "src/components/templates/header";

type Params = {
  id: string;
};

export default function DetailPage() {
  const dispatch = useAppDispatch();
  const { id } = useParams<Params>();
  const [product, setProduct] = useState<Product[]>([]);
  // const {} = useAppSelector((store: RootState) => store.cart);
  const prod_list = product;
  const prod_idx = prod_list.findIndex((i) => i.id === id);
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
              <img src={prod.image} height="400px" css={Style.Sizing} alt="product_image" />
              <div css={Style.DetailContainer}>
                <span style={{ fontSize: "3rem", fontWeight: "bold" }}>{prod.id}</span>
                <span style={{ fontSize: "2rem", fontWeight: "300", boxSizing: "border-box" }}>{prod.title}</span>
                가격 : {prod.price}
                <select>사이즈</select>
                <button css={Style.Btn} onClick={() => dispatch(addItem(prod))}>
                  장바구니 추가 <GoPlus />
                </button>
                <button css={Style.Btn}>
                  <IoIosHeart />
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
  InnerContainer: (theme: Theme) => css`
    align-items: flex-start;
    margin: 1rem 1rem;
    max-width: 1024px;
    margin: auto;
    display: flex;
    justify-content: center;
    height: 100%;
    background-color: #ffffff;
    z-index: -1;
    ${theme.mobile} {
      justify-content: flex-start;
      padding: 3px;
      display: flex;
      margin: 0 auto;
    }
  `,
  DetailContainer: css`
    text-align: center;
    display: inline-block;
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
  Sizing: (theme: Theme) => css`
    ${theme.mobile} {
      justify-content: flex-start;
      margin-top: 5rem;
      width: 300px;
      height: 300px;
    }
  `,
};
