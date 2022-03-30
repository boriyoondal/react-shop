import React,{ useState } from "react";
import ProductItem from "src/components/cart/ProductItem";

//상품 목록 component

export default function ProductList() {
    type Item = {
        id: number;
        name: string;
        item : string,
        price: string;
        qty : number;
    }

    const item: Item[] =[
        { id : 1, item : "first", name : "first", price : "10,000", qty : 1},
        { id : 2, item : "second",name : "second", price : "20,000", qty : 1},
        { id : 3, item : "third", name : "third",price : "30,000", qty : 1},
        { id : 4, item : "fourth", name : "fourth", price : "40,000", qty: 1}
    ]
    return(
        <div>
            <div>
            <h2>상품 목록</h2>
            {item.map((item, i) => {
                return <ProductItem key={i} item={item}/>;
            })}
            </div>
        </div>
    )
}