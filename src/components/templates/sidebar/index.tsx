import React, { useState, useEffect } from "react";
import { css, Theme } from "@emotion/react";
import { RootState } from "src/store";
import { BsFillCartCheckFill } from "react-icons/bs";
import { useSelector } from "react-redux";

type SideType = {
  width: number;
  children: any;
};

export default function Sidebar({ width, children }: SideType) {
  const { pcs } = useSelector((store: RootState) => store.cart);
  const [qty, setqty] = useState(0);
  const [xPosition, setX] = useState(-width);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setqty(pcs);
  }, [pcs]);

  const toggleMenu = (isOpen: boolean) => {
    // xPosition < 0 ? setX(0) : setX(-width);
    if (xPosition < 0) {
      setX(0);
      setIsOpen(true);
    } else {
      if (xPosition === 0) {
        setX(-width);
        setIsOpen(false);
      }
    }
  };

  return (
    <div
      css={Style.Sidebar}
      style={{
        transform: `translatex(${xPosition}px)`,
        width: width,
      }}
    >
      <div
        className="toggle"
        onClick={() => toggleMenu(isOpen)}
        css={Style.Togglemenu}
        style={{
          transform: xPosition < 0 === true ? `translate(${width}px, -10vh)` : `translate(${0}px, -10vh)`,
          marginLeft: "1rem",
        }}
      >
        <div css={Style.Circle}>{qty}</div>
        <BsFillCartCheckFill className="icon" size="36" color="#080808" />
      </div>
      <div>{children}</div>
    </div>
  );
}

const Style = {
  Sidebar: (theme: Theme) => css`
    max-width: 1024px;
    width: 100%;
    height: 100%;
    transition: 0.4s ease;
    background-color: #e3ecf1;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 9999;

    ${theme.mobile} {
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
      }
    }
  `,

  Circle: css`
    width: 25px;
    height: 25px;
    border-radius: 15px;
    background-color: tomato;
    color: #f0f0f0;
    padding: 3px;
  `,
  Togglemenu: css`
    position: absolute;
    display: flex;
    outline: none;
    z-index: 99;
    margin-top: 2.2rem;
    background-color: none;
  `,
};
