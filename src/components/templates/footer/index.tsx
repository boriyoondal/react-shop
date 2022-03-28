import React from "react";
import {css , Theme} from "@emotion/react";

export default function Footer(){

    return (
    <div css={Style.Container}>
        <div css={Style.InnerContainer}>
        Footer
        </div>
    </div>

    )
} 

const Style ={
    Container : css`
        width : 100%;
        height : 100px;
    `,
    InnerContainer : css`
        max-width: 1024px;
        margin : 0 auto;
        display : flex;
        justify-content: center; 
        height : 100%;
        background-color : #c9b4b4;
    `
}