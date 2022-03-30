import React from "react";
import { css } from "@emotion/react";
import { GoPlus } from "react-icons/go"
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../../../store/cart/action";


type Item = {
    id : number;
    item : string;
    name: string;
    price: String;
    qty : number;
}

type ProductItem = {
    item : Item;
}

export default function( { item } : ProductItem ) {
    const dispatch = useDispatch();

    const consoleCheck = (item : Item) => {
        console.log(item);
    }
    return (
        <div css={Style.ItemBox}>
            <div css={Style.InnerItemBox}>
                <div>이미지</div>
                     <div>{item.name}</div>
                     <div>{item.price}원</div>
        <button onClick={()=>dispatch(addCart(item))}> 장바구니 <GoPlus/> </button>
        <button onClick={()=>consoleCheck(item)}>체크</button>
            </div>
        </div>
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