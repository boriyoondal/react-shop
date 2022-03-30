import React from "react";
import {css} from "@emotion/react";
import ProductList from "src/pages/ProductsList";

export default function Card(){ 

    return(
        <div css={Style.Container}>
            <div css={Style.InnerContainer}>
            <ProductList/>
            </div>
        </div>
    )
}


const Style ={
    Container : css`
    width : 100%; 
    `,
    InnerContainer : css`
        max-width: 1024px;
        margin : 0 auto;
        display : flex;
        margin : 2rem 2rem;
        float : left;
    `
}