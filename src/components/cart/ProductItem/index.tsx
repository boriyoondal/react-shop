import React from "react";
import { css } from "@emotion/react";
import { GoPlus } from "react-icons/go"
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../../../store/cart/action";
import { Product } from "src/@types/types";
import { RootState } from "src/store";


export default function ProductItem() {
   
    return (
        <div></div>
    )
}

const Style = {
    ItemBox : css`
    padding : 1rem;
    margin : 2.2rem;
    float : left;
    text-align: center;
   `,
    
    InnerItemBox : css`
    margin-left : 4rem;
    `
}