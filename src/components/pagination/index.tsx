import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
// type
import type { Product } from "src/@types/types";
// icon
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

interface Props {
  products: Product[];
  setStartPage: any;
  setTotalPage: any;
  setCurrentPage: any;
  currentPage: number;
  startPage: number;
  totalPage: number;
}

const PAGES_PER_LIST = 3; // page 당 표출 할 리스트 개수
// arrow 누를 때마다 totalPage랑 비교해서 새로운 페이지 배열을 만들어 주어야 함
const ITEMS_PER_PAGE = 6; // page  당 표출 할 데이터 개수

const arrowHandler = (prev: any, sign: number, totalPage: number) => {
  const nextIndex = prev.end + PAGES_PER_LIST;
  let res;
  if (sign === 1) {
    res = nextIndex > totalPage ? totalPage : nextIndex;
  } else if (sign === -1) {
    res = prev.end - prev.start < 4 ? prev.start + 4 - PAGES_PER_LIST : prev.end - PAGES_PER_LIST;
  }
  return { ...prev, start: prev.start + PAGES_PER_LIST * sign, end: res };
};

export default function Pagination(props: Props) {
  const navigate = useNavigate();
  const { products, currentPage, totalPage, setCurrentPage, startPage, setStartPage, setTotalPage } = props;

  // const location = useLocation();
  // const [searchParams, setSearchParams] = useSearchParams();
  // const pages = searchParams.get("pages")

  //@init
  const [showingNum, setShowingNum] = useState({
    start: 1,
    end: PAGES_PER_LIST,
  });

  //@pagination algorithm
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(products.length / ITEMS_PER_PAGE); i++) {
    pageNumber.push(i);
  }
  console.log("페이지수  : " + pageNumber);
  //left arrow toggle
  const changeNumbersBackward = () => {
    currentPage > PAGES_PER_LIST && setShowingNum((prev) => arrowHandler(prev, -1, totalPage));
  };
  //right arrow toggle
  const changeNumbersForward = () => {
    currentPage <= PAGES_PER_LIST && setShowingNum((prev) => arrowHandler(prev, 1, totalPage));
  };
  console.log("현재 페이지 :" + currentPage);

  useEffect(() => {
    const lessThanFive = totalPage <= PAGES_PER_LIST;
    lessThanFive
      ? setShowingNum((prev) => ({ ...prev, start: 1, end: totalPage }))
      : setShowingNum((prev) => ({ ...prev, start: 1, end: PAGES_PER_LIST }));
  }, [totalPage]);
  console.log(showingNum.start);

  useEffect(() => {
    const lastPage = Math.ceil(products.length / ITEMS_PER_PAGE);
    setTotalPage(lastPage ? lastPage : 1);
  }, [products]);

  useEffect(() => {
    setCurrentPage(showingNum.start);
  }, [showingNum, setCurrentPage]);

  console.log(showingNum);
  //현재 페이지 데이터
  useEffect(() => {
    setStartPage((currentPage - 1) * ITEMS_PER_PAGE);
    setTotalPage(currentPage * ITEMS_PER_PAGE);
  }, [currentPage, startPage]);

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <HiOutlineChevronLeft onClick={changeNumbersBackward} />
        {pageNumber.map((v, i) => (
          <div
            key={i}
            style={{
              display: "inline-block",
              listStyleType: "none",
              marginLeft: "2.4rem",
              marginRight: "2.4rem",
            }}
            onClick={() => {
              // currentpage
              navigate(`/?pages=${i + 1}`);
              setCurrentPage(i + 1);
            }}
          >
            {/* {console.log("page:", pages, "i:",i)} */}
            <div style={{ marginBottom: "2rem" }}>
              {/* <li onClick={() => setCurrentPage(i+1)}> */}
              <li>
                <button
                  style={{
                    backgroundColor: currentPage === i + 1 ? "#0d6efd" : "transparent",
                  }}
                >
                  {i + 1}
                </button>
              </li>
            </div>
          </div>
        ))}
        <HiOutlineChevronRight onClick={changeNumbersForward} />
      </div>
    </div>
  );
}
