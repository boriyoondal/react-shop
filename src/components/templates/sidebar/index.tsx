import React, { useState, useEffect } from "react";
import { css, Theme } from "@emotion/react";
import { IoCartOutline } from "react-icons/io5";

type SideType = {
  width: number;
  children: any;
};

export default function Sidebar({ width, children }: SideType) {
  const [xPosition, setX] = useState(-width);

  const toggleMenu = () => {
    if (xPosition < 0) {
      //sidebar가 음수인지 확인 = 숨겨져 있음
      setX(0);
    } else {
      setX(-width);
    }
  };

  useEffect(() => {
    setX(-width);
  }, []);

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
        onClick={() => toggleMenu()}
        css={Style.Togglemenu}
        style={{
          transform: xPosition < 0 === true ? `translate(${width}px, -10vh)` : `translate(${0}px, -10vh)`,
          marginLeft: xPosition < 0 === true ? "1rem" : "1rem",
        }}
      >
        <IoCartOutline className="icon" size="36" color="#080808" />
      </div>
      <div className="content">{children}</div>
    </div>
  );
}

const Style = {
  Sidebar: (theme: Theme) => css`
    max-width: 768px;
    height: 100%;
    border-radius: 0;
    transition: 0.4s ease;
    background-color: #e3ecf1;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 99;

    ${theme.mobile} {
      max-width: 100%;
      height: auto;
      align-items: flex-start;
      margin: 0;
    }
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
