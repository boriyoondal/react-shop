import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/store";
import { addCart, deleteCart } from "src/store/cart/action";
import { Product } from "src/@types/types";

export default function CartItem() {
    const dispatch = useDispatch();
    const { products } = useSelector((store : RootState) => store.cart);


    return (
        <div>
            장바구니 들어온 아이템
          
        </div>
    )
}