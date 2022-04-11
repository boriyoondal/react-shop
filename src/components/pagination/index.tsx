import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
// icon
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
// css
import { css } from "@emotion/react";
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
                backgroundColor: currentPage === i ? "#f0f0f0" : "#080808",
              }}
              css={Style.CircleBtn}
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

const Style = {
  CircleBtn: css`
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
    outline: none;
    padding: 10px;
    cursor: pointer;
    overflow: hidden;
    border: none;
    -webkit-border-radius: 10%;
    border-radius: 10%;
    color: rgba(255, 255, 255, 0.9);
    text-align: center;
    background: #1abc9c;
    -webkit-box-shadow: 0 4px 3px 2px rgba(0, 0, 0, 0.2);
    box-shadow: 0 4px 3px 2px rgba(0, 0, 0, 0.2);
  `,
};
