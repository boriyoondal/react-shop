import React,{ useState } from "react";
import ProductItem from "src/components/ProductItem";
import axios from 'axios';

//상품 목록 페이지

export default function ProductList() {
    type Item = {
        id: number;
        name: string;
        price: string;
    }
    const clothes: Item[] =[
        { id : 1, name : "first", price : "10,000"},
        { id : 2, name : "second", price : "20,000"},
        { id : 3, name : "third", price : "30,000"},
        { id : 4, name : "fourth", price : "40,000"}
    ]

    const [data,setData] = useState(null);
    const onClick = () => {
        axios.get('../API').then(response => {
            setData(response.data);
        })
    }
    return(
        <div>
            <div>
            <h2>상품 목록</h2>
            {clothes.map((clothes, i) => {
                return <ProductItem key={i} clothes={clothes}/>;
            })}
            </div>
        </div>
    )
}