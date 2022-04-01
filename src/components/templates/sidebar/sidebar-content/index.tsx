import React,{ useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/store";
import {css, Theme} from "@emotion/react";
import CartList from "./CartList";

export default function SidebarContent() {
    const { products }= useSelector((store : RootState) => store.cart);

    const [sum, setSum] = useState('');


    return(
        <div css={Style.Container}>
        <div css={Style.InnerContainer}>
            CART  
            <div><br/></div>
            <CartList/>
            <br/>
            <div>합계
                {products.map((v,i) =>
                <div key={i}>
                    {v.price}
                </div>)}
            </div>
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
    color : white;
    `,
}