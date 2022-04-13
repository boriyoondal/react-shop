import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
// type
import type { Product } from "src/@types/types";
// icon
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import MovePagination from "src/libs/func/index";

interface Props {
  products: Product[];
  startPage: number;
  setStartPage: any;
  totalPage: number;
  setTotalPage: any;
  currentPage: number;
  setCurrentPage: any;
}

const PAGES_PER_LIST = 5; // page 당 표출 할 리스트 개수
// arrow 누를 때마다 totalPage랑 비교해서 새로운 페이지 배열을 만들어 주어야 함
const ITEMS_PER_PAGE = 6; // page  당 표출 할 데이터 개수
// 36 = 6개의 게시글 * 총 6개의 페이지로 표출

//@arrow btn func
// const arrowHandler = (prev: any, currentPage: number, totalPage: number, sign: number) => {
//   const nextIndex = totalPage + PAGES_PER_LIST;
//   console.log(totalPage + "가 끝임");
//   let res;
//   if (sign === +1) {
//     res = nextIndex > totalPage ? totalPage : nextIndex;
//   } else if (sign === -1) {
//     res = totalPage - currentPage < 4 ? currentPage + 4 - PAGES_PER_LIST : totalPage - PAGES_PER_LIST;
//   }
//   return { start: currentPage + PAGES_PER_LIST * sign, end: res };
// };

export default function Pagination(props: Props) {
  const navigate = useNavigate();
  // const location = useLocation();
  // const [searchParams, setSearchParams] = useSearchParams();
  // const pages = searchParams.get("pages")
  const { products, currentPage, totalPage, setCurrentPage, startPage, setStartPage, setTotalPage } = props;

  //@init
  const [showingNum, setShowingNum] = useState({
    start: 1,
    end: PAGES_PER_LIST,
  });

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPage;

  // const func = (currentPage: number, maxPerPage: number, index: number) : boolean => {
  //   const currentPageStart = ((currentPage -1) * maxPerPage) +1;
  //   const currentPageEnd = currentPage * maxPerPage

  //   if ((index +1) >= currentPageStart && (index +1) <= currentPageEnd) {
  //     return true
  //   }
  //   return false
  // }

  //@page 수 뿌리기
  //@ts-ignore
  // const pageNumber = [];
  // for (let i = 1; i <= Math.ceil(products.length / ITEMS_PER_PAGE); i++) {
  //   pageNumber.push(i);
  // }

  //left arrow toggle
  const changeNumbersBackward = () => {
    // currentPage > PAGES_PER_LIST && setShowingNum((prev) => arrowHandler(prev, -1, totalPage));
    setCurrentPage(currentPage - 1);
  };
  //right arrow toggle
  const changeNumbersForward = () => {
    // currentPage <= PAGES_PER_LIST && setShowingNum((prev) => arrowHandler(prev, +1, totalPage));
    setCurrentPage(currentPage + 1);
  };

  console.log("현재 페이지 :" + currentPage);
  console.log("총 페이지:" + totalPage);

  //  마지막 페이지 유무 검사
  useEffect(() => {
    const lessThanFive = totalPage <= PAGES_PER_LIST;
    lessThanFive
      ? setShowingNum((prev) => ({ ...prev, start: 1, end: totalPage }))
      : setShowingNum((prev) => ({ ...prev, start: 1, end: PAGES_PER_LIST }));
  }, [totalPage]);

  // if (totalPage > PAGES_PER_LIST) {
  //   totalPage === PAGES_PER_LIST;
  // }

  // useEffect(() => {
  //   const lastPage = Math.ceil(products.length / ITEMS_PER_PAGE);
  //   setTotalPage(lastPage ? lastPage : 1);
  // }, [products]);

  // useEffect(() => {
  //   setCurrentPage(showingNum.start);
  // }, [showingNum, setCurrentPage]);

  //현재 페이지 리스트 번호 설정하는 useEffect (arrow toggle시 번호 변경)
  useEffect(() => {
    setStartPage(((currentPage - 1) / PAGES_PER_LIST) * PAGES_PER_LIST + 1);
    setTotalPage(((currentPage - 1) / PAGES_PER_LIST + 1) * PAGES_PER_LIST);
    console.log("시작:" + startPage, "끝:" + totalPage);
  }, [startPage, totalPage]);

  // const endPage = currentPage * ITEMS_PER_PAGE - 1;
  // console.log(endPage);
  //   const arr = Array(totalPage < 5 ? totalPage : 5).fill(0);
  //const finalTotalPage = [];

  // let res;
  // const finalTotalPage = [];

  // for (let i = startPage; i <= PAGES_PER_LIST; i++) {
  //   finalTotalPage.push(i);
  //   // if (PAGES_PER_LIST < totalPage) {
  //   //   PAGES_PER_LIST + 1;
  //   // }
  // }
  // console.log(finalTotalPage);

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <button onClick={changeNumbersBackward} disabled={isFirstPage}>
          <HiOutlineChevronLeft />
        </button>

        {MovePagination(currentPage, totalPage, startPage).map((i) => (
          <div
            key={i}
            style={{
              display: "inline-block",
              marginLeft: "2.4rem",
              marginRight: "2.4rem",
            }}
            onClick={() => {
              // currentpage
              navigate(`/?pages=${i}`);
              setCurrentPage(i);
            }}
          >
            {console.log(i)}
            {/* {console.log("page:", pages, "i:",i)} */}
            <button
              onClick={setCurrentPage}
              style={{
                backgroundColor: currentPage === i ? "#0d6efd" : "transparent",
              }}
            >
              {i}
            </button>
            {/* <PageButton
                page={i + 1}
                //@ts-ignore
                pageNumber={pageNumber}
                setCurrentPage={setCurrentPage}
              /> */}
          </div>
        ))}
        <button onClick={changeNumbersForward} disabled={isLastPage}>
          <HiOutlineChevronRight />
        </button>
      </div>
    </div>
  );
}
