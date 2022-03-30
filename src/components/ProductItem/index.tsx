import React from "react";
import { css } from "@emotion/react";
import { GoPlus } from "react-icons/go"
import { useDispatch } from "react-redux";
type Item = {
    id : number;
    name: string;
    price: String;
}

type ProductItem = {
    clothes : Item;
}

export default function( { clothes } : ProductItem ) {
    const dispatch = useDispatch();

    const handleAddToCart = (clothes : Item) => {
        console.log(clothes.id);
        console.log(clothes.name);
    }


    return (
        <div css={Style.Cardbox}>
            <div css={Style.InnerCardBox}>
                <div>이미지</div>
                     <div>{clothes.name}</div>
                     <div>{clothes.price}원</div>
        <button onClick={(e)=>handleAddToCart(clothes)}> <GoPlus/> </button>
            </div>
        </div>
    )
}

const Style = {
    Cardbox : css`
    padding : 1rem;
    margin : 2.2rem;
    float : left;
    text-align: center;
   `,
    
    InnerCardBox : css`
    margin-left : 4rem;
    `

}