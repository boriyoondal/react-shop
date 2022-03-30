import React from "react";
import {css , Theme} from "@emotion/react";
import Card from "../../card"
import ProductList from "src/pages/ProductsList";
export default function Body(){
    

    return(
        <div css={Style.Container}>
            <div css={Style.InnerContainer}>

                <Card></Card>
            </div>
        </div>
    )
}

const Style ={
    Container : css`
        width : 100%;
        height : 600px;
        margin-top : 2rem;
        z-index: 1;
    `,
    InnerContainer : css`
        max-width: 1024px;
        margin : auto;
        display : flex;
        justify-content: center;
        height : 100%;
        background-color : #ffffff;
        z-index: -1;
    `
}