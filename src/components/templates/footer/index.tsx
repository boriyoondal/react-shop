import React from "react";
import {css , Theme} from "@emotion/react";

export default function Footer(){

    return (
    <div css={Style.Container}>
        <div css={Style.InnerContainer}>
        <p>Copyright 2022 ✔ All right Reserved.</p>
        </div>
    </div>

    )
} 

const Style ={
    Container : css`
        width : 100%;
        height : 100px;
        text-align: center;
    `,
    InnerContainer : css`
        max-width: 1024px;
        margin : 0 auto;
        display : flex;
        justify-content: center; 
        height : 100%;
        background-color : #ffffff;
        
    `
}