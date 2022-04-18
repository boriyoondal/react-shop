import React, { useState } from "react";
import { css, Theme } from "@emotion/react";
import { Link } from "react-router-dom";
import Sidebar from "../sidebar";
import SidebarContent from "../sidebar/sidebar-content";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/store";
import { logOutAction } from "src/store/login/action";
import isLogin1 from "src/libs/isLogin";

export default function Header() {
  const dispatch = useDispatch();
  return (
    <>
      {isLogin1() ? (
        <div>
          <Link to="/">
            <div
              css={Style.btnStyle}
              style={{ height: "30px", width: "80px" }}
              onClick={() => dispatch(logOutAction())}
            >
              로그아웃
            </div>
          </Link>
          <div css={Style.Container}>
            <div css={Style.InnerContainer}>
              <div css={Style.Logo} style={{ fontSize: "2rem" }}>
                SHOPPING CART
              </div>
            </div>
            <Sidebar width={440}>
              <SidebarContent />
            </Sidebar>
          </div>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <div css={Style.btnStyle} style={{ height: "30px", width: "80px" }}>
              로그인
            </div>
          </Link>
          <div css={Style.Container}>
            <div css={Style.InnerContainer}>
              <div css={Style.Logo} style={{ fontSize: "2rem" }}>
                SHOPPING CART
              </div>
            </div>
            <Sidebar width={440}>
              <SidebarContent />
            </Sidebar>
          </div>
        </div>
      )}
    </>
  );
}

const Style = {
  Container: css`
    position: relative;
    width: 100%;
    text-align: center;
    background-color: #f0f0f0;
    height: 72px;
  `,
  InnerContainer: (theme: Theme) => css`
    max-width: 1024px;
    margin-left: auto;
    margin-right: auto;
    background-color: #080808;
    height: 100%;
    display: flex;
    color: white;
    padding: 20px;
    font-weight: 600;
    font-size: 20px;
    justify-content: center;
    align-items: center;
    ${theme.mobile} {
      justify-content: flex-start;
    }
  `,
  Logo: (theme: Theme) => css`
    display: flex;
    margin: 0 auto;
  `,

  List: css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: 1rem;

    & > li {
      margin: 0 1rem;
    }
  `,
  btnStyle: css`
    border: none;
    cursor: pointer;
    font-family: "Noto Sans KR", sans-serif;
    font-size: var(--button-font-size, 1rem);
    padding: 5px;
    background: var(--button-bg-color, tomato);
    color: var(--button-color, #ffffff);
    text-align: center;

    &:active,
    &:hover,
    &:focus {
      background: var(--button-hover-bg-color, tomato);
    }

    &:disabled {
      cursor: default;
      opacity: 0.5;
      background: var(--button-bg-color, tomato);
    }

    --button-font-size: 0.875rem;
    --button-padding: 12px 14px;
    --button-radius: 4px;
  `,
};
