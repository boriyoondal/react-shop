import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/store";
import { Product } from "src/@types/types";
import API from "src/API";
import { addCart } from "src/store/cart/action";
import axios from "axios";

import { GoPlus } from "react-icons/go";
import { css } from "@emotion/react";
import Pagination from "src/components/pagination";
import { start } from "repl";

const ITEMS_PER_PAGE = 6;

export default function ProductList() {
  const dispatch = useDispatch();

  //@pagination/state
  const [products, setProducts] = useState<Product[]>([]); // 총 게시물 data
  const [startPage, setStartPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("http://localhost:9999/api");
      setProducts(res.data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    setStartPage((currentPage - 1) * ITEMS_PER_PAGE);
    setTotalPage(products.length / ITEMS_PER_PAGE);
  });

  //slice(시작 인덱스,종료 인덱스)
  const currentPageData = products.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);
  return (
    <div>
      <div>
        <h2 style={{ textAlign: "center", marginTop: "2rem", fontSize: "1.6rem" }}>SHOES LIST</h2>

        {/* 현재 페이지 데이터 slice */}
        {currentPageData.map((v, i) => (
          <article key={i} css={Style.ItemBox}>
            <div css={Style.InnerItemBox}>
              <img src={v.image} style={{ width: 200, height: 200, display: "inline-block" }} />
              <p>{v.id}</p>
              <p>{v.title}</p>
              <p>{v.price}</p>
              <br />
              <button css={Style.Btn} onClick={() => dispatch(addCart(v))}>
                {" "}
                <GoPlus />{" "}
              </button>
            </div>
          </article>
        ))}
      </div>

      <Pagination currentPage={currentPage} totalPage={totalPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}

//@ CSS
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
