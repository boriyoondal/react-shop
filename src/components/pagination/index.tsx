import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
// icon
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
// import
import MovePagination from "src/func/index";

interface Props {
  totalPage: number;
  currentPage: number;
  setCurrentPage: any;
}

const PAGES_PER_LIST = 5; // page 당 표출 할 리스트 개수

export default function Pagination(props: Props) {
  const navigate = useNavigate();
  const { currentPage, totalPage, setCurrentPage } = props;

  console.log("검사", currentPage, totalPage);

  //left arrow toggle
  const changeNumbersBackward = () => {
    setCurrentPage(currentPage - 1);
  };
  //right arrow toggle
  const changeNumbersForward = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <button onClick={changeNumbersBackward} disabled={currentPage === 1}>
          <HiOutlineChevronLeft />
        </button>

        {MovePagination(currentPage, totalPage, PAGES_PER_LIST).map((i) => (
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
            <button
              onClick={setCurrentPage}
              style={{
                backgroundColor: currentPage === i ? "#0d6efd" : "transparent",
              }}
            >
              {i}
            </button>
          </div>
        ))}
        <button onClick={changeNumbersForward} disabled={currentPage === totalPage}>
          <HiOutlineChevronRight />
        </button>
      </div>
    </div>
  );
}
