import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/store";
//import API from "src/API";
import { addCart } from "src/store/cart/action";
import axios from "axios";
import { Product } from "src/@types/types";
import { GoPlus } from "react-icons/go";
import { css } from "@emotion/react";
import Pagination from "src/components/pagination";

export default function ProductList() {
  const { toggle } = useSelector((store: RootState) => store.cart);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  //@pagination/state
  const [products, setProducts] = useState<Product[]>([]); // 총 게시물 data
  // json 형태로 들어오기 때문에 배열 리터럴 [] 사용

  const [start, setStart] = useState(1); // 페이징 시작
  const [end, setEnd] = useState(6); // 페이징 마지막

  const [isOpen, setIsOpen] = useState(false);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  const cartToggle = (isOpen: boolean) => {
    isOpen ? closeCart() : openCart();
  };

  useEffect(() => {
    // 서버로부터 데이터 가져오기
    async function fetchData() {
      setLoading(true);
      const res = await axios.get("http://localhost:9999/api");
      setProducts(res.data);
      setLoading(false);
      console.log(res.data);
    }
    fetchData();

    /*
        (async () => {
            const response  = await new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(API)
                }, 300);
            })
            setProducts(response as any);
        })();
        */

    /*
        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(API)
            }, 300);
        }).then((res) => {
            setProducts(res as any);
        })
        */

    // // 서버로부터 API 받아오기
    // axios.get("http://localhost:9999/api").then((res) => {
    //     console.log(res);
    //     setProducts(res.data);
    // })

    /*
        (async () => {
            const result = await axios.get("/items");
            setProducts(result.data);
        })()
        */
  }, []);

  //@Pagination

  return (
    <div>
      <div>
        <h2 style={{ textAlign: "center", marginTop: "2rem", fontSize: "1.6rem" }}>SHOES LIST</h2>

         {products.map((v, i) => (
          <article key={i} css={Style.ItemBox}>
            <div css={Style.InnerItemBox}>
              <img src={v.image} style={{ width: 200, height: 200 , display: "inline-block"}} />
              <p>{v.id}</p>
              <p>{v.title}</p>
              <p>{v.price}</p>
              <br />
              <button css={Style.Btn} onClick={() => dispatch(addCart(v))}>
                {" "} <GoPlus /> {" "}
              </button>
            </div>
          </article>
        ))} 
      </div>

      <Pagination></Pagination>
    </div>
  );
}

const Style = {
  ItemBox: css`
    padding: 1rem;
    margin: 2.2rem;
    float: left;
    text-align: center;
  `,

  InnerItemBox: css`
    margin: 0 1.2rem;
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
