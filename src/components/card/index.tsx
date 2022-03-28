import React from "react";
import {css , Theme} from "@emotion/react";

export default function Card(){ 

    return(
        <div css={Style.Container}>
            <div css={Style.InnerContainer}>
                Card
            </div>
        </div>
    )
}


const Style ={
    Container : css`

    `,
    InnerContainer : css`
        max-width: 1024px;
        margin : 0 auto;
        display : flex;
        justify-content: center;
        border : 1px solid black;
        width : 100px;
        height : 100px;
        margin : 2rem 2rem;
    `
}