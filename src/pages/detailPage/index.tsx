import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Product } from "src/@types/types";
import { RootState } from "src/store";
import { css } from "@emotion/react";
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
                제품번호 : {prod.id}
                제품명 : {prod.title}
                가격 : {prod.price}
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
    width: 400px;
    margin-left: 15rem;
    margin-top: 2rem;
    border: 1px solid black;
  `,
  InnerContainer: css`
    align-items: flex-start;
    display: flex;
    margin: 1rem 1rem;
  `,
  DetailContainer: css`
    text-align: center;
    font-size: 1.6rem;
    display: flex;
    float: right;
    margin-right: 15rem;
    margin-top: 10rem;
  `,
};
