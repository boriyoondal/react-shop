import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/store";
import { clearCart, deleteCart } from "src/store/cart/action";
import { Product } from "src/@types/types";
import { css } from "@emotion/react";

export default function CartItem() {
    const dispatch = useDispatch();
    const { products } = useSelector((store : RootState) => store.cart);

    return (
        <div>
                 {products.map((v,i) => 
                 <div key={i}>
                    {v.title}
                    <br/>
                    {v.price}
                    
                   <button onClick={()=>dispatch(deleteCart(v.id))}>삭제</button>
                 </div>
                 )}
                 <br/>
                  <button onClick={()=>dispatch(clearCart())}>비우기</button>
        </div>
    )
}

const Style = {
    Container : css`
    `,
}