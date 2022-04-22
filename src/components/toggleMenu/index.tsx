import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { css } from "@emotion/react";
export default function ToggleMenu() {
  const [isOpen, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu((isOpen) => !isOpen);
  };

  return (
    <div>
      <div css={Style.Container}>
        <HiMenu
          style={{ fontSize: "2rem", float: "right" }}
          css={isOpen ? Style.ShowToggle : Style.HideToggle}
          onClick={toggleMenu}
        />
      </div>
      <ul css={isOpen ? Style.ShowMenu : Style.HideMenu}>
        <li>무얼</li>
        <li>넣어</li>
        <li>볼까요</li>
        <li>?</li>
      </ul>
    </div>
  );
}

const Style = {
  Container: css`
    float: right;
    width: 100%;
    height: 100%;
  `,
  ShowToggle: css`
    margin-right: 19rem;
    display: inline-block;
  `,
  HideToggle: css`
    position: relative;
    z-index: 9999;
  `,
  ShowMenu: css`
    /* transform: translate(376px); */
    width: 300px;
    height: 200px;
    position: absolute;
    right: 0;
    transition: 1s;
    z-index: 9999;
    padding: 40px 20px;
    box-shadow: 2px 3px 3px 2px rgb(0 0 0 / 10%);
    background-color: #f0f0f0;
  `,
  HideMenu: css`
    /* transform: translate(0px); */
    height: 200px;
    position: absolute;
    right: -376px;
    transition: 1s;
    border: 1px solid black;
    display: none;
  `,
};
