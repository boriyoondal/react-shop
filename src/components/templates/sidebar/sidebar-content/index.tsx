import React from "react";
import {css, Theme} from "@emotion/react";
import API from "src/API";
import CartList from "./CartList";

type Item = {
    id : number;
    name: string;
    price: String;
}

export default function SidebarContent() {
    
    return(
        <div css={Style.Container}>
        <div css={Style.InnerContainer}>
            사이드바    
            <div><br/></div>
            <CartList/>
            <br/>
            <div>합계</div>
        </div>
        </div>
    )
}

const Style = {
    Container : (theme : Theme) => css`
    background-color: #000000;
    max-width: 768px;
    height : 100%;
    color : white;
    `,

    InnerContainer : css`
    padding: 40px 20px;
    position: relative;
    width: 100%;
    height : 100%;
    `,
}