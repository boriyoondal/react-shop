import React from "react";
import {css, Theme} from "@emotion/react";
import API from "src/API";

type Item = {
    id : number;
    name: string;
    price: String;
}
type ProductItem = {
    clothes : Item;
}
export default function SidebarContent() {
    
    return(
        <div css={Style.Container}>
        <div css={Style.InnerContainer}>
            사이드바    
           
        </div>
        </div>
    )
}

const Style = {
    Container : (theme : Theme) => css`
    background-color: #cc9c9c;
    max-width: 768px;
    height : 100%;
    `,
    InnerContainer : css`
        padding: 40px 20px;
        position: relative;
        width: 100%;
        height : 100%;
    `,
}