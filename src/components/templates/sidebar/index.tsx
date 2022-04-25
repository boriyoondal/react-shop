import React, { useState, useEffect, useCallback } from "react";
import { css, Theme } from "@emotion/react";
import { BsFillCartCheckFill } from "react-icons/bs";
//redux
import { RootState } from "src/store";
import { useSelector } from "react-redux";

type SideType = {
  children: any;
};

export default function Sidebar({ children }: SideType) {
  const { pcs, isOpen } = useSelector((store: RootState) => store.cart);
  const [qty, setqty] = useState(0);
  const [previsOpen, setIsOpen] = useState(false);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    setqty(pcs);
  }, [pcs]);

  const toggleMenu = () => {
    setIsOpen((previsOpen) => !previsOpen);
    // setIsOpen((isOpen) => !isOpen);
  };

  // const toggleMenu = useCallback(() => {
  //   setIsOpen((previsOpen) => !previsOpen);
  //   // setIsOpen((prev) => !prev);
  // }, []);

  return (
    <div css={Style.SideBarContainer}>
      <div css={Style.SideBarInnerContainer}>
        <div css={Style.Circle}>{qty}</div>
        <BsFillCartCheckFill
          onClick={() => toggleMenu()}
          css={previsOpen ? Style.ShowToggle : Style.HideToggle}
          className="icon"
          size="36"
          color="#080808"
        />
      </div>
      <div css={previsOpen ? Style.ShowMenu : Style.HideMenu}>{children}</div>
    </div>
  );
}

const Style = {
  SideBarContainer: (theme: Theme) => css`
    width: 100%;
    height: 100%;
    transition: 0.4s ease;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 9999;

    /* ${theme.mobile} {
      top: 0;
      bottom: 0;
      width: 640px;
      height: auto;
      align-items: flex-start;
      margin: 0;
      justify-content: flex-start;
      min-height: 0;
      &.active {
        left: 0px;
        right: 0px;
      } */
    /* } */
  `,
  SideBarInnerContainer: css`
    display: inline-block;
    margin-top: -3rem;
    margin-left: 1rem;
  `,

  Circle: css`
    width: 25px;
    height: 25px;
    border-radius: 15px;
    background-color: tomato;
    color: #f0f0f0;
    padding: 3px;
    text-align: center;
  `,
  Togglemenu: css`
    position: absolute;
    display: flex;
    outline: none;
    z-index: 9999;
    margin-top: 2.2rem;
    background-color: none;
  `,
  ShowToggle: css`
    /* margin-right: 19rem; */
    display: inline-block;
  `,
  HideToggle: css`
    position: relative;
    z-index: 9999;
  `,
  ShowMenu: css`
    /* transform: translate(376px); */
    width: 440px;
    height: auto;
    position: absolute;
    left: 0;
    transition: 1s ease;
    z-index: 9999;
    padding: 40px 20px;
    box-shadow: 2px 3px 3px 2px rgb(0 0 0 / 10%);
    background-color: #f0f0f0;
    text-align: center;
  `,
  HideMenu: css`
    /* transform: translate(0px); */
    position: absolute;
    left: 0px;
    transition: 1s ease;
    display: none;
  `,
};
