import React, { useEffect, useState } from "react";
import { css, Theme } from "@emotion/react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOutAction } from "src/store/login/action";
import Sidebar from "../sidebar";
import SidebarContent from "../sidebar/sidebar-content";
import isLoginCheck from "src/libs/isLogin";

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginState, setLoginState] = useState("");

  useEffect(() => {
    isLoginCheck() ? setLoginState("로그아웃") : setLoginState("로그인");
  }, []);
  const currentUser = localStorage.getItem("login");
  //@ts-ignore
  const userInfo = JSON.parse(currentUser);
  const onClickHandler = () => {
    navigate("/");
  };

  return (
    <>
      {isLoginCheck() ? (
        <div style={{ width: "100%", height: "100%" }}>
          <Link to="/">
            <div
              css={Style.btnStyle}
              style={{ height: "30px", width: "80px", display: "inline-block" }}
              onClick={() => dispatch(logOutAction())}
            >
              {loginState}
            </div>
            {/* <button
              type="button"
              className="btn btn-outline-primary"
              style={{
                display: "inline-block",
                padding: "0.5rem",
                margin: "1rem 1rem",
              }}
              onClick={() => dispatch(logOutAction())}
            >
              {loginState}
            </button> */}
          </Link>
          <span style={{ textAlign: "center", padding: "0.5rem" }}>👟 {userInfo.id} 님이 접속중입니다. 👟</span>
          <div css={Style.Container}>
            <div css={Style.InnerContainer}>
              <div css={Style.Logo} style={{ fontSize: "2rem" }} onClick={onClickHandler}>
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
              {loginState}
            </div>
          </Link>
          <div css={Style.Container}>
            <div css={Style.InnerContainer}>
              <div css={Style.Logo} style={{ fontSize: "2rem" }} onClick={onClickHandler}>
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
    background-color: rgba(var(--bs-light-rgb), var(--bs-bg-opacity)) !important;
    height: 100%;
    display: flex;
    color: #080808;
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
    padding: 0.5rem;
    background: var(--button-bg-color, #78c2ad);
    color: var(--button-color, #ffffff);
    text-align: center;
    margin: 1rem 1rem;

    &:active,
    &:hover,
    &:focus {
      background: var(--button-hover-bg-color, #78c2ad);
    }

    &:disabled {
      cursor: default;
      opacity: 0.5;
      background: var(--button-bg-color, #78c2ad);
    }

    --button-font-size: 0.875rem;
    --button-padding: 12px 14px;
    --button-radius: 4px;
  `,
};
