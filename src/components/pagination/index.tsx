import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
// icon
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
// css
import { Theme, css } from "@emotion/react";
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
    <div css={Style.Container}>
      <div style={{ textAlign: "center" }}>
        <button css={Style.ArrowBtn} onClick={changeNumbersBackward} disabled={currentPage === 1}>
          <HiOutlineChevronLeft />
        </button>

        {MovePagination(currentPage, totalPage, PAGES_PER_LIST).map((i) => (
          <div
            key={i}
            css={Style.innerContainer}
            onClick={() => {
              // currentpage
              navigate(`/?pages=${i}`);
              setCurrentPage(i);
            }}
          >
            <button
              onClick={setCurrentPage}
              style={{
                backgroundColor: currentPage === i ? "#1abc9c" : "#f0f0f0",
              }}
              css={Style.CircleBtn}
            >
              {i}
            </button>
          </div>
        ))}
        <button css={Style.ArrowBtn} onClick={changeNumbersForward} disabled={currentPage === totalPage}>
          <HiOutlineChevronRight />
        </button>
      </div>
    </div>
  );
}

const Style = {
  Container: (theme: Theme) => css`
    float: left;
    ${theme.mobile} {
      max-width: 100%;
      height: auto;
      align-items: flex-start;
      margin: 0 auto;
    }
    margin: 0 auto;
    width: 100%;
    line-height: 100%;
  `,
  innerContainer: css`
    text-align: center;
    display: inline-block;
    margin: 0 2.4rem;
  `,
  CircleBtn: css`
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
  `,
  ArrowBtn: css`
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
  `,
};
