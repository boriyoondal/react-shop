import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/store";
import CartItem from "../CartItem";

export default function CartList() {
    const state = useSelector((store : RootState) => store.cart);
    const dispatch = useDispatch();


    return(
        <div>
            장바구니 리스트
            <CartItem/>
        </div>
        
    )
}