import React, { useEffect, useState } from "react";
import API from "src/API";
import { useNavigate } from "react-router-dom";
//redux
// import { useDispatch } from "react-redux";
import { useAppDispatch } from "src/store/cart/hooks";
// import { addCart } from "src/store/cart/action";
import { addItem } from "src/store/cart/cartSlice";
//type
import { Product } from "src/@types/types";
//css
import { css } from "@emotion/react";
import { GoPlus } from "react-icons/go";
import "bootstrap/dist/css/bootstrap.min.css";
//pagination import
import Pagination from "src/components/pagination";

const ITEMS_PER_PAGE = 6;

export default function ProductList() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  //@pagination/state
  const [products, setProducts] = useState<Product[]>([]); // 총 게시물 data
  const [startPage, setStartPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  //* 서버에서 data 가져오기
  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await axios.get("http://localhost:9999/api");
  //     setProducts(res.data);
  //   }
  //   fetchData();
  // }, []);

  //* 자체 dummy data 가져오기
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(API);
    }, 100);
  }).then((res) => {
    setProducts(res as any);
  });

  useEffect(() => {
    setStartPage((currentPage - 1) * ITEMS_PER_PAGE);
    setTotalPage(products.length / ITEMS_PER_PAGE);
  });

  //slice(시작 인덱스,종료 인덱스)
  const currentPageData = products.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);
  return (
    <div css={Style.Container}>
      {/* 현재 페이지 데이터 slice */}
      {currentPageData.map((v, i) => (
        <div className="card" css={Style.ItemBox} key={i}>
          <div
            css={Style.InnerItemBox}
            className="card-body"
            onClick={() => {
              navigate(`/product/${i + 1}`); // url 변경, 동적라우팅
            }}
          >
            <img src={v.image} style={{ width: 200, height: 200, display: "inline-block" }} />
            <h6 className="card-subtitle mb-2 text-muted">{v.id}</h6>
            <h4 className="card-title">{v.title}</h4>
            <p className="card-text">{v.price}</p>
          </div>
          <button type="button" className="btn btn-secondary" onClick={() => dispatch(addItem(v))}>
            {" "}
            장바구니 추가 <GoPlus />
          </button>
        </div>
      ))}
      <Pagination currentPage={currentPage} totalPage={totalPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}

//@ CSS
const Style = {
  Container: css`
    align-items: center;
    margin-bottom: 4rem;
    text-align: center;
  `,
  ItemBox: css`
    padding: 1rem;
    margin: 1rem;
    float: left;
    text-align: center;
    position: unset;
  `,

  InnerItemBox: css`
    margin: 0 1.2rem;
    cursor: pointer;
  `,
};
